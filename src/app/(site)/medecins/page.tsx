import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { PageShell } from '@/components/PageShell'
import { CandidatureForm } from '@/components/CandidatureForm'
import { Crumb } from '@/components/Crumb'
import { Icon } from '@/components/Icon'
import { More } from '@/components/More'
import { Ph } from '@/components/Ph'
import { Pub } from '@/components/Pub'
import { Uline } from '@/components/Uline'
import { getPublications } from '@/lib/content'
import { cx } from '@/lib/cx'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/medecins',
  'Médecins : rejoindre TeleDok',
  'Exercer la télémédecine sans renoncer à la qualité du soin ni à votre indépendance : conditions d’exercice, formation gratuite et candidature.',
)

const CONDITIONS = [
  {
    icon: 'aucune-vente',
    titre: 'Aucune vente',
    texte: 'TeleDok ne vend rien aux médecins : ni technologie, ni process, ni formation.',
  },
  {
    icon: 'honoraires',
    titre: 'Rémunération intégrale',
    texte: 'TeleDok ne se rémunère pas sur les consultations ; l’intégralité des honoraires revient au médecin.',
  },
  {
    icon: 'chrono',
    titre: 'Qualité, pas rendement',
    texte:
      '15 à 20 minutes par patient pour des soins primaires, 30 à 40 minutes pour un examen prévention, sans aucune obligation de rendement (pas d’« abattage »).',
  },
  {
    icon: 'agenda',
    titre: 'Volume garanti',
    texte: 'Un volume d’occupation médicale garanti ; la taxe « lapin » (no-show patient) est assumée par TeleDok.',
  },
] as const

const MODULES = [
  { icon: 'bouclier-pouls', label: 'Médecine de prévention' },
  { icon: 'ecran', label: 'Méthodologies TeleDok (téléconsultation)' },
  { icon: 'parcours', label: 'Outils propres à chaque parcours de soins' },
] as const

