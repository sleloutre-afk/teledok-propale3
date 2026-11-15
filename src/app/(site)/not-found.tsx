import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { ROUTES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Page introuvable | Teledok',
  description: 'La page demandée n’existe pas ou a été déplacée.',
  robots: { index: false, follow: false },
}

/** Tampon Teledok (sur le modèle du tampon de la page 404 de Doxamed). Original : assets/stamp-teledok.svg (anneau + logo), rendu en PNG. */
function Tampon() {
  return (
    <div className="nf-stamp hero-in">
      <Image src="/stamp-teledok.png" width={480} height={472} alt="" priority sizes="160px" />
    </div>
  )
}

/** Page 404, sur le modèle de celle du site Doxamed : tampon, message informel, retour à l'accueil ou contact. */
export default function NotFound() {
  return (
    <PageShell>
      <section className="bg-cream">
        <div className="wrap sec nf">
          <Tampon />
          <p className="hero-in2 pill eyebrow">Erreur 404</p>
          <h1 className="hero-in2 h1 nf-t">Cette page ne répond pas à l’appel.</h1>
          <p className="hero-in3 nf-p">
            Pas d’inquiétude : la page que vous cherchiez n’existe plus ou a changé d’adresse. Le reste du site, lui, est bien en ligne.
          </p>
          <div className="hero-in3 btns nf-btns">
            <Link className="btn btn-primary" href={ROUTES.accueil}>
              Retour à l’accueil
            </Link>
            <Link className="btn btn-secondary" href={ROUTES.contact}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
