/** Étapes de la frise « Notre histoire » (page Teledok), dans l'ordre chronologique. Contenu en dur. */
export type Etape = {
  annee: number
  titre: string
  texte: string
  /** Nombre de médecins à cette date, quand il est connu. */
  medecins: number | null
}

export const HISTOIRE: Etape[] = [
  {
    annee: 2018,
    titre: 'Création de Teledok',
    texte:
      'Un concept : mettre des médecins à disposition pour pratiquer et évaluer la téléconsultation, avec un télérequérant et des objets connectés.',
    medecins: 4,
  },
  {
    annee: 2020,
    titre: 'Plateforme Covid',
    texte:
      'Plateforme de prise en charge du Covid dans les camps de migrants, en gares et dans les zones isolées, avec des parcours dédiés.',
    medecins: 20,
  },
  {
    annee: 2021,
    titre: 'Maison de santé et prévention',
    texte:
      'Création d’une maison de santé pluridisciplinaire, qui combine actes de téléconsultation et actes en présentiel, et création d’une spécialité de prévention.',
    medecins: null,
  },
  {
    annee: 2024,
    titre: 'Agrandissement',
    texte: 'Agrandissement de la maison de santé pluridisciplinaire et de la plateforme de téléconsultation.',
    medecins: 50,
  },
  {
    annee: 2025,
    titre: 'Rachat par Capitello Group',
    texte:
      'Intégration au sein de Capitello Group, société mère de Doxamed, pour renforcer la spécialité de prévention, et diversification des parcours de soins.',
    medecins: null,
  },
]
