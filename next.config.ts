import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  // Retire l'en-tête « X-Powered-By: Next.js ».
  poweredByHeader: false,
  // Nombre de processus de pré-rendu à la compilation : à limiter (BUILD_WORKERS=1) quand la base
  // n'accepte que quelques connexions, chaque processus en ouvrant jusqu'à 3.
  ...(process.env.BUILD_WORKERS ? { experimental: { cpus: Number(process.env.BUILD_WORKERS) } } : {}),
  // Adresses de l'ancien site (hébergé chez OVH jusqu'au 16 novembre 2026), relevées sur archive.org :
  // redirigées vers la page qui leur correspond, pour les liens existants et les moteurs de recherche.
  // (Avec un « / » final, Next le retire d'abord par une première redirection, puis applique celle-ci.)
  async redirects() {
    return [
      { source: '/mentionlegales', destination: '/mentions-legales', permanent: true },
      { source: '/rejoignez-nous', destination: '/medecins', permanent: true },
      { source: '/on-parle-de-nous', destination: '/recherche', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        // Fichiers de la bibliothèque du BO (PDF, visuels), servis par
        // l'application depuis le stockage S3 : mis en cache par le navigateur.
        source: '/api/media/file/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }],
      },
      {
        // Vidéo d'ouverture et son image d'attente (public/videos) : cache modéré,
        // le fichier pouvant être remplacé sous le même nom.
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }],
      },
      {
        // En-têtes de sécurité, valables partout (site, /BO, /api).
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
      {
        // Le back-office, son contrôle anti-robots et l'API ne doivent jamais être indexés…
        source: '/:path(BO|bo-verify)/:rest*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/:path(BO|bo-verify|api)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        // … sauf les fichiers de la bibliothèque (/api/media/file/…) : les synthèses de recherche en PDF
        // doivent pouvoir apparaître dans Google (voir aussi src/app/robots.ts).
        source: '/api/:rest((?!media/file/).*)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        // Politique de sécurité du contenu, sur le site public uniquement (le
        // BO de Payload demande des règles plus permissives). Seul tiers
        // autorisé : le captcha Cloudflare Turnstile de /bo-verify.
        source: '/((?!BO|api).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // 'unsafe-eval' en développement seulement : le rechargement à chaud de Next en a besoin.
              `script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval' " : ''}https://challenges.cloudflare.com`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "media-src 'self' https:",
              "frame-src 'self' https://challenges.cloudflare.com",
              "connect-src 'self' https://challenges.cloudflare.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig)
