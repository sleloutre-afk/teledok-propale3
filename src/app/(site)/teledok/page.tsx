import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { Orientation } from '@/components/Orientation'
import { Ph } from '@/components/Ph'
import { Uline } from '@/components/Uline'
import { pictos } from '@/data/pictos'
import { getValeurs } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/teledok',
  'Qui sommes-nous | TeleDok',
  'TeleDok est un regroupement de médecins généralistes et spécialistes, associés à des professionnels paramédicaux, au service de parcours de soins innovants.',
)

// Fonctions et parcours repris de la page Gouvernance du site Doxamed (même groupe) ; portraits dans public/photos.
const DIRECTION: { nom: string; de: string; role: string; detail: string; photo: string }[] = [
  {
    nom: 'Arnaud Molinié',
    de: 'd’Arnaud Molinié',
    role: 'Président-directeur général',
    detail: 'Fondateur et président de Doxamed, fondateur de Capitello Group.',
    photo: '/photos/arnaud.webp',
  },
  {
    nom: 'Matthieu Guillotin',
    de: 'de Matthieu Guillotin',
    role: 'Directeur général',
    detail: 'Directeur général de Doxamed.',
    photo: '/photos/guillotin.webp',
  },
  {
    nom: 'Dr Stéphane Illouz',
    de: 'du Dr Stéphane Illouz',
    role: 'Co-fondateur',
    detail: 'Urgentiste, médecin généraliste. Coordinateur MSP.',
    photo: '/photos/illouz.webp',
  },
  {
    nom: 'Dr François Teboul',
    de: 'du Dr François Teboul',
    role: 'Co-fondateur',
    detail:
      'Urgentiste, médecin généraliste. Coordinateur MSP et bureau CPTS, président du groupe Téléconsultation de l’Académie Francophone de Télémédecine.',
    photo: '/photos/teboul.webp',
  },
]
// Cases laissées libres à la suite, pour compléter la grille de six.
const DIRECTION_LIBRES = 2

