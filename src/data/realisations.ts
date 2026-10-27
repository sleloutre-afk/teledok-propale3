/** Études de cas de la page « Réalisations », dans l'ordre d'affichage. Contenu en dur (voir src/lib/content.ts). */

/** Un lieu de déploiement d'un cas : son propre contexte / rôle / résultat, affiché au clic sur son tag. */
export type RealisationVolet = {
  tag: string
  contexte: string | null
  role: string | string[] | null
  resultat: string | string[] | null
  linkToRecherche: boolean
}

export type RealisationData = {
  id: string
  title: string
  theme: string
  tagsLabel: string
  tags: string[]
  contexte: string | null
  role: string | string[] | null
  resultat: string | string[] | null
  imageBrief: string | null
  linkToRecherche: boolean
  /** Quand renseigné, les tags deviennent cliquables : chacun affiche son propre volet (contexte / rôle / résultat). */
  volets?: RealisationVolet[]
}

export const REALISATIONS: RealisationData[] = [
  {
    id: 'prevention',
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
    id: 'soins-primaires',
    title: 'Téléconsultation de soins primaires, assistée d’une infirmière et d’objets connectés',
    theme: 'Soins primaires',
    tagsLabel: 'Lieux de déploiement',
    tags: ['Mairies', 'Pharmacies', 'Unités mobiles (Médicobus)', 'EHPAD'],
    contexte: null,
    role: null,
    resultat: null,
    imageBrief: 'Cabine connectée en mairie ou en pharmacie, Médicobus ; infirmière et patient.',
    linkToRecherche: true,
    volets: [
      {
        tag: 'Mairies',
        contexte:
          'Déploiement par la société H4D, spécialisée dans les cabines médicales connectées, de cabines au sein d’entreprises et de mairies.',
        role:
          'Création des protocoles médicaux et mise à disposition de médecins pour des téléconsultations sur rendez-vous à partir des télécabines installées en mairie (plus d’une centaine entre 2020 et 2024) et dans de grandes entreprises (plus de 30).',
        resultat: [
          'Entre 2020 et 2024, 250 téléconsultations en moyenne réalisées par mois par nos médecins',
          'Objet d’une thèse soutenue en 2023 sur l’« Efficacité des téléconsultations dans des cabines avec dispositifs médicaux connectés dans les lieux publics »',
        ],
        linkToRecherche: true,
      },
      {
        tag: 'Pharmacies',
        contexte:
          'Visiomed, société spécialisée dans la médecine connectée, a mis en place un programme de télécabines en pharmacies pour des téléconsultations assistées par un pharmacien.',
        role: 'Création des protocoles médicaux et mise à disposition de médecins pour des téléconsultations avec pharmaciens télérequérants.',
        resultat: [
          'Entre 2019 et 2023, plus de 200 téléconsultations en moyenne réalisées par mois par nos médecins',
          'Objet d’une thèse soutenue en 2021 sur l’« Efficacité des téléconsultations effectuées par des médecins généralistes avec objets connectés en présence d’un pharmacien d’officine télérequérant »',
        ],
        linkToRecherche: true,
      },
      {
        tag: 'Unités mobiles (Médicobus)',
        contexte:
          'Déploiement par la société Hocoia, spécialisée dans la conception de bus connectés dédiés à la santé, en partenariat avec Numerisat, de bus médicaux connectés dans des déserts médicaux, avec infirmiers télérequérants.',
        role: 'Formation des infirmiers et mise à disposition de médecins pour des téléconsultations depuis les Médicobus.',
        resultat: [
          'Entre 2023 et 2025 : [nombre d’infirmiers formés à préciser], [nombre de téléconsultations réalisées à préciser]',
          'Objet d’une thèse en 2026 sur le « Ressenti des médecins généralistes effectuant des téléconsultations à bord de Médicobus en Île-de-France »',
        ],
        linkToRecherche: true,
      },
      {
        tag: 'EHPAD',
        contexte:
          'Mise en place par la société Toktokdok, en EHPAD, d’une solution de téléexpertise ORL (audiométrie assistée par un infirmier, suivie par un médecin ORL).',
        role: 'Formation des infirmiers et mise à disposition de médecins ORL pour des téléconsultations sur rendez-vous.',
        resultat: 'Entre 2020 et 2022, plus de 3 000 téléconsultations et téléconseils réalisés.',
        linkToRecherche: false,
      },
    ],
  },
  {
    id: 'formation',
    title: 'Téléformation des personnels de crèche',
    theme: 'Formation',
    tagsLabel: 'Lieux de déploiement',
    tags: ['Crèches'],
    contexte: 'Déploiement par la société Medeo d’un dispositif de téléformation pour l’admission de personnel en crèches.',
    role: [
      'Définition des protocoles d’expertise pour la prise en charge, par les professionnels des crèches, des enfants présentant des pathologies chroniques',
      'Téléformation des personnels par un médecin',
    ],
    resultat: [
      'Entre 2022 et 2025, plus de 50 protocoles mis en place',
      '[Nombre de téléformations réalisées à préciser]',
    ],
    imageBrief: 'Professionnels de crèche en séance de téléformation avec un médecin.',
    linkToRecherche: false,
  },
]
