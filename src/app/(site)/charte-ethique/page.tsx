import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { pageMetadata } from '@/lib/seo'

// Charte éthique de Teledok et son annexe, le Code anti-corruption, établis par l'avocat de Teledok (version du 5 novembre 2026).
// Reprise fidèle ; la ligne de signature du document papier n'est pas reprise en ligne.

export const metadata: Metadata = pageMetadata(
  '/charte-ethique',
  'Charte éthique | Teledok',
  'Charte éthique de Teledok et Code anti-corruption : responsabilité de l’entreprise, respect des personnes, éthique des relations commerciales, signalements.',
)

const sommaire = [
  { id: 'responsabilite', label: '1. Responsabilité de l’Entreprise' },
  { id: 'personnes', label: '2. Respect et protection des personnes' },
  { id: 'commercial', label: '3. Éthique des relations commerciales' },
  { id: 'actifs', label: '4. Protection des actifs' },
  { id: 'suivi', label: '5. Communication, contrôle et suivi' },
  { id: 'signalements', label: '6. Signalements' },
  { id: 'anti-corruption', label: 'Annexe : Code Anti-Corruption' },
]

const Mail = ({ to }: { to: string }) => <a href={`mailto:${to}`}>{to}</a>

function Referent({ courriel = 'E-mail' }: { courriel?: string }) {
  return (
    <address>
      <strong>Maître Philippe de BONDY</strong>
      <br />
      Avocat au Barreau de Paris
      <br />
      51, avenue Raymond Poincaré - 75116 PARIS
      <br />
      Tél. : 01.56.89.86.00
      <br />
      {courriel} : <Mail to="pdebondy@lawval.com" />
    </address>
  )
}

const REGLEMENTATIONS: [string, string][] = [
  [
    'Médecins, chirurgiens-dentistes, sage-femmes, pharmaciens, autres professions de santé listées à l’art. L. 1453-4 CSP, étudiants et associations de santé',
    'Dispositif « anti-cadeaux » (CSP art. L. 1453-3 à L. 1453-7, L. 1453-10, L. 1453-11)',
  ],
  [
    'Fonctionnaires et agents publics (hors santé)',
    'Obligations de probité, désintéressement, prévention des conflits d’intérêts (CGFP art. L. 121-4 et L. 121-5), jurisprudence disciplinaire, doctrine AFA',
  ],
  ['Élus (ex. sénateurs)', 'Règles de déclaration d’avantages (règlements internes, loi déontologie)'],
  ['Professionnels de santé et agents publics impliqués dans les politiques de santé', 'Cumul de la loi « anti-cadeaux » et des règles de probité publique'],
  [
    'Professions juridiques et du chiffre au sein de SPE (avocats, CPI, etc.)',
    'Loi du 31 déc. 1990, art. 31-8 ; décisions CE 17 juin 2019 n° 400192, 400195, 412149 ; règles déontologiques propres à chaque profession',
  ],
  [
    'Salariés du secteur privé (banques, grandes entreprises, etc.)',
    'Règlements intérieurs, codes de conduite, droit disciplinaire, infractions pénales (corruption, abus de biens sociaux, etc.)',
  ],
]

