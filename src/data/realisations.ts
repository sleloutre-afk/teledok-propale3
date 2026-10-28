/** Études de cas de la page « Réalisations », dans l'ordre d'affichage. Contenu en dur (voir src/lib/content.ts). */

/** Un lieu de déploiement d'un cas : son propre contexte / rôle / résultat, affiché au clic sur son tag. */
export type RealisationImage = { src: string; alt: string }

/** Une puce de liste, éventuellement suivie d'un lien externe (« En savoir plus »). */
export type RealisationLigne = string | { texte: string; lien: { href: string; label: string; titre: string } }

export type RealisationTexte = string | RealisationLigne[] | null

export type RealisationVolet = {
  tag: string
  image: RealisationImage | null
  contexte: string | null
  role: RealisationTexte
  resultat: RealisationTexte
  linkToRecherche: boolean
}

export type RealisationData = {
  id: string
  title: string
  theme: string
  tagsLabel: string
  tags: string[]
  contexte: string | null
  role: RealisationTexte
  resultat: RealisationTexte
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
    tags: ['Groupe ADP', 'Bpifrance', 'Deloitte', 'Colisée'],
    contexte: null,
    role: null,
    resultat: null,
    imageBrief: 'Bilan de prévention en situation : poste de téléconsultation, professionnel de santé.',
    linkToRecherche: false,
    volets: [
      {
        tag: 'Groupe ADP',
        image: null,
        contexte:
          'Depuis avril 2025, le Groupe ADP propose avec Doxamed à tous ses collaborateurs un bilan de prévention santé complet, anonyme, basé sur le volontariat et pris en charge par l’entreprise : près de 1 000 bilans par an, dans des espaces dédiés à Paris-Charles-de-Gaulle et Paris-Orly. Une première en France à l’échelle de toute une entreprise.',
        role: [
          'Mise à disposition de médecins qui interviennent à distance, par téléconsultation, en appui de l’infirmier présent tout au long du bilan',
          'Restitution des résultats et prescription d’examens complémentaires si nécessaire, notamment pour les salariés sans médecin traitant',
        ],
        resultat: [
          'Rapport épidémiologique sur les risques silencieux',
          'Trophée Or — Bilan et prévention santé, Groupe RH&M (2025)',
          'Médaille d’or — Projet RH d’envergure, Républik RH (2025)',
        ],
        linkToRecherche: true,
      },
      {
        tag: 'Bpifrance',
        image: null,
        contexte:
          'Dans le cadre de son Plan de Santé, Bpifrance propose depuis janvier 2026, avec Doxamed, un bilan de prévention santé complet, anonyme, basé sur le volontariat et entièrement pris en charge, accessible à environ 850 collaborateurs par an dans un espace dédié de son siège, à Maisons-Alfort.',
        role: 'Mise à disposition de médecins qui, par téléconsultation, restituent à chaque collaborateur les résultats de son bilan et l’orientent si nécessaire dans le parcours de soins.',
        resultat: 'En cours.',
        linkToRecherche: false,
      },
      {
        tag: 'Deloitte',
        image: null,
        contexte:
          'Depuis 2026, Deloitte propose avec Doxamed à ses collaborateurs de 50 ans et plus un bilan de prévention santé complet, anonyme, basé sur le volontariat et intégralement financé, dans un espace dédié de ses locaux à La Défense : une première pour un cabinet de conseil et d’audit en France.',
        role: 'Mise à disposition de médecins qui, par téléconsultation, restituent à chaque collaborateur les résultats de son bilan et l’orientent si nécessaire dans le parcours de soins.',
        resultat: 'En cours.',
        linkToRecherche: false,
      },
      {
        tag: 'Colisée',
        image: null,
        contexte:
          'Colisée France, premier groupe du secteur du grand âge à proposer ces bilans à ses équipes, lance avec Doxamed un projet sur trois ans. Phase pilote de septembre à novembre 2026 dans huit EHPAD d’Île-de-France, avec des bilans axés notamment sur les troubles musculo-squelettiques.',
        role: 'Téléconsultation de chaque collaborateur, quelques jours après son bilan, par un médecin qui lui remet un compte rendu complet et l’oriente si nécessaire dans le parcours de soins.',
        resultat: 'En cours.',
        linkToRecherche: false,
      },
    ],
  },
  {
    id: 'soins-primaires',
    title: 'Téléconsultation de soins primaires, assistée d’une infirmière et d’objets connectés',
    theme: 'Soins primaires',
    tagsLabel: 'Lieux de déploiement',
    tags: ['Mairies', 'Pharmacies', 'Unités mobiles (Médicobus)', 'EHPAD', 'Gares'],
    contexte: null,
    role: null,
    resultat: null,
    imageBrief: 'Cabine connectée en mairie ou en pharmacie, Médicobus ; infirmière et patient.',
    linkToRecherche: true,
    volets: [
      {
        tag: 'Mairies',
        image: { src: '/photos/mairie.jpg', alt: 'Cabine de téléconsultation connectée installée dans le hall d’une mairie' },
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
        image: { src: '/photos/pharmacie.jpg', alt: 'Dans l’espace de téléconsultation d’une pharmacie, une professionnelle de santé installe le brassard de tension d’une patiente' },
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
        image: { src: '/photos/medicobus.jpg', alt: 'À bord d’un Médicobus, une infirmière prend la tension d’un patient' },
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
        image: { src: '/photos/ehpad.jpg', alt: 'Une infirmière examine l’oreille d’une résidente avec un otoscope relié à un smartphone' },
        contexte:
          'Mise en place par la société Toktokdok, en EHPAD, d’une solution de téléexpertise ORL (audiométrie assistée par un infirmier, suivie par un médecin ORL).',
        role: 'Formation des infirmiers et mise à disposition de médecins ORL pour des téléconsultations sur rendez-vous.',
        resultat: 'Entre 2020 et 2022, plus de 3 000 téléconsultations et téléconseils réalisés.',
        linkToRecherche: false,
      },
      {
        tag: 'Gares',
        image: { src: '/photos/gares.jpg', alt: 'Entrée d’un espace santé Doxamed dans le hall d’une gare' },
        contexte:
          'Fin 2023, Doxamed remporte l’appel d’offres de SNCF Gares & Connexions pour déployer des espaces de santé permanents en gare.',
        role: 'Mise à disposition de médecins pour des téléconsultations sur rendez-vous, avec prise en charge des patients par une infirmière.',
        resultat: [
          'Premier centre ouvert en gare SNCF d’Épinay-sur-Orge',
          {
            texte: 'Un patient souffrant d’une pneumonie non diagnostiquée sauvé in extremis grâce au dispositif',
            lien: {
              href: 'https://www.youtube.com/watch?v=USVbMg3lowQ',
              label: 'En savoir plus',
              titre: 'En savoir plus sur ce patient pris en charge en gare (vidéo YouTube, nouvel onglet)',
            },
          },
        ],
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