export default async function Page() {
  const publications = await getPublications('showOnMedecins', 2)

  return (
    <PageShell page="pg-medecins" current="medecins" joinHref="#candidature" footerCta="partenaires">
      <section className="bg-cream clip" aria-labelledby="hero-t">
        <div
          className="blob"
          aria-hidden="true"
          style={{ left: -140, bottom: -160, width: 380, height: 380, background: 'var(--card)' }}
        ></div>
        <div className="wrap phero rel" style={{ paddingBottom: 170 }}>
          <Crumb label="Médecins : rejoindre TeleDok" />
          <div className="split">
            <div style={{ flex: '1 1 520px' }}>
              <p className="hero-in pill">
                <span className="pill__dot" aria-hidden="true"></span>Médecins généralistes et spécialistes
              </p>
              <h1 id="hero-t" className="hero-in2 h1 hero-h1">
                Exercer la télémédecine sans renoncer à la qualité du soin ni à <Uline>votre indépendance.</Uline>
              </h1>
              <div className="hero-in3 btns">
                <a className="btn btn-amber" href="#candidature">
                  Déposer ma candidature
                </a>
                <a className="btn btn-secondary" href="#conditions">
                  Conditions d’exercice
                </a>
              </div>
            </div>
            <div className="hero-in3 ph-w" style={{ flex: '1 1 420px' }}>
              <div
                className="blob floaty"
                aria-hidden="true"
                style={{ right: -30, top: -34, width: 170, height: 170, background: 'var(--amber)' }}
              ></div>
              <div
                className="blob floaty"
                aria-hidden="true"
                style={{ left: -26, bottom: -26, width: 110, height: 110, background: 'var(--soft)', opacity: 0.85 }}
              ></div>
              <Ph
                tag="Photographie réelle attendue"
                text="Un médecin de TeleDok en téléconsultation, au poste de travail ; cadrage sobre, lumière naturelle."
                ratio="4 / 3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap kpis" style={{ marginTop: -100 }} aria-label="Chiffres clés">
        <div className="grid" style={{ '--min': '240px' } as CSSProperties}>
          <div className="kpi kpi--blue rv">
            <div className="kpi-dot" aria-hidden="true"></div>
            <p className="kpi-n">
              <span data-count data-to="100">
                100
              </span>
              <small> %</small>
            </p>
            <p className="kpi-l">des honoraires de consultation reversés au médecin</p>
          </div>
          <div className="kpi kpi--plain rv">
            <div className="kpi-dot" aria-hidden="true"></div>
            <p className="kpi-n">
              15–
              <span data-count data-from="15" data-to="40">
                40
              </span>
              <small> min</small>
            </p>
            <p className="kpi-l">
              par patient en fonction du type d’examen (téléconsultation soins primaires ou téléconsultation prévention), sans obligation de
              rendement
            </p>
          </div>
          <div className="kpi rv">
            <div className="kpi-dot" aria-hidden="true"></div>
            <p className="kpi-n">
              ≈{' '}
              <span data-count data-to="50">
                50
              </span>
            </p>
            <p className="kpi-l">médecins travaillant quotidiennement avec TeleDok</p>
          </div>
        </div>
      </section>

      <section id="conditions" className="wrap sec" aria-labelledby="cond-t">
        <div className="rv" style={{ marginBottom: 48 }}>
          <p className="pill eyebrow">Pour les médecins</p>
          <h2 id="cond-t" className="h2">
            Conditions d’exercice
          </h2>
        </div>
        <div className="grid conditions">
          {CONDITIONS.map((c, i) => (
            <div key={i} className="card rv">
              <div className="ic">
                <Icon name={c.icon} stroke="var(--blue)" trace />
              </div>
              <h3>{c.titre}</h3>
              <p>{c.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="clip on-blue formation" aria-labelledby="form-t">
        <div
          className="blob"
          aria-hidden="true"
          style={{ right: -120, top: -120, width: 340, height: 340, border: '2px solid rgba(245,179,53,0.6)' }}
        ></div>
        <div
          className="blob blob--dot"
          aria-hidden="true"
          style={{ right: 180, top: 150, width: 20, height: 20, background: 'var(--soft)' }}
        ></div>
        <div className="wrap sec split rel">
          <div className="rv" style={{ flex: '1 1 460px' }}>
            <p className="pill pill--solid eyebrow">Gratuite</p>
            <h2 id="form-t" className="h2" style={{ marginBottom: 20 }}>
              Une formation gratuite
            </h2>
            <p style={{ marginBottom: 36, fontSize: 20, lineHeight: '1.65' }}>
              Dispensée par un collectif de médecins partageant leur expérience.
            </p>
            <ol className="mods">
              {MODULES.map((m, i) => (
                <li key={i} className="mod">
                  <span className="mod-ic">
                    <Icon name={m.icon} size={32} width={2} stroke="var(--blue)" trace />
                  </span>
                  <span>{m.label}</span>
                </li>
              ))}
            </ol>
          </div>
          <Ph
            className="rv formation-ph"
            tag="Photographie réelle attendue"
            text="Session de formation entre médecins TeleDok : échange de pratiques autour d’un parcours."
            ratio="5 / 4"
          />
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="ind-t">
        <div className="wrap sec" style={{ maxWidth: 1040 }}>
          <div className="rv quote">
            <svg aria-hidden="true" width="64" height="48" viewBox="0 0 64 48">
              <path d="M4 44V26C4 13 10 6 24 4v8c-7 2-10 6-10 14h10v18zM36 44V26c0-13 6-20 20-22v8c-7 2-10 6-10 14h10v18z" fill="#9DBDD0" />
            </svg>
            <h2 id="ind-t" className="quote-t">
              Un modèle indépendant
            </h2>
            <p className="quote-p">
              TeleDok ne vend rien aux médecins et ne prélève aucune part sur leurs consultations. Son indépendance médicale et éthique est
              la condition de la confiance.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="etu-t">
        <div className="wrap travaux">
          <div className="rv" style={{ flex: '1 1 320px', minWidth: '0' }}>
            <p className="pill t-ink eyebrow">Recherche</p>
            <h2 id="etu-t" className="h2" style={{ marginBottom: 12, fontSize: 28, lineHeight: '1.3' }}>
              Travaux menés auprès des médecins
            </h2>
            <p style={{ marginBottom: 20, fontSize: 17 }}>Extraits des travaux de recherche conduits par TeleDok.</p>
            <More href={ROUTES.recherche}>Recherche &amp; publications</More>
          </div>
          <ul className="pubs rv" style={{ flex: '2 1 560px', minWidth: '0' }}>
            {publications.map((pub) => (
              <Pub key={pub.id} pub={pub} />
            ))}
          </ul>
        </div>
      </section>

      <section id="candidature" className="bg-cream clip" aria-labelledby="cand-t">
        <div
          className="blob"
          aria-hidden="true"
          style={{ right: -160, bottom: -160, width: 420, height: 420, background: 'var(--card)' }}
        ></div>
        <div className="wrap sec rel candidature">
          <div className="rv" style={{ flex: '1 1 340px', minWidth: '0' }}>
            <p className="pill eyebrow">Candidature</p>
            <h2 id="cand-t" className="h2" style={{ marginBottom: 20 }}>
              Rejoindre TeleDok
            </h2>
            <p style={{ marginBottom: 28, lineHeight: '1.65' }}>Tous les champs sont obligatoires.</p>
            <div className="rpps-note">
              <span className="rpps-ic">
                <Icon name="carte-cps" size={28} width={1.7} stroke="var(--blue)" />
              </span>
              <p>Le numéro RPPS comporte 11 chiffres. Il figure sur votre carte CPS.</p>
            </div>
          </div>
          <div className="rv form-card" style={{ flex: '1.4 1 520px', minWidth: '0' }}>
            <CandidatureForm labelledBy="cand-t" />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
