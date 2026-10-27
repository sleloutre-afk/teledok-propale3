'use client'

import { useState } from 'react'
import { More } from '@/components/More'
import { cx } from '@/lib/cx'
import { ROUTES } from '@/lib/site'
import type { RealisationView } from '@/lib/content'

type Texte = string | string[] | null

function Texte({ texte }: { texte: Texte }) {
  if (texte == null) return <span className="todo">[À rédiger avec TeleDok]</span>
  if (Array.isArray(texte)) {
    return (
      <ul className="cas-resultat-list">
        {texte.map((ligne, i) => (
          <li key={i}>{ligne}</li>
        ))}
      </ul>
    )
  }
  return <>{texte}</>
}

function Rubriques({ contexte, role, resultat }: { contexte: Texte; role: Texte; resultat: Texte }) {
  return (
    <dl>
      {(
        [
          ['Contexte', contexte],
          ['Rôle de TeleDok', role],
          ['Résultat et évaluation', resultat],
        ] as const
      ).map(([label, texte]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>
            <Texte texte={texte} />
          </dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * Tags et contenu (contexte / rôle / résultat) d'un cas de la page Réalisations.
 * Quand le cas a plusieurs volets (ex. plusieurs lieux de déploiement), les tags
 * deviennent cliquables : chacun affiche son propre contenu ci-dessous.
 */
export function CasDetails({ cas }: { cas: RealisationView }) {
  const volets = cas.volets
  const [active, setActive] = useState(0)

  if (volets && volets.length > 0) {
    return (
      <>
        <ul className="pills cas-tags" aria-label={cas.tagsLabel}>
          {volets.map((v, i) => (
            <li key={v.tag}>
              <button
                type="button"
                className={cx('pill pill--light cas-tag-btn', { 'cas-tag-btn--active': i === active })}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                {v.tag}
              </button>
            </li>
          ))}
        </ul>
        {/* Tous les volets sont superposés dans la même cellule de grille : le bloc garde la
            hauteur du plus long, et changer de tag ne fait plus bouger la page. */}
        <div className="cas-volets">
          {volets.map((volet, i) => (
            <div key={volet.tag} className="cas-volet" aria-hidden={i !== active}>
              <Rubriques contexte={volet.contexte} role={volet.role} resultat={volet.resultat} />
              {volet.linkToRecherche && (
                <More href={ROUTES.recherche} fg className="cas-more">
                  Travaux de recherche associés
                </More>
              )}
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      {cas.tags.length > 0 && (
        <ul className="pills cas-tags" aria-label={cas.tagsLabel}>
          {cas.tags.map((tag, i) => (
            <li key={i} className="pill pill--light">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <Rubriques contexte={cas.contexte} role={cas.role} resultat={cas.resultat} />
      {cas.linkToRecherche && (
        <More href={ROUTES.recherche} fg className="cas-more">
          Travaux de recherche associés
        </More>
      )}
    </>
  )
}
