import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/LegalPage'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Texte des conditions générales d'utilisation établi par l'avocat de Teledok (version du 5 novembre 2026),
// article 1 « Mentions légales » compris. Reprise fidèle ; seules la typographie et les liens sont propres au site.

export const metadata: Metadata = pageMetadata(
  '/mentions-legales',
  'Mentions légales et CGU | Teledok',
  'Mentions légales et conditions générales d’utilisation du site Teledok : éditeur, directeur de la publication, hébergement, propriété intellectuelle, responsabilité.',
)

const sommaire = [
  { id: 'mentions', label: '1. Mentions légales' },
  { id: 'objet', label: '2. Objet du contrat' },
  { id: 'definitions', label: '3. Définitions' },
  { id: 'services', label: '4. Description des services' },
  { id: 'acces', label: '5. Accès' },
  { id: 'obligations', label: '6. Obligations des parties' },
  { id: 'donnees', label: '7. Données personnelles' },
  { id: 'pi', label: '8. Propriété intellectuelle' },
  { id: 'responsabilite', label: '9. Responsabilité et force majeure' },
  { id: 'liens', label: '10. Liens hypertextes' },
  { id: 'cookies', label: '11. Cookies' },
  { id: 'droit', label: '12. Droit applicable' },
]

const Email = () => <a href="mailto:contact@teledok.fr">contact@teledok.fr</a>

