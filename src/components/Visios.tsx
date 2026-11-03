'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import { PRATICIENS } from '@/data/praticiens'
import { cx } from '@/lib/cx'
import { VbtnIcons } from './VideoToggle'

// Étapes d'un cycle : nombre de praticiens à l'écran, disposition (colonnes × lignes) et durée en ms.
const ETAPES = [
  { count: 1, cols: 1, rows: 1, ms: 2400 },
  { count: 2, cols: 2, rows: 1, ms: 1900 },
  { count: 4, cols: 2, rows: 2, ms: 1900 },
  { count: 6, cols: 3, rows: 2, ms: 1900 },
  { count: 9, cols: 3, rows: 3, ms: 1900 },
  { count: 12, cols: 4, rows: 3, ms: 3000 },
]
// Une tuile du centre de la grille finale (2e ligne, 2e colonne) s'agrandit pour ouvrir le cycle
// suivant. 5 et 12 n'ayant pas de diviseur commun, chaque praticien ouvre un cycle à son tour.
const RELAIS = 5
// Calculs dans un écran de 1,5 × 1 (format 3:2) : marge et espacement des grilles.
const RATIO = 1.5
const GAP = 0.018
// Durée du déplacement des tuiles (voir .visio-tuile dans site.css).
const DEPLACEMENT = 900

type Geo = { left: number; top: number; width: number; height: number }
const PLEIN: Geo = { left: 0, top: 0, width: 100, height: 100 }

/**
 * Place de la tuile `slot` à l'étape `etape`, en % de l'écran. Comme dans une application de visio,
 * chaque tuile garde le format des photos (3:2, rien n'est rogné) et la grille est centrée, avec
 * des bandes sombres autour quand elle ne remplit pas l'écran. Même seule, une tuile garde sa marge.
 */
function geo(etape: number, slot: number): Geo {
  const { cols, rows } = ETAPES[etape]
  const tw = Math.min((RATIO - GAP * (cols + 1)) / cols, ((1 - GAP * (rows + 1)) / rows) * RATIO)
  const th = tw / RATIO
  const x0 = (RATIO - cols * tw - (cols - 1) * GAP) / 2
  const y0 = (1 - rows * th - (rows - 1) * GAP) / 2
  const c = slot % cols
  const r = Math.floor(slot / cols)
  return {
    left: ((x0 + c * (tw + GAP)) / RATIO) * 100,
    top: (y0 + r * (th + GAP)) * 100,
    width: (tw / RATIO) * 100,
    height: th * 100,
  }
}

/** Place du praticien p à l'étape e d'un cycle qui commence par le praticien `debut`, ou -1 s'il n'y figure pas. */
function slot(p: number, debut: number, e: number, n: number) {
  const s = (p - debut + n) % n
  return s < ETAPES[e].count ? s : -1
}

/**
 * Portraits de praticiens en visio, en boucle (page Teledok) : « le réseau se constitue ». Un praticien
 * seul à l'écran, puis 2, 4, 6, 9 et 12 réunis en grille, comme des participants qui rejoignent l'appel ;
 * une tuile du centre s'agrandit ensuite pour ouvrir le cycle suivant. Les tuiles glissent et se
 * redimensionnent d'une étape à l'autre ; celles qui arrivent apparaissent sur place, celles qui
 * partent s'effacent sur place.
 * Défilement automatique quand le bloc est visible, avec bouton pause ; sans animation demandée,
 * pas de défilement automatique (le bouton lecture le lance).
 */
export function Visios() {
  const n = PRATICIENS.length
  const root = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(true)
  const [visible, setVisible] = useState(false)
  // Position dans la boucle : praticien qui ouvre le cycle et étape du cycle.
  const [{ debut, etape }, setPos] = useState({ debut: 0, etape: 0 })
  // Tuiles masquées : à leur place de départ juste après une étape, à leur place d'arrivée une fois
  // le mouvement fini (elles apparaissent alors sur place, sans traverser l'écran).
  const [pose, setPose] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false)
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver((entries) => setVisible(entries.some((e) => e.isIntersecting)), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || !visible) return
    const t = window.setTimeout(() => {
      setPose(false)
      setPos(({ debut, etape }) =>
        etape < ETAPES.length - 1 ? { debut, etape: etape + 1 } : { debut: (debut + RELAIS) % n, etape: 0 },
      )
    }, ETAPES[etape].ms)
    return () => window.clearTimeout(t)
  }, [playing, visible, debut, etape, n])

  useEffect(() => {
    if (pose) return
    const t = window.setTimeout(() => setPose(true), DEPLACEMENT)
    return () => window.clearTimeout(t)
  }, [pose])

  // Étapes voisines, pour placer les tuiles masquées.
  const prec = etape > 0 ? { debut, etape: etape - 1 } : { debut: (debut - RELAIS + n) % n, etape: ETAPES.length - 1 }
  const suiv = etape < ETAPES.length - 1 ? { debut, etape: etape + 1 } : { debut: (debut + RELAIS) % n, etape: 0 }

  return (
    <div ref={root} className="visio">
      <div
        className="visio-stack"
        role="img"
        aria-label="Des praticiens de différentes spécialités en téléconsultation : médecins généralistes, spécialistes et paramédicaux."
      >
        {PRATICIENS.map((src, p) => {
          const s = slot(p, debut, etape, n)
          const sPrec = slot(p, prec.debut, prec.etape, n)
          const sSuiv = slot(p, suiv.debut, suiv.etape, n)
          let g: Geo = PLEIN
          if (s >= 0) g = geo(etape, s)
          else if (!pose && sPrec >= 0) g = geo(prec.etape, sPrec)
          else if (sSuiv >= 0) g = geo(suiv.etape, sSuiv)
          const style = { left: `${g.left}%`, top: `${g.top}%`, width: `${g.width}%`, height: `${g.height}%` } as CSSProperties
          return (
            <div key={src} className={cx('visio-tuile', { 'is-on': s >= 0 })} style={style}>
              <Image src={src} fill alt="" sizes="(min-width: 1100px) 560px, 92vw" />
            </div>
          )
        })}
      </div>
      <button
        type="button"
        className={cx('vbtn', { 'is-paused': !playing })}
        aria-label={playing ? 'Mettre en pause le défilement des praticiens' : 'Reprendre le défilement des praticiens'}
        onClick={() => setPlaying((p) => !p)}
      >
        <VbtnIcons />
      </button>
    </div>
  )
}
