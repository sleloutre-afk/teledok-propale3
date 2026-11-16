import type { Metadata } from 'next'
import { COORDONNEES, LINKEDIN_URL, SITE_URL } from './site'

/**
 * Image de partage (aperçu d'un lien sur LinkedIn, dans une messagerie…), 1200 × 630 px, commune à
 * toutes les pages : public/og-teledok.png. Générée une fois avec next/og (logo blanc, police Signika,
 * couleurs de la charte) ; à régénérer si le logo ou l'accroche changent.
 */
const SHARE_IMAGE = {
  url: '/og-teledok.png',
  width: 1200,
  height: 630,
  alt: 'Teledok — Téléconsultation médicale et parcours de soins',
}

/** Titre, description, adresse canonique et balises de partage d'une page. */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: 'Teledok', locale: 'fr_FR', title, description, url: path, images: [SHARE_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [SHARE_IMAGE.url] },
  }
}

const [streetAddress, cityLine] = (COORDONNEES.adresse ?? '').split('\n')
const [postalCode, ...locality] = (cityLine ?? '').split(' ')

/**
 * Données structurées « Organisation » (schema.org), dans le gabarit du site : Google s'en sert pour
 * présenter l'entreprise dans ses résultats (nom, logo, coordonnées, réseaux). Même modèle que Doxamed.
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Teledok',
    legalName: 'TELEDOK SAS',
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-teledok.png`,
    image: `${SITE_URL}${SHARE_IMAGE.url}`,
    description:
      'Teledok réunit médecins et paramédicaux autour de parcours de soins et de téléconsultation conçus, mis en œuvre et évalués avec rigueur.',
    email: 'contact@teledok.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      postalCode,
      addressLocality: locality.join(' '),
      addressCountry: 'FR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@teledok.fr',
      url: `${SITE_URL}/contact`,
      availableLanguage: ['French'],
    },
    parentOrganization: { '@type': 'Organization', name: 'Capitello Group', url: 'https://capitello.fr' },
    sameAs: [LINKEDIN_URL.replace(/home\/$/, '')],
  }
}

/** Données structurées « Site web ». Pas de SearchAction : le site n'a pas de moteur de recherche. */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Teledok',
    url: SITE_URL,
    inLanguage: 'fr',
    publisher: { '@type': 'Organization', name: 'Teledok', url: SITE_URL },
  }
}
