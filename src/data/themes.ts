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

/** Les six valeurs de TeleDok, dans l'ordre de la planche d'origine (picto n° = rang). Textes validés par le Dr Illouz. */
export const VALEURS: { key: string; titre: string; texte: string }[] = [
  {
    key: 'parcours',
    titre: 'Amélioration du parcours de soins coordonné',
    texte:
      "Création de parcours de soins permettant d'apporter à distance des compétences médicales, s'appuyant sur un(e) infirmier(e) auprès du patient et l'utilisation d'objets connectés, en lien avec un médecin à distance.",
  },
  {
    key: 'plateforme',
    titre: 'Plateforme territoriale d’appui',
    texte:
      "Participation à l'écosystème médical local, en coordination avec le SAS, les CPTS, les MSP et les professionnels de santé du territoire.",
  },
  {
    key: 'conditions',
    titre: 'Amélioration des conditions de l’activité médicale',
    texte:
      "Garantie d'un parcours de soins sécurisé pour le patient et le praticien : intégralité des honoraires versée aux médecins, prise en charge de la « taxe lapin », volume d'activité assuré, formation et évaluation systématique des pratiques pour alimenter la recherche.",
  },
  {
    key: 'independance',
    titre: 'Indépendance médicale, en dehors d’une société commerciale',
    texte:
      "Le service médical rendu comme priorité absolue, évalué au fur et à mesure : si un parcours s'avère inefficace, nous le repensons, voire l'arrêtons, en toute indépendance.",
  },
  {
    key: 'evaluation',
    titre: 'Évaluation systématique et recherche en télémédecine',
    texte:
      "Mesure systématique de l'efficience de la téléconsultation et du parcours de soins, avec des indicateurs épidémiologiques définis en amont et suivis a posteriori.",
  },
  {
    key: 'teleconsultation',
    titre: 'Téléconsultation avec objet connecté et télérequérant formé',
    texte:
      "La téléconsultation qui, parmi toutes celles évaluées, est la plus proche de la consultation en présentiel, pour un service médical rendu optimal.",
  },
]
