import type { ReactNode } from 'react'

/** Étapes de la frise « Notre histoire » (page Teledok), dans l'ordre chronologique. Contenu en dur. */
export type Etape = {
  annee: number
  titre: string
  /** Texte du détail ; peut contenir des liens. */
  texte: ReactNode
  /** Nombre de médecins à cette date, quand il est connu. */
  medecins: number | null
}

export const HISTOIRE: Etape[] = [
  {
    annee: 2018,
    titre: 'Création de Teledok',
    texte:
      'Un concept : mettre des médecins à disposition pour pratiquer et évaluer la téléconsultation, avec un télérequérant ainsi que des objets connectés.',
    medecins: 4,
  },
  {
    annee: 2020,
    titre: 'Plateforme Covid',
    texte:
      'Plateforme de prise en charge du Covid dans des foyers de migrants, en gares et dans les zones isolées, avec des parcours dédiés.',
    medecins: 20,
  },
  {
    annee: 2021,
    titre: 'Création d’une maison de santé pluridisciplinaire',
    texte:
      'Création d’une maison de santé pluridisciplinaire, combinant actes de téléconsultation et actes en présentiel ; création d’une spécialité de prévention.',
    medecins: null,
  },
  {
    annee: 2024,
    titre: 'Renforcement',
    texte: 'Extension de la maison de santé pluridisciplinaire et développement de la plateforme de téléconsultation.',
    medecins: 50,
  },
  {
    annee: 2025,
    titre: 'Rachat par Capitello Group',
    texte: (
      <>
        Intégration au sein de{' '}
        <a href="https://capitello.fr" target="_blank" rel="noreferrer">
          Capitello Group
        </a>
        , société mère de{' '}
        <a href="https://www.doxamed.com" target="_blank" rel="noreferrer">
          Doxamed
        </a>
        , pour renforcer la spécialité de prévention ; diversification des parcours de soins.
      </>
    ),
    medecins: null,
  },
]
