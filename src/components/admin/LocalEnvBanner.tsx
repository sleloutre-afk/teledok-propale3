/**
 * Bandeau d'avertissement en haut du BO quand il tourne en local (adresse officielle du site
 * en localhost) : évite de confondre ce BO avec celui de teledok.fr, par exemple en y créant
 * des comptes dont les invitations ne partiraient pas. Jamais affiché en production.
 */
export function LocalEnvBanner() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3087'
  if (new URL(siteUrl).hostname !== 'localhost') return null
  const sendsEmails = Boolean(process.env.RESEND_API_KEY)

  return (
    <div className="teledok-local-banner" role="note">
      <strong>Environnement local</strong> — ce back-office n’est pas celui de teledok.fr : les contenus et comptes créés ici
      restent sur cet ordinateur.{!sendsEmails && ' Aucun e-mail n’est envoyé (invitations, mot de passe oublié).'}
    </div>
  )
}

export default LocalEnvBanner
