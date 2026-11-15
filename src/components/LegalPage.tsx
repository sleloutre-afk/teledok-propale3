import type { ReactNode } from 'react'
import { Crumb } from './Crumb'
import { PageShell } from './PageShell'

type Props = {
  title: string
  /** Date de la version du texte, en toutes lettres. */
  version: string
  sommaire: { id: string; label: string }[]
  /** Avertissement en tête de texte (facultatif). */
  notice?: ReactNode
  children: ReactNode
}

/** Gabarit des pages légales (textes établis par l'avocat de Teledok) : sommaire à gauche, texte à droite. */
export function LegalPage({ title, version, sommaire, notice, children }: Props) {
  return (
    <PageShell page="pg-legal">
      <section className="bg-cream" aria-labelledby="hero-t">
        <div className="wrap phero" style={{ paddingBottom: 'clamp(56px, 7vw, 80px)' }}>
          <Crumb label={title} />
          <h1 id="hero-t" className="hero-in2 h1" style={{ marginBottom: 16, fontSize: 'clamp(34px, 4vw, 48px)', letterSpacing: 0 }}>
            {title}
          </h1>
          <p className="muted" style={{ fontSize: 15 }}>
            Version du {version}
          </p>
        </div>
      </section>

      <section className="wrap body">
        <nav className="toc" aria-label="Sommaire">
          <p className="toc-t">Sommaire</p>
          {sommaire.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <article className="legal">
          {notice && (
            <div className="notice">
              <p>{notice}</p>
            </div>
          )}
          {children}
        </article>
      </section>
    </PageShell>
  )
}
