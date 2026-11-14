import type { ReactNode } from 'react'
import { ROUTES, type RouteKey } from '@/lib/site'
import { FloatingJoin } from './FloatingJoin'
import { Header } from './Header'
import { Footer } from './Footer'
import { SiteBehaviors } from './SiteBehaviors'

type Props = {
  /** Classe de la page, qui porte ses styles propres (src/styles/site.css). */
  page?: string
  /** Rubrique active dans la navigation principale. */
  current?: RouteKey
  /** En-tête transparent posé sur le visuel d'ouverture (accueil). */
  overlayHeader?: boolean
  /** Cible du bouton flottant « Rejoindre Teledok ». */
  joinHref?: string
  /** Dernière colonne du pied de page. */
  footerCta?: 'medecins' | 'partenaires'
  children: ReactNode
}

/** Habillage commun à toutes les pages : en-tête, contenu, pied de page. */
export function PageShell({
  page,
  current,
  overlayHeader = false,
  joinHref = ROUTES.medecins,
  footerCta = 'medecins',
  children,
}: Props) {
  return (
    <>
      <Header current={current} overlay={overlayHeader} />
      <main id="contenu" className={page} tabIndex={-1}>
        {children}
      </main>
      <Footer cta={footerCta} />
      <FloatingJoin href={joinHref} />
      <SiteBehaviors />
    </>
  )
}