export default function Page() {
  return (
    <LegalPage title="Mentions légales et conditions générales d’utilisation" version="5 novembre 2026" sommaire={sommaire}>
      <p style={{ marginTop: 32 }}>
        La société <strong>TELEDOK</strong> (société par actions simplifiée à associé unique au capital de 10 000 euros, ayant son siège
        social 351 Les Bureaux de la Colline – 92210 Saint-Cloud, immatriculée au Registre du commerce et des sociétés de Nanterre sous le
        numéro 843 204 678) est exploitante du site Internet qui est accessible via le lien URL suivant : www.teledok.fr (ci-après le
        « <strong>Site Internet</strong> »).
      </p>
      <p>
        En cas de questions concernant le Site Internet, l’Utilisateur peut contacter la société TELEDOK gratuitement, par courriel, à
        l’adresse suivante : <Email />.
      </p>

      <h2 id="mentions">Article 1 – Mentions légales</h2>
      <h3>Éditeur du site et directeur de la publication</h3>
      <p>Le Site Internet est édité par la société TELEDOK, dont les coordonnées figurent ci-dessus.</p>
      <p>
        Le directeur de la publication est la société CAPITELLO GROUP, Présidente de la société TELEDOK, société par actions simplifiée à
        associé unique au capital de 500 euros, dont le siège social est sis 122, avenue Charles de Gaulle – 92200 Neuilly-sur-Seine,
        immatriculée au Registre du commerce et des sociétés de Nanterre sous le numéro 793 498 684, représentée par son Président,
        Monsieur Arnaud Molinié.
      </p>
      <h3>Hébergement</h3>
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

      <h2 id="objet">Article 2 – Objet du contrat</h2>
      <p>Les CGU constituent un contrat entre l’Utilisateur et la société TELEDOK.</p>
      <p>Les CGU s’appliquent de plein droit lorsque l’Utilisateur accède au Site Internet et l’utilise.</p>

      <h2 id="definitions">Article 3 – Définitions</h2>
      <p>Les différents termes indiqués ci-dessous devront être interprétés de la manière suivante :</p>
      <ul>
        <li>
          <strong>« Utilisateur »</strong> : désigne la personne qui accède au Site Internet et l’utilise.
        </li>
        <li>
          <strong>« Site Internet »</strong> : le Site Internet TELEDOK.
        </li>
        <li>
          <strong>« Contenu »</strong> : désigne tous les éléments qui sont accessibles au sein du Site Internet : documents,
          informations, logotypes, photographies, contenus audiovisuels, ou autres éléments de quelque nature que ce soit.
        </li>
      </ul>

      <h2 id="services">Article 4 – Description des services</h2>
      <p>
        Le Site Internet permet aux Utilisateurs d’avoir accès aux services, fonctionnalités et Contenus qu’il propose. Ceux-ci sont
        évolutifs, de même que les CGU, sans information préalable de l’Utilisateur. Celui-ci est donc invité à en prendre connaissance
        régulièrement pour se tenir au courant.
      </p>

      <h2 id="acces">Article 5 – Accès</h2>
      <p>
        L’accès au Site Internet peut être fait par tout Utilisateur, depuis le monde entier, de manière gratuite et illimitée sur tous les
        supports adaptés permettant leur accès (ordinateur, smartphone, tablette, etc.).
      </p>
      <p>Les CGU régissent de plein droit toute visite et utilisation du Site Internet.</p>

      <h2 id="obligations">Article 6 – Obligations des parties</h2>
      <p>
        L’Utilisateur s’engage à respecter les CGU en tous points et à effectuer une utilisation strictement personnelle, non cessible,
        non transférable et non commerciale, du Site Internet et de ses Contenus.
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
        dysfonctionnements et des bugs causant leur arrêt total, partiel ou leur ralentissement.
      </p>
      <p>
        Les opérations de maintenance correctives et évolutives seront mises en œuvre, de préférence, à des heures où le Site Internet est
        peu consulté.
      </p>
      <p>
        L’Utilisateur est également informé que l’accès au Site Internet dépend du bon fonctionnement de ses matériels et de ses
        programmes informatiques, de ceux de tiers ainsi que des réseaux Internet, électrique et de télécommunication, dont la société
        TELEDOK n’est pas responsable.
      </p>

      <h2 id="donnees">Article 7 – Données personnelles - RGPD</h2>
      <p>
        La <Link href={ROUTES.confidentialite}>Politique RGPD</Link> de la société TELEDOK figure sur le Site Internet.
      </p>

      <h2 id="pi">Article 8 – Propriété intellectuelle</h2>
      <p>
        L’Utilisateur dispose des seuls droits de consulter, d’utiliser et de prendre des copies des pages du Site Internet pour ses seuls
        besoins personnels et en conformité avec les CGU.
      </p>
      <p>L’Utilisateur reconnaît ne pouvoir prétendre à aucun autre droit sur le Site Internet et sur ses Contenus.</p>
      <p>
        Tous les Contenus du Site Internet sont la propriété de la société TELEDOK ou celle de tiers ; ils ne peuvent notamment pas être
        reproduits ou publiés sans l’accord préalable et écrit, selon le cas, de la société TELEDOK et/ou de celle des tiers concernés.
      </p>
      <p>
        Pour toute question sur ce point, l’Utilisateur est invité à poser la question à l’adresse courriel suivante : <Email />.
      </p>

      <h2 id="responsabilite">Article 9 – Responsabilité et force majeure</h2>
      <p>
        Les Contenus sont réputés fiables et sont mis à jour régulièrement mais la société TELEDOK ne peut garantir l’absence d’éventuels
        défauts, erreurs ou omissions les concernant.
      </p>
      <p>
        La société TELEDOK ne peut être tenue responsable de l’utilisation et des interprétations des Contenus du Site Internet ; là
        encore, l’Utilisateur est invité à les vérifier.
      </p>
      <p>
        La société TELEDOK ne saurait encourir aucune responsabilité, notamment en cas d’impossibilité d’accès au Site Internet ou aux
        Contenus, en cas de survenance d’un événement relevant de la force majeure ; par force majeure on entend les circonstances qui
        empêchent l’exécution par la société TELEDOK de ses obligations. Il s’agit notamment des inondations, des tempêtes de vent de force
        dix, des incendies, des tremblements de terre, des grèves des employés, des blocus, de tout événement indépendant de la volonté de
        la société TELEDOK entraînant la mise en activité partielle de tout ou partie de ses salariés, des mesures gouvernementales, des
        épidémies et pandémies (telle que le COVID-19 et ses variants), de l’interruption des activités des opérateurs télécoms, Internet
        ou fournisseurs d’électricité, ou encore du non-respect de leurs obligations, résultant d’un événement de force majeure, affectant
        les prestataires, les fournisseurs ou les sous-traitants de la société TELEDOK pour les mêmes raisons que celles énumérées
        ci-avant, et, plus généralement, de toutes circonstances indépendantes de la volonté de TELEDOK à raison de la survenance
        desquelles le respect par la société TELEDOK de ses obligations ne peut raisonnablement être attendu d’elle.
      </p>
      <p>Sont assimilés à un cas de force majeure, le cas fortuit et le fait de tiers.</p>

      <h2 id="liens">Article 10 – Liens hypertextes</h2>
      <p>
        Le Site Internet pourra utiliser des liens hypertextes dans ses Contenus. Ces liens permettent à l’Utilisateur, qui en a
        connaissance, de naviguer sur d’autres sites Internet, applications ou autres plateformes digitales.
      </p>
      <p>
        La société TELEDOK ne peut en aucun cas être tenue responsable si ces liens ne fonctionnaient pas ou des contenus de ces autres
        sites Internet, applications ou autres plateformes digitales.
      </p>

      <h2 id="cookies">Article 11 – Cookies</h2>
      <p>
        La politique de cookies applicable figure dans la <Link href={`${ROUTES.confidentialite}#cookies`}>Politique RGPD</Link> de la
        société TELEDOK accessible sur le Site Internet.
      </p>

      <h2 id="droit">Article 12 – Droit applicable et juridiction compétente</h2>
      <p>Le droit applicable aux CGU est la Loi française.</p>
      <p>
        En cas d’absence de résolution amiable de tout litige concernant les CGU, les tribunaux du ressort de la Cour d’Appel de Versailles
        seront exclusivement compétents pour en connaître.
      </p>
    </LegalPage>
  )
}
