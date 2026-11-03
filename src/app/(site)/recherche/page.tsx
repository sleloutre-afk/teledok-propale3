import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { Travaux } from '@/components/Travaux'
import { getPublications } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/recherche',
  'Recherche & publications | Teledok',
  'Rapports épidémiologiques, publications scientifiques et thèses : chaque opération de Teledok contribue, par ses retours d’expérience et ses données agrégées, à la connaissance scientifique.',
)

export default async function Page() {
  const publications = await getPublications()

  return (
    <PageShell page="pg-recherche" current="recherche">
      <section className="bg-cream clip" aria-labelledby="hero-t">
        <div
          className="blob"
          aria-hidden="true"
          style={{ right: -150, bottom: -180, width: 420, height: 420, background: 'var(--card)' }}
        ></div>
        <div
          className="blob blob--dot"
          aria-hidden="true"
          style={{ right: 300, top: 120, width: 20, height: 20, background: 'var(--amber)' }}
        ></div>
        <div className="wrap phero rel">
          <Crumb label="Recherche & publications" />
          <p className="hero-in pill t-ink">
            <span className="pill__dot" aria-hidden="true"></span>Recherche &amp; publications
          </p>
          <h1 id="hero-t" className="hero-in2 h1">
            Contribution à la recherche
          </h1>
          <p className="hero-in3 phero-lead">
            Teledok n’est pas seulement une structure opérationnelle : chaque opération, par ses retours d’expérience et ses données
            agrégées, contribue à la connaissance scientifique, pour apporter sa pierre à l’édifice d’une santé globale.
          </p>
        </div>
      </section>

      <Travaux publications={publications} />

      <section className="bg-cream" aria-label="Orientation">
        <div className="wrap" style={{ paddingBlock: 'clamp(80px, 10vw, 120px)' }}>
          <div className="cta cta--blue cta--row on-blue rv">
            <div
              className="blob"
              aria-hidden="true"
              style={{ right: -70, bottom: -90, width: 240, height: 240, background: 'var(--amber)' }}
            ></div>
            <div>
              <h2 className="h2 h2--sm">De l’évaluation à la recherche</h2>
              <p>
                Les enseignements de chaque opération nourrissent l’amélioration des parcours futurs et alimentent la recherche
                scientifique.
              </p>
            </div>
            <Link className="btn btn-amber" href={ROUTES.methode}>
              Notre méthode
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
