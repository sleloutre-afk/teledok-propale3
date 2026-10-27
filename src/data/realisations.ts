/** Études de cas de la page « Réalisations », dans l'ordre d'affichage. Contenu en dur (voir src/lib/content.ts). */
export type RealisationData = {
  id: string
  title: string
  theme: string
  tagsLabel: string
  tags: string[]
  contexte: string | null
  role: string | null
  resultat: string | null
  imageBrief: string | null
  linkToRecherche: boolean
}

export const REALISATIONS: RealisationData[] = [
  {
    id: 'parcours-prevention',
    title: 'Parcours de bilan de prévention',
    theme: 'Prévention',
    tagsLabel: 'Références',
    tags: ['ADP', 'BPI', 'Deloitte', 'EHPAD'],
    contexte: null,
    role: null,
    resultat: null,
    imageBrief: 'Bilan de prévention en situation : poste de téléconsultation, professionnel de santé.',
    linkToRecherche: false,
  },
  {
    id: 'teleconsultation-soins-primaires',
    title: 'Téléconsultation de soins primaires, assistée d’une infirmière et d’objets connectés',
    theme: 'Soins primaires',
    tagsLabel: 'Lieux de déploiement',
    tags: ['Mairies', 'Pharmacies', 'Unités mobiles (Médicobus)'],
    contexte: null,
    role: null,
    resultat: null,
    imageBrief: 'Cabine connectée en mairie ou en pharmacie, Médicobus ; infirmière et patient.',
    linkToRecherche: true,
  },
]
