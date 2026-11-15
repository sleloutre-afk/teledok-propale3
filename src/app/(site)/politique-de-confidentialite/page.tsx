import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { pageMetadata } from '@/lib/seo'

// Politique de protection des données personnelles établie par l'avocat de Teledok (version du 5 novembre 2026).
// Reprise fidèle ; seules la typographie, les tableaux et les liens sont propres au site.

export const metadata: Metadata = pageMetadata(
  '/politique-de-confidentialite',
  'Politique de protection des données personnelles | Teledok',
  'Comment Teledok collecte et traite vos données personnelles : finalités, bases juridiques, durées de conservation, droits, cookies.',
)

const sommaire = [
  { id: 'sources', label: '1. Sources des données' },
  { id: 'finalites', label: '2. Finalités et fondements' },
  { id: 'donnees', label: '3. Données concernées' },
  { id: 'destinataires', label: '4. Destinataires' },
  { id: 'mineurs', label: '5. Enfants mineurs' },
  { id: 'sensibles', label: '6. Données sensibles' },
  { id: 'tiers', label: '7. Communication à des tiers' },
  { id: 'conservation', label: '8. Durées de conservation' },
  { id: 'transfert', label: '9. Transferts hors UE' },
  { id: 'droits', label: '10. Vos droits' },
  { id: 'securite', label: '11. Sécurité' },
  { id: 'conflits', label: '12. Résolution des conflits' },
  { id: 'contact', label: '13. Contact' },
  { id: 'cookies', label: '14. Cookies' },
  { id: 'definitions', label: '15. Définitions' },
]

