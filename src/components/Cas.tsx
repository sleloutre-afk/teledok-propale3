'use client'

import { useState } from 'react'
import Image from 'next/image'
import { More } from '@/components/More'
import { Ph } from '@/components/Ph'
import { cx } from '@/lib/cx'
import { ROUTES } from '@/lib/site'
import type { RealisationView } from '@/lib/content'
import type { RealisationLigne, RealisationTexte } from '@/data/realisations'

const SIZES = '(min-width: 1000px) 560px, 100vw'

function Ligne({ ligne }: { ligne: RealisationLigne }) {
  if (typeof ligne === 'string') return <>{ligne}</>
  return (
    <>
      {ligne.texte}.{' '}
      <a className="cas-lien" href={ligne.lien.href} target="_blank" rel="noreferrer" aria-label={ligne.lien.titre}>
        {ligne.lien.label}
      </a>
    </>
  )
}

function Texte({ texte }: { texte: RealisationTexte }) {
  if (texte == null) return <span className="todo">[À rédiger avec TeleDok]</span>
  if (Array.isArray(texte)) {
    return (
      <ul className="cas-resultat-list">
        {texte.map((ligne, i) => (
          <li key={i}>
            <Ligne ligne={ligne} />
          </li>
        ))}
      </ul>
    )
  }
  return <>{texte}</>
}

function Rubriques({ contexte, role, resultat }: { contexte: RealisationTexte; role: RealisationTexte; resultat: RealisationTexte }) {
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

function LienRecherche() {
  return (
    <More href={ROUTES.recherche} fg className="cas-more">
      Travaux de recherche associés
    </More>
  )
}

/**
 * Étude de cas de la page Réalisations. Quand le cas a plusieurs volets (ex. plusieurs
 * lieux de déploiement), les tags deviennent cliquables : chacun affiche sa photo et
 * son propre contexte / rôle / résultat.
 */
export function Cas({ cas, rev }: { cas: RealisationView; rev: boolean }) {
  const [active, setActive] = useState(0)
  const volets = cas.volets?.length ? cas.volets : null

  if (!volets) {
    return (
      <article className={cx('cas rv', { 'cas--rev': rev })}>
        {cas.image ? (
          <Image
            className="cas-ph cas-img"
            src={cas.image.src}
            alt={cas.image.alt}
            width={cas.image.width ?? 1200}
            height={cas.image.height ?? 900}
            sizes={SIZES}
          />
        ) : (
          <Ph className="cas-ph" tag="Photographie ou vidéo réelle attendue" text={cas.imageBrief} />
        )}
        <div className="cas-b">
          <p className="pill cas-theme">{cas.theme}</p>
          <h2 id={`cas-${cas.id}-t`} className="h2 cas-t">
            {cas.title}
          </h2>
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
          {cas.linkToRecherche && <LienRecherche />}
        </div>
      </article>
    )
  }

  return (
    <article className={cx('cas rv', { 'cas--rev': rev })}>
      {/* Toutes les photos sont chargées et superposées : seule celle du volet actif est visible. */}
      <div className="cas-ph cas-media">
        {volets.map((volet, i) =>
          volet.image ? (
            <Image
              key={volet.tag}
              className={cx('cas-media-item', { 'is-on': i === active })}
              src={volet.image.src}
              alt={volet.image.alt}
              fill
              sizes={SIZES}
              // Photos masquées (opacité 0) : en chargement différé, Safari ne les charge jamais.
              loading="eager"
              aria-hidden={i !== active}
            />
          ) : (
            <Ph
              key={volet.tag}
              className={cx('cas-media-item', { 'is-on': i === active })}
              tag="Photographie ou vidéo réelle attendue"
              text={cas.imageBrief}
            />
          ),
        )}
      </div>
      <div className="cas-b">
        <p className="pill cas-theme">{cas.theme}</p>
        <h2 id={`cas-${cas.id}-t`} className="h2 cas-t">
          {cas.title}
        </h2>
        <ul className="pills cas-tags" aria-label={cas.tagsLabel}>
          {volets.map((volet, i) => (
            <li key={volet.tag}>
              <button
                type="button"
                className={cx('pill pill--light cas-tag-btn', { 'cas-tag-btn--active': i === active })}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                {volet.tag}
              </button>
            </li>
          ))}
        </ul>
        {/* Tous les volets sont superposés dans la même cellule de grille : le bloc garde la
            hauteur du plus long, et changer de tag ne fait pas bouger la page. */}
        <div className="cas-volets">
          {volets.map((volet, i) => (
            <div key={volet.tag} className="cas-volet" aria-hidden={i !== active}>
              <Rubriques contexte={volet.contexte} role={volet.role} resultat={volet.resultat} />
              {volet.linkToRecherche && <LienRecherche />}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
