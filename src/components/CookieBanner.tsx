'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONSENT_UPDATED_EVENT, OPEN_CONSENT_EVENT, getConsent, openConsentBanner, setConsent } from '@/lib/cookieConsent'
import { ROUTES } from '@/lib/site'

/**
 * Bandeau de consentement à la mesure d'audience, affiché tant que le visiteur n'a pas choisi (puis de
 * nouveau 6 mois plus tard, ou depuis « Gestion des cookies » en bas de page). « Refuser » et
 * « Accepter » ont volontairement la même taille et le même style, côte à côte : la CNIL considère
 * comme non valable un refus plus difficile à trouver ou moins visible que l'acceptation.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getConsent() === null)
    const onUpdate = () => setVisible(getConsent() === null)
    const onOpen = () => setVisible(true)
    window.addEventListener(CONSENT_UPDATED_EVENT, onUpdate)
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen)
    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, onUpdate)
      window.removeEventListener(OPEN_CONSENT_EVENT, onOpen)
    }
  }, [])

  if (!visible) return null

  const choose = (analytics: boolean) => {
    setConsent({ analytics })
    setVisible(false)
  }

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-t" aria-describedby="cookie-banner-d">
      <div className="cookie-banner-in">
        {/* Deux « biscuits » aux couleurs de Teledok, purement décoratifs, comme sur le bandeau de Doxamed.
            public/pictos/cookie-teledok.png : export 220 px du visuel fourni par Teledok. */}
        <div className="cookie-banner-pics" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pictos/cookie-teledok.png" alt="" className="cookie-banner-pic1" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pictos/cookie-teledok.png" alt="" className="cookie-banner-pic2" />
        </div>
        <div>
          <p className="cookie-banner-t" id="cookie-banner-t">
            Un petit cookie&nbsp;?
          </p>
          <p className="cookie-banner-d" id="cookie-banner-d">
            Dans un souci d’amélioration continue du site, et avec votre accord, nous mesurons son audience avec Google Analytics.{' '}
            <Link href={`${ROUTES.confidentialite}#cookies`}>En savoir plus</Link>
          </p>
        </div>
      </div>
      <div className="cookie-banner-actions">
        <button type="button" className="btn btn-primary" onClick={() => choose(false)}>
          Refuser
        </button>
        <button type="button" className="btn btn-primary" onClick={() => choose(true)}>
          Accepter
        </button>
      </div>
    </div>
  )
}

/** Lien du pied de page qui rouvre le bandeau, pour modifier ou retirer son choix à tout moment. */
export function CookieSettingsButton() {
  return (
    <button type="button" className="ftr-cookies" onClick={openConsentBanner}>
      Gestion des cookies
    </button>
  )
}
