/** Icônes pause / lecture des boutons .vbtn ; la classe is-paused du bouton choisit celle qui s'affiche. */
export function VbtnIcons() {
  return (
    <>
      <svg className="vbtn-pause" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <rect x="4" y="3" width="3.5" height="12" />
        <rect x="10.5" y="3" width="3.5" height="12" />
      </svg>
      <svg className="vbtn-play" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <path d="M5 3l10 6-10 6z" />
      </svg>
    </>
  )
}

/** Bouton lecture / pause d'une vidéo en boucle, piloté par SiteBehaviors (attribut data-hero-toggle). */
export function VideoToggle() {
  return (
    <button type="button" className="vbtn" aria-label="Mettre en pause la vidéo d’arrière-plan" data-hero-toggle>
      <VbtnIcons />
    </button>
  )
}
