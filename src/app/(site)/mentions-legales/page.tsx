import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/LegalPage'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Texte établi sur le modèle des mentions légales et CGU du site Doxamed (même groupe, Capitello Group).
// Identité de TELEDOK : registre national des entreprises (SIREN 843 204 678).

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/mentions-legales',
  'Mentions légales | Teledok',
  'Mentions légales et conditions générales d’utilisation du site Teledok : éditeur, directeur de la publication, hébergement, propriété intellectuelle, responsabilité.',
)

const sommaire = [
  { id: 'editeur', label: 'Éditeur du site' },
  { id: 'hebergement', label: 'Hébergement' },
  { id: 'sante', label: 'Information médicale' },
  { id: 'objet', label: 'Objet des CGU' },
  { id: 'definitions', label: 'Définitions' },
  { id: 'services', label: 'Services et accès' },
  { id: 'obligations', label: 'Obligations des parties' },
  { id: 'donnees', label: 'Données personnelles' },
  { id: 'pi', label: 'Propriété intellectuelle' },
  { id: 'responsabilite', label: 'Responsabilité et force majeure' },
  { id: 'liens', label: 'Liens hypertextes' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'credits', label: 'Crédits' },
  { id: 'droit', label: 'Droit applicable' },
]

const Email = () => <a href="mailto:contact@teledok.fr">contact@teledok.fr</a>

