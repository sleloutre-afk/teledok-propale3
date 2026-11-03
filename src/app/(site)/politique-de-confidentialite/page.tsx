import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/LegalPage'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Texte établi sur le modèle de la politique de protection des données du site Doxamed (même groupe),
// ramené aux traitements réels du site : formulaires transmis par e-mail (Resend) sans être conservés,
// aucune mesure d'audience, cookies réservés au back-office.

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/politique-de-confidentialite',
  'Politique de confidentialité | TeleDok',
  'Politique de protection des données personnelles de TeleDok : données collectées, finalités, destinataires, durées de conservation, cookies et exercice de vos droits.',
)

const sommaire = [
  { id: 'sources', label: 'Sources des données' },
  { id: 'finalites', label: 'Finalités et fondements' },
  { id: 'donnees', label: 'Données concernées' },
  { id: 'destinataires', label: 'Destinataires' },
  { id: 'sensibles', label: 'Données sensibles et mineurs' },
  { id: 'tiers', label: 'Communication à des tiers' },
  { id: 'conservation', label: 'Durées de conservation' },
  { id: 'transferts', label: 'Transferts hors UE' },
  { id: 'droits', label: 'Vos droits' },
  { id: 'securite', label: 'Sécurité' },
  { id: 'contact', label: 'Réclamations et contact' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'definitions', label: 'Définitions' },
]

const FINALITES = [
  'répondre aux demandes d’information et de contact qui nous sont adressées, via le Site Internet ou par tout autre moyen* ;',
  'étudier les candidatures des médecins et des professionnels de santé souhaitant exercer avec TeleDok, vérifier leur inscription au répertoire partagé des professionnels de santé (RPPS) et les recontacter* ;',
  'préparer et soumettre des propositions, participer à des appels à projets ou à des appels d’offres* ;',
  'permettre le suivi des relations contractuelles avec nos partenaires et clients (collectivités, entreprises, établissements, organismes complémentaires, etc.)* ;',
  'permettre le suivi des relations contractuelles avec nos fournisseurs, nos prestataires de services et nos sous-traitants* ;',
  'nous acquitter de nos obligations contractuelles ;',
  'assurer la gestion des ressources humaines de nos salariés, stagiaires, alternants et mandataires sociaux ;',
  'assurer la sécurité de nos systèmes, notamment la protection des formulaires et de l’accès au back-office du Site Internet contre les robots* ;',
  'améliorer nos services et le Site Internet* ;',
  'assurer la gestion comptable, financière, juridique et l’audit* ;',
  'dans le cadre de procédures judiciaires (constatation, exercice ou défense de droits en justice)* ;',
  'nous conformer à nos obligations légales.',
]

const DROITS: [string, string][] = [
  [
    'Droit de ne pas nous communiquer vos données personnelles',
    'Dans cette situation, nous pourrions être dans l’incapacité de donner suite à votre demande, par exemple d’étudier votre candidature sans les informations nécessaires.',
  ],
  [
    'Droit d’opposition (traitements fondés sur l’intérêt légitime)',
    'Vous pouvez à tout moment vous opposer à ce que nous traitions vos données personnelles. Votre demande sera traitée avec diligence et nous cesserons le traitement concerné, sauf si nous pouvons démontrer des motifs légitimes et impérieux prévalant sur vos intérêts, ou si le traitement répond à la constatation, à l’exercice ou à la défense d’un droit en justice.',
  ],
  [
    'Droit de retrait du consentement',
    'Lorsqu’un traitement repose sur votre consentement, vous pouvez le retirer à tout moment ; nous cesserons alors ce traitement, sauf autre raison justifiant sa poursuite, dont nous vous informerions. Ce retrait n’affecte pas la licéité du traitement effectué avant le retrait.',
  ],
  [
    'Droit d’accès',
    'Vous pouvez demander l’accès à vos données personnelles ou leur copie, accompagnées d’informations sur la nature du traitement et les personnes pouvant y accéder. Cet accès est gratuit, sauf demande manifestement infondée ou excessive.',
  ],
  [
    'Droit de rectification',
    'Vous pouvez demander la rectification de données personnelles inexactes ou incomplètes vous concernant.',
  ],
  [
    'Droit à l’effacement',
    'Vous pouvez demander l’effacement de vos données personnelles, notamment lorsqu’elles ne sont plus nécessaires aux finalités pour lesquelles elles ont été collectées ou lorsque vous retirez votre consentement. Nous pouvons refuser cette demande pour des motifs prévus par la loi (obligations légales, exercice d’un droit en justice, etc.).',
  ],
  [
    'Droit à la limitation du traitement',
    'Vous pouvez demander la limitation du traitement de vos données personnelles dans certaines circonstances (contestation de leur exactitude, opposition au traitement, traitement estimé illicite, ou données conservées uniquement pour la défense de droits en justice).',
  ],
  [
    'Droit à la portabilité',
    'Pour les données que nous traitons sur la base de votre consentement ou de l’exécution d’un contrat, vous pouvez demander à les recevoir dans un format structuré, couramment utilisé et lisible par machine, et à les transmettre à un autre responsable de traitement.',
  ],
  [
    'Droit de définir des directives relatives au sort de vos données après votre décès',
    'Vous pouvez nous indiquer comment vous souhaitez que vos données personnelles soient conservées, effacées ou communiquées après votre décès.',
  ],
]

