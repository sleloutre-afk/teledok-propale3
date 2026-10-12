import type { IconName } from './icons'

/** Thèmes des travaux de recherche : filtres et pictos de la page « Recherche & publications ». */
export const THEMES = {
  prev: { label: 'Prévention', icon: 'bouclier-pouls' },
  sp: { label: 'Soins primaires & télérequérant', icon: 'stethoscope' },
  dmc: { label: 'Dispositifs connectés', icon: 'ecran' },
  mob: { label: 'Unités mobiles', icon: 'medicobus' },
  crise: { label: 'Situations sanitaires exceptionnelles', icon: 'globe' },
  th: { label: 'Thèses', icon: 'these' },
} as const satisfies Record<string, { label: string; icon: IconName }>

export type ThemeId = keyof typeof THEMES

/** Types de document proposés dans le BO. */
export const PUBLICATION_TYPES = ['Thèse', 'Rapport', 'Publication scientifique', 'Étude qualitative'] as const

/** Les six valeurs de TeleDok, dans l'ordre de la planche d'origine (picto n° = rang). */
export const VALEURS: { key: string; titre: string }[] = [
  { key: 'parcours', titre: 'Amélioration du parcours de soins coordonné' },
  { key: 'plateforme', titre: 'Plateforme territoriale d’appui' },
  { key: 'conditions', titre: 'Amélioration des conditions de l’activité médicale' },
  { key: 'independance', titre: 'Indépendance médicale, en dehors d’une société commerciale' },
  { key: 'evaluation', titre: 'Évaluation systématique et recherche en télémédecine' },
  { key: 'teleconsultation', titre: 'Téléconsultation avec objet connecté et télérequérant formé' },
]
