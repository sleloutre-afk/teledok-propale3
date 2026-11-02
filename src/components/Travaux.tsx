'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import { CATEGORIES, THEMES, categoryOf, type CategoryId, type ThemeId } from '@/data/themes'
import type { PublicationView } from '@/lib/content'
import { formatMonth } from '@/lib/dates'
import { cx } from '@/lib/cx'
import { Icon } from './Icon'

const yearOf = (p: PublicationView) => (p.date ? new Date(p.date).getUTCFullYear() : null)

type Option<T> = { value: T; label: string; picto?: string }

/** Une ligne de filtres ; masquée quand aucune valeur n'a de contenu. */
function FiltreLigne<T extends string | number>({
  label,
  all,
  options,
  value,
  onChange,
}: {
  label: string
  all: string
  options: Option<T>[]
  value: T | 'all'
  onChange: (value: T | 'all') => void
}) {
  if (options.length === 0) return null
  const chip = (v: T | 'all', content: ReactNode, picto?: string) => (
    <button
      key={v}
      type="button"
      className={cx('chip', { 'chip--picto': !!picto, 'chip-on': v === value })}
      aria-pressed={v === value}
      onClick={() => onChange(v)}
    >
      {picto && <span className="chip-picto" aria-hidden="true" style={{ '--picto': `url(${picto})` } as CSSProperties} />}
      {content}
    </button>
  )
  return (
    <div className="chips filtres-ligne" role="group" aria-label={`Filtrer par ${label.toLowerCase()}`}>
      <span className="label muted filtres-label">{label}</span>
      {chip('all', all)}
      {options.map((o) => chip(o.value, o.label, o.picto))}
    </div>
  )
}

/** Travaux de recherche, filtrables par type de document, année et thème. */
export function Travaux({ publications }: { publications: PublicationView[] }) {
  const [type, setType] = useState<CategoryId | 'all'>('all')
  const [year, setYear] = useState<number | 'all'>('all')
  const [theme, setTheme] = useState<ThemeId | 'all'>('all')

  // Seules les valeurs portées par au moins un travail sont proposées.
  const types = CATEGORIES.filter((c) => publications.some((p) => categoryOf(p.type) === c.id)).map((c) => ({
    value: c.id,
    label: c.label,
    picto: c.picto,
  }))
  const years = [...new Set(publications.map(yearOf).filter((y) => y !== null))]
    .sort((a, b) => b - a)
    .map((y) => ({ value: y, label: String(y) }))
  const themes = (Object.keys(THEMES) as ThemeId[])
    .filter((t) => publications.some((p) => p.theme === t))
    .map((t) => ({ value: t, label: THEMES[t].label }))

  const shown = (p: PublicationView) =>
    (type === 'all' || categoryOf(p.type) === type) &&
    (year === 'all' || yearOf(p) === year) &&
    (theme === 'all' || p.theme === theme)
  const count = publications.filter(shown).length
  const reset = () => {
    setType('all')
    setYear('all')
    setTheme('all')
  }

  return (
    <section id="travaux" className="travaux" aria-labelledby="trav-t">
      <div className="wrap travaux-in">
        <div className="rv travaux-head">
          <div>
            <p className="pill" style={{ marginBottom: 18 }}>
              Contributions
            </p>
            <h2 id="trav-t" className="h2">
              Travaux
            </h2>
            <p className="travaux-intro">
              Une sélection des travaux réalisés à partir des opérations de TeleDok : rapports épidémiologiques, thèses et
              publications scientifiques.
            </p>
          </div>
          <p className="muted" style={{ fontSize: 15 }} aria-live="polite">
            {count} {count > 1 ? 'travaux' : 'travail'}
          </p>
        </div>
        <div className="rv filtres">
          <FiltreLigne label="Type" all="Tous les types" options={types} value={type} onChange={setType} />
          <FiltreLigne label="Année" all="Toutes les années" options={years} value={year} onChange={setYear} />
          <FiltreLigne label="Thème" all="Tous les thèmes" options={themes} value={theme} onChange={setTheme} />
        </div>
        {count === 0 && (
          <p className="travaux-vide muted">
            Aucun travail ne correspond à ces filtres.{' '}
            <button type="button" className="travaux-reset" onClick={reset}>
              Afficher tous les travaux
            </button>
          </p>
        )}
        <ul className="ncards">
          {publications.map((p) => {
            const th = THEMES[p.theme]
            const body = (
              <>
                <span className="ncard-v" aria-hidden="true">
                  <span className="ncard-dot" />
                  <span className="ncard-dot2" />
                  <Icon className="ncard-ic" name={th.icon} size={72} width={1.5} stroke="var(--fg)" />
                </span>
                <span className="ncard-b">
                  <span className="ncard-meta">
                    <span className="pill ncard-type">{p.type ?? '[Type]'}</span>
                    <span className="muted" style={{ fontSize: 14 }}>
                      {p.date ? formatMonth(p.date) : '[Date]'}
                    </span>
                  </span>
                  <span className="ncard-t">{p.title}</span>
                  <span className="muted" style={{ fontSize: 15 }}>
                    {th.label}
                    {p.authors && ` · ${p.authors}`}
                  </span>
                  {p.pdf ? (
                    <span className="ncard-cta">
                      Télécharger le PDF <Icon name="fleche" size={18} />
                    </span>
                  ) : (
                    <span className="ncard-cta ncard-cta--todo">
                      <span className="todo">[PDF à fournir]</span>
                    </span>
                  )}
                </span>
              </>
            )
            return (
              <li key={p.id} hidden={!shown(p)}>
                {p.pdf ? (
                  <a className="ncard" data-theme={p.theme} href={p.pdf} download>
                    {body}
                  </a>
                ) : (
                  <div className="ncard" data-theme={p.theme}>
                    {body}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
