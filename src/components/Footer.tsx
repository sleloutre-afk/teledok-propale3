import Image from 'next/image'
import Link from 'next/link'
import logoBlanc from '@/assets/logo-teledok-blanc.png'
import { getCoordonnees } from '@/lib/content'
import { LINKEDIN_URL, ROUTES } from '@/lib/site'
import { LinkedinIcon } from './LinkedinIcon'

const LOGO_HEIGHT = 30
const LOGO_WIDTH = Math.round((LOGO_HEIGHT * logoBlanc.width) / logoBlanc.height)

/** Pied de page. La dernière colonne s'adresse aux médecins, ou aux organisations sur la page Médecins. */
export async function Footer({ cta = 'medecins' }: { cta?: 'medecins' | 'partenaires' }) {
  const coordonnees = await getCoordonnees()

  return (
    <footer className="ftr on-blue">
      <div className="wrap ftr-in">
        <div className="ftr-cols">
          <div>
            <Image
              className="ftr-logo"
              src={logoBlanc}
              alt="Teledok"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              style={{ height: LOGO_HEIGHT, width: 'auto' }}
            />
            <p>Regroupement de médecins généralistes et spécialistes, associés à des professionnels paramédicaux.</p>
            <a className="ftr-social" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Teledok sur LinkedIn (nouvel onglet)">
              <LinkedinIcon size={20} />
            </a>
          </div>
          <nav aria-label="Plan du site">
            <p className="label ftr-t">Le site</p>
            <ul>
              <li>
                <Link href={ROUTES.teledok}>Qui sommes-nous&nbsp;?</Link>
              </li>
              <li>
                <Link href={ROUTES.methode}>Notre méthode</Link>
              </li>
              <li>
                <Link href={ROUTES.realisations}>Réalisations</Link>
              </li>
              <li>
                <Link href={ROUTES.recherche}>Recherche &amp; publications</Link>
              </li>
              <li>
                <Link href={ROUTES.medecins}>Médecins</Link>
              </li>
              <li>
                <Link href={ROUTES.partenaires}>Construisons votre projet</Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="label ftr-t">Contact</p>
            <p className="ftr-adr">{coordonnees.adresse ?? '[Adresse postale]'}</p>
            <Link className="ftr-contact" href={ROUTES.contact}>
              Nous contacter
            </Link>
          </div>
          {cta === 'medecins' ? (
            <div>
              <p className="label ftr-t">Médecins</p>
              <p className="ftr-cta">Candidature réservée aux professionnels de santé inscrits au RPPS.</p>
              {/* Simple lien : le bouton flottant « Rejoindre Teledok » est déjà affiché à côté. */}
              <Link className="ftr-contact" href={ROUTES.medecins}>
                Rejoindre Teledok
              </Link>
            </div>
          ) : (
            <div>
              <p className="label ftr-t">Organisations</p>
              <p className="ftr-cta">Mutuelles, entreprises, professionnels de santé, collectivités.</p>
              <Link className="btn btn-primary ftr-btn" href={ROUTES.partenaires}>
                Construisons votre projet
              </Link>
            </div>
          )}
        </div>
        <div className="ftr-bottom">
          <p>© {new Date().getFullYear()} Teledok</p>
          <p className="ftr-legal">
            <Link href={ROUTES.mentions}>Mentions légales</Link>
            <Link href={ROUTES.confidentialite}>Politique de confidentialité</Link>
            <Link href={ROUTES.contact}>Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
