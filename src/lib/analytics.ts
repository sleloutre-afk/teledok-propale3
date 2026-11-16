declare global {
  interface Window {
    // Défini par AnalyticsScripts, uniquement après acceptation de la mesure d'audience.
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Envoie un événement GA4 si — et seulement si — Google Analytics est chargé, c'est-à-dire si le
 * visiteur a accepté. Sans accord, rien n'est envoyé ni mis en attente. Ne jamais transmettre de
 * données personnelles (nom, e-mail, téléphone, RPPS…) : les conditions de Google l'interdisent.
 */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === 'undefined') return
  try {
    window.gtag?.('event', name, params)
  } catch {
    // La mesure d'audience ne doit jamais bloquer un formulaire.
  }
}
