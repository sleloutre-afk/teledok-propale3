'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { HISTOIRE } from '@/data/histoire'
import { cx } from '@/lib/cx'

const DEBUT = HISTOIRE[0].annee
const FIN = HISTOIRE[HISTOIRE.length - 1].annee
// Place de chaque année sur la frise, proportionnelle au temps écoulé (0 à 1).
const place = (annee: number) => (annee - DEBUT) / (FIN - DEBUT)
const INTERVAL = 2200

/**
 * Frise « Notre histoire » (page Teledok). À l'entrée dans la fenêtre, elle se remplit
 * d'année en année ; le survol ou le clic sur une année affiche son détail et arrête le
 * défilement automatique. Sur mobile, frise verticale avec toutes les étapes visibles.
 */
export function Histoire() {
  const [active, setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const timer = useRef<number | undefined>(undefined)
  const hoverTimer = useRef<number | undefined>(undefined)
  const manual = useRef(false)

  const choose = (i: number) => {
    manual.current = true
    window.clearInterval(timer.current)
    setActive(i)
  }
  // Survol à la souris : léger délai, pour qu'une année simplement traversée ne change pas l'étape.
  const hoverTo = (e: React.PointerEvent, i: number) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => choose(i), 150)
  }

  useEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        if (manual.current) return
        timer.current = window.setInterval(() => {
          setActive((i) => {
            if (i >= HISTOIRE.length - 1) {
              window.clearInterval(timer.current)
              return i
            }
            return i + 1
          })
        }, INTERVAL)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      window.clearInterval(timer.current)
      window.clearTimeout(hoverTimer.current)
    }
  }, [])

  return (
    <div ref={root} className="histo">
      <div className="histo-frise" role="group" aria-label="Années">
        <div className="histo-line" aria-hidden="true">
          <div className="histo-fill" style={{ width: `${place(HISTOIRE[active].annee) * 100}%` }} />
        </div>
        {HISTOIRE.map((e, i) => (
          <button
            key={e.annee}
            type="button"
            className={cx('histo-node', { 'is-past': i <= active, 'is-on': i === active })}
            style={{ '--x': place(e.annee) } as CSSProperties}
            aria-pressed={i === active}
            aria-controls={`histo-${e.annee}`}
            onClick={() => choose(i)}
            onPointerEnter={(ev) => hoverTo(ev, i)}
            onPointerLeave={() => window.clearTimeout(hoverTimer.current)}
          >
            <span className="histo-year">{e.annee}</span>
            <span className="histo-dot" aria-hidden="true" />
            <span className="histo-title">{e.titre}</span>
          </button>
        ))}
      </div>
      <ol className="histo-panels">
        {HISTOIRE.map((e, i) => (
          <li key={e.annee} id={`histo-${e.annee}`} className={cx('histo-panel', { 'is-on': i === active })}>
            <p className="histo-panel-year">{e.annee}</p>
            <div>
              <h3>{e.titre}</h3>
              <p>{e.texte}</p>
              {e.medecins && <p className="histo-medecins">{e.medecins} médecins</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
