import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Signika } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { CookieBanner } from '@/components/CookieBanner'
import { AnalyticsScripts } from '@/components/AnalyticsScripts'
import '@/styles/site.css'

// Police unique de la charte Teledok (300 à 700). Téléchargée à la
// compilation et servie par le site lui-même : aucun appel à Google côté visiteur.
// Seul le jeu de caractères latin est préchargé ; le latin étendu reste chargé à la demande.
const signika = Signika({ subsets: ['latin'], display: 'swap', variable: '--font-signika' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Teledok : téléconsultation médicale et parcours de soins',
  // Monogramme du logo (public/favicon.svg, qui passe en bleu clair quand le navigateur est en thème sombre) ;
  // les versions PNG et ICO en sont dérivées.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = { themeColor: '#0D628F' }

export default function SiteLayout({ children }: { children: ReactNode }) {
  // Identifiant de mesure Google Analytics 4 (G-…). Sans lui : ni bandeau, ni lien « Gestion des
  // cookies », ni Google Analytics — le site ne dépose alors aucun cookie facultatif.
  const gaId = process.env.GA_MEASUREMENT_ID
  return (
    // La classe « js » est posée avant l'hydratation (script ci-dessous) : React doit l'ignorer.
    <html lang="fr" className={signika.variable} suppressHydrationWarning>
      <head>
        {/* Les états qui dépendent de JavaScript (contenus masqués avant apparition,
            menu replié, en-tête transparent) ne s'appliquent que si le script s'exécute. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {/* Lien d'évitement, visible au clavier seulement. Il vit ici et non dans la page : après une
            navigation, Next donne le focus au premier élément de la page, ce qui le faisait apparaître. */}
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        {children}
        {/* Données structurées de l'entreprise et du site (src/lib/seo.ts). */}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {gaId && (
          <>
            <CookieBanner />
            <AnalyticsScripts gaId={gaId} />
          </>
        )}
      </body>
    </html>
  )
}
