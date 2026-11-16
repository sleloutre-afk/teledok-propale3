import { Button } from '@payloadcms/ui'
import { formatAdminURL } from 'payload/shared'
import type { PayloadRequest } from 'payload'

type WidgetProps = {
  permissions?: { collections?: Record<string, { create?: boolean }> }
  req: PayloadRequest
}

const ICONS = {
  // Document de recherche
  publications: (
    <>
      <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M8.5 11.5h7M8.5 14.5h7M8.5 17.5h4" />
    </>
  ),
  // Dossier
  media: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M8 15.5l2.5-3 2 2.2 1.5-1.7 2 2.5" />
    </>
  ),
}

function Picto({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="teledok-widget__stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

const plural = (n: number, one: string, many: string) => (n > 1 ? many : one)

/**
 * Tableau de bord du BO, sur le modèle de celui de Capitello : la rubrique gérée
 * (Recherche & publications) en bloc principal à gauche, la bibliothèque de fichiers
 * à droite. Un seul widget pleine largeur — voir `admin.dashboard` dans
 * payload.config.ts ; mise en forme dans src/app/(payload)/custom.scss.
 */
export async function DashboardWidget({ permissions, req }: WidgetProps) {
  const { payload } = req
  const adminRoute = payload.config.routes.admin
  const published = { _status: { equals: 'published' } } as const

  const [publications, publicationsPublished, onHome, files] = await Promise.all([
    payload.count({ collection: 'publications' }),
    payload.count({ collection: 'publications', where: published }),
    payload.count({ collection: 'publications', where: { and: [published, { showOnHome: { equals: true } }] } }),
    payload.count({ collection: 'media' }),
  ])
  const can = (slug: string) => Boolean(permissions?.collections?.[slug]?.create)
  const mediaHref = formatAdminURL({ adminRoute, path: '/collections/media' })

  return (
    <div className="teledok-dashboard">
      <section className="teledok-widget teledok-widget--hero teledok-widget--publications">
        <div className="teledok-widget__badge">
          <Picto name="publications" />
        </div>
        <div className="teledok-widget__body">
          <h2 className="teledok-widget__title">Recherche &amp; publications</h2>
          <p className="teledok-widget__text">
            Ajoutez les rapports, articles et travaux de recherche de Teledok avec leur PDF : ils apparaissent sur la page Recherche
            dès leur publication, et sur l’accueil ou la page Médecins s’ils y sont mis en avant.
          </p>
          <div className="teledok-widget__stats">
            <Stat value={publications.totalDocs} label={plural(publications.totalDocs, 'publication', 'publications')} />
            <Stat value={publicationsPublished.totalDocs} label="en ligne" />
            <Stat value={onHome.totalDocs} label="sur l’accueil" />
          </div>
        </div>
        <div className="teledok-widget__actions">
          {can('publications') && (
            <Button el="link" to={formatAdminURL({ adminRoute, path: '/collections/publications/create' })} buttonStyle="primary">
              Ajouter une publication
            </Button>
          )}
          <Button el="link" to={formatAdminURL({ adminRoute, path: '/collections/publications' })} buttonStyle="secondary">
            Voir toutes les publications
          </Button>
        </div>
      </section>
      <section className="card card--has-onclick teledok-widget teledok-widget--card" id="card-media">
        <div className="teledok-widget--card__head">
          <div className="teledok-widget__badge teledok-widget__badge--sm">
            <Picto name="media" />
          </div>
          {can('media') && (
            <div className="card__actions">
              <Button
                aria-label="Ajouter un fichier à la bibliothèque"
                buttonStyle="icon-label"
                el="link"
                icon="plus"
                iconStyle="with-border"
                round
                to={formatAdminURL({ adminRoute, path: '/collections/media/create' })}
              />
            </div>
          )}
        </div>
        <h3 className="card__title">Bibliothèque</h3>
        <p className="teledok-widget__text">Les PDF et visuels déjà envoyés depuis les publications, à réutiliser sans les renvoyer.</p>
        <div className="teledok-widget__stats">
          <Stat value={files.totalDocs} label={plural(files.totalDocs, 'fichier', 'fichiers')} />
        </div>
        <Button aria-label="Voir toute la bibliothèque" buttonStyle="none" className="card__click" el="link" to={mediaHref} />
      </section>
    </div>
  )
}

export default DashboardWidget