export default function Page() {
  return (
    <LegalPage title="Charte éthique" version="5 novembre 2026" sommaire={sommaire}>
      <p style={{ marginTop: 32 }}>
        <strong>La présente Charte Ethique s’applique à TELEDOK et à l’ensemble de ses collaborateurs.</strong>
      </p>
      <p>
        Cette Charte Ethique est constituée de principes généraux et d’exemples d’application de ceux-ci dans le cadre de notre culture
        d’entreprise. De fait ces exemples sont donnés à titre illustratif et n’ont pas vocation à être exhaustifs.
      </p>
      <p className="muted" style={{ fontSize: 15 }}>
        TELEDOK – S.A.S.U. au capital de 10 000 € – Siège social : 351 Les Bureaux de la Colline – 92210 Saint-Cloud – R.C.S. Nanterre 843
        204 678
      </p>

      <h2 id="responsabilite">1. Responsabilité de l’Entreprise</h2>
      <h3>1.1 Les 10 Principes universels de Global Compact des Nations Unies</h3>
      <p>
        TELEDOK respecte et entend progresser sur les dix principes universellement connus de Global Compact ou Pacte Mondial des Nations
        Unies :
      </p>
      <p>
        <strong>Droits de l’homme</strong>
      </p>
      <ul>
        <li>
          <u>Principe 1</u> : Les entreprises sont invitées à promouvoir et à respecter la protection du droit international relatif aux
          droits de l’homme
        </li>
        <li>
          <u>Principe 2</u> : Les entreprises sont invitées à veiller à ne pas se rendre complices de violations des droits de l’homme
        </li>
      </ul>
      <p>
        <strong>Normes internationales du travail</strong>
      </p>
      <ul>
        <li>
          <u>Principe 3</u> : Les entreprises sont invitées à respecter la liberté d’association et à reconnaître le droit de négociation
          collective
        </li>
        <li>
          <u>Principe 4</u> : Les entreprises sont invitées à contribuer à l’élimination du travail forcé ou obligatoire
        </li>
        <li>
          <u>Principe 5</u> : Les entreprises sont invitées à contribuer à l’abolition effective du travail des enfants
        </li>
        <li>
          <u>Principe 6</u> : Les entreprises sont invitées à contribuer à l’élimination de toute discrimination en matière d’emploi et de
          profession
        </li>
      </ul>
      <p>
        <strong>Environnement</strong>
      </p>
      <ul>
        <li>
          <u>Principe 7</u> : Les entreprises sont invitées à appliquer l’approche de précaution aux problèmes touchant à l’environnement
        </li>
        <li>
          <u>Principe 8</u> : Les entreprises sont invitées à prendre des initiatives tendant à promouvoir une plus grande responsabilité en
          matière d’environnement
        </li>
        <li>
          <u>Principe 9</u> : Les entreprises sont invitées à favoriser la mise au point et la diffusion de technologies respectueuses de
          l’environnement
        </li>
      </ul>
      <p>
        <strong>Lutte contre la corruption</strong>
      </p>
      <ul>
        <li>
          <u>Principe 10</u> : Les entreprises sont invitées à agir contre la corruption sous toutes ses formes, y compris l’extorsion de
          fonds et les pots-de-vin
        </li>
      </ul>
      <h3>1.2 Santé et Sécurité</h3>
      <p>
        TELEDOK s’attache à mettre en œuvre une politique appropriée en matière de santé et de sécurité au travail et à veiller à son
        application constante.
      </p>
      <p>
        TELEDOK a ainsi mis en place des actions et procédures afin de permettre aux collaborateurs de TELEDOK de bénéficier de conditions
        de travail sécurisées et saines.
      </p>
      <p>
        En retour, les collaborateurs de TELEDOK doivent respecter les mesures visant à réduire leur exposition au risque et veiller à leur
        santé et sécurité ainsi qu’à celle des autres collaborateurs et/ou prestataires.
      </p>
      <h3>1.3 Environnement</h3>
      <p>
        La protection de l’environnement constitue pour TELEDOK un principe fondamental, applicable à tous les stades de son activité et
        porté par chaque collaborateur.
      </p>
      <p>
        TELEDOK encourage la préservation de l’environnement sur les lieux de travail et incite chaque collaborateur à éviter tout
        gaspillage d’énergie ou de ressources naturelles.
      </p>
      <p>
        Tri des déchets, réduction des consommations d’énergies fossiles et d’eau, etc. : TELEDOK a le réflexe « Environnemental ». Les
        directives sont très strictes avec une attention particulière portée notamment à la lutte contre le gaspillage et à la gestion des
        déchets.
      </p>
      <h3>1.4 Respect du Droit de la Santé</h3>
      <p>TELEDOK respecte les règles applicables en Droit de la Santé, et notamment les principes suivants :</p>
      <p>
        <strong>Secret médical</strong>
      </p>
      <p>
        Toutes les informations personnelles de santé sont couvertes par le secret médical ; il en est ainsi notamment des échanges qui
        interviendront entre les patients et les professionnels de santé intervenants, TELEDOK n’y ayant pas accès.
      </p>
      <p>
        <strong>Conformité réglementaire</strong>
      </p>
      <p>TELEDOK veille à mettre à disposition :</p>
      <ul>
        <li>
          Des professionnels de santé intervenants exerçant régulièrement sur le sol français leurs activités professionnelles. Ceux-ci sont
          titulaires d’un diplôme leur permettant un exercice régulier sur le sol français (i), sont inscrits au tableau de leur ordre
          d’appartenance (ii) et ne sont pas touchés par une interdiction d’exercice (iii) ;
        </li>
        <li>
          Des professionnels de santé disposant d’une police d’assurance garantissant leur activité professionnelle conforme et régulière,
          intégrant l’activité prévue par TELEDOK ;
        </li>
        <li>S’il y a lieu, des professionnels de santé intervenants formés à la pratique de la télémédecine.</li>
      </ul>
      <p>
        <strong>Indépendance</strong>
      </p>
      <p>
        Les professionnels de santé intervenants sont en toutes circonstances libres d’adapter les conditions de réalisation de leurs
        prestations afin qu’elles soient en permanence conformes à la réglementation applicable (en ce inclus les dispositions du Code de la
        Santé Publique, de leurs codes de déontologie respectifs ainsi que les dispositions et instructions de leurs instances de tutelle
        respectives). Ils réaliseront leurs prestations en l’absence de tout lien de subordination ou assimilé avec TELEDOK.
      </p>

      <h2 id="personnes">2. Respect et protection des personnes</h2>
      <h3>2.1 Respect des autres, convivialité, bienveillance, courtoisie</h3>
      <p>
        La gestion des ressources humaines et, d’une façon plus générale, les relations entre les collaborateurs sont fondées sur les
        principes de confiance et de respect, avec le souci de traiter chacun avec dignité. La convivialité est un comportement attendu
        dans l’entreprise. Elle est un mélange de politesse, de considération et d’empathie vis-à-vis de nos interlocuteurs, quelles que
        soient leurs fonctions.
      </p>
      <p>
        TELEDOK attend de ses collaborateurs qu’ils agissent dans le cadre professionnel en accord avec ces principes d’éthique, en toutes
        circonstances et quels que soient leur métier, leur niveau de responsabilité et leurs interlocuteurs.
      </p>
      <p>
        Chaque collaborateur est invité à informer la Direction Générale d’une situation de mal-être au travail pour lui-même ou pour un de
        ses collègues.
      </p>
      <p>
        TELEDOK ne demande pas à ses collaborateurs d’utiliser les outils informatiques et les téléphones portables mis à leur disposition
        permettant de travailler à distance (smartphone, connexion à distance, etc.) pendant les jours et heures de repos, sauf dans les
        situations d’astreintes lesquelles font l’objet de règles particulières et ne concernent que certaines catégories de salariés. Le
        collaborateur, via l’appareil mis à sa disposition par TELEDOK, n’a aucune obligation de répondre à un e-mail pendant ses jours de
        repos, sauf événement urgent et exceptionnel.
      </p>
      <p>
        De même TELEDOK est attentive à ne pas confier des responsabilités à une personne qui ne serait pas en mesure de les assumer, que
        ce soit en termes de compétences, de moyens et/ou d’autorité.
      </p>
      <h3>2.2 Harcèlement et violence au travail</h3>
      <p>TELEDOK veille au respect des droits de ses collaborateurs.</p>
      <p>
        TELEDOK ne tolère aucune discrimination, de quelque nature que ce soit, dans les relations de travail et plus particulièrement dans
        les domaines du recrutement et de l’évolution professionnelle de ses collaborateurs.
      </p>
      <p>
        TELEDOK interdit par ailleurs toute conduite constitutive de harcèlement sexuel ou moral et se comporte à l’égard de ses
        collaborateurs avec dignité dans le respect de leur vie privée.
      </p>
      <p>
        L’autorité hiérarchique a pour seul objet d’assurer le bon fonctionnement de la Société et tout comportement de nature à créer un
        environnement de travail intimidant, hostile ou offensant est prohibé.
      </p>
      <p>
        Les dispositions du Code du travail applicables en matière de harcèlement sexuel et de harcèlement moral sont écrites in extenso dans
        le règlement intérieur de la Société.
      </p>
      <h3>2.3 Egalité des chances</h3>
      <p>
        TELEDOK s’engage à appliquer une politique de ressources humaines identique pour l’ensemble de ses collaborateurs, équitable et
        conforme aux lois.
      </p>
      <p>
        TELEDOK réaffirme sa volonté de contribuer au développement professionnel de ses collaborateurs et de lutter contre toute forme de
        discrimination.
      </p>
      <p>
        Tous les collaborateurs s’engagent à s’abstenir scrupuleusement de pratiquer toute discrimination vis-à-vis des collaborateurs,
        clients, fournisseurs ou partenaires de TELEDOK.
      </p>
      <p>
        TELEDOK ne tolère aucune discrimination de quelque nature que ce soit (morale, politique, religieuse, sexuelle ou liée à l’âge, au
        handicap, etc.).
      </p>
      <p>
        Ainsi aucun collaborateur ne peut être sanctionné en raison de son origine, de son sexe, de ses mœurs, de son orientation ou
        identité sexuelle, de son âge, de sa situation de famille ou de sa grossesse, de ses caractéristiques génétiques, de son
        appartenance ou de sa non appartenance, vraie ou supposée, à une ethnie, une nation ou une race, de ses opinions politiques, de ses
        activités syndicales ou mutualistes, de l’exercice normal du droit de grève, ou de la procédure d’alerte prévue à la présente Charte
        Ethique, de ses convictions religieuses, de son apparence physique, de son nom de famille ou en raison de son état de santé ou de son
        handicap.
      </p>

      <h2 id="commercial">3. Ethique dans les relations commerciales</h2>
      <h3>3.1 Respect des lois et du droit de la concurrence</h3>
      <p>
        TELEDOK et ses collaborateurs s’engagent à respecter en toutes circonstances toutes les lois applicables et les réglementations de
        tous les pays dans lesquels la Société a une activité.
      </p>
      <p>
        Dans le cadre de son métier, chaque collaborateur doit donc s’informer des lois et règlements applicables à son activité et les
        respecter scrupuleusement.
      </p>
      <p>
        Chaque collaborateur se doit ainsi d’acquérir une connaissance juridique minimale, et en cas de doute de prendre conseil auprès de
        la Direction Générale de TELEDOK.
      </p>
      <p>
        TELEDOK respecte les règles de la libre concurrence et condamne toute entente entre concurrents, tout abus de position dominante.
      </p>
      <p>
        A ce titre, en France, il est fait une stricte application des dispositions du livre IV du Code de commerce relatives à la liberté
        des prix et à la concurrence.
      </p>
      <p>Notamment, TELEDOK respecte les règles spécifiques qui régissent les marchés publics et les relations avec les collectivités publiques.</p>
      <p>
        TELEDOK interdit par conséquent à ses collaborateurs d’échanger des informations sensibles avec des concurrents ainsi que de donner
        des informations sensibles sur ses clients à d’autres clients.
      </p>
      <p>En application des règles susvisées, les collaborateurs s’abstiendront de toute conduite qui enfreindrait le droit de la concurrence.</p>
      <p>De telles conduites recouvrent ainsi, de façon non exhaustive, les situations suivantes :</p>
      <ul>
        <li>La fixation des prix ou discussion de prix entre concurrents, de façon directe ou indirecte, est strictement interdite.</li>
        <li>
          Il est également interdit de s’entendre entre concurrents sur le partage du marché que ce soit au niveau géographique, au niveau
          des produits ou de la clientèle ou sur un pacte de non-agression.
        </li>
        <li>
          Il est interdit de comparer des services TELEDOK avec des services similaires de la concurrence lors de campagnes publicitaires ou
          promotionnelles si cette comparaison ne s’appuie pas sur des études ou des données objectives et réelles.
        </li>
      </ul>
      <p>Il est rappelé que le non-respect des dispositions susvisées est sanctionné pénalement, notamment par de lourdes amendes.</p>
      <h3>3.2 Procédure d’achat - Relation avec les fournisseurs</h3>
      <p>
        Tous les achats de biens et services pour le compte de TELEDOK doivent être réalisés conformément aux procédures de TELEDOK
        applicables.
      </p>
      <p>
        Ainsi la sélection des fournisseurs est opérée en fonction de leurs performances, appréciées sur la base de critères objectifs, tels
        que le prix, la qualité, les délais de livraison, le service, ou encore la réputation ainsi que sur des critères de RSE.
      </p>
      <p>Ainsi il sera demandé au fournisseur de :</p>
      <ul>
        <li>
          Respecter la réglementation en vigueur dans le domaine de la sécurité, de l’hygiène et de l’environnement pour garantir la
          protection de son personnel, et la qualité de la conformité des produits ou services qu’il fournit.
        </li>
        <li>
          Respecter les principes fondamentaux de la Convention de l’Organisation Internationale du travail en n’ayant pas recours, entre
          autres, au travail des enfants ou au travail forcé et en assurant une égalité de traitement et des chances à l’ensemble de son
          personnel.
        </li>
        <li>Informer TELEDOK en cas de conflit d’intérêts qui pourrait affecter la relation contractuelle avant d’accepter toute mission ou contrat.</li>
        <li>Respecter les règles relatives à l’interdiction de toute forme de corruption, active ou passive.</li>
      </ul>
      <p>
        Les collaborateurs impliqués dans les activités globales d’achat ont la responsabilité de se comporter de façon juste, équitable et
        honnête avec les fournisseurs.
      </p>
      <p>
        Lors des contacts avec les fournisseurs, les collaborateurs représentent TELEDOK et se doivent de refléter et représenter ses
        intérêts et ses besoins.
      </p>
      <p>L’attention est attirée sur l’impérieuse nécessité de respecter scrupuleusement les droits et obligations s’attachant à la sous-traitance.</p>
      <h3>3.3 Offre et réception de cadeaux – invitations</h3>
      <p>
        Les collaborateurs de TELEDOK s’engagent à ne jamais solliciter les présents et invitations offerts, à titre personnel ou à titre
        professionnel, par des fournisseurs, des entreprises, des clients ou des intermédiaires avec lesquels TELEDOK est en relation.
      </p>
      <p>
        Tout collaborateur doit refuser d’un client, d’un fournisseur, d’un prestataire ou d’un tiers tout cadeau ou avantage qui serait de
        nature à compromettre son indépendance de jugement ou qui pourrait laisser penser qu’il pourrait avoir été influencé dans sa prise
        de décision.
      </p>
      <p>Chez TELEDOK, seuls les cadeaux d’une valeur symbolique peuvent être acceptés par les collaborateurs :</p>
      <ul>
        <li>Les invitations à un repas ou à une manifestation culturelle ou sportive doivent avoir un caractère très exceptionnel.</li>
        <li>Les cadeaux doivent aussi être très exceptionnels et d’une valeur limitée à 75 euros.</li>
      </ul>
      <p>
        Dans tous les cas, la hiérarchie doit être informée immédiatement de toute sollicitation ou offre d’avantages particuliers dont un
        collaborateur est l’objet.
      </p>
      <p>
        Ces règles visent à éviter que les collaborateurs de TELEDOK prennent des décisions sur des critères autres que sur des critères
        objectifs tels que la performance, la qualité ou la compétitivité.
      </p>
      <p>
        Les invitations faites par les collaborateurs de TELEDOK auprès d’une de ses parties prenantes doivent suivre la même philosophie.
        Il est important de préciser qu’elles doivent dans tous les cas être raisonnables et être adaptées au niveau de la fonction et de
        la personne externe invitée. Elles doivent respecter les normes internes, la première de celles-ci étant l’autorisation donnée par le
        supérieur hiérarchique. Enfin elles doivent être enregistrées, notées et justifiées.
      </p>
      <p>
        Nous vous renvoyons également sur ce sujet à la lecture du <a href="#anti-corruption">Code Anti-Corruption</a> de la Société.
      </p>
      <h3>3.4 Ristourne – Rabais – Remise</h3>
      <p>
        Toute remise, rabais ou ristourne doit être le reflet d’une réelle contrepartie commerciale et doit apparaitre explicitement sur les
        factures correspondantes.
      </p>
      <h3>3.5 Corruption active et passive</h3>
      <p>
        La négociation et l’exécution des contrats passés par TELEDOK ne doivent pas donner lieu à des comportements ou faits pouvant être
        qualifiés de corruption active ou passive, ou de complicité de trafic d’influence ou de favoritisme.
      </p>
      <p>
        La corruption regroupe toutes formes de conduites qui ne seraient pas conformes à la loi ou à l’éthique. Le versement de pots de vin
        ou paiements illicites est une forme de corruption qui consiste à promettre, offrir, donner, accepter ou solliciter directement ou
        indirectement un avantage illégal et indu.
      </p>
      <p>
        La corruption active consiste à proposer à un agent public, un fonctionnaire, ou toute personne morale ou physique, de l’argent, des
        cadeaux, des services, ou tout autre avantage indu, afin d’inciter ces personnes à accomplir ou à ne pas accomplir un acte dans le
        cadre de leur fonction ou qui pourrait être facilité de par leur position.
      </p>
      <p>
        La corruption passive consiste pour ces mêmes personnes ou sociétés à solliciter de l’argent, des cadeaux, des services, ou tout
        autre avantage indu, afin d’accomplir ou à ne pas accomplir un acte dans le cadre de leur fonction ou qui pourrait être facilité de
        par leur position.
      </p>
      <p>Sont ici concernés les fournisseurs, les clients, les concurrents, les représentants de l’autorité publique, les partis politiques, etc.</p>
      <p>
        Ainsi, TELEDOK interdit formellement à ses collaborateurs d’offrir ou de recevoir directement ou indirectement des sommes illicites,
        des remises ou des avantages en nature dans le but d’influencer une négociation ou d’obtenir un traitement de faveur. De même, il
        est interdit de dénaturer l’objet d’un contrat (facture de jours de location en lieu et place de négoce par exemple).
      </p>
      <p>Enfin, il est rappelé que les paiements ou encaissements de TELEDOK sont notamment encadrés par des règles internes.</p>
      <p>
        Le <a href="#anti-corruption">Code Anti-Corruption</a> de TELEDOK, qui définit et illustre les différents types de comportements à
        proscrire comme étant susceptibles de caractériser des faits de corruption ou de trafic d’influence, est annexé à la présente Charte
        Ethique.
      </p>
      <h3>3.6 Litiges avec Clients / Fournisseurs</h3>
      <p>
        En cas de litige avec un fournisseur, des règles d’entreprise sont en place pour l’informer de la nature de la contestation, qu’elle
        soit relative à la qualité des services, leur quantité ou leur prix.
      </p>
      <p>
        Au-delà des procédures internes, chaque fournisseur doit savoir que TELEDOK s’engage à lui offrir un droit de recours auprès de la
        Direction Générale de la Société.
      </p>
      <h3>3.7 Conflits d’intérêts</h3>
      <p>
        L’intégrité et la loyauté doivent prévaloir dans les relations professionnelles de tous les collaborateurs à l’intérieur et à
        l’extérieur de TELEDOK.
      </p>
      <p>
        Un collaborateur peut toutefois se trouver dans une situation de conflits d’intérêts s’il a un intérêt personnel direct ou indirect
        dans une prise de décision qui doit normalement se faire objectivement.
      </p>
      <p>
        Sont notamment visées les situations suivantes dans la mesure où elles peuvent placer le collaborateur concerné dans une situation
        de conflit d’intérêts :
      </p>
      <ul>
        <li>
          Toute fourniture de prestations en qualité de salarié, consultant, administrateur, mandataire ou dirigeant à des sociétés clientes
          ou fournisseurs de TELEDOK.
        </li>
        <li>Toute relation d’affaires initiée avec ces mêmes sociétés tierces dans le cadre des activités professionnelles du collaborateur.</li>
        <li>
          Toute prise d’intérêts dans ces mêmes sociétés tierces, à l’exception de l’acquisition de titres admis aux négociations sur un
          marché réglementé ou équivalent dans le respect des règles relatives à la prévention des délits et manquements d’initiés.
        </li>
        <li>
          Toute relation d’affaires avec une ou plusieurs personnes morales dans laquelle le collaborateur ou une personne qui lui est
          étroitement liée exerce une fonction ou détient un intérêt (personnel, capitalistique, etc.) quelconque.
        </li>
        <li>
          Toute offre de cadeaux ou autre avantage effectuée par ces mêmes sociétés tierces dans le cadre des activités professionnelles du
          collaborateur.
        </li>
        <li>L’acceptation d’une fonction notamment d’administration ou de direction dans ces mêmes sociétés tierces.</li>
        <li>L’exercice d’une activité publique susceptible d’interférer avec les activités de TELEDOK.</li>
      </ul>
      <p>
        Afin de s’assurer que les décisions sont prises sans être influencées, les collaborateurs se doivent d’informer par écrit leur
        responsable hiérarchique de tout potentiel conflit d’intérêts avec TELEDOK, et notamment de :
      </p>
      <ul>
        <li>
          Toute relation commerciale avec une personne qui est un parent ou un proche, ou avec une société contrôlée ou dirigée par un parent
          ou un proche ;
        </li>
        <li>Toute relation contractuelle, tout mandat ou toute participation dans une société concurrente, fournisseur ou cliente de TELEDOK ; et</li>
        <li>De façon générale, tout intérêt personnel en contradiction possible ou certaine avec ceux de TELEDOK.</li>
      </ul>
      <p>
        TELEDOK porte une attention particulière à l’emploi d’anciens agents publics ou titulaires de mandats électifs lorsque les activités
        ou l’emploi concerné sont directement ou indirectement liés :
      </p>
      <ul>
        <li>aux fonctions assumés par ces agents ou élus pendant la durée de leur mandat, ou</li>
        <li>aux activités sur lesquelles ils exerçaient ou continuent de pouvoir exercer une influence importante.</li>
      </ul>
      <p>
        Ainsi TELEDOK veille à ce que le recours éventuel à d’anciens agents publics ou élus ne lui procure pas un avantage contraire à
        l’éthique et à une bonne pratique de la conduite de ses affaires.
      </p>
      <p>
        Au-delà de ces situations, eu égard à son devoir de loyauté vis-à-vis de TELEDOK, le collaborateur veille à ne pas exercer
        directement ou indirectement d’activité ou à ne pas tenir des propos qui le placeraient dans une situation de conflit d’intérêts
        avec la Société.
      </p>
      <p>
        Une des clauses du contrat de travail TELEDOK stipule d’ailleurs que chaque collaborateur s’interdit de travailler, à quelque titre
        que ce soit, pour lui-même ou par personne physique ou morale interposée, pour un tiers, et donc pour une entreprise concurrente de
        la Société. Il s’oblige à consacrer tous ses soins et tout son temps d’activité professionnelle à l’exercice de sa fonction. Le
        non-respect de cette clause serait susceptible de remettre en cause les relations contractuelles avec TELEDOK.
      </p>
      <h3>3.8 Lutte contre le blanchiment</h3>
      <p>
        Le blanchiment est le fait de favoriser par tout moyen, la justification mensongère de l’origine des biens ou des revenus de l’auteur
        d’un crime ou d’un délit ayant procuré à celui-ci un profit direct ou indirect. Constitue également un blanchiment le fait d’apporter
        un concours à une opération de placement, de dissimulation ou de conversion du produit direct ou indirect d’un crime ou d’un délit.
      </p>
      <p>Conformément à la réglementation, TELEDOK a mis en œuvre une obligation de vigilance. Ces mesures portent notamment sur :</p>
      <ul>
        <li>La vérification de l’identité du client/partenaire au début de la relation d’affaires ;</li>
        <li>L’obtention de pièces justificatives complémentaires ;</li>
        <li>La mise en œuvre des mesures de vérification et de certification de documents.</li>
      </ul>

      <h2 id="actifs">4. Protection et utilisation conforme des actifs de TELEDOK</h2>
      <h3>4.1 Propriété Intellectuelle</h3>
      <p>
        Tous les documents ou informations qui relèvent de la propriété intellectuelle, industrielle et artistique, et/ou des savoir-faire
        qui font la force de TELEDOK doivent être protégés physiquement et légalement avec le plus grand soin.
      </p>
      <p>
        La protection physique inclut des mesures telles que les mots de passe pour le cryptage des données électroniques, les lieux de
        stockage fermés à clé pour les documentations papier, le traitement attentif des courriers électroniques ou papier, l’absence de
        discussions confidentielles dans les lieux publics.
      </p>
      <p>
        Il est strictement interdit à tous les collaborateurs de TELEDOK de s’approprier dans le cadre professionnel des informations en
        provenance de tiers qui peuvent être considérées comme confidentielles ou d’utiliser sans autorisation, transgresser ou plagier tout
        droit de propriété intellectuelle d’un tiers (incluant les brevets, les <em>copyrights</em>, les marques déposées ou les secrets
        commerciaux). Chacun s’interdit également d’effectuer des copies illégales des logiciels et des données utilisés par TELEDOK ou de
        procéder à une utilisation non autorisée desdits logiciels.
      </p>
      <h3>4.2 Ressources de TELEDOK</h3>
      <p>
        Les actifs de TELEDOK, matériels comme immatériels, doivent être préservés et ne sauraient être utilisés qu’à des fins
        professionnelles dans le respect d’un principe général d’économie, pour des motifs licites, non frauduleux et en conformité avec les
        intérêts de TELEDOK et les autorisations accordées. Dans ce cadre, chaque collaborateur doit agir avec discernement et mesure.
      </p>
      <h3>4.3 Protection de l’image de TELEDOK – Utilisation des moyens de communication - Confidentialité – Absence de dénigrement</h3>
      <p>La qualité de l’image institutionnelle de TELEDOK ainsi que sa réputation et celle de ses produits sont essentielles.</p>
      <p>
        La confidentialité et la discrétion imposent en premier lieu au collaborateur de ne pas chercher à connaître et à obtenir des
        informations qui sont hors de son périmètre de responsabilité.
      </p>
      <p>
        Dans le cadre de la sphère personnelle comme professionnelle, il est rappelé qu’il est interdit de tenir des propos diffamatoires, de
        procéder à des actes de dénigrement ou de divulguer des informations confidentielles.
      </p>
      <p>
        Les systèmes de communication sont la propriété de TELEDOK et sont utilisés à des fins professionnelles. Leur utilisation est
        encadrée par les dispositions d’une charte informatique.
      </p>
      <p>
        Ainsi le collaborateur doit veiller au respect des lois relatives au droit de l’image et au droit d’auteur. Le collaborateur ne doit
        jamais publier des photos de ses collègues de travail, de clients ou de tiers sans autorisation préalable. Il en est de même pour
        l’utilisation des logos ou des marques de TELEDOK.
      </p>
      <p>
        Ainsi le collaborateur n’est pas autorisé à ouvrir sous son nom ou un pseudonyme, un compte au nom de TELEDOK et d’y utiliser des
        visuels de la Société (logo, élément graphique, etc.).
      </p>
      <p>
        Par principe, il est interdit de s’exprimer sur les réseaux sociaux avec son adresse e-mail professionnelle, en dehors des services
        concernés.
      </p>
      <p>
        Seuls ont vocation à être consultés les sites Internet présentant un lien direct et nécessaire avec l’activité professionnelle, et
        présentant une utilité au regard des fonctions exercées ou des missions à mener.
      </p>
      <p>
        Par dérogation au principe de l’utilisation professionnelle, une consultation ponctuelle et dans les limites du raisonnable, pour un
        motif personnel, des sites Internet dont le contenu n’est pas contraire à l’ordre public et aux bonnes mœurs est tolérée.
      </p>
      <p>Dans ce cas, le collaborateur ne doit pas :</p>
      <ul>
        <li>
          Participer à des forums de discussion ou à des blogs interactifs en s’identifiant avec une adresse Internet comprenant le nom de
          domaine de TELEDOK ;
        </li>
        <li>Créer des sites ou des pages personnelles en utilisant les moyens informatiques et de communication ;</li>
        <li>
          Laisser son adresse de messagerie professionnelle sur tout site dans le cadre d’une utilisation personnelle, le collaborateur devant
          employer son adresse de messagerie personnelle ; et
        </li>
        <li>Accéder à tous sites Internet susceptibles de présenter un danger pour la sécurité des moyens informatiques et de communication.</li>
      </ul>
      <p>
        Dans tous les cas, le collaborateur doit respecter en tous points la <strong>Charte informatique de TELEDOK.</strong>
      </p>
      <h3>4.3.1 Divulgation de l’information</h3>
      <p>
        Chaque collaborateur ayant accès, dans le cadre de son travail, à des informations confidentielles, relatives ou non à TELEDOK,
        s’engage à ne pas les divulguer à des tiers ou à d’autres membres de TELEDOK non habilités à en prendre connaissance.
      </p>
      <p>
        Chaque collaborateur veille en permanence à l’exactitude de l’information fournie par ses soins et nécessaire à la bonne exécution du
        travail.
      </p>
      <p>De la même façon, il s’assure de la communication de cette information aux personnes intéressées et à elles seules.</p>
      <h3>4.3.2 Utilisation d’informations privilégiées</h3>
      <p>
        Les collaborateurs de TELEDOK ne peuvent faire usage du caractère privilégié des informations dont ils ont connaissance à des fins
        personnelles et, en particulier, pour acheter ou vendre tous titres de la société concernée ou prodiguer des conseils sur de tels
        titres.
      </p>
      <p>Il est interdit de porter à la connaissance de tiers, y compris les membres de la famille ou les amis, les informations privilégiées.</p>
      <p>
        A titre d’exemple, et sans que cela soit exhaustif, les informations suivantes doivent faire l’objet d’un traitement approprié car
        considérées comme privilégiées :
      </p>
      <ul>
        <li>Les projections de futurs résultats financiers ;</li>
        <li>Les résultats financiers dès lors qu’ils n’ont pas fait l’objet d’une publication officielle ;</li>
        <li>Les informations sur les biens ou services achetés, sur les fournisseurs sélectionnés et sur leurs prix d’achat ;</li>
        <li>Une opération de fusion, ou d’acquisition en cours ou à venir, une offre d’achat ou l’acquisition ou la vente d’actifs importants ;</li>
        <li>Un changement au sein du comité stratégique ou la direction de la Société ;</li>
        <li>Un litige, réel ou potentiel ;</li>
        <li>L’organigramme de la Société,</li>
        <li>Les listes des clients et prospects et les conditions tarifaires ; et</li>
        <li>Les évolutions concernant ou affectant les produits, les services ou les plans stratégiques de la Société.</li>
      </ul>
      <p>
        Enfin dans le cadre de la préservation de la propriété des clients, il est interdit de porter à la connaissance de tiers, y compris
        les membres de la famille ou les amis, toute information relative à ses moyens de paiement (numéro de comptes bancaires, chèques,
        etc.) ou à sa situation financière.
      </p>
      <h3>4.4 Comptes financiers et audits</h3>
      <h3>4.4.1 Respect des obligations comptables</h3>
      <p>
        Les collaborateurs doivent s’assurer que les livres et enregistrements comptables respectent les règles comptables de TELEDOK, les
        lois et les réglementations comptables applicables.
      </p>
      <p>Les comptes annuels sont établis suivant les principes, normes et méthodes comptables actuellement en vigueur en France.</p>
      <p>
        La présentation des résultats issus de la comptabilité et les techniques d’informations se fondent sur des principes comptables dont
        le respect est un des éléments de la sincérité des comptes et dont découlent l’évaluation des éléments du bilan et la détermination
        du résultat de chaque exercice :
      </p>
      <ul>
        <li>Continuité d’exploitation ;</li>
        <li>Indépendance des exercices ;</li>
        <li>Permanence des méthodes comptables d’un exercice à l’autre ;</li>
        <li>Principe de rattachement des charges et des produits par exercice.</li>
      </ul>
      <p>
        Les livres et enregistrements comptables doivent être correctement tenus à jour afin de s’assurer qu’ils reflètent fidèlement la
        nature des transactions.
      </p>
      <h3>4.4.2 Rapports comptables et financiers</h3>
      <p>Les collaborateurs doivent présenter des états financiers complets, justes, précis, à jour.</p>
      <p>
        Chaque collaborateur doit dans le cadre de son poste faire les estimations et analyses nécessaires avec justesse afin que les actifs
        (immobilisations, créances clients…) et passifs (dettes, provisions, etc.) soient correctement évalués.
      </p>
      <p>Il est ainsi strictement interdit de :</p>
      <ul>
        <li>
          Approuver ou effectuer un paiement dont une partie de ce paiement servirait à d’autre fins que celles décrites dans le document
          justificatif, ou si cette approbation dépasse son autorité ;
        </li>
        <li>
          Frauder dans la préparation, l’évaluation, l’examen ou l’audit de tout document financier, comme la dissimulation ou la
          falsification de données confiées à des auditeurs internes ou externes ou faire de fausses présentations des comptes ;
        </li>
        <li>
          Frauder dans l’enregistrement et la tenue des dossiers financiers de la Société, notamment dans l’enregistrement délibéré d’actif ou
          de passif en vue d’améliorer fictivement les résultats de la Société ; et de
        </li>
        <li>Négliger de se conformer aux obligations légales et fiscales applicables.</li>
      </ul>
      <p>
        Tout collaborateur, à son niveau, est responsable de l’exactitude des informations financières qui sont communiquées en interne ou
        en externe et de la conservation des documents supports nécessaires.
      </p>
      <p>
        Il est également impératif de s’assurer que l’autorisation exacte est obtenue pour toute transaction. Il convient de s’assurer que
        l’autorisation pour approuver la transaction émane d’une personne titulaire de ce droit et veiller à ce que les approbations
        appropriées, signataires et procédures d’exécution soient suivies dans toute transaction réalisée. En cas de doute, le collaborateur
        doit se rapprocher de sa hiérarchie directe.
      </p>
      <p>
        Il est rappelé que TELEDOK peut être l’objet de tentative de fraude et escroquerie de la part de personnes tierces à l’entreprise. Il
        est demandé à tous une grande vigilance sur ce sujet, notamment en s’assurant avant tout transfert de fonds vers l’extérieur que
        l’opération s’inscrit bien dans le cadre d’une opération de TELEDOK autorisée par une personne titulaire d’un pouvoir d’engagement
        de dépense.
      </p>
      <h3>4.4.3 Publication financière</h3>
      <p>
        TELEDOK s’engage à produire une information financière exhaustive et transparente qui reproduit fidèlement dans ses comptes
        l’intégralité de ses opérations. En particulier, tous les actifs et passifs sont présentés dans les états financiers, conformément
        aux principes comptables suivis par TELEDOK.
      </p>

      <h2 id="suivi">5. Communication, Contrôle et Suivi de l’application de la Charte Ethique</h2>
      <p>
        Les engagements de pratiques et de comportements qui sont indiqués dans la présente Charte Ethique seront communiqués autant en
        interne qu’en externe auprès des parties prenantes de TELEDOK.
      </p>
      <p>
        Ils devront être respectés par chaque collaborateur. D’un côté, il sera demandé à chaque collaborateur, actuel et nouveau, d’adhérer à
        la présente Charte Ethique. D’un autre côté, ces engagements seront contrôlés et les écarts constatés seront corrigés, certains
        d’entre eux pouvant même être sanctionnés. Il est prévu qu’un Référent éthique soit prochainement nommé pour assurer la mise en
        œuvre de la Charte Ethique sur l’ensemble de ses volets et suivre son application.
      </p>
      <p>
        Dans sa mission, le Référent éthique devra aussi s’assurer que les procédures appliquées au sein de TELEDOK permettent bien de suivre
        les engagements de la présente Charte Ethique et prévenir les risques évalués : clauses anticorruption dans les contrats
        commerciaux, vigilance vis-à-vis des parties prenantes, diffusion de fiches pratiques thématiques, par exemple.
      </p>
      <p>
        Sa mission sera aussi de répondre aux questions et interrogations du personnel sur des situations en lien avec les engagements pris
        dans cette charte. Les échanges auront lieu dans un total respect de la confidentialité du collaborateur.
      </p>
      <p>
        Sa mission sera enfin de pouvoir alerter la Direction Générale de la Société à tout moment pour tout sujet relevant des engagements
        pris dans la présente charte Ethique.
      </p>
      <p>
        Pour toute question relative à l’application de la présente Charte Ethique, chaque collaborateur peut contacter son responsable
        hiérarchique qui pourra gérer la plupart des situations. Si tel n’est pas le cas, le collaborateur devra contacter le Référent éthique
        de TELEDOK / le Directeur Général de TELEDOK.
      </p>

      <h2 id="signalements">6. Signalements</h2>
      <p>
        TELEDOK établit une politique interne de recueil et de traitement des signalements, qui précise les conditions dans lesquelles tout
        collaborateur, ancien collaborateur, candidat à un emploi, collaborateur externe et occasionnel, cocontractant et sous-traitant, peut
        signaler ou divulguer des informations portant notamment sur un crime, un délit, une menace ou un préjudice pour l’intérêt général,
        une violation ou une tentative de dissimulation d’une violation de la loi ou du règlement, dès lors que ces informations ont été
        obtenues dans le cadre de son activité professionnelle ou, à défaut, lorsqu’il en a eu personnellement connaissance. Cette politique
        fait également état de la protection dont bénéficie l’auteur d’un signalement et des membres de son entourage.
      </p>
      <p>
        <strong>En premier lieu, il vous est demandé de contacter dans ce cadre :</strong>
      </p>
      <Referent />
      <p>Enfin pour conclure, il est important de rappeler que :</p>
      <ul>
        <li>
          Toute violation de la présente Charte Éthique pourra donner lieu à sanction disciplinaire. Ceci s’applique aussi à tout lanceur
          d’alerte qui a fait de fausses déclarations malicieusement ou à des fins personnelles ; et que
        </li>
        <li>
          La présente Charte Éthique est « vivante », c’est-à-dire qu’elle sera amenée à évoluer régulièrement notamment en fonction des
          situations que TELEDOK serait amenée à vivre avec l’ensemble de ses parties prenantes.
        </li>
      </ul>
      <p className="legal-sign">
        Fait à Saint-Cloud, le 5 novembre 2026
        <br />
        Le Président,
        <br />
        CAPITELLO GROUP SASU,
        <br />
        Représentée par son Président,
        <br />
        Monsieur Arnaud Molinié
      </p>

      <h2 id="anti-corruption">Annexe : Code Anti-Corruption TELEDOK</h2>
      <p>
        <em>Pour toute question relative au présent document, vous pouvez contacter la Direction Générale.</em>
      </p>
      <h3>Préambule</h3>
      <p>
        TELEDOK réprouve la corruption sous toutes ses formes et veille à ce que ses collaborateurs s’impliquent pour faire respecter ce
        principe. TELEDOK promeut une culture d’entreprise avec une <strong>tolérance zéro en matière de corruption</strong> sous toutes ses
        formes.
      </p>
      <p>
        Le Code Anti-Corruption fait partie de la Charte Ethique de TELEDOK et s’applique à <strong>l’ensemble des collaborateurs</strong>, y
        compris occasionnels, de TELEDOK et, de façon générale, à toute personne susceptible d’engager ou de représenter TELEDOK. Il
        rappelle, à l’aide d’explications et d’exemples, les <strong>comportements qui sont attendus</strong> en matière de lutte contre la
        corruption.
      </p>
      <p>
        Chaque collaborateur doit le lire attentivement, en comprendre les principes et les règles et <strong>faire preuve de discernement</strong>{' '}
        dans l’exercice de ses fonctions.
      </p>
      <p>
        Il est également attendu des partenaires commerciaux de TELEDOK qu’ils respectent les principes du Code Anti-Corruption et les
        promeuvent auprès de leurs propres partenaires commerciaux.
      </p>
      <p>
        Les activités de TELEDOK sont soumises au droit du pays dans lequel elles sont menées et également à certaines législations
        étrangères en raison de l’application extraterritoriale de celles-ci, telles que la loi américaine anticorruption US Foreign Corrupt
        Practices Act 1977 (FCPA) ou la loi britannique sur la corruption UK Bribery Act 2010 (UKBA).
      </p>
      <p>
        En cas de doute sur l’appréciation d’une situation à risque ou l’application d’une législation, chaque collaborateur est invité à se
        rapprocher de son <strong>supérieur hiérarchique</strong> ou de la <strong>Direction Générale de TELEDOK</strong> afin de vérifier les
        règles applicables et veiller à les respecter.
      </p>
      <p>
        Il est par ailleurs rappelé que TELEDOK a mis en place un <strong>dispositif de recueil et de traitement des signalements</strong> que
        chaque collaborateur et chaque partie prenante peut utiliser pour signaler des comportements contraires à la Charte Ethique et
        notamment au Code Anti-Corruption.
      </p>
      <p>
        <strong>En premier lieu, il vous est demandé de contacter dans ce cadre :</strong>
      </p>
      <Referent courriel="Courriel" />
      <p>
        Dans une démarche d’amélioration continue, le Code Anti-Corruption sera mis à jour sur la base des retours d’expérience et nouveaux
        risques identifiés.
      </p>

      <h3>1. Qu’est-ce que la corruption et le trafic d’influence ?</h3>
      <p>
        <u>La corruption active</u> est le fait d’offrir, de promettre ou de proposer directement ou indirectement un paiement ou un avantage
        à une personne publique ou privée en contrepartie d’une promesse, d’une renonciation ou d’un acte favorable.
      </p>
      <ul>
        <li>
          La corruption active, c’est donc <strong>le fait de corrompre</strong>.
        </li>
      </ul>
      <p>
        <u>La corruption passive</u> est le fait d’accepter ou de recevoir, directement ou indirectement, un paiement ou un avantage d’une
        personne publique ou privée en contrepartie d’une promesse, d’une renonciation ou d’un acte favorable.
      </p>
      <ul>
        <li>
          La corruption passive, c’est donc <strong>le fait d’être corrompu</strong>.
        </li>
      </ul>
      <p>
        La corruption, active ou passive, peut être réalisée <strong>sous différentes formes</strong> :
      </p>
      <ul>
        <li>
          <strong>Argent</strong> (espèces ou virement notamment) dont le moyen de paiement peut être fallacieux (fausse facture, commission
          d’intermédiaire, mécénat, sponsoring) ou dont le montant est excessif en regard de la prestation effectuée ;
        </li>
        <li>
          <strong>Avantage en nature</strong> : participation à des évènements, voyages, cadeaux, embauche d’un proche, octroi d’un marché ou
          d’un contrat, divulgation d’informations confidentielles, etc.
        </li>
      </ul>
      <p>
        <u>Le trafic d’influence</u> est le fait pour une personne de monnayer sa qualité ou son influence, réelle ou supposée, pour
        influencer une décision d’une autorité publique.
      </p>
      <ul>
        <li>
          Le trafic d’influence est donc une <strong>déclinaison de la corruption</strong> mais qui implique un trio de protagonistes : le
          bénéficiaire de la décision, l’intermédiaire qui monnaye son influence réelle ou supposée et le décideur public « cible » français
          ou étranger.
        </li>
      </ul>
      <p>
        Ces délits sont établis par la simple <strong>promesse d’un avantage à percevoir</strong>, peu importe que cet avantage soit
        finalement attribué. Cette promesse ou perspective d’un avantage est un élément important car si certains actes ne constituent pas
        en eux-mêmes de la corruption ou du trafic d’influence, ils le deviennent si une contrepartie est attendue.
      </p>
      <p>
        Les délits de corruption et de trafic d’influence peuvent donner lieu en France aux <strong>sanctions suivantes</strong> :
      </p>
      <ul>
        <li>
          Personne physique : <strong>5 à 10 ans d’emprisonnement</strong> et 500 000 € à 1 000 000 € dont le montant peut être porté au
          double du produit tiré de l’infraction ;
        </li>
        <li>
          Personne morale : <strong>2 500 000 € à 5 000 000 €</strong> dont le montant peut être porté au double du produit tiré de
          l’infraction, plus des peines complémentaires.
        </li>
      </ul>
      <p>Des sanctions équivalentes existent dans la plupart des pays.</p>
      <p>
        Outre ses sanctions, des faits de corruption ou de trafic d’influence auraient <strong>nécessairement un effet négatif sur la
        réputation de TELEDOK</strong> et, par voie de conséquence, sur ses activités.
      </p>

      <h3>2. Comportements attendus</h3>
      <p>
        <strong>A. Cadeaux et invitations</strong>
      </p>
      <p>
        Offrir des cadeaux et invitations est souvent considéré comme un acte de courtoisie permettant de renforcer les relations
        commerciales. La nature de ces pratiques varie considérablement selon le pays, ses coutumes, l’entreprise et la relation commerciale.
        Cependant, les règles en matière de lutte contre la corruption interdisent d’offrir un cadeau ou une invitation afin d’obtenir du
        bénéficiaire un avantage indu ou d’exercer de façon injustifiée une quelconque influence sur toute décision.
      </p>
      <p>
        Seuls les cadeaux d’une valeur symbolique peuvent être acceptés par les collaborateurs, ce qui signifie que les invitations à un
        repas ou à une manifestation culturelle ou sportive doivent avoir un <strong>caractère très exceptionnel</strong> tout comme les
        cadeaux dont le montant ne peut excéder <strong>75 euros</strong>. Chaque collaborateur doit respecter ces principes.
      </p>
      <p>
        Les invitations faites par les collaborateurs de TELEDOK auprès d’une de ses parties prenantes doivent suivre la même philosophie.
      </p>
      <p>
        Chaque collaborateur doit être attentif au contexte et au sens que peut prendre un cadeau ou un avantage, qui ne doit laisser
        supposer <strong>aucune attente de contrepartie</strong>.
      </p>
      <p>
        En outre, les <strong>catégories ou professions suivantes font l’objet de réglementations spécifiques</strong> et nous vous invitons
        à contacter votre direction générale en cas de questions.
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th scope="col">Catégorie / profession</th>
              <th scope="col">Fondement principal</th>
            </tr>
          </thead>
          <tbody>
            {REGLEMENTATIONS.map(([cat, fond]) => (
              <tr key={cat}>
                <th scope="row">{cat}</th>
                <td>{fond}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <u>Exemples</u> :
      </p>
      <p>
        Durant un appel d’offres lancé par TELEDOK, un collaborateur travaillant sur cet appel d’offres est invité dans un restaurant par l’un
        des prestataires qui candidate à l’appel d’offres.
      </p>
      <ul>
        <li>
          <em>Le collaborateur de TELEDOK doit décliner l’invitation afin de ne pas interférer avec la conduite de l’appel d’offres.</em>
        </li>
      </ul>
      <p>
        À l’occasion des fêtes de fin d’année, un collaborateur souhaite offrir un cadeau à une cliente pour la remercier de la bonne
        collaboration sur un dossier complexe.
      </p>
      <ul>
        <li>
          <em>
            Celui-ci doit vérifier que la réglementation du pays concerné autorise les cadeaux et, si c’est le cas, s’assurer que le montant
            du cadeau n’excède pas les seuils prévus par la Charte Ethique. Si la valeur du cadeau envisagé excède ces seuils, le
            collaborateur ne pourra pas offrir ce cadeau.
          </em>
        </li>
      </ul>
      <p>
        En cas de répétition de cadeaux ou d’invitations de la part d’une même personne ou entité, le seuil à retenir doit être apprécié en
        fonction du <strong>montant global</strong> correspondant aux cadeaux et invitations reçus ou offerts dans la même année.
      </p>
      <p>
        <strong>B. Conflit d’intérêts</strong>
      </p>
      <p>
        Une situation de conflit d’intérêts se présente lorsque les intérêts personnels d’un collaborateur sont susceptibles d’
        <strong>interférer dans une décision à prendre</strong> et de <strong>mettre en cause son impartialité</strong>, son indépendance ou
        sa neutralité, tant dans sa façon de traiter les opérations qui lui sont confiées que dans ses relations avec ses collègues ou ses
        collaborateurs.
      </p>
      <p>
        Comme le rappelle la Charte Ethique de TELEDOK, chaque collaborateur doit veiller à ne pas exercer directement ou indirectement
        d’activité ou à ne pas tenir des propos qui le placerait dans une situation de conflit d’intérêts avec l’entreprise.
      </p>
      <p>
        <u>Exemples</u> :
      </p>
      <p>Une situation de conflit d’intérêts peut notamment survenir lorsque :</p>
      <ul>
        <li>Un proche d’un acheteur ou prescripteur de TELEDOK travaille pour une entreprise qui soumissionne à un appel d’offres lancé par TELEDOK ; ou</li>
        <li>
          Un collaborateur ayant des responsabilités de manager, souhaite proposer l’embauche d’un membre de sa famille à un poste qu’il
          supervise directement ; ou encore lorsque
        </li>
        <li>
          Un collaborateur ou un proche de celui-ci détient une participation financière ou des responsabilités chez un fournisseur, un
          prestataire, un sous-traitant ou un partenaire de TELEDOK.
        </li>
      </ul>
      <div className="notice">
        <p>
          Chaque collaborateur, pour <strong>se protéger et protéger la Société</strong>, doit <strong>signaler tout conflit d’intérêts</strong>{' '}
          à son responsable hiérarchique qui décidera des mesures préventives à mettre en place (organiser une gouvernance collégiale de
          l’appel d’offres ou écarter l’acheteur des phases clés de sélection des fournisseurs ou de négociation commerciale, etc.).
        </p>
        <p style={{ marginTop: 10 }}>
          L’embauche d’un salarié apparenté à un collaborateur de TELEDOK n’est pas interdite en soi. Il convient toutefois de faire état de
          ce lien de parenté et d’éviter que le nouveau salarié soit sous la supervision directe d’un membre de sa famille.
        </p>
      </div>
      <p>
        <strong>C. Paiements en espèces</strong>
      </p>
      <p>
        S’agissant des paiements en espèces, les collaborateurs ne sont pas autorisés à les recevoir de clients, particuliers ou
        professionnels. Ils ne sont pas non plus autorisés à recevoir de pourboires.
      </p>
      <p>
        Pour les engagements de frais par les collaborateurs, il doit être fait application des <strong>Règles concernant les frais
        professionnels.</strong>
      </p>
      <p>
        <strong>D. Paiements de facilitation</strong>
      </p>
      <p>
        Les paiements de facilitation sont des paiements indus à un agent public effectués pour garantir la performance de tâches
        administratives routinières auxquelles l’auteur du paiement a légalement droit (passage en douane, obtention d’un visa, d’un permis de
        travail, par exemple).
      </p>
      <p>
        Les paiements de facilitation sont une forme de corruption et sont rigoureusement interdits par de nombreuses législations dont les
        législations française et britannique, cette dernière étant d’application extraterritoriale. Ces paiements sont{' '}
        <strong>strictement prohibés par TELEDOK</strong>.
      </p>
      <p>
        Par exception à ce principe, une tolérance est admise dès lors que l’intégrité physique de la personne est menacée (pour des raisons
        de sécurité ou de santé, par exemple).
      </p>
      <p>
        <strong>E. Prise de participation et fusions-acquisitions</strong>
      </p>
      <p>
        Les opérations de fusions-acquisitions présentent un risque pour la Société qui acquiert puisque, dans certaines conditions, elle
        peut être condamnée pénalement pour des faits commis par la société acquise. Il est donc nécessaire qu’une{' '}
        <strong>évaluation raisonnable au regard du risque présenté</strong> soit effectuée en matière de corruption et comportements
        assimilés.
      </p>
      <p>Ces opérations doivent donc donner lieu à :</p>
      <ul>
        <li>
          Un audit préalable permettant de déterminer, dans la limite des informations accessibles, l’implication éventuelle de la société
          cible et du vendeur dans des opérations de corruption ou de blanchiment ;
        </li>
        <li>La vérification de l’existence ou non d’un dispositif anti-corruption ;</li>
        <li>Une clause anti-corruption dans les contrats afférents à l’acquisition (SPA, etc.) ; et</li>
        <li>
          En cas de cession, des diligences appropriées concernant l’acquéreur pour prévenir les risques de corruption et de blanchiment
          d’argent.
        </li>
      </ul>
      <p>
        Ces diligences doivent être <strong>adaptées et proportionnées</strong> aux enjeux de l’opération et permettre de préparer
        l’intégration de la cible dans le dispositif anti-corruption de TELEDOK.
      </p>
      <p>
        <strong>F. Mécénat et sponsoring</strong>
      </p>
      <p>TELEDOK peut être ponctuellement sollicitée pour des opérations de mécénat ou de sponsoring.</p>
      <ul>
        <li>
          Le <strong>mécénat</strong> est un don apporté sans attendre en retour de contrepartie.
        </li>
        <li>
          Le <strong>sponsoring</strong> est accordé en contrepartie d’un bénéfice tel que la publicité qui en résulte, et s’inscrit dans un
          partage d’intérêts communs.
        </li>
      </ul>
      <p>
        Ces engagements réalisés au nom de TELEDOK doivent respecter les lois et règlements en vigueur et être{' '}
        <strong>approuvés selon les règles internes de TELEDOK</strong>.
      </p>
      <p>
        Pour toute opération de mécénat ou de sponsoring, chaque collaborateur doit vérifier que l’opération est conclue avec un tiers dont
        la réputation n’est pas susceptible d’être <strong>mise en cause d’un point de vue éthique</strong>, ne constitue pas un{' '}
        <strong>conflit d’intérêts</strong> ou ne procure pas un <strong>avantage indu</strong>.
      </p>
      <p>
        <u>Exemples</u> :
      </p>
      <p>
        Une association sportive au profit de laquelle un accord de sponsoring a été conclu demande à ce qu’une partie du montant du
        sponsoring soit versée en espèces.
      </p>
      <ul>
        <li>
          <em>
            Cette demande doit être refusée. Les opérations de marketing doivent être menées en toute transparence ce qui implique notamment
            un paiement traçable.
          </em>
        </li>
      </ul>
      <p>Le dirigeant d’une association sportive que TELEDOK envisage de sponsoriser est un client de TELEDOK.</p>
      <ul>
        <li>
          <em>
            Dans cette situation, il convient de s’assurer que l’opération de sponsoring présente un intérêt marketing, y compris local, en
            termes d’exposition de la marque TELEDOK, de sa notoriété, en tenant compte également du montant versé.
          </em>
        </li>
      </ul>
    </LegalPage>
  )
}
