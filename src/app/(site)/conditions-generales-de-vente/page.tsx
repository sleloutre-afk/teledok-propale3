import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/LegalPage'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Conditions générales de vente des prestations de services Teledok, établies par l'avocat de Teledok (en vigueur le
// 5 novembre 2026). Reprise fidèle ; le cadre « Signature du client » du document papier n'est pas repris en ligne.

export const metadata: Metadata = pageMetadata(
  '/conditions-generales-de-vente',
  'Conditions générales de vente | Teledok',
  'Conditions générales de vente des prestations de services Teledok : objet, prix et paiement, durée, incidents, responsabilité, confidentialité, RGPD.',
)

const sommaire = [
  { id: 'objet', label: '1. Objet du Contrat' },
  { id: 'coordination', label: '2. Coordination' },
  { id: 'nouvelles', label: '3. Nouvelles prestations' },
  { id: 'calendrier', label: '4. Calendrier' },
  { id: 'prix', label: '5. Prix et paiement' },
  { id: 'duree', label: '6. Durée – Résiliation' },
  { id: 'incidents', label: '7. Incidents et pannes' },
  { id: 'pi', label: '8. Propriété intellectuelle' },
  { id: 'force-majeure', label: '9. Force majeure' },
  { id: 'responsabilite', label: '10. Responsabilité – Assurance' },
  { id: 'confidentialite', label: '11. Confidentialité' },
  { id: 'garanties', label: '12. Garanties et déclarations' },
  { id: 'rgpd', label: '13. RGPD' },
  { id: 'corruption', label: '14. Travail dissimulé – Corruption' },
  { id: 'divers', label: '15. Divers' },
  { id: 'communication', label: '16. Communication' },
  { id: 'litiges', label: '17. Droit applicable et litiges' },
]

const Mail = ({ to }: { to: string }) => <a href={`mailto:${to}`}>{to}</a>

export default function Page() {
  return (
    <LegalPage title="Conditions générales de vente des prestations de services Teledok" version="5 novembre 2026" sommaire={sommaire}>
      <p style={{ marginTop: 32 }}>Les présentes Conditions Générales de Vente entrent en vigueur le 5 novembre 2026.</p>
      <p>
        <strong>TELEDOK</strong> est une société par actions simplifiée au capital de 10 000 euros, immatriculée au Registre du commerce et
        des sociétés de Nanterre – France, sous le numéro 843 204 678, dont le siège social est situé 351 Les Bureaux de la Colline – 92210
        Saint-Cloud - France (« <strong>TELEDOK</strong> »).
      </p>
      <p>
        TELEDOK et le Client sont ci-après dénommés individuellement une « <strong>Partie</strong> » et ensemble les «{' '}
        <strong>Parties</strong> ».
      </p>
      <p>
        <strong>Les Parties se sont rapprochées et sont convenues de ce qui suit :</strong>
      </p>

      <h2 id="objet">1. Objet du Contrat – Prestations à fournir par TELEDOK</h2>
      <p>
        Les présentes Conditions Générales de Vente ainsi que les Conditions Particulières issues du Devis émis par TELEDOK, et toutes leurs
        ANNEXES, signées par TELEDOK et le Client, constituent l’intégralité de l’accord (le « <strong>Contrat</strong> ») qui régit la
        manière dont TELEDOK fournira au Client les prestations commandées par le Client - à l’exclusion de tout autre document et
        notamment des conditions générales d’achat du Client.
      </p>
      <p>En cas de contradiction, les Conditions Particulières priment sur les présentes Conditions Générales de Vente.</p>

      <h2 id="coordination">2. Coordination et bon échange d’informations</h2>
      <p>
        Les Parties se coordonneront régulièrement pour s’assurer que la mise en œuvre du Contrat est optimale. Elles devront également
        convenir de bonne foi, au fur et à mesure, de tous les détails opérationnels qui ne sont pas définis dans le Contrat.
      </p>
      <p>
        À cet effet, chacune des Parties désignera un représentant officiel et en communiquera à l’autre Partie le nom, le prénom et les
        coordonnées (adresse électronique et numéro de téléphone portable notamment).
      </p>
      <p>
        Le Client devra transmettre à TELEDOK en temps utile, d’abord avant le début du Contrat, puis au fur et à mesure, chaque fois que
        nécessaire, toutes les informations utiles à la bonne exécution de ses prestations, en outre, il devra en temps utile donner accès
        à ses locaux en cas de prestations réalisées in situ.
      </p>

      <h2 id="nouvelles">3. Nouvelles prestations non incluses</h2>
      <p>
        Toute nouvelle prestation supplémentaire en relation avec le Contrat que le Client souhaiterait commander à TELEDOK, donnera lieu
        à la préparation d’un devis par TELEDOK. Si un tel devis est accepté et signé par le Client, celui-ci s’intègrera de plein droit au
        Contrat.
      </p>

      <h2 id="calendrier">4. Calendrier de déploiement opérationnel</h2>
      <p>Le calendrier de déploiement opérationnel est inclus dans les Conditions Particulières.</p>

      <h2 id="prix">5. Prix et conditions de paiement</h2>
      <p>
        <strong>5.1</strong> Les prix hors taxes des prestations et les modalités de paiement sont mentionnés dans les Conditions
        Particulières.
      </p>
      <p>
        <strong>5.2</strong> TELEDOK adressera au Client des factures libellées en euros par courriel. Ces factures sont payables au plus
        tard dans les trente (30) jours suivant leur réception par le Client. En cas de TVA, chaque facture fera apparaître, en plus du
        montant hors TVA, la TVA au taux légal en vigueur à la date de facturation.
      </p>
      <p>
        <strong>5.3</strong> Tout retard de paiement de tout ou partie d’une somme due à son échéance portera conventionnellement intérêts à
        trois (3) fois le taux d’intérêt légal. Ces intérêts de retard commenceront à courir à compter du jour suivant la date
        d’expiration du délai de paiement de trente (30) jours ci-dessus.
      </p>
      <p>
        <strong>5.4</strong> A défaut de régularisation, le Client sera tenu, outre des intérêts de retard ci-dessus, au paiement de
        l’indemnité forfaitaire de 40 euros issue de l’application des articles L. 441-10 II. et D 441-5 du Code de commerce ainsi que, si
        TELEDOK a été contrainte de les engager, du remboursement des frais et honoraires raisonnables de recouvrement. En outre, TELEDOK
        pourra résilier le Contrat, conformément à l’<a href="#duree">article 6.2</a> ci-dessous.
      </p>

      <h2 id="duree">6. Durée du contrat - Résiliation</h2>
      <p>
        <strong>6.1</strong> Le Contrat prend effet à la date mentionnée dans les Conditions Particulières et, sauf résiliation anticipée
        pour manquement en application des dispositions ci-dessous, restera en vigueur pendant la durée mentionnée dans les Conditions
        Particulières.
      </p>
      <p>
        <strong>6.2</strong> Chacune des Parties peut résilier le Contrat sans recours au Juge si l’autre Partie manquait à l’une ou l’autre
        de ses obligations découlant du Contrat et ne remédiait pas à ce manquement dans les quinze (15) jours suivant la réception de la
        notification envoyée par la Partie victime de ce manquement. Une telle résiliation ne constitue pas une renonciation de la Partie
        lésée à son droit à demander d’éventuels dommages et intérêts.
      </p>

      <h2 id="incidents">7. Dispositif d’alerte et de traitement des incidents ou des problèmes – Panne des systèmes</h2>
      <p>
        <strong>7.1</strong> Le Client devra informer sans délai TELEDOK en utilisant l’adresse courriel suivante{' '}
        <Mail to="contact@teledok.fr" /> en cas d’incident ou de problème de toute nature affectant le bon déroulement de ses prestations.
      </p>
      <p>
        TELEDOK prendra en compte l’incident ou le problème survenu dans un délai d’au plus tard vingt-quatre (24) heures courant à compter
        de la réception de l’alerte. Ce délai court à compter du premier jour ouvré suivant, si le signalement a été reçu un week-end, un
        jour férié ou un jour chômé en France.
      </p>
      <p>
        Une solution (ou une solution de contournement) sera déployée par TELEDOK dans un délai supplémentaire de huit (8) jours, qui
        pourra être prolongé en cas de situation grave.
      </p>
      <p>
        Si l’incident ou le problème durait alors plus de huit (8) jours (ou tout délai prolongé tel qu’indiqué par TELEDOK en cas de
        situation grave), et si TELEDOK ou ses prestataires étaient responsables de la cause de l’incident, le Client bénéficiera d’une
        prolongation des services égale à cette période d’indisponibilité supérieure à huit (8) jours (ou tout délai prolongé tel
        qu’indiqué par TELEDOK en cas de situation grave). Dans ce cas, le Client ne pourra prétendre à aucun autre type de dommages et
        intérêts ou d’indemnités à ce titre ou pour quelque autre motif que ce soit.
      </p>
      <p>
        <strong>7.2</strong> Les opérations utilisant divers systèmes électroniques (tels que des appareils de téléconsultation médicale ou
        autres équipements), le Client est informé que ces systèmes peuvent connaître des bogues ou autres types de dysfonctionnements
        pouvant entraîner des arrêts ou des ralentissements complets ou partiels. Les mises à niveau et les maintenances correctives seront
        effectuées de préférence en période de faible utilisation des services. Le Client est également informé que la possibilité
        d’utiliser les services repose sur le bon fonctionnement des équipements et logiciels informatiques appartenant au Client et à des
        tiers, ainsi que sur le bon fonctionnement d’Internet, du réseau électrique et des télécommunications et réseaux satellitaires,
        TELEDOK ne pouvant être tenue pour responsable des déficiences de l’un ou l’autre quelconque de ceux-ci.
      </p>

      <h2 id="pi">8. Propriété intellectuelle</h2>
      <p>
        Le Client ne peut prétendre à aucun droit, notamment de propriété intellectuelle ou industrielle, sur toute connaissance, quel qu’en
        soit le support, qu’elle soit protégeable par des titres privatifs (brevets, marques, noms de domaine, dessins, modèles, plans,
        maquettes, etc.), ou par des droits privatifs (logiciels, design, bases de données, etc.), ou qu’elle ne soit pas protégeable par
        des titres ou des droits privatifs (savoir-faire, algorithmes, réalisations non brevetées, etc.), appartenant à TELEDOK ou dont
        cette dernière est titulaire (ou le cas échéant ses prestataires, fournisseurs ou sous-traitants), et qui lui aurait été
        communiquée ou à laquelle elle aurait eu accès dans le cadre de l’exécution du Contrat.
      </p>

      <h2 id="force-majeure">9. Force Majeure</h2>
      <p>
        <strong>9.1</strong> Aucune des Parties ne peut être tenue pour responsable en cas de manquement à ses obligations si ce
        manquement est dû à un cas de force majeure au sens de l’article 1218 du Code civil (auquel sont assimilés, relativement aux effets
        juridiques ci-dessous, le cas fortuit et le fait de tiers). La Partie qui invoque un tel cas doit, dès que possible après la
        survenance de ce dernier :
      </p>
      <p>
        <strong>(a)</strong> Notifier l’autre Partie de la nature et de la gravité du cas de force majeure ; et
      </p>
      <p>
        <strong>(b)</strong> Accomplir les actes raisonnablement possibles en vue d’atténuer les effets du cas de force majeure et reprendre
        l’exécution des obligations affectées dès que possible.
      </p>
      <p>
        <strong>9.2</strong> Le délai d’exécution d’une obligation affectée par un cas de force majeure doit être prolongé pour une durée
        égale au temps perdu en raison d’un tel événement.
      </p>
      <p>
        <strong>9.3</strong> Si le cas de force majeure venait à durer plus de deux (2) mois de calendrier consécutifs, la Partie non
        affectée par le cas de force majeure pourra mettre fin au Contrat de plein droit moyennant notification à l’autre Partie.
      </p>
      <p>
        <strong>9.4</strong> La responsabilité de TELEDOK ne saurait être engagée dans de tels cas de force majeure et cas assimilés
        ci-dessus.
      </p>

      <h2 id="responsabilite">10. Responsabilité - Assurance</h2>
      <p>
        <strong>10.1</strong> La responsabilité de TELEDOK pourra être engagée par le Client en cas d’inexécution de ses obligations au
        titre du Contrat causant au Client un préjudice direct, réel, prouvé et quantifiable.
      </p>
      <p>
        Cette responsabilité, si elle est engagée, ne couvrira pas l’indemnisation des préjudices indirects (perte de chiffre d’affaires,
        préjudice d’image, etc.).
      </p>
      <p>
        En tout état de cause, la responsabilité de TELEDOK sera limitée (i) au montant contractuel hors taxes de la prestation défaillante,
        et (ii) dans la limite de la période contractuelle en cours. Toutefois, lorsque, en vertu de textes légaux d’ordre public, cette
        limite contractuelle ne peut s’appliquer, la responsabilité de TELEDOK sera limitée dans tous les cas au montant effectivement
        couvert par sa police d’assurance responsabilité civile professionnelle.
      </p>
      <p>
        <strong>10.2</strong> Par ailleurs, si l’activité de TELEDOK dans le cadre de l’exécution du Contrat constituait une prestation de
        conseil, celle-ci relèvera d’une obligation de moyens. Dans ce cas, la responsabilité de TELEDOK ne saurait être engagée si tout ou
        partie des avis émis donnaient lieu à des décisions, lesquelles et leurs conséquences relevant alors de la responsabilité exclusive
        du Client. TELEDOK ne peut garantir que ses conseils ou interventions aboutiront à la réalisation d’un quelconque succès ou
        objectif.
      </p>
      <p>
        <strong>10.3</strong> TELEDOK ne peut également être tenue responsable en cas de force majeure ou cas assimilés ci-avant, ou de
        panne, tels que mentionnés aux <strong>articles 7 et 9</strong> ci-dessus, de même qu’à la suite de toute action ou inaction du
        Client (en ce compris ses salariés, mandataires sociaux, prestataires ou fournisseurs).
      </p>
      <p>
        <strong>10.4</strong> Il est rappelé que TELEDOK n’est pas un professionnel de santé. Les professionnels de santé susceptibles
        d’intervenir dans le cadre des dispositifs le sont en tout indépendance et disposent de leur responsabilité professionnelle propre.
        Ceux-ci ne sont pas des sous-traitants de TELEDOK. La responsabilité de TELEDOK ne peut en aucun cas être engagée pour tout ce qui
        concerne les actes de santé qui seront réalisés par lesdits professionnels de santé, le contrat médical ou de soin se formant
        directement entre ceux-ci et les patients.
      </p>
      <p>
        <strong>10.5</strong> TELEDOK maintiendra en vigueur une assurance responsabilité civile professionnelle dont elle communiquera
        l’attestation au Client sur simple demande.
      </p>

      <h2 id="confidentialite">11. Confidentialité</h2>
      <p>
        <strong>11.1</strong> Les Parties considèrent comme strictement confidentielles toutes les données, informations ou connaissances,
        sous quelque forme, nature ou support que ce soit, qu’elles ont été, sont ou seront amenées à connaître, même fortuitement, dans le
        cadre de la négociation et de l’exécution du Contrat (les « <strong>Informations Confidentielles</strong> »), et s’engagent à ne
        pas communiquer ni divulguer les Informations Confidentielles à des tiers.
      </p>
      <p>Ne sont pas considérées comme Informations Confidentielles, les informations, documents ou autres éléments de toute nature qui :</p>
      <ul>
        <li>
          Étaient dans le domaine public au moment de leur divulgation ou qui sont tombés dans le domaine public sans violation des présentes
          stipulations ; ou
        </li>
        <li>
          Résultent de connaissances internes à l’une ou l’autre des Parties sans qu’il y ait eu violation de la présente obligation de
          confidentialité par cette dernière ; ou
        </li>
        <li>
          Qui ont été obtenus d’un tiers (i) qui les a lui-même obtenus de manière légale et (ii) qui n’est pas soumis à une obligation de
          confidentialité d’origine légale ou contractuelle ; ou
        </li>
        <li>
          Qui ont été expressément considérés et marqués comme non confidentiels par la Partie qui les a communiqués à l’autre Partie dans le
          cadre du Contrat.
        </li>
      </ul>
      <p>
        L’obligation de confidentialité du présent article prend effet à compter de la signature du Contrat et prendra fin trois (3) ans
        après sa cessation pour quelque cause que ce soit.
      </p>
      <p>
        <strong>11.2</strong> Par ailleurs, les Parties reconnaissent que certaines Informations Confidentielles échangées dans le cadre du
        Contrat peuvent être soumises au secret professionnel. S’agissant de ces Informations Confidentielles, chacune des Parties s’engage
        respectivement à :
      </p>
      <ul>
        <li>Ne les utiliser qu’aux fins exclusives de l’exécution du Contrat ; et</li>
        <li>
          Ne pas les communiquer directement ou indirectement, sous quelque forme que ce soit, en tout ou partie, en dehors de l’exécution
          du Contrat.
        </li>
      </ul>
      <p>L’obligation de respect du secret professionnel est réputée sans limitation de durée.</p>
      <p>
        <strong>11.3</strong> Nonobstant ce qui précède, chaque Partie pourra divulguer les Informations Confidentielles précitées :
      </p>
      <ul>
        <li>S’agissant de TELEDOK, aux professionnels de santé intervenants ;</li>
        <li>
          Aux sociétés du groupe auquel elle appartient (un groupe étant entendu comme une société mère et les sociétés contrôlées
          directement ou indirectement par celle-ci au sens de l’article L. 233-3 du code de commerce) ;
        </li>
        <li>A un tiers en cas d’accord préalable et écrit de l’autre Partie ;</li>
        <li>
          A ses Avocats ou à tout autre conseil intervenant qui (i) reconnaît leur caractère confidentiel et (ii) est assujetti à un devoir
          de confidentialité d’origine légale ou contractuelle ;
        </li>
        <li>
          A la requête de toute autorité publique ayant compétence, pour les besoins de l’application de toute loi, règlement, ordonnance ou
          décision applicable, mais sous réserve alors de notifier l’autre Partie dès qu’elle a connaissance d’une telle demande.
        </li>
      </ul>

      <h2 id="garanties">12. Garanties et déclarations</h2>
      <p>
        <strong>12.1</strong> Chacune des Parties déclare et garantit pour ce qui la concerne qu’elle détient l’autorité, la capacité et les
        moyens, et qu’elle a obtenu tous les consentements et autorisations requis, pour conclure le Contrat et exécuter toutes les
        obligations qui en découlent pendant sa durée.
      </p>
      <p>
        <strong>12.2</strong> Les Parties déclarent que leurs activités respectives sont conformes aux lois et règlements applicables.
      </p>

      <h2 id="rgpd">13. Règlement général sur la protection des données (RGPD)</h2>
      <h3>13.1 Politique RGPD de TELEDOK</h3>
      <p>
        Les données personnelles que le Client et toute personne liée (les « <strong>Personnes</strong> ») ont communiqué à TELEDOK (telles
        que leurs nom, prénom, numéro de téléphone, adresse postale et courriel) sont collectées et traitées dans le cadre du Contrat à des
        fins opérationnelles, administratives, comptables et juridiques. Les données ainsi recueillies sont traitées conformément à la{' '}
        <Link href={ROUTES.confidentialite}>politique de protection des données personnelles</Link> établie par TELEDOK, en sa qualité de
        Responsable de Traitement, qui se trouve sur le site Internet de TELEDOK. Ces données seront conservées conformément aux
        dispositions de ladite politique. Conformément au RGPD et à la législation applicable, les Personnes bénéficient d’un droit d’accès
        et de rectification aux informations qui les concernent. Elles peuvent demander l’effacement des données ou exercer leur droit à la
        limitation de leur traitement ou à la portabilité desdites données ou encore s’opposer au traitement des données, dans le cadre
        prévu par le RGPD. Si les Personnes souhaitent (i) exercer l’un et/ou l’autre de ces droits ou (ii) obtenir communication des
        informations les concernant ou (iii) poser toute question sur le traitement de leurs données, elles pourront adresser leur demande
        à l’adresse suivante : <Mail to="pdebondy@lawval.com" />. Si les Personnes estimaient, après avoir contacté TELEDOK, que leurs
        droits « Informatique et Libertés » ne sont pas respectés, elles pourront adresser une réclamation à la « Commission Nationale de
        l’Informatique et des Libertés - CNIL » 3, place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07 - FRANCE.
      </p>
      <h3>13.2 Politique RGPD du Client</h3>
      <p>
        Le Client garantit et déclare disposer d’une politique RGPD et que celle-ci est pleinement conforme au RGPD et à la législation
        applicable.
      </p>
      <h3>13.3 Données personnelles de santé</h3>
      <p>
        TELEDOK qui n’est pas un professionnel de santé ne collecte ni ne traite de données personnelles de santé. Les données personnelles
        de santé des patients sont collectées et traitées par les professionnels de santé intervenants dans le cadre de la réglementation
        qui leur est propre.
      </p>

      <h2 id="corruption">14. Prévention du travail dissimulé – Prévention de la corruption</h2>
      <p>
        <strong>14.1</strong> Dans le cadre de la lutte contre le travail dissimulé, TELEDOK s’engage à respecter en tous points la
        législation applicable et à transmettre au Client, à sa demande, tous documents administratifs et non couverts par le secret des
        affaires le justifiant.
      </p>
      <p>
        <strong>14.2</strong> Par ailleurs, les Parties s’engagent à respecter les dispositions du Code pénal français en ce qui concerne la
        lutte contre la corruption, ainsi que combattre la corruption et le blanchiment des capitaux sous toutes ses formes. Elles devront
        avoir un comportement éthiquement responsable avec les autorités des pays où elles sont implantées et où elles exercent leurs
        activités.
      </p>
      <p>Les Parties s’engagent à respecter toutes les lois qui leurs sont applicables en matière de lutte anti-corruption.</p>
      <p>A cet effet, les Parties s’engagent à :</p>
      <ul>
        <li>
          Ne pas proposer directement ou indirectement, des offres, des promesses, des dons, des présents ou des avantages quelconques
          disproportionnés au vu de leurs procédures internes (charte éthique) à un salarié, à un mandataire social ou à un représentant de
          l’autre Partie, pour lui-même ou pour autrui, en vue qu’il accomplisse ou s’abstienne d’accomplir des actes dans le cadre de sa
          fonction, ou utilise son influence, en vue de faire obtenir des marchés, des commandes ou toute autre décision favorable ;
        </li>
        <li>
          Appliquer les différentes règlementations relatives à la lutte et à la prévention de la corruption, notamment les textes du Code
          pénal français traitant de la corruption passive et active, du trafic d’influence et de la prise illégale d’intérêts.
        </li>
      </ul>
      <p>
        En cas de doute de l’une ou l’autre des Parties sur le bon respect des engagements du présent article par l’autre Partie, la
        première pourra saisir la personne chargée de l’éthique auprès de la seconde afin d’obtenir des éclaircissements.
      </p>
      <p>
        Chacune des Parties s’engage à fournir toute assistance nécessaire à l’autre Partie pour répondre à une demande d’une autorité dûment
        habilitée relative à la lutte contre la corruption. Elle s’engage en outre à informer sans délai l’autre Partie de tous éléments qui
        seraient portés à sa connaissance et susceptibles d’entraîner sa responsabilité au titre du présent article.
      </p>
      <p>
        Chacune des Parties se réserve le droit de demander communication à l’autre Partie de tous éléments qu’elle estimera utile pour
        établir que cette dernière s’est conformée pendant toute la durée d’exécution du Contrat aux législations afférentes à la lutte
        contre la corruption, et ce pendant toute la durée du Contrat et une période subséquente de cinq (5) ans après sa terminaison ou sa
        résiliation anticipée.
      </p>
      <p>
        Tout manquement de la part de l’une ou l’autre des Parties aux stipulations du présent article devra être considéré comme un
        manquement grave autorisant la Partie subissant ce manquement, si bon lui semble, à résilier le Contrat sans préavis ni indemnité
        sur simple notification, sans préjudice de tous dommages et intérêts auxquels elle pourrait prétendre du fait d’un tel manquement.
      </p>

      <h2 id="divers">15. Divers</h2>
      <p>
        <strong>15.1 Relation entre les Parties.</strong> Les dispositions du Contrat ne créent aucune association ou relation salariale
        entre les Parties, et aucune des Parties ne pourra être considérée comme un agent ou un représentant de l’autre Partie. Chaque
        Partie agit en tant que société indépendante et aucune des Parties ne peut agir au nom de l’autre Partie de quelque manière que ce
        soit.
      </p>
      <p>
        <strong>15.2 Notification.</strong> Toute notification en vertu du Contrat doit être rédigée en Français et doit être envoyée par
        lettre recommandée avec demande d’avis de réception, par courrier express (CHRONOPOST ou DHL) ou par lettre remise en main propre.
        L’avis est réputé reçu (a) pour une lettre recommandée avec demande d’avis de réception, à la date à laquelle elle est présentée
        par La Poste pour la première fois au destinataire, et (b) pour un courrier express ou une lettre remise en main propre, à la date
        de la signature de l’accusé de réception correspondant. Les notifications ne peuvent être envoyées par fax ou par courriel, sauf
        disposition contraire du Contrat.
      </p>
      <p>
        <strong>15.3 Sous-traitance.</strong> TELEDOK peut sous-traiter certaines obligations découlant du Contrat. TELEDOK reste alors
        responsable de la bonne exécution des obligations ainsi sous-traitées.
      </p>
      <p>
        <strong>15.4 Insolvabilité/sanction.</strong> Chacune des Parties notifiera sans délai l’autre Partie si elle faisait l’objet (i)
        d’une procédure administrative, d’une action en justice ou de toute autre action, demande ou mesure, pouvant conduire (a) à sa mise
        sous sauvegarde, ou autre régime similaire de nature à affecter les droits des créanciers, en raison de difficultés financières ou
        (b) à sa dissolution ou à sa liquidation, ou (ii) à une sanction susceptible d’affecter le bon déroulement de ses activités.
      </p>
      <p>
        <strong>15.5 Cession.</strong> Chacune des Parties ne peut céder ou transférer le Contrat ou tout droit ou obligation découlant du
        Contrat, en application de la loi ou autrement (y compris par voie de cession de ses actions ou parts sociales, fusion, scission,
        cession ou apport d’actifs, cession de fonds de commerce, etc.), sans le consentement préalable et écrit de l’autre Partie, sauf
        lorsque qu’une telle opération intervient au sein de son éventuel groupe (tel que défini ci-avant) d’appartenance, auquel cas seule
        une notification préalable et documentée à l’autre Partie est nécessaire.
      </p>
      <p>
        <strong>15.6 Intégralité de l’accord.</strong> Le Contrat constitue l’intégralité de l’accord entre les Parties relativement à son
        objet et annule et remplace toutes les communications et tous les documents partagés entre les Parties avant sa signature. Le
        Contrat ne peut être modifié que par voie d’avenant dûment signé par les représentants légaux ou autorisés des deux Parties.
      </p>
      <p>
        <strong>15.7 Renonciation.</strong> La décision de ne pas exercer ou l’exercice tardif par une Partie de tout ou partie de l’un
        quelconque de ses droits en vertu du Contrat ne constitue pas une renonciation à ces droits.
      </p>
      <p>
        <strong>15.8 Divisibilité.</strong> Si l’une ou l’autre des clauses du Contrat était déclarée nulle ou inapplicable, celle-ci sera
        considérée comme n’ayant jamais existé, sans que cela n’affecte la validité des autres stipulations du Contrat. Dans ce cas, les
        Parties feront leurs meilleurs efforts pour remplacer sans délai la clause nulle ou inapplicable par une nouvelle clause qui
        reflétera autant que possible l’esprit, la portée et l’équilibre de la clause en cause.
      </p>

      <h2 id="communication">16. Communication</h2>
      <p>
        <strong>16.1</strong> TELEDOK sera en droit de référencer le Client dans sa documentation commerciale et de communication.
      </p>
      <p>
        <strong>16.2</strong> Les Parties devront veiller à ne pas porter atteinte à l’image et à la réputation l’une de l’autre.
      </p>

      <h2 id="litiges">17. Droit applicable et règlement des litiges</h2>
      <p>
        <strong>17.1</strong> Le Contrat et toutes les obligations non contractuelles entre les Parties sont régis par la loi française.
      </p>
      <p>
        <strong>17.2</strong> Pour tout litige découlant du Contrat (le « <strong>Litige</strong> ») :
      </p>
      <p>
        <strong>(a)</strong> Les Parties conviennent de faire leurs meilleurs efforts pour parvenir à un règlement amiable du Litige. À cet
        effet, les Parties devront chacune nommer un représentant dans les huit (8) jours suivant la réception de la notification
        déclenchant la présente clause envoyée par la Partie la plus diligente. Ces deux représentants devront se réunir dans le but de
        résoudre le Litige dans les trente (30) jours suivant leur désignation (la « <strong>Période de Conciliation</strong> »).
      </p>
      <p>
        <strong>(b)</strong> Si les Parties ne parvenaient pas à une résolution à l’amiable du Litige au plus tard à la fin de la Période de
        Conciliation, celui-ci sera soumis, (i) si le Client présente la qualité de société commerciale ou de commerçant, à la compétence
        exclusive du Tribunal des Activités Économiques de Nanterre, (ii) si le Client ne présente pas ces qualités, à la juridiction
        compétente dans lequel se trouve le siège de la Partie défenderesse.
      </p>
    </LegalPage>
  )
}