const DEFINITIONS: [string, string][] = [
  [
    'Autorité de protection des données',
    'autorité publique indépendante chargée par la loi de superviser le respect des lois applicables en matière de protection des données ; en France, la CNIL.',
  ],
  [
    'Données personnelles',
    'toute information se rapportant à une personne identifiée ou identifiable, notamment par référence à un identifiant tel qu’un nom, un numéro d’identification, des données de localisation, un identifiant en ligne ou un ou plusieurs éléments spécifiques.',
  ],
  [
    'Données personnelles sensibles',
    'données relevant de l’origine raciale ou ethnique, des opinions politiques, de la religion ou des convictions philosophiques, de l’appartenance syndicale, ainsi que les données génétiques, biométriques, de santé, relatives à la vie sexuelle ou à l’orientation sexuelle, ou relatives à des condamnations pénales ou infractions.',
  ],
  ['Responsable de traitement', 'entité qui détermine les finalités et les moyens du traitement des données personnelles.'],
  ['RGPD', 'Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection des données personnelles.'],
  [
    'Sous-traitant',
    'personne physique ou morale qui traite des données personnelles pour le compte du responsable de traitement, autre que ses salariés.',
  ],
  [
    'Traitement',
    'toute opération effectuée sur des données personnelles, à l’aide ou non de procédés automatisés, telle que la collecte, l’enregistrement, l’organisation, la conservation, la modification, la consultation, l’utilisation, la communication par transmission, le rapprochement, la limitation, l’effacement ou la destruction.',
  ],
]

const Email = () => <a href="mailto:contact@teledok.fr">contact@teledok.fr</a>
const DpoEmail = () => <a href="mailto:pdebondy@lawval.com">pdebondy@lawval.com</a>

