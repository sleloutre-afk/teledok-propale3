/** Adresses des pages du site. */
export const ROUTES = {
  accueil: '/',
  teledok: '/teledok',
  methode: '/notre-methode',
  recherche: '/recherche',
  realisations: '/realisations',
  medecins: '/medecins',
  partenaires: '/partenaires',
  contact: '/contact',
  mentions: '/mentions-legales',
  confidentialite: '/politique-de-confidentialite',
} as const

export type RouteKey = keyof typeof ROUTES

/** Section d'une page, proposée dans le menu déroulant de sa rubrique (ancre `id` de la section). */
export type NavSection = { id: string; label: string }

/**
 * Navigation principale (en-tête). La page Partenaires y est le bouton « Construisons votre projet ».
 * Les rubriques dont la page compte plusieurs sections distinctes ouvrent un menu vers ces sections,
 * comme sur le site Doxamed ; pas de menu pour Notre méthode (deux blocs) ni pour Recherche (liste filtrée).
 */
export const NAV: { key: RouteKey; label: string; sections?: NavSection[] }[] = [
  {
    key: 'teledok',
    label: 'Qui sommes-nous ?',
    sections: [
      { id: 'regroupement', label: 'Un regroupement de praticiens' },
      { id: 'histoire', label: 'Notre histoire' },
      { id: 'valeurs', label: 'Nos valeurs' },
      { id: 'independance', label: 'Un modèle indépendant' },
      { id: 'direction', label: 'Direction' },
    ],
  },
  { key: 'methode', label: 'Notre méthode' },
  {
    key: 'realisations',
    label: 'Réalisations',
    // Ancres : identifiants des cas dans src/data/realisations.ts.
    sections: [
      { id: 'prevention', label: 'Parcours de bilan de prévention' },
      { id: 'soins-primaires', label: 'Téléconsultation de soins primaires' },
      { id: 'formation', label: 'Téléformation des personnels de crèche' },
    ],
  },
  { key: 'recherche', label: 'Recherche' },
  {
    key: 'medecins',
    label: 'Médecins',
    sections: [
      { id: 'conditions', label: 'Conditions d’exercice' },
      { id: 'formation', label: 'Une formation gratuite' },
      { id: 'travaux', label: 'Travaux de recherche' },
      { id: 'candidature', label: 'Candidature' },
    ],
  },
]

/** Page LinkedIn de Teledok (pied de page). */
export const LINKEDIN_URL = 'https://www.linkedin.com/company/teledoksas/home/'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3087'

/** Coordonnées de Teledok, affichées dans le pied de page et sur la page « Contact ». */
export const COORDONNEES: { adresse: string | null; telephone: string | null; email: string | null } = {
  adresse: '351 Bureaux de la Colline\n92210 Saint-Cloud Cedex',
  telephone: null,
  email: null,
}

/**
 * Vidéo d'arrière-plan de l'accueil : boucle muette, sans texte incrusté.
 * Les fichiers de public/videos sont la version web (H.264 720p allégé,
 * 1,8 Mo) et la première image de la source, conservée dans ../../../assets/videos/.
 * Le fichier gardant son nom, « ?v= » est à incrémenter à chaque remplacement pour
 * que les navigateurs ne resservent pas l'ancienne vidéo depuis leur cache.
 * Sans vidéo (src vide), l'accueil affiche l'emplacement réservé.
 */
export const HERO_VIDEO: { src: string; poster?: string } = { src: '/videos/hero.mp4?v=3', poster: '/videos/hero.jpg?v=3' }