const Mail = ({ to }: { to: string }) => <a href={`mailto:${to}`}>{to}</a>
const Ext = ({ href, children }: { href: string; children: string }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

type Ligne = [string, string, string?]
const FINALITES: { groupe: string; lignes: Ligne[] }[] = [
  {
    groupe: 'Clients et prospects',
    lignes: [
      [
        'Demandes d’information, offres commerciales, appels d’offres',
        'Intérêt légitime',
        'Répondre aux demandes et développer l’activité commerciale de TELEDOK (relations entre professionnels)',
      ],
      ['Exécution des commandes, devis, factures, assistance et suivi technique', 'Exécution du contrat', '—'],
      [
        'Enquêtes de satisfaction, audits qualité, amélioration des services',
        'Intérêt légitime (ou consentement selon le mode de collecte)',
        'Mesurer et améliorer la qualité des services',
      ],
      [
        'Promotion des services, invitations à des événements et salons',
        'Intérêt légitime (prospection auprès de professionnels). Consentement pour la prospection électronique auprès de particuliers non clients.',
        'Promouvoir les services auprès de clients et de prospects professionnels',
      ],
    ],
  },
  {
    groupe: 'Fournisseurs, prestataires, sous-traitants, professionnels de santé intervenants',
    lignes: [
      [
        'Appels d’offres ; suivi des relations contractuelles',
        'Intérêt légitime pour les appels d’offres ; exécution du contrat',
        'Assurer la bonne gestion des relations',
      ],
    ],
  },
  {
    groupe: 'Rendez-vous et téléconsultations',
    lignes: [['Planification des rendez-vous', 'Intérêt légitime', 'Organiser les plannings']],
  },
  {
    groupe: 'Candidats et personnel',
    lignes: [
      [
        'Gestion des candidatures',
        'Mesures précontractuelles (réponse à une offre) ; intérêt légitime (candidatures spontanées, vivier)',
        'Recruter des collaborateurs',
      ],
      [
        'Gestion RH des salariés, stagiaires, alternants et mandataires sociaux',
        'Exécution du contrat de travail ; obligation légale (paie, déclarations sociales, registre du personnel)',
        '—',
      ],
    ],
  },
  {
    groupe: 'Sécurité et site internet',
    lignes: [
      [
        'Sécurité des locaux (registre des visites, vidéosurveillance) et des systèmes',
        'Intérêt légitime',
        'Protéger les personnes, les biens et les systèmes d’information',
      ],
      [
        'Cookies et traceurs non essentiels (mesure d’audience, personnalisation)',
        'Consentement (cookies strictement nécessaires : dispensés)',
        '—',
      ],
    ],
  },
  {
    groupe: 'Obligations légales, gestion et contentieux',
    lignes: [
      ['Comptabilité, fiscalité, obligations déclaratives et autres obligations légales', 'Obligation légale', '—'],
      ['Gestion financière, juridique et audit', 'Intérêt légitime', 'Piloter et sécuriser la gestion de la société'],
      ['Litiges et procédures judiciaires', 'Intérêt légitime', 'Constater, exercer ou défendre ses droits en justice'],
    ],
  },
]

const DUREES: { groupe: string; lignes: Ligne[] }[] = [
  {
    groupe: 'Clients, prospects, fournisseurs',
    lignes: [
      ['Client : exécution du contrat', 'Durée de la relation contractuelle'],
      ['Client : archivage après le contrat (preuve)', 'Dans la limite du délai de prescription applicable (5 ans en droit commun)'],
      ['Comptabilité, factures', '10 ans (obligation comptable)'],
      ['Prospects non clients', '3 ans à compter de la collecte ou du dernier contact émanant du prospect'],
      [
        'Fournisseurs, prestataires, sous-traitants, professionnels de santé',
        'Durée de la relation, puis prescription applicable et obligations comptables',
      ],
    ],
  },
  {
    groupe: 'Candidats',
    lignes: [
      ['Candidat non retenu', 'Archivage probatoire de 5 ans à compter de la date où le poste a été pourvu'],
      ['CVthèque (vivier)', 'Jusqu’à 2 ans après le dernier contact'],
    ],
  },
  {
    groupe: 'Salariés, stagiaires, alternants',
    lignes: [
      ['Dossier professionnel', 'Durée de la relation de travail, puis archivage limité à la prescription applicable'],
      ['Registre unique du personnel', 'Présence du salarié, puis 5 ans après son départ'],
      ['Paie et DSN', 'Bulletins : 5 ans ; éléments de paie et DSN : 6 ans'],
    ],
  },
  {
    groupe: 'Locaux et sécurité informatique',
    lignes: [
      ['Vidéosurveillance', '1 mois maximum'],
      ['Contrôle d’accès par badge', 'Journalisation : 3 mois'],
      ['Traces informatiques (sécurité)', '6 mois à 1 an'],
    ],
  },
  {
    groupe: 'Site internet et cookies',
    lignes: [
      ['Durée de vie des cookies de mesure d’audience', '13 mois maximum'],
      ['Données collectées par ces cookies', '25 mois maximum'],
    ],
  },
]

function Tableau({ entetes, groupes }: { entetes: string[]; groupes: { groupe: string; lignes: Ligne[] }[] }) {
  return (
    <div className="tbl">
      <table>
        <thead>
          <tr>
            {entetes.map((e) => (
              <th key={e} scope="col">
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupes.map((g) => [
            <tr key={g.groupe}>
              <th colSpan={entetes.length} scope="colgroup">
                {g.groupe}
              </th>
            </tr>,
            ...g.lignes.map((l) => (
              <tr key={g.groupe + l[0]}>
                <th scope="row">{l[0]}</th>
                {l.slice(1, entetes.length).map((c, i) => (
                  <td key={i}>{c}</td>
                ))}
              </tr>
            )),
          ])}
        </tbody>
      </table>
    </div>
  )
}

export default function Page() {
  return (
    <LegalPage title="Politique de protection des données personnelles" version="5 novembre 2026" sommaire={sommaire}>
      <p style={{ marginTop: 32 }}>
        TELEDOK, Société par Actions Simplifiée à associé Unique (SASU), immatriculée au registre du commerce et des sociétés de NANTERRE
        sous le numéro 843 204 678, sise 351 Les Bureaux de la Colline, 92210 SAINT-CLOUD, FRANCE (ci-après « <strong>TELEDOK</strong> »)
        procède au Traitement de données à caractère personnel dans le cadre de son activité. Les termes commençant par une majuscule dans
        cette Politique sont définis à l’<a href="#definitions">article 15</a> « DEFINITIONS » ci-après.
      </p>
      <ul>
        <li>
          La présente politique (la « <strong>Politique</strong> ») de protection des Données Personnelles décrit la manière dont TELEDOK
          collecte, utilise et Traite vos Données Personnelles, en qualité de Responsable de Traitement, en conformité avec la
          réglementation applicable. La Politique s’applique en France.
        </li>
        <li>
          La Politique s’applique aux Données Personnelles que nous sommes amenés à collecter auprès de nos clients, de nos fournisseurs,
          de nos prestataires de services, de nos professionnels de santé intervenants et de nos Sous-Traitants dans le cadre de
          l’exécution de tous types de contrats. Elle s’applique également aux Données Personnelles des utilisateurs de notre site Internet
          www.teledok.fr, des personnes qui souhaiteraient postuler à nos offres d’emploi, de nos salariés et plus largement de toutes
          autres personnes que nous sommes légitimement amenés à contacter dans le cadre de nos activités.
        </li>
        <li>
          TELEDOK peut être amenée à modifier ou à actualiser la Politique selon ses activités et pour prendre en compte les changements des
          lois en vigueur. Nous vous encourageons à la lire avec attention et à consulter régulièrement cette Politique pour vérifier les
          modifications que nous pourrions éventuellement y apporter.
        </li>
        <li>
          TELEDOK accorde de l’importance au respect de votre vie privée et nous nous engageons à protéger et à préserver vos droits
          relatifs à la confidentialité de vos Données Personnelles. En cas de désaccord sur certains aspects de la Politique, vous disposez
          de droits légaux qui vous sont indiqués aux <a href="#droits">articles 10</a>, <a href="#conflits">12</a> et{' '}
          <a href="#contact">13</a> ci-après.
        </li>
      </ul>

      <h2 id="sources">1. Sources des données personnelles collectées</h2>
      <p>Nous collectons des Données Personnelles vous concernant à partir des sources suivantes :</p>
      <ul>
        <li>
          <strong>les Données Personnelles que vous nous fournissez directement dans le cadre de notre relation</strong>, que celle-ci soit
          en cours ou relevant de la prospection (par exemple lorsque vous nous contactez par courriel, par téléphone ou par tout autre
          moyen, ou lorsque vous nous remettez votre carte de visite, ou encore lorsque vous venez dans nos locaux) ;
        </li>
        <li>
          <strong>les Données Personnelles issues de notre site Internet</strong> lorsque vous naviguez sur notre site Internet ou lorsque
          vous utilisez les fonctions et ressources disponibles sur notre site Internet ou accessibles via ce dernier ;
        </li>
        <li>
          <strong>les Données Personnelles relatives aux réservations de rendez-vous dans le cadre de nos services</strong> ;
        </li>
        <li>
          <strong>les Données Personnelles fournies par des tiers</strong> (par exemple une agence de notation ou un site de renseignement
          de type Infogreffe).
        </li>
      </ul>
      <p>
        <strong>Note à l’attention des visiteurs et utilisateurs de notre site Internet</strong> : l’utilisation de notre site Internet
        ainsi que les Données Personnelles qui sont communiquées par ses utilisateurs sont soumises aux dispositions de la Politique ainsi
        qu’à ses conditions d’utilisation.
      </p>

      <h2 id="finalites">2. Finalités des traitements de données personnelles et fondements juridiques</h2>
      <h3>a) Finalités des traitements de vos Données Personnelles</h3>
      <p>Nous Traitons vos Données Personnelles conformément aux finalités suivantes :</p>
      <ul>
        <li>Permettre à nos interlocuteurs de demander des informations sur TELEDOK et sur ses services ;</li>
        <li>Préparer et soumettre des offres commerciales, participer à des appels à candidatures ou à des appels d’offres ;</li>
        <li>
          Permettre le suivi des relations commerciales et contractuelles avec nos clients (envoi de devis, envoi de factures, exécution des
          commandes, assistance et suivi technique, gestion des litiges éventuels, etc.) ;
        </li>
        <li>
          Proposer à nos interlocuteurs ou à nos prospects de participer à des évènements organisés par TELEDOK dans le cadre de salons,
          séminaires ou manifestations professionnels ;
        </li>
        <li>
          Procéder à des appels à candidature ou à des appels d’offres et permettre le suivi des relations commerciales et contractuelles
          avec nos fournisseurs, nos prestataires de services, nos professionnels de santé intervenants et nos Sous-Traitants ;
        </li>
        <li>Nous acquitter de nos obligations contractuelles ;</li>
        <li>Réaliser des enquêtes de satisfaction clients ;</li>
        <li>Réaliser des opérations de promotion de nos services auprès de clients ou auprès de prospects ;</li>
        <li>Réaliser des audits qualité ;</li>
        <li>
          Gérer les candidatures spontanées ou adressées en réponse à des offres d’emploi et assurer la gestion des ressources humaines de
          nos salariés, stagiaires, alternants et mandataires sociaux ;
        </li>
        <li>
          Assurer la sécurité matérielle de nos locaux (incluant le registre des visites aux locaux et enregistrements de vidéosurveillance)
          et la sécurité électronique de nos systèmes ;
        </li>
        <li>Améliorer nos produits et nos services (identifier les problèmes, prévoir des améliorations, en créer de nouveaux) ;</li>
        <li>Pour la gestion comptable, financière, juridique et l’audit ;</li>
        <li>Dans le cadre de procédures judiciaires (constatation, exercice ou défense de droits en justice) ;</li>
        <li>Organiser les plannings des rendez-vous pour les téléconsultations ou autres rendez-vous ;</li>
        <li>Nous conformer à nos obligations légales.</li>
      </ul>
      <h3>b) Fondements juridiques</h3>
      <p>
        Afin de Traiter vos Données Personnelles conformément aux finalités énoncées ci-dessus, nous nous appuyons sur un ou plusieurs des
        fondements juridiques suivants :
      </p>
      <ul>
        <li>
          le Traitement peut être nécessaire à l’exécution <strong>du contrat</strong> que vous avez conclu avec nous ou pour faire les{' '}
          <strong>démarches nécessaires à la conclusion du contrat</strong> ;
        </li>
        <li>
          le Traitement peut être nécessaire pour se conformer à une <strong>obligation légale</strong> ;
        </li>
        <li>
          le Traitement peut être fondé sur votre <strong>consentement</strong> préalable au Traitement (cette base juridique n’est
          utilisée que pour les Traitements facultatifs, et non pour les Traitements qui sont nécessaires ou obligatoires) ;
        </li>
        <li>
          nous avons un intérêt <strong>légitime</strong> à effectuer le Traitement de Données Personnelles.
        </li>
      </ul>
      <h3>c) Application</h3>
      <Tableau entetes={['Finalité', 'Base juridique', 'Intérêt légitime poursuivi']} groupes={FINALITES} />

      <h2 id="donnees">3. Données personnelles concernées</h2>
      <p>
        Les Données Personnelles que nous sommes susceptibles de collecter varient selon la finalité du Traitement. Elles visent
        essentiellement à permettre l’identification des personnes dans le cadre de leurs relations avec TELEDOK. En tout état de cause,
        les Données Personnelles collectées se limiteront aux données nécessaires aux fins exposées à l’<a href="#finalites">article 2</a>{' '}
        ci-avant.
      </p>
      <p>
        <strong>Note à l’attention des visiteurs et utilisateurs de notre site Internet :</strong> certaines fonctionnalités et
        caractéristiques de notre site Internet, peuvent être utilisées uniquement si certaines Données Personnelles sont communiquées.
        L’utilisateur est libre de fournir, ou non, tout ou partie des Données Personnelles demandées. Toutefois, si l’utilisateur décidait
        de ne pas les fournir en totalité, certains services et/ou certaines fonctionnalités de notre site Internet pourraient ne pas
        fonctionner ou ne fonctionner qu’en partie.
      </p>
      <h3>Données Personnelles relatives aux clients et prospects</h3>
      <p>Nous collectons les catégories suivantes de Données Personnelles relatives à nos clients et prospects :</p>
      <ul>
        <li>
          <strong>Informations personnelles</strong> (nom, prénom(s)) et <strong>coordonnées</strong> (adresse postale, adresse de
          livraison, coordonnées du secrétariat si applicable, numéro de téléphone, adresse courriel) des interlocuteurs au sein de
          l’entreprise cliente ou prospect ;
        </li>
        <li>
          <strong>Informations relatives aux devis et commandes</strong> (relevés et montants) ;
        </li>
        <li>
          <strong>Informations relatives aux moyens et modalités de paiement</strong> (date de paiement, relevés de paiement, montant
          payé) ;
        </li>
        <li>
          <strong>Informations relatives aux besoins ou contraintes des clients</strong>, collectées dans le cadre d’enquêtes de
          satisfaction client, et que nous sommes ensuite susceptibles d’utiliser afin de nous assurer que nos communications marketing
          soient pertinentes et opportunes ;
        </li>
        <li>
          <strong>Données Personnelles supplémentaires</strong> que nos clients ont choisi de nous communiquer, dans la mesure où celles-ci
          sont nécessaires à la réalisation des finalités exposées à l’<a href="#finalites">article 2</a> ci-avant.
        </li>
      </ul>
      <h3>Données Personnelles relatives aux fournisseurs, prestataires de services, professionnels de santé intervenants et Sous-Traitants</h3>
      <p>
        Nous collectons les catégories suivantes de Données Personnelles relatives à nos fournisseurs, nos prestataires de services et nos
        Sous-Traitants :
      </p>
      <ul>
        <li>
          <strong>Informations personnelles</strong> (nom, prénom(s)) et <strong>coordonnées</strong> (adresse postale, coordonnées du
          secrétariat si applicable, numéro de téléphone, adresse courriel) de nos interlocuteurs au sein de l’entreprise fournisseur,
          prestataire ou Sous-Traitante dans un souci de bonne gestion de nos relations commerciales ;
        </li>
        <li>
          <strong>Données Personnelles supplémentaires</strong> que nos interlocuteurs au sein de l’entreprise fournisseur, prestataire ou
          Sous-Traitante ont choisi de nous communiquer, dans la mesure où celles-ci sont nécessaires à la réalisation des finalités
          exposées à l’<a href="#finalites">article 2</a> ci-avant.
        </li>
      </ul>
      <h3>Données Personnelles relatives aux candidats postulant à nos offres d’emploi</h3>
      <p>Nous collectons les catégories suivantes de Données Personnelles relatives aux candidats postulant à des offres d’emploi auprès de TELEDOK :</p>
      <ul>
        <li>
          <strong>Informations personnelles</strong> (nom, prénom(s)) ;
        </li>
        <li>
          <strong>Informations professionnelles</strong> (profession, expériences et situation professionnelle) ;
        </li>
        <li>
          <strong>Coordonnées</strong> (adresse postale, numéro de téléphone, adresse courriel) ;
        </li>
        <li>
          <strong>Éléments de parcours professionnel, diplômes, motivations</strong>.
        </li>
      </ul>
      <h3>Données Personnelles relatives à nos salariés, stagiaires, alternants et mandataires sociaux</h3>
      <p>
        Nous collectons toutes informations utiles à la bonne gestion de notre personnel, notamment leur identité, état civil, coordonnées
        personnelles, éléments de parcours professionnel, diplômes, coordonnées bancaires, sécurité sociale, informations administratives,
        le tout conformément aux dispositions légales et réglementaires applicables.
      </p>
      <h3>Données Personnelles relatives aux utilisateurs de notre site Internet</h3>
      <p>
        Cf. <a href="#cookies">article 14</a> ci-dessous « POLITIQUE D’UTILISATION DES COOKIES ».
      </p>
      <h3>Données Personnelles relatives aux personnes réservant un rendez-vous dans le cadre de nos services</h3>
      <p>
        Les données à caractère personnel que la personne enregistre sur le site Internet dédié (en pratique sur les systèmes DOCTOLIB de
        la société DOCTOLIB SAS, ANAMNESE SAS, ou autre, qui sont nos prestataires ou Sous-Traitants), à savoir ses :{' '}
        <strong>prénom, nom, téléphone et courriel</strong> - sont collectées et traitées à la seule fin de réservation de son créneau de
        rendez-vous (jour et heure) ; ce dispositif a spécifiquement pour but d’aider à planifier les rendez-vous, de réduire les files
        d’attente ainsi que d’optimiser et de simplifier le travail des intervenants.
      </p>
      <p>
        A noter que, selon le site concerné, la prise de rendez-vous en ligne peut ne pas être disponible et se faire selon d’autres
        modalités, voire même sans rendez-vous.
      </p>
      <p>
        <strong>Nota :</strong> le dispositif de prise de rendez-vous en ligne ci-dessus peut ne pas être actif, car il dépend des services
        proposés par TELEDOK qui sont évolutifs.
      </p>

      <h2 id="destinataires">4. Destinataires des données personnelles collectées</h2>
      <p>
        <strong>Les destinataires des Données Personnelles sont</strong> : (i) les services internes de TELEDOK habilités, (ii) les
        fournisseurs, prestataires et Sous-Traitants de TELEDOK habilités et (iii) les professionnels de santé intervenants, dans le cadre
        de la gestion des dossiers et de la délivrance des services.
      </p>

      <h2 id="mineurs">5. Protection des données personnelles des enfants mineurs</h2>
      <p>
        TELEDOK ne collecte ni ne conserve de manière volontaire les Données Personnelles d’enfants mineurs, sauf dans le cadre du dernier
        point de l’<a href="#donnees">article 3</a> ci-avant s’agissant de son service de réservation.
      </p>

      <h2 id="sensibles">6. Données personnelles sensibles</h2>
      <p>
        <strong>
          IMPORTANT DONNEES PERSONNELLES DE SANTE : à noter que vos Données Personnelles de santé ne sont ni Traitées ni conservées par
          TELEDOK mais par les seuls professionnels de santé intervenants en coopération avec TELEDOK, dans le cadre de la réglementation
          qui leur est applicable.
        </strong>
      </p>
      <p>
        <strong>
          En cas de mise en place par TELEDOK des outils digitaux édités par DOCTOLIB ou par ANAMNESE, TELEDOK n’a pas accès à vos données
          personnelles de santé qui y sont stockées, seuls vous-même et les professionnels de santé intervenants l’ont.
        </strong>
      </p>
      <p>
        TELEDOK ne cherche pas à collecter ou à Traiter de Données Personnelles Sensibles dans le cadre normal de ses activités. Néanmoins,
        cela peut intervenir dans le cadre des seules exceptions suivantes :
      </p>
      <ul>
        <li>
          <strong>Le respect d’une obligation légale</strong> : lorsque le Traitement est requis ou permis par la loi applicable (par
          exemple pour être en conformité avec nos diverses obligations déclaratives) ;
        </li>
        <li>
          <strong>La détection et la prévention des infractions pénales</strong> (y compris la prévention de la fraude) ;
        </li>
        <li>
          <strong>Le consentement</strong> : lorsque nous avons, conformément à la loi applicable, obtenu votre consentement préalable et
          exprès pour Traiter vos Données Personnelles Sensibles (cette base juridique est uniquement utilisée pour les Traitements
          facultatifs, et non pour les Traitements qui sont nécessaires ou obligatoires).
        </li>
      </ul>
      <p>Si vous nous fournissez des Données Personnelles Sensibles de tiers, vous devez nous le préciser spécifiquement.</p>

      <h2 id="tiers">7. Communication des données personnelles à des tiers</h2>
      <p>
        Nous pouvons communiquer vos Données Personnelles aux tiers listés ci-après, chacun dans son périmètre et s’agissant des seules
        Données Personnelles le concernant :
      </p>
      <ul>
        <li>
          Les autorités légalement habilitées, judiciaires ou administratives, à leur demande, ou à des fins de signalement des failles de
          sécurité réelles ou suspectées, conformément à la loi applicable ;
        </li>
        <li>
          Les comptables, commissaires aux comptes, avocats et autres conseils professionnels externes de TELEDOK, soumis à des obligations
          de confidentialité ;
        </li>
        <li>
          Nos prestataires, fournisseurs, professionnels de santé intervenants ou Sous-Traitants (tels que les fournisseurs des modules et
          équipements, des services de paiement, les compagnies d’affrètement et de transport, les prestataires informatiques, etc.) ;
        </li>
        <li>
          Tout acquéreur potentiel, dans l’éventualité où nous vendrions ou transférerions tout ou partie de nos actifs ou activités (et ce
          incluant l’éventualité d’une réorganisation, dissolution ou liquidation).
        </li>
      </ul>
      <p>
        Lorsque l’un de nos prestataires ou Sous-Traitants participe au Traitement de vos Données Personnelles (par exemple la société
        DOCTOLIB SAS ou la société ANAMNESE SAS qui fournissent les systèmes de réservation, ou tout autre fournisseur), celui-ci est
        soumis à des obligations contractuelles lui imposant : (i) de Traiter uniquement les Données Personnelles conformément à nos
        instructions préalables écrites, (ii) d’utiliser des mesures de protection de la confidentialité et de la sécurité des Données
        Personnelles, ainsi que (iii) de respecter toute autre obligation supplémentaire imposée par la réglementation applicable.
      </p>
      <p>
        A noter en outre, s’agissant spécifiquement des Données Personnelles administratives relatives aux personnes réservant un
        rendez-vous, que celles-ci ne sont transmises qu’aux personnels et aux professionnels de santé intervenants chargés d’assurer le
        bon déroulement de la succession des rendez-vous.
      </p>

      <h2 id="conservation">8. Limitation et durée de conservation des données personnelles</h2>
      <p>
        <strong>8.1</strong> Nous prenons toutes les mesures appropriées pour que le volume des Données Personnelles que nous Traitons soit
        limité aux Données Personnelles raisonnablement nécessaires pour les finalités exposées dans la Politique.
      </p>
      <p>
        <strong>8.2</strong> Nous prenons toutes les mesures appropriées pour garantir que vos Données Personnelles soient conservées
        pendant une durée n’excédant pas celle nécessaire au regard des finalités exposées dans la Politique.
      </p>
      <p>Les critères utilisés pour déterminer les durées de conservation des Données Personnelles sont les suivants :</p>
      <ul>
        <li>
          Nous conserverons vos Données Personnelles dans un format qui permet de vous identifier tant que vos Données Personnelles sont
          nécessaires pour répondre aux finalités licites, pour lesquelles nous avons un fondement légitime, décrites à l’
          <a href="#finalites">article 2</a> de la Politique.
        </li>
      </ul>
      <p>Nous conserverons vos Données Personnelles pour les durées suivantes, selon le cas :</p>
      <Tableau entetes={['Cas', 'Durée de conservation']} groupes={DUREES} />
      <p>
        <strong>8.3</strong> Pour ce qui concerne les durées de conservation par DOCTOLIB et ANAMNESE, il est renvoyé à leurs politiques de
        gestion des données personnelles :
      </p>
      <ul>
        <li>
          S’agissant de DOCTOLIB, sa politique de gestion des données personnelles est disponible à l’adresse suivante :{' '}
          <Ext href="https://media.doctolib.com/image/upload/v1682429468/legal/B2C-PrivacyPolicy-Apr-23-FR.pdf">
            https://media.doctolib.com/image/upload/v1682429468/legal/B2C-PrivacyPolicy-Apr-23-FR.pdf
          </Ext>
        </li>
        <li>
          S’agissant d’ANAMNESE, sa politique de gestion des données personnelles est disponible à l’adresse suivante :{' '}
          <Ext href="https://www.anamnese.care">www.anamnese.care</Ext>
        </li>
      </ul>

      <h2 id="transfert">9. Transfert des données personnelles en dehors de l’Union européenne</h2>
      <p>
        Nous ne transférons pas de Données Personnelles en dehors de l’Union Européenne (sous réserve des USA pour ce qui concerne Google
        Analytics, dans le cadre fixé par la réglementation).
      </p>

      <h2 id="droits">10. Vos droits concernant vos données personnelles</h2>
      <p>
        Selon le type de Traitement, dans le cadre fixé par le RGPD, vous disposez d’un certain nombre de droits concernant le Traitement
        de vos Données Personnelles, ceux-ci étant fixés par la réglementation et pouvant inclure, en synthèse, les droits suivants :
      </p>
      <h3>Droit de ne pas nous communiquer vos Données Personnelles</h3>
      <p>
        Veuillez toutefois noter que dans cette situation, nous pourrions être dans l’incapacité de vous fournir l’intégralité de nos
        produits et services – par exemple, nous pourrions être dans l’incapacité de traiter vos commandes ou réservations de rendez-vous
        sans les informations et coordonnées nécessaires.
      </p>
      <h3>Droit d’opposition s’agissant de traitements qui reposent sur les bases légales de l’intérêt légitime ou de l’intérêt public</h3>
      <p>
        Vous pouvez à tout moment vous opposer à ce que nous Traitions vos Données Personnelles. Votre demande d’opposition sera traitée
        avec diligence et nous cesserons le Traitement auquel vous vous opposez. Néanmoins, nous nous réservons la possibilité de ne pas
        cesser le Traitement en question si :
      </p>
      <ul>
        <li>
          Nous pouvons démontrer que nous avons des motifs légitimes et impérieux de Traiter vos Données Personnelles qui prévalent sur vos
          intérêts personnels ;
        </li>
        <li>Nous Traitons vos Données Personnelles aux fins de la constatation, de l’exercice ou de la défense d’un droit en justice.</li>
      </ul>
      <h3>Droit de retrait du consentement</h3>
      <p>
        Si nous avons obtenu votre consentement au Traitement de vos Données Personnelles pour certains Traitements autres que ceux pour
        lesquels aucun consentement n’est requis, vous pouvez retirer ce consentement à tout moment et nous cesserons le Traitement
        particulier auquel vous aviez consenti, sauf si nous considérons qu’il existe une autre raison justifiant la poursuite de notre
        Traitement de vos Données Personnelles à cette fin, auquel cas nous vous informerons de cette situation.
      </p>
      <p>
        Veuillez noter que ce retrait n’affecte pas la licéité de tout Traitement entrepris avant la date à laquelle nous avons reçu
        notification dudit retrait, pas plus qu’il n’empêche le Traitement de vos Données Personnelles fondé sur d’autres bases juridiques
        disponibles.
      </p>
      <h3>Droit d’accès</h3>
      <p>
        Vous avez le droit de demander l’accès ou la copie de vos Données Personnelles, accompagnées d’informations relatives à la nature
        du Traitement et les personnes pouvant accéder à ces Données Personnelles.
      </p>
      <p>
        Lorsque nous vous donnons accès aux Données Personnelles que nous détenons vous concernant, nous ne vous facturons pas cet accès à
        moins que votre demande ne soit manifestement infondée ou abusive. Si vous nous demandez d’autres copies de ces informations, nous
        pourrons vous facturer des frais administratifs raisonnables lorsque la loi l’autorise. Si la loi nous le permet, nous pourrons
        éventuellement refuser votre demande. Si nous le faisons, nous justifierons toujours ce refus.
      </p>
      <h3>Droit à l’effacement</h3>
      <p>Vous avez le droit de demander que nous effacions vos Données Personnelles dans certaines circonstances.</p>
      <p>En principe, les Données Personnelles en question doivent remplir l’un des critères suivants :</p>
      <ul>
        <li>
          Vos Données Personnelles ne sont plus nécessaires pour poursuivre les finalités pour lesquelles nous les avions initialement
          collectées et/ou Traitées ;
        </li>
        <li>
          Vous avez retiré votre consentement au Traitement de vos Données Personnelles et il n’existe aucune autre raison valable pour que
          nous en poursuivions le Traitement ;
        </li>
        <li>Vos Données Personnelles ont, par extraordinaire, été Traitées de manière illicite ;</li>
        <li>
          Dans le cas où nous Traitons vos Données Personnelles parce que nous estimons que cela est nécessaire aux fins de nos intérêts
          légitimes, si vous vous y opposiez et que nous n’étions pas en mesure de démontrer qu’il existait un motif légitime et impérieux
          pour poursuivre le Traitement.
        </li>
      </ul>
      <p>Nous serions en droit de refuser de répondre à votre demande pour l’une et/ou l’autre des raisons suivantes :</p>
      <ul>
        <li>Exercer le droit à la liberté d’expression et d’information ;</li>
        <li>Respecter des obligations légales ;</li>
        <li>Pour des raisons de santé publique dans l’intérêt public ;</li>
        <li>A des fins d’archives, de recherche ou de statistiques ;</li>
        <li>Exercer ou défendre un droit en justice.</li>
      </ul>
      <p>
        Lorsque nous répondrons à une demande d’effacement de Données Personnelles valable, nous prendrons toutes les mesures pratiques
        appropriées pour supprimer les Données Personnelles en question.
      </p>
      <h3>Droit à la limitation du Traitement</h3>
      <p>
        Vous avez le droit de demander que nous limitions le Traitement de vos Données Personnelles dans certaines circonstances. Cela
        signifie que nous pourrons uniquement continuer à conserver vos Données Personnelles et que nous ne pourrons procéder à d’autres
        activités de Traitement que dans l’un des cas suivants : (i) résolution de l’une des circonstances énumérées ci-dessous ; (ii)
        votre consentement ; ou (iii) un Traitement ultérieur est nécessaire à la constatation, à l’exercice ou à la défense de droits en
        justice, à la protection des droits d’une autre personne, ou pour des motifs importants d’intérêt public de l’Union Européenne ou
        d’un État membre.
      </p>
      <p>
        Les cas dans lesquels vous êtes en droit de demander à ce que nous limitions le Traitement de vos Données Personnelles sont les
        suivants :
      </p>
      <ul>
        <li>
          Lorsque vous contestez l’exactitude des Données Personnelles que nous Traitons vous concernant. Dans ce cas, nous limiterons le
          Traitement de vos Données Personnelles à la vérification de leur exactitude ;
        </li>
        <li>
          Lorsque vous vous opposez à notre Traitement de vos Données Personnelles aux fins de nos intérêts légitimes. Vous pouvez demander
          à ce que les Données Personnelles soient limitées pendant que nous vérifions nos motifs de Traitement de vos Données
          Personnelles ;
        </li>
        <li>
          Lorsque vos Données Personnelles ont, par extraordinaire, fait l’objet d’un Traitement illicite de notre part, mais que vous
          préférez simplement que nous limitions leur Traitement plutôt que de les effacer ;
        </li>
        <li>
          Lorsque nous n’avons plus besoin de Traiter vos Données Personnelles mais que vous les demandez afin de constater, d’exercer ou
          de défendre des droits en justice.
        </li>
      </ul>
      <p>
        Si nous avons communiqué vos Données Personnelles à des tiers, nous les informerons du Traitement limité sauf si cela se révèle
        impossible ou implique des efforts disproportionnés. Bien entendu, nous vous informerons avant de lever toute limitation au
        Traitement de vos Données Personnelles.
      </p>
      <h3>Droit de rectification</h3>
      <p>
        Vous avez également le droit de demander à ce que nous rectifions des Données Personnelles inexactes ou incomplètes que nous
        détenons vous concernant. Si nous avons communiqué ces Données Personnelles à des tiers, nous les informerons de la rectification
        sauf si cela se révélait impossible ou impliquait des efforts disproportionnés. S’il y a lieu, nous vous indiquerons également à
        quel(s) tiers nous avons communiqué ces Données Personnelles inexactes ou incomplètes. Si nous pensons qu’il est raisonnable de ne
        pas répondre à votre demande, nous vous donnerons les raisons de cette décision.
      </p>
      <h3>
        Droit à l’obtention et à la portabilité des Données Personnelles que nous traitons sur la base de votre consentement ou dans le
        cadre de l’exécution d’un contrat
      </h3>
      <p>
        Si vous le souhaitez, vous avez le droit d’obtenir et de transférer vos Données Personnelles d’un Responsable de Traitement à un
        autre. Afin que vous puissiez le faire, nous vous communiquerons vos Données Personnelles dans un format communément utilisé,
        structuré et lisible par machine. Ce droit de portabilité s’applique aux Données Personnelles suivantes : (i) Données Personnelles
        que nous Traitons automatiquement (c’est-à-dire sans intervention humaine) et (ii) Données Personnelles que vous fournissez.
      </p>
      <h3>Droit d’opposition à la prospection, conformément à la réglementation</h3>
      <h3>Droit concernant les directives post-mortem, conformément à la réglementation</h3>
      <h3>Droit d’introduire une réclamation auprès d’une Autorité de Protection des Données</h3>
      <p>
        Vous avez également le droit d’introduire une réclamation auprès d’une Autorité de Protection des Données, et en particulier de
        l’Autorité de Protection des Données de l’Etat membre de l’Union Européenne dans lequel vous résidez ou travaillez ou dans lequel la
        violation alléguée s’est produite. Ceci n’affecte en rien les droits dont vous bénéficiez en application des lois et règlements en
        vigueur. Pour exercer un ou plusieurs de ces droits, pour nous poser une question relative à ces droits ou à toute autre clause de
        cette Politique, ou pour nous interroger sur le Traitement de vos Données Personnelles, veuillez utiliser les coordonnées fournies à
        l’<a href="#contact">article 13</a> de notre Politique. Veuillez noter que :
      </p>
      <ul>
        <li>Nous pouvons demander une preuve de votre identité avant de faire droit à vos demandes ;</li>
        <li>
          Lorsque votre demande nécessite l’établissement de faits ou la réalisation d’analyses additionnelles (par exemple pour déterminer
          la licéité du Traitement), nous examinerons votre demande aussi promptement et raisonnablement que possible, avant de prendre
          notre décision.
        </li>
      </ul>
      <div className="notice">
        <p>
          <strong>
            Si vous estimez, après avoir contacté TELEDOK, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez
            adresser en France une réclamation à la CNIL :
          </strong>
        </p>
        <p style={{ marginTop: 10 }}>
          Commission Nationale de l’Informatique et des Libertés
          <br />
          3, place de Fontenoy
          <br />
          TSA 80715
          <br />
          75334 PARIS CEDEX 07 - FRANCE
        </p>
      </div>

      <h2 id="securite">11. Sécurité des données personnelles</h2>
      <p>
        Nous nous engageons à prendre toutes les mesures nécessaires afin de protéger vos Données Personnelles que nous détenons contre
        toute utilisation abusive, toute perte, altération, divulgation, destruction, tout accès non autorisé et toute autre forme de
        Traitement illicite ou non-autorisé, conformément à la loi applicable. Pour ce faire, nous disposons d’une palette de mesures
        techniques et organisationnelles appropriées. Il peut s’agir de mesures visant à faire face aux suspicions de violation de Données
        Personnelles.
      </p>
      <p>
        Parce qu’Internet est un système ouvert, la transmission des informations sur ce réseau n’est pas totalement sûre. Bien que nous
        mettions en place toutes les mesures raisonnables pour protéger vos Données Personnelles, nous ne pouvons garantir la sécurité de
        vos Données Personnelles qui nous sont transmises par Internet ; cette transmission s’effectue à vos propres risques et vous avez la
        responsabilité d’assurer que toute Donnée Personnelle que vous nous envoyez est transmise en toute sécurité.
      </p>
      <p>
        Si vous soupçonnez une utilisation abusive, une perte ou un accès non autorisé concernant vos Données Personnelles, veuillez-nous en
        informer immédiatement selon les modalités définies à l’<a href="#conflits">article 12</a> ci-après.
      </p>
      <p>
        L’accès aux Données Personnelles est limité aux seuls salariés, stagiaires, alternants, mandataires sociaux, fournisseurs,
        prestataires et Sous-Traitants de TELEDOK qui ont besoin d’en connaître dans le cadre de l’exécution de leur mission. Toutes les
        personnes ayant accès à vos Données Personnelles sont tenues par une obligation de confidentialité et s’exposent à des mesures
        disciplinaires et/ou autres sanctions si elles ne respectaient pas cette obligation.
      </p>

      <h2 id="conflits">12. Résolution des conflits</h2>
      <p>
        Bien que TELEDOK ait pris toutes les mesures appropriées pour protéger vos Données Personnelles, aucune technologie de transmission
        ou de stockage n’est totalement infaillible.
      </p>
      <p>
        Toutefois, TELEDOK est soucieuse de garantir la protection de vos Données Personnelles. Si vous avez des raisons de penser que la
        sécurité de vos Données Personnelles a été compromise ou qu’elles ont fait l’objet d’une utilisation illégale ou abusive, vous êtes
        invité à contacter TELEDOK à l’adresse suivante :
      </p>
      <ul>
        <li>
          <strong>Par courrier à l’adresse suivante : TELEDOK, Direction générale - 351 Les Bureaux de la Colline – 92210 Saint-Cloud (France), ou</strong>
        </li>
        <li>
          <strong>
            Par courriel à l’adresse suivante : <Mail to="matthieu.guillotin@doxamed.com" />
          </strong>
        </li>
        <li>
          <strong>
            Avec copie à Maître Philippe de Bondy, 51, avenue Raymond Poincaré – 75116 Paris, courriel : <Mail to="pdebondy@lawval.com" />,
            en sa qualité de DPO externe de TELEDOK.
          </strong>
        </li>
      </ul>
      <p>
        TELEDOK instruira les réclamations concernant l’utilisation et la divulgation de vos Données Personnelles et tentera de les résoudre
        conformément aux principes figurant dans la Politique.
      </p>
      <p>
        L’accès non autorisé à des Données Personnelles ou leur mauvaise utilisation peut constituer une infraction aux termes de la
        législation applicable.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        Pour toute question relative à la Politique, pour ne plus recevoir d’informations commerciales de la part de TELEDOK ou pour exercer
        vos droits concernant vos Données Personnelles, vous pouvez envoyer un courrier électronique à l’adresse électronique suivante :{' '}
        <Mail to="pdebondy@lawval.com" />.
      </p>

      <h2 id="cookies">14. Politique d’utilisation des cookies</h2>
      <p>
        Lorsque vous visitez notre site Internet, nous pouvons enregistrer des cookies sur votre appareil, ou lire les cookies déjà présents
        sur votre appareil, sous réserve de toujours avoir obtenu votre consentement exprès préalable, sauf pour ce qui concerne les cookies
        strictement nécessaires.
      </p>
      <h3>Site Internet auquel s’applique cette politique de cookies</h3>
      <p>Cette politique de cookies s’applique au site Internet suivant, qui est exploité et contrôlé par TELEDOK : https://www.teledok.fr.</p>
      <h3>Qu’est-ce qu’un cookie ?</h3>
      <p>
        Un « cookie » est un petit fichier d’informations qui est stocké sur le disque dur de votre ordinateur et qui enregistre votre
        navigation sur un site Internet afin que lors de votre prochaine visite sur ce site, il puisse vous présenter des options
        personnalisées reposant sur les informations stockées concernant votre dernière visite. Les cookies peuvent également servir à
        analyser le trafic et à des fins publicitaires et de marketing. La quasi-totalité des sites Internet en utilise et ils
        n’endommagent pas votre système.
      </p>
      <p>
        Il existe différents types de cookies qui peuvent être distingués en fonction de leurs origines, fonctions et durée de vie. Les
        principales caractéristiques des cookies sont les suivantes :
      </p>
      <ul>
        <li>
          <strong>Les cookies de session</strong> : il s’agit de cookies qui sont stockés sur votre ordinateur uniquement durant votre
          session web et qui sont supprimés automatiquement lorsque vous fermez votre navigateur – ils stockent généralement un identifiant
          de session vous permettant de visiter nos sites Internet sans avoir à vous reconnecter à chaque page ;
        </li>
        <li>
          <strong>Les cookies persistants</strong> : un cookie persistant est stocké sous forme de fichier dans votre ordinateur et y
          demeure lorsque vous fermez votre navigateur. Le cookie est lisible par le site Internet qui l’a créé lorsque vous visitez de
          nouveau ce site. Nous utilisons des cookies persistants pour Google Analytics et pour la personnalisation (voir ci-après) ;
        </li>
        <li>
          <strong>Cookies strictement nécessaires</strong> : Ces cookies sont essentiels pour vous permettre d’utiliser notre site Internet
          de manière effective et ne peuvent donc pas être désactivés. Sans ces cookies, les services dont vous disposez sur notre site
          Internet ne peuvent pas être fournis. Ces cookies ne rassemblent pas d’informations vous concernant pouvant être utilisées à des
          fins commerciales ou pour mémoriser les pages que vous avez consultées sur Internet ;
        </li>
        <li>
          <strong>Cookies de performance</strong> : Ces cookies nous permettent de surveiller et d’améliorer la performance de notre site
          Internet. Par exemple, ils nous permettent de comptabiliser les visites, d’identifier les sources de trafic et de voir quelles
          parties de notre site sont les plus visitées ;
        </li>
        <li>
          <strong>Cookies de fonctionnalité</strong> : Ces cookies permettent à notre site Internet de mémoriser les choix que vous faites
          (nom d’utilisateur, langue, pays, etc.) et de fournir des fonctionnalités améliorées. Par exemple, nous sommes en mesure de vous
          communiquer des informations ou mises à jour en rapport avec les services que vous utilisez. Ces cookies peuvent également être
          utilisés pour mémoriser les modifications que vous avez apportées à la taille du texte, à la police et à d’autres éléments des
          pages web que vous pouvez personnaliser. Ils peuvent également être utilisés pour fournir des services que vous avez demandés tels
          que visionner une vidéo ou publier des commentaires sur un blog ; et
        </li>
        <li>
          <strong>Cookies de personnalisation</strong> : Ces cookies permettent de communiquer des informations sur des solutions
          susceptibles de vous intéresser.
        </li>
      </ul>
      <h3>Pourquoi utilisons-nous les cookies ?</h3>
      <p>Nous utilisons les cookies pour répondre à l’objectif suivant :</p>
      <ul>
        <li>
          <strong>Suivre votre utilisation de notre site Internet</strong>. Cela nous permet de comprendre comment vous utilisez notre site
          Internet et de suivre les tendances observées chez des individus ou des groupes plus importants. Cela nous permet de développer et
          d’améliorer notre site Internet et nos services en réponse aux souhaits et besoins de nos visiteurs.
        </li>
      </ul>
      <h3>Quelle est la durée des cookies que nous utilisons ?</h3>
      <p>La durée des cookies que nous utilisons sur notre site Internet n’excède pas douze (12) mois.</p>
      <p>Certains cookies sont quant à eux placés par des tiers qui en sont responsables.</p>
      <h3>Comment pouvez-vous contrôler les cookies ?</h3>
      <p>
        La plupart des navigateurs Internet sont programmés pour accepter automatiquement les cookies. Selon le type de navigateur utilisé,
        vous pouvez le programmer de manière (i) à recevoir un avertissement avant la mise en place des cookies, permettant d’accepter ou de
        refuser ces cookies, ou (ii) à ce que les cookies soient toujours refusés. Afin de savoir comment procéder à cette programmation,
        cliquez sur le bouton « aide » (ou équivalent) de votre navigateur. La désactivation des cookies peut affecter votre expérience de
        navigation sur notre site Internet.
      </p>
      <p>
        Si vous utilisez différents appareils pour accéder à notre site Internet, vous devez vous assurer que chaque navigateur de chaque
        appareil est programmé selon vos préférences cookies.
      </p>
      <p>
        Vous pouvez trouver davantage d’informations sur :{' '}
        <Ext href="http://www.allaboutcookies.org/manage-cookies/">http://www.allaboutcookies.org/manage-cookies/</Ext>. Notez que TELEDOK
        n’est ni affilié ni responsable des sites Internet tiers.
      </p>
      <p>
        Par ailleurs, vous pouvez vous désabonner des cookies de certaines sociétés en visitant les sites suivants :{' '}
        <Ext href="http://www.aboutads.info/choices/#completed">http://www.aboutads.info/choices/#completed</Ext> et{' '}
        <Ext href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</Ext>. Notez que TELEDOK n’est ni affilié, ni
        responsable des sites Internet tiers.
      </p>

      <h2 id="definitions">15. Définitions</h2>
      <p>
        Aux fins de la Politique et conformément à la loi n° 78-17 du 6 janvier 1978 modifiée, relative à l’informatique, aux fichiers et
        aux libertés et au RGPD, les définitions suivantes s’appliquent :
      </p>
      <ul>
        <li>
          « <strong>Autorité de Protection des Données</strong> » signifie une autorité publique indépendante, chargée par la loi de
          superviser le respect des lois applicables en matière de protection des données.
        </li>
        <li>
          « <strong>Données Personnelles</strong> » signifie toute information se rapportant à une personne identifiée ou identifiable,
          notamment par référence à un identifiant, tel qu’un nom, un numéro d’identification, des données de localisation, un identifiant
          en ligne ou un ou plusieurs éléments spécifiques.
        </li>
        <li>
          « <strong>Données Personnelles Sensibles</strong> » signifie les Données Personnelles relevant de l’origine raciale ou ethnique,
          les opinions politiques, la religion ou les convictions philosophiques, l’appartenance syndicale, ainsi que des données
          génétiques, des données concernant la santé, des données biométriques d’identification, des données concernant la vie sexuelle ou
          des données relatives à des condamnations pénales et à des infractions, ou encore à des mesures de sûreté connexes, ainsi que
          toute autre information qui pourrait être considérée sensible par la loi applicable.
        </li>
        <li>
          « <strong>Responsable de Traitement</strong> » signifie l’entité qui décide des finalités et des moyens de Traitement des Données
          Personnelles. Dans de nombreuses juridictions, le Responsable de Traitement a la responsabilité principale de se conformer aux lois
          applicables en matière de protection des données.
        </li>
        <li>
          « <strong>RGPD</strong> » signifie Règlement (UE) 2016/679 général sur la protection des données.
        </li>
        <li>
          « <strong>Sous-Traitant</strong> » signifie toute personne physique ou morale qui traite les Données Personnelles pour le compte
          du Responsable de Traitement, autre que les employés du Responsable de Traitement.
        </li>
        <li>
          « <strong>Traitement</strong> » ou « <strong>Traiter</strong> » signifie toute opération effectuée sur les Données Personnelles,
          à l’aide ou non de procédés automatisés, tels que la collecte, l’enregistrement, l’organisation, la structuration, la
          conservation, l’adaptation ou la modification, l’extraction, la consultation, l’utilisation, la communication par transmission,
          la diffusion ou toute autre forme de mise à disposition, le rapprochement ou l’interconnexion, la limitation, l’effacement ou la
          destruction.
        </li>
      </ul>
    </LegalPage>
  )
}
