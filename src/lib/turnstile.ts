/**
 * Captcha Cloudflare Turnstile, comme sur le site Doxamed :
 * - devant le back-office (voir src/middleware.ts et src/app/(gate)/bo-verify). Il n'est actif
 *   que si les deux clés sont renseignées (NEXT_PUBLIC_TURNSTILE_SITE_KEY et TURNSTILE_SECRET_KEY) :
 *   sans elles — en local, par exemple — le BO reste accessible directement ;
 * - sur les formulaires du site (src/components/SiteForm.tsx, vérifié par src/lib/formEndpoint.ts),
 *   voir verifyFormTurnstile.
 */
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

export function isTurnstileConfigured(): boolean {
  return Boolean(TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY)
}

/**
 * Vérification du captcha d'un formulaire du site. Sans clé secrète, elle est ignorée en
 * développement (cas normal en local) mais refusée en production : une clé absente ou
 * effacée ne doit pas désactiver en silence la protection anti-spam des formulaires.
 */
export async function verifyFormTurnstile(token: string | null | undefined): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    const isProd = process.env.NODE_ENV === 'production'
    console.warn(`[turnstile] TURNSTILE_SECRET_KEY manquante — ${isProd ? 'formulaires bloqués (prod)' : 'vérification ignorée (dev)'}.`)
    return !isProd
  }
  return verifyTurnstile(token)
}

/** Vérifie auprès de Cloudflare le jeton renvoyé par le widget. */
export async function verifyTurnstile(token: string | null | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret || !token) return false

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    })
    if (!res.ok) return false
    const data = (await res.json()) as { success?: boolean }
    return data.success === true
  } catch (err) {
    console.error('[turnstile] Échec de la vérification', err)
    return false
  }
}