export default async function Page() {
  const valeurs = await getValeurs()

  return (
    <PageShell page="pg-teledok" current="teledok">
      <section className="bg-cream clip" aria-labelledby="hero-t">
        <div
          className="blob"
          aria-hidden="true"
          style={{ right: -160, top: -120, width: 420, height: 420, background: 'var(--card)' }}
        ></div>
        <div
          className="blob blob--dot"
          aria-hidden="true"
          style={{ right: 260, bottom: 90, width: 22, height: 22, background: 'var(--soft)' }}
        ></div>
        <div className="wrap phero rel" style={{ paddingBottom: 'clamp(80px, 9vw, 130px)' }}>
          <Crumb label="Qui sommes-nous ?" />
          <p className="hero-in pill">
            <span className="pill__dot" aria-hidden="true"></span>Qui sommes-nous
          </p>
          <h1 id="hero-t" className="hero-in2 h1 hero-h1">
            TeleDok est né d’une conviction : la télémédecine n’a de valeur que si elle préserve la qualité du soin et{' '}
            <Uline>l’indépendance de ceux qui l’exercent.</Uline>
          </h1>
        </div>
      </section>

      <section className="wrap sec split" style={{ gap: 72 }} aria-labelledby="qui-t">
        <div className="rv" style={{ flex: '1 1 460px' }}>
          <h2 id="qui-t" className="h2" style={{ marginBottom: 24 }}>
            Un regroupement de praticiens
          </h2>
          <p style={{ marginBottom: 32, fontSize: 20, lineHeight: '1.7' }}>
            TeleDok est un regroupement de médecins généralistes et spécialistes, associés à des professionnels paramédicaux, au service de
            parcours de soins innovants. Son modèle repose sur l’indépendance médicale et l’exigence de qualité.
          </p>
          <ul className="pills">
            <li className="pill pill--light">Médecins généralistes</li>
            <li className="pill pill--light">Médecins spécialistes</li>
            <li className="pill pill--light">Infirmier·e·s et paramédicaux</li>
          </ul>
        </div>
        <div className="rv ph-w" style={{ flex: '1 1 420px' }}>
          <div
            className="blob floaty"
            aria-hidden="true"
            style={{ left: -34, top: -34, width: 170, height: 170, background: 'var(--amber)' }}
          ></div>
          <div
            className="blob floaty"
            aria-hidden="true"
            style={{ right: -24, bottom: -26, width: 110, height: 110, background: 'var(--soft)', opacity: 0.85 }}
          ></div>
          <Ph
            tag="Photographie réelle attendue"
            text="Équipe médicale et paramédicale de TeleDok : portrait de groupe en situation."
            ratio="5 / 4"
          />
        </div>
      </section>

      <section id="valeurs" className="bg-cream" aria-labelledby="val-t">
        <div className="wrap sec">
          <div className="rv" style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="pill eyebrow">Ce qui nous engage</p>
            <h2 id="val-t" className="h2">
              Nos valeurs
            </h2>
          </div>
          <ul className="grid">
            {valeurs.map((v, i) => (
              <li key={i} className="card rv valeur">
                <div className="ic">
                  <svg
                    viewBox="0 0 120 120"
                    width="70"
                    height="70"
                    fill="none"
                    stroke="#0D628F"
                    strokeWidth={pictos[i].strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: pictos[i].body }}
                  />
                </div>
                <h3>{v.titre}</h3>
                <p>{v.texte ?? <span className="todo">[1 à 2 lignes à rédiger avec TeleDok]</span>}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="ind-t">
        <div className="clip on-blue rv indep">
          <div
            className="blob"
            aria-hidden="true"
            style={{ right: -90, bottom: -90, width: 300, height: 300, background: 'var(--amber)' }}
          ></div>
          <div
            className="blob blob--dot"
            aria-hidden="true"
            style={{ right: 230, bottom: 170, width: 22, height: 22, background: 'var(--soft)' }}
          ></div>
          <div className="rel" style={{ maxWidth: 780 }}>
            <p className="pill indep-pill">Argument clé</p>
            <h2 id="ind-t" className="h2" style={{ marginBottom: 24 }}>
              Un modèle indépendant
            </h2>
            <p className="indep-txt">
              TeleDok ne vend rien aux médecins et ne prélève aucune part sur leurs consultations. Son indépendance médicale et éthique est
              la condition de la confiance.
            </p>
            <Link className="btn btn-amber" href={ROUTES.medecins}>
              Conditions d’exercice des médecins
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="gov-t">
        <div className="wrap sec">
          <div className="rv" style={{ marginBottom: 48 }}>
            <p className="pill eyebrow">Gouvernance</p>
            <h2 id="gov-t" className="h2">
              Direction
            </h2>
          </div>
          <ul className="grid" style={{ '--min': '240px', gap: 24 } as CSSProperties}>
            {DIRECTION.map((d) => (
              <li key={d.nom} className="card rv portrait">
                <Image
                  className="portrait-photo"
                  src={d.photo}
                  width={600}
                  height={600}
                  alt={`Portrait ${d.de}.`}
                  sizes="(min-width: 1100px) 240px, (min-width: 640px) 45vw, 90vw"
                />
                <h3>{d.nom}</h3>
                <p className="portrait-role">{d.role}</p>
                <p className="portrait-detail">{d.detail}</p>
              </li>
            ))}
            {Array.from({ length: DIRECTION_LIBRES }, (_, i) => (
              <li key={i} className="card rv portrait portrait--pending">
                <Ph tag="Portrait réel" ratio="1 / 1" className="portrait-ph" />
                <h3>[Nom à préciser]</h3>
                <p className="portrait-role">[Fonction à préciser]</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap sec" aria-label="Orientation">
        <div className="grid" style={{ '--min': '320px', gap: 24 } as CSSProperties}>
          <Orientation />
        </div>
      </section>
    </PageShell>
  )
}
