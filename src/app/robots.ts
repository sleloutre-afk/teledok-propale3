import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { SITE_URL } from '@/lib/site'

export default async function robots(): Promise<MetadataRoute.Robots> {
  // Sous une autre adresse que l'adresse officielle, ou sous l'adresse technique
  // *.cleverapps.io de Clever Cloud (démonstration), rien ne doit être indexé.
  const host = (await headers()).get('host')
  if (host !== new URL(SITE_URL).host || host?.endsWith('.cleverapps.io')) return { rules: [{ userAgent: '*', disallow: '/' }] }

  return {
    // Les fichiers de la bibliothèque (/api/media/file/…, dont les synthèses de recherche en PDF) restent
    // indexables : la règle la plus précise (allow) l'emporte sur « disallow: /api ».
    rules: [{ userAgent: '*', allow: ['/api/media/file/'], disallow: ['/BO', '/api'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