export default function Page() {
  return (
    <LegalPage
      title="Mentions légales"
      updated="3 novembre 2026"
      sommaire={sommaire}
      notice="Texte établi sur le modèle des mentions légales du site Doxamed, à faire valider par le juriste du groupe avant publication."
    >
      <p style={{ marginTop: 32 }}>
        La société TELEDOK (société par actions simplifiée au capital de 10 000 euros, ayant son siège social 351 Bureaux de la Colline –
        92210 Saint-Cloud Cedex, immatriculée au Registre du commerce et des sociétés de Nanterre sous le numéro 843 204 678) est
        exploitante du site Internet accessible via le lien URL suivant : www.teledok.fr (ci-après le « Site Internet »).
      </p>
      <p>
        En cas de questions concernant le Site Internet, l’Utilisateur peut contacter la société TELEDOK gratuitement, par courriel, à
        l’adresse suivante : <Email />.
      </p>

      <h2 id="editeur">Éditeur du site et directeur de la publication</h2>
      <p>Le Site Internet est édité par la société TELEDOK, dont les coordonnées figurent ci-dessus.</p>
      <p>
        Le directeur de la publication est la société CAPITELLO GROUP, présidente de la société TELEDOK, société par actions simplifiée à
        associé unique au capital de 500 euros, dont le siège social est sis 122, avenue Charles de Gaulle – 92200 Neuilly-sur-Seine,
        immatriculée au Registre du commerce et des sociétés de Nanterre sous le numéro 793 498 684, représentée par son président,
        M. Arnaud Molinié.
      </p>

      <h2 id="hebergement">Hébergement</h2>
      <p>
        Le Site Internet (application et contenus) est hébergé par Clever Cloud SAS, société par actions simplifiée au capital de
        22 952 euros, immatriculée au Registre du commerce et des sociétés de Nantes sous le numéro 524 172 699 (SIRET 524 172 699 00034),
        dont le siège social est situé 4 rue Voltaire, 44000 Nantes (France), téléphone : 02 85 52 07 69 —{' '}
        <a href="https://www.clever-cloud.com" target="_blank" rel="noreferrer">
          clever-cloud.com
        </a>
        .
      </p>
      <p>
        Les documents mis en ligne sur le Site Internet (publications et synthèses de travaux de recherche, notamment) sont stockés sur le
        service de stockage Cellar de Clever Cloud. L’ensemble des serveurs et des données est situé en France.
      </p>

      <h2 id="sante">Information médicale</h2>
      <p>
        Les informations publiées sur le Site Internet ont une vocation générale d’information sur Teledok, ses activités et ses travaux.
        Elles ne constituent pas un avis médical et ne remplacent en aucun cas une consultation avec un professionnel de santé.
      </p>
      <p>
        Le Site Internet ne permet ni de prendre rendez-vous, ni d’obtenir une consultation, ni de transmettre des informations médicales :
        les formulaires qu’il propose ne doivent pas être utilisés à cette fin.
      </p>
      <p>
        <strong>En cas d’urgence, composez le 15 (SAMU) ou le 112.</strong>
      </p>

      <h2 id="objet">Objet des conditions générales d’utilisation</h2>
      <p>
        Les présentes conditions générales d’utilisation (les « CGU ») constituent un contrat entre l’Utilisateur et la société TELEDOK.
      </p>
      <p>Les CGU s’appliquent de plein droit lorsque l’Utilisateur accède au Site Internet et l’utilise.</p>

      <h2 id="definitions">Définitions</h2>
      <p>Les différents termes indiqués ci-dessous devront être interprétés de la manière suivante :</p>
      <ul>
        <li>
          <strong>« Utilisateur »</strong> : désigne la personne qui accède au Site Internet et l’utilise.
        </li>
        <li>
          <strong>« Site Internet »</strong> : le Site Internet TELEDOK.
        </li>
        <li>
          <strong>« Contenu »</strong> : désigne tous les éléments qui sont accessibles au sein du Site Internet : documents, informations,
          publications, logotypes, photographies, contenus audiovisuels, ou autres éléments de quelque nature que ce soit.
        </li>
      </ul>

      <h2 id="services">Description des services et accès</h2>
      <p>
        Le Site Internet permet aux Utilisateurs d’avoir accès aux services, fonctionnalités et Contenus qu’il propose, notamment la
        présentation de Teledok, la consultation de ses publications et l’envoi de candidatures ou de demandes de contact. Ceux-ci sont
        évolutifs, de même que les CGU, sans information préalable de l’Utilisateur. Celui-ci est donc invité à en prendre connaissance
        régulièrement pour se tenir au courant.
      </p>
      <p>
        L’accès au Site Internet peut être fait par tout Utilisateur, depuis le monde entier, de manière gratuite et illimitée sur tous les
        supports adaptés permettant leur accès (ordinateur, smartphone, tablette, etc.).
      </p>
      <p>Les CGU régissent de plein droit toute visite et utilisation du Site Internet.</p>

      <h2 id="obligations">Obligations des parties</h2>
      <p>
        L’Utilisateur s’engage à respecter les CGU en tous points et à effectuer une utilisation strictement personnelle, non cessible, non
        transférable et non commerciale, du Site Internet et de ses Contenus.
      </p>
      <p>
        La société TELEDOK s’engage à permettre au mieux l’accès et l’utilisation du Site Internet par l’Utilisateur et à faire tous ses
        efforts raisonnables pour assurer son bon fonctionnement.
      </p>
      <p>
        La responsabilité de la société TELEDOK ne saurait être engagée pour tous événements, inconvénients ou dommages inhérents à
        l’utilisation du réseau Internet, notamment en cas d’interruption du service, d’intrusion extérieure ou de présence de virus
        informatiques.
      </p>
      <p>
        Le Site Internet fonctionnant grâce à des programmes informatiques, l’Utilisateur est informé que ceux-ci pourront rencontrer des
        dysfonctionnements et des bugs causant leur arrêt total, partiel ou leur ralentissement. Les opérations de maintenance correctives et
        évolutives seront mises en œuvre, de préférence, à des heures où le Site Internet est peu consulté.
      </p>
      <p>
        L’Utilisateur est également informé que l’accès au Site Internet dépend du bon fonctionnement de ses matériels et de ses programmes
        informatiques, de ceux de tiers ainsi que des réseaux Internet, électrique et de télécommunication, dont la société TELEDOK n’est pas
        responsable.
      </p>

      <h2 id="donnees">Données personnelles</h2>
      <p>
        Le traitement des données personnelles, notamment de celles transmises via les formulaires du Site Internet, est décrit dans la{' '}
        <Link href={ROUTES.confidentialite}>politique de confidentialité</Link> de la société TELEDOK.
      </p>

      <h2 id="pi">Propriété intellectuelle</h2>
      <p>
        L’Utilisateur dispose des seuls droits de consulter, d’utiliser et de prendre des copies des pages du Site Internet pour ses seuls
        besoins personnels et en conformité avec les CGU. L’Utilisateur reconnaît ne pouvoir prétendre à aucun autre droit sur le Site
        Internet et sur ses Contenus.
      </p>
      <p>
        Tous les Contenus du Site Internet sont la propriété de la société TELEDOK ou celle de tiers ; ils ne peuvent notamment pas être
        reproduits ou publiés sans l’accord préalable et écrit, selon le cas, de la société TELEDOK et/ou de celle des tiers concernés. Les
        publications et travaux de recherche restent la propriété de leurs auteurs ; leur citation doit mentionner leur source.
      </p>
      <p>
        Pour toute question sur ce point, l’Utilisateur est invité à poser la question à l’adresse courriel suivante : <Email />.
      </p>

      <h2 id="responsabilite">Responsabilité et force majeure</h2>
      <p>
        Les Contenus sont réputés fiables et sont mis à jour régulièrement mais la société TELEDOK ne peut garantir l’absence d’éventuels
        défauts, erreurs ou omissions les concernant. La société TELEDOK ne peut être tenue responsable de l’utilisation et des
        interprétations des Contenus du Site Internet ; là encore, l’Utilisateur est invité à les vérifier.
      </p>
      <p>
        La société TELEDOK ne saurait encourir aucune responsabilité, notamment en cas d’impossibilité d’accès au Site Internet ou aux
        Contenus, en cas de survenance d’un événement relevant de la force majeure ; par force majeure on entend les circonstances qui
        empêchent l’exécution par la société TELEDOK de ses obligations. Il s’agit notamment des inondations, des tempêtes, des incendies,
        des tremblements de terre, des grèves, des blocus, des mesures gouvernementales, des épidémies et pandémies, de l’interruption des
        activités des opérateurs télécoms, Internet ou fournisseurs d’électricité, ou encore du non-respect de leurs obligations, résultant
        d’un événement de force majeure, affectant les prestataires, les fournisseurs ou les sous-traitants de la société TELEDOK, et, plus
        généralement, de toutes circonstances indépendantes de la volonté de la société TELEDOK à raison de la survenance desquelles le
        respect de ses obligations ne peut raisonnablement être attendu d’elle.
      </p>
      <p>Sont assimilés à un cas de force majeure, le cas fortuit et le fait de tiers.</p>

      <h2 id="liens">Liens hypertextes</h2>
      <p>
        Le Site Internet pourra utiliser des liens hypertextes dans ses Contenus. Ces liens permettent à l’Utilisateur, qui en a
        connaissance, de naviguer sur d’autres sites Internet, applications ou autres plateformes digitales.
      </p>
      <p>
        La société TELEDOK ne peut en aucun cas être tenue responsable si ces liens ne fonctionnaient pas ou des contenus de ces autres sites
        Internet, applications ou autres plateformes digitales.
      </p>

      <h2 id="cookies">Cookies</h2>
      <p>
        Le Site Internet ne dépose aucun cookie de mesure d’audience, de publicité ou de réseaux sociaux. La politique de cookies applicable
        figure dans la <Link href={`${ROUTES.confidentialite}#cookies`}>politique de confidentialité</Link> de la société TELEDOK.
      </p>

      <h2 id="credits">Crédits</h2>
      <ul>
        <li>Portraits de la direction : Teledok.</li>
        <li>Certaines illustrations et vidéos du Site Internet ont été réalisées à l’aide d’outils d’intelligence artificielle.</li>
        <li>
          Conception et réalisation : TheOtter —{' '}
          <a href="https://www.theotter.fr" target="_blank" rel="noreferrer">
            www.theotter.fr
          </a>
          .
        </li>
      </ul>

      <h2 id="droit">Droit applicable et juridiction compétente</h2>
      <p>Le droit applicable aux CGU est la loi française.</p>
      <p>
        En cas d’absence de résolution amiable de tout litige concernant les CGU, les tribunaux du ressort de la Cour d’appel de Versailles
        seront exclusivement compétents pour en connaître.
      </p>
    </LegalPage>
  )
}