export default function Page() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      updated="3 novembre 2026"
      sommaire={sommaire}
      notice="Texte établi sur le modèle de la politique de protection des données du site Doxamed, adapté aux traitements réels du site TeleDok. L’élément entre crochets reste à confirmer, et l’ensemble est à faire valider par le juriste et le DPO avant publication."
    >
      <p style={{ marginTop: 32 }}>
        TELEDOK, société par actions simplifiée immatriculée au Registre du commerce et des sociétés de Nanterre sous le numéro 843 204 678,
        sise 351 Bureaux de la Colline, 92210 Saint-Cloud Cedex (France) (ci-après « TeleDok »), procède au traitement de données à
        caractère personnel dans le cadre de son activité. Les termes commençant par une majuscule sont définis à la fin de la page, à la
        section « Définitions ».
      </p>
      <p>
        La présente politique (la « Politique ») décrit la manière dont TeleDok collecte, utilise et traite vos données personnelles, en
        qualité de Responsable de traitement, en conformité avec le RGPD et la loi n° 78-17 du 6 janvier 1978 modifiée dite « Informatique et
        Libertés ». Elle s’applique aux données personnelles des utilisateurs du site Internet www.teledok.fr (le « Site Internet »), des médecins et professionnels de santé qui nous adressent leur candidature, de nos partenaires, clients,
        fournisseurs, prestataires et sous-traitants, de nos salariés et, plus largement, de toutes les personnes que nous sommes
        légitimement amenés à contacter dans le cadre de nos activités.
      </p>
      <p>
        Elle ne couvre pas les données de santé des patients pris en charge par les professionnels de santé exerçant avec TeleDok : ces
        données relèvent du secret médical et font l’objet d’une information spécifique dans le cadre des soins.
      </p>
      <p>
        TeleDok peut être amenée à modifier ou à actualiser la Politique selon ses activités et pour prendre en compte l’évolution de la
        réglementation. Nous vous invitons à la consulter régulièrement.
      </p>

      <h2 id="sources">Sources des données personnelles collectées</h2>
      <p>Nous collectons des données personnelles vous concernant à partir des sources suivantes :</p>
      <ul>
        <li>
          les données que vous nous fournissez directement, notamment via les formulaires de candidature et de contact du Site Internet, ou
          lorsque vous nous contactez par courriel, par téléphone ou par tout autre moyen ;
        </li>
        <li>les données techniques strictement nécessaires au fonctionnement et à la sécurité du Site Internet ;</li>
        <li>
          les données issues de sources publiques, par exemple le répertoire partagé des professionnels de santé (RPPS), pour vérifier
          l’inscription d’un médecin candidat.
        </li>
      </ul>

      <h2 id="finalites">Finalités des traitements et fondements juridiques</h2>
      <h3>Finalités</h3>
      <p>Nous traitons vos données personnelles pour les finalités suivantes :</p>
      <ul>
        {FINALITES.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <h3>Fondements juridiques</h3>
      <p>Ces traitements reposent sur un ou plusieurs des fondements juridiques suivants :</p>
      <ul>
        <li>l’exécution d’un contrat conclu avec vous, ou les démarches nécessaires à sa conclusion ;</li>
        <li>le respect d’une obligation légale ;</li>
        <li>votre consentement préalable, pour les seuls traitements facultatifs ;</li>
        <li>notre intérêt légitime, pour les finalités suivies d’un astérisque (*) ci-dessus.</li>
      </ul>

      <h2 id="donnees">Données personnelles concernées</h2>
      <p>
        Les données collectées se limitent à celles qui sont nécessaires aux finalités exposées ci-dessus. Vous êtes libre de ne pas
        renseigner certains champs ; les champs obligatoires des formulaires sont toutefois indispensables au traitement de votre demande.
      </p>
      <h3>Données transmises via les formulaires du Site Internet</h3>
      <div className="collecte">
        <div>
          <p className="collecte-t">Candidature médecin</p>
          <p>Nom, prénom, e-mail, téléphone, numéro RPPS.</p>
        </div>
        <div>
          <p className="collecte-t">Contact partenaire / général</p>
          <p>Organisation, type de structure, nom, fonction, e-mail, téléphone, message.</p>
        </div>
      </div>
      <p>
        Ces demandes ne sont pas conservées sur le Site Internet : elles sont transmises par courriel aux équipes de TeleDok chargées d’y
        répondre.
      </p>
      <h3>Données relatives aux partenaires, clients et prospects</h3>
      <p>
        Nom, prénom, fonction et coordonnées professionnelles de nos interlocuteurs, informations relatives aux propositions, contrats et
        factures, et toute information complémentaire qu’ils ont choisi de nous communiquer, dans la mesure où elle est nécessaire aux
        finalités exposées ci-dessus.
      </p>
      <h3>Données relatives aux fournisseurs, prestataires et sous-traitants</h3>
      <p>Nom, prénom, fonction et coordonnées professionnelles de nos interlocuteurs.</p>
      <h3>Données relatives aux médecins et professionnels de santé candidats</h3>
      <p>
        Identité, coordonnées, numéro RPPS, spécialité, parcours professionnel, diplômes et disponibilités, ainsi que les informations
        échangées au cours du processus de candidature.
      </p>
      <h3>Données relatives à nos salariés, stagiaires, alternants et mandataires sociaux</h3>
      <p>
        Toutes informations utiles à la bonne gestion du personnel, conformément aux dispositions légales et réglementaires applicables.
      </p>

      <h2 id="destinataires">Destinataires des données personnelles</h2>
      <p>Les destinataires des données personnelles sont, dans la limite de leurs attributions :</p>
      <ul>
        <li>les services internes de TeleDok habilités, dont la direction médicale pour les candidatures de médecins ;</li>
        <li>les prestataires et sous-traitants de TeleDok habilités (voir la section « Communication des données à des tiers »).</li>
      </ul>

      <h2 id="sensibles">Données sensibles et données des mineurs</h2>
      <p>
        Le Site Internet n’a pas vocation à recevoir de données de santé : nous vous remercions de ne transmettre aucune information
        médicale via ses formulaires.
      </p>
      <p>
        TeleDok ne cherche pas à collecter de données personnelles sensibles au travers du Site Internet ni dans le cadre des traitements
        décrits dans la Politique, sauf lorsque la loi l’impose ou le permet, ou avec votre consentement exprès.
      </p>
      <p>TeleDok ne collecte pas volontairement de données personnelles de mineurs via le Site Internet.</p>

      <h2 id="tiers">Communication des données à des tiers</h2>
      <p>
        Nous pouvons communiquer vos données personnelles aux tiers listés ci-après, chacun dans son périmètre et s’agissant des seules
        données le concernant :
      </p>
      <ul>
        <li>
          les autorités légalement habilitées, judiciaires ou administratives, à leur demande ou à des fins de signalement, conformément à la
          loi applicable ;
        </li>
        <li>
          les comptables, commissaires aux comptes, avocats et autres conseils professionnels de TeleDok, soumis à des obligations de
          confidentialité ;
        </li>
        <li>nos prestataires et sous-traitants, dans les conditions décrites ci-dessous ;</li>
        <li>
          tout acquéreur potentiel, dans l’éventualité où nous céderions tout ou partie de nos actifs ou activités (y compris en cas de
          réorganisation).
        </li>
      </ul>
      <p>Les sous-traitants qui participent au traitement des données collectées via le Site Internet sont :</p>
      <ul>
        <li>Clever Cloud (France), qui héberge le Site Internet et les documents qui y sont publiés ;</li>
        <li>Resend, qui achemine par courriel les demandes envoyées via les formulaires ;</li>
        <li>Cloudflare, dont le service Turnstile protège l’accès au back-office du Site Internet contre les robots.</li>
      </ul>
      <p>
        Chacun de ces sous-traitants est soumis à des obligations contractuelles lui imposant (i) de ne traiter vos données que
        conformément à nos instructions, (ii) de mettre en œuvre des mesures de protection de leur confidentialité et de leur sécurité, et
        (iii) de respecter toute autre obligation prévue par la réglementation applicable.
      </p>

      <h2 id="conservation">Limitation et durée de conservation des données</h2>
      <p>
        Nous veillons à ce que les données personnelles que nous traitons soient limitées à ce qui est nécessaire aux finalités exposées
        dans la Politique, et ne soient conservées que le temps nécessaire au regard de ces finalités. Les critères utilisés pour déterminer
        les durées de conservation sont les suivants :
      </p>
      <ul>
        <li>
          nous conservons vos données, sous une forme permettant de vous identifier, tant qu’elles sont nécessaires aux finalités décrites
          ci-dessus ;
        </li>
        <li>
          nous les conservons pour la durée de prescription applicable (durée pendant laquelle une réclamation ou une action en justice peut
          être engagée à leur sujet) ;
        </li>
        <li>
          s’agissant des candidatures non suivies d’une collaboration, au plus tard deux (2) ans après le dernier contact ;
        </li>
        <li>
          en tout état de cause, au plus tard cinq (5) ans après la communication des données concernées, celles-ci sont détruites de manière
          permanente ou rendues anonymes, sauf obligation légale de conservation plus longue.
        </li>
      </ul>

      <h2 id="transferts">Transfert des données en dehors de l’Union européenne</h2>
      <p>
        Le Site Internet et ses données sont hébergés en France. Les services Resend et Cloudflare Turnstile sont fournis par des sociétés
        établies aux États-Unis : les données qu’ils traitent (contenu des demandes envoyées via les formulaires pour Resend, données
        techniques de connexion pour Turnstile) peuvent être transférées hors de l’Union européenne. Ces transferts sont encadrés par{' '}
        <span className="todo">[le cadre de protection des données UE–États-Unis (Data Privacy Framework) ou les clauses contractuelles types de la Commission européenne, à confirmer pour chaque prestataire]</span>
        .
      </p>

      <h2 id="droits">Vos droits concernant vos données personnelles</h2>
      <p>Dans les conditions prévues par le RGPD, vous disposez des droits suivants :</p>
      {DROITS.map(([titre, texte]) => (
        <div key={titre}>
          <h3>{titre}</h3>
          <p>{texte}</p>
        </div>
      ))}
      <h3>Droit d’introduire une réclamation auprès de la CNIL</h3>
      <p>
        Pour exercer l’un de ces droits, ou pour toute question relative à la Politique, utilisez les coordonnées indiquées à la section «
        Réclamations et contact » ci-après. Une preuve de votre identité pourra vous être demandée en cas de doute raisonnable.
      </p>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
          cnil.fr
        </a>
        ) :
      </p>
      <address>
        Commission nationale de l’informatique et des libertés
        <br />
        3, place de Fontenoy — TSA 80715
        <br />
        75334 Paris Cedex 07 — France
      </address>

      <h2 id="securite">Sécurité des données personnelles</h2>
      <p>
        Nous prenons les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute
        utilisation abusive, perte, altération, divulgation, destruction, tout accès non autorisé et toute autre forme de traitement illicite.
        Les échanges avec le Site Internet sont chiffrés (HTTPS) et l’accès à son back-office est réservé aux personnes habilitées.
      </p>
      <p>
        Internet étant un système ouvert, la transmission d’informations sur ce réseau n’est jamais totalement sûre : bien que nous mettions
        en œuvre toutes les mesures raisonnables pour protéger vos données, nous ne pouvons garantir la sécurité de celles qui nous sont
        transmises par Internet.
      </p>
      <p>
        L’accès aux données personnelles est limité aux seules personnes qui ont besoin d’en connaître dans le cadre de leur mission, toutes
        tenues à une obligation de confidentialité.
      </p>

      <h2 id="contact">Réclamations et contact</h2>
      <p>
        Pour toute question relative à la Politique, pour exercer vos droits, ou si vous avez des raisons de penser que la sécurité de vos
        données a été compromise, vous pouvez contacter TeleDok :
      </p>
      <ul>
        <li>par courrier : TeleDok, Direction générale — 351 Bureaux de la Colline, 92210 Saint-Cloud Cedex (France) ;</li>
        <li>
          par courriel : <Email /> ;
        </li>
        <li>
          avec copie à Maître Philippe de Bondy — 51 avenue Raymond Poincaré, 75116 Paris, <DpoEmail />, en sa qualité de délégué à la
          protection des données (DPO) externe de TeleDok.
        </li>
      </ul>
      <p>
        TeleDok instruira les réclamations concernant l’utilisation et la communication de vos données personnelles et s’efforcera de les
        résoudre conformément aux principes figurant dans la Politique.
      </p>

      <h2 id="cookies">Politique d’utilisation des cookies</h2>
      <h3>Qu’est-ce qu’un cookie ?</h3>
      <p>
        Un cookie est un petit fichier enregistré par un site Internet sur l’appareil de la personne qui le consulte (ordinateur, tablette,
        smartphone), qui permet de reconnaître cet appareil lors des visites suivantes ou pendant la navigation.
      </p>
      <h3>Les cookies du Site Internet</h3>
      <p>
        La consultation du Site Internet public ne dépose <strong>aucun cookie</strong> : le Site Internet n’utilise ni mesure d’audience, ni
        publicité, ni bouton de partage vers les réseaux sociaux, et ses vidéos comme ses polices de caractères sont servies par le Site
        Internet lui-même, sans faire appel à une plateforme tierce. Aucun bandeau de consentement n’est donc nécessaire.
      </p>
      <p>
        Seules les personnes habilitées qui accèdent au back-office du Site Internet reçoivent des cookies strictement nécessaires, exemptés
        de consentement :
      </p>
      <ul>
        <li>
          <strong>bo_gate</strong> : atteste qu’un contrôle anti-robots a été passé avant d’accéder au back-office ; durée : 30 jours ;
        </li>
        <li>
          <strong>payload-token</strong> : maintient la session de connexion au back-office ; durée : 2 heures.
        </li>
      </ul>
      <h3>Comment contrôler les cookies ?</h3>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour être averti du dépôt de cookies, les refuser ou les supprimer (consultez
        la rubrique « aide » de votre navigateur). Le refus des cookies du back-office empêche simplement de s’y connecter. Pour en savoir
        plus, consultez les recommandations de la CNIL sur{' '}
        <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noreferrer">
          cnil.fr
        </a>
        .
      </p>

      <h2 id="definitions">Définitions</h2>
      <ul>
        {DEFINITIONS.map(([terme, definition]) => (
          <li key={terme}>
            <strong>{terme}</strong> : {definition}
          </li>
        ))}
      </ul>
      <p>
        Voir aussi les <Link href={ROUTES.mentions}>mentions légales</Link> du Site Internet.
      </p>
    </LegalPage>
  )
}
