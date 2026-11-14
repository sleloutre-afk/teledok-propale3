'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cx } from '@/lib/cx'

/**
 * Bouton « Rejoindre Teledok » flottant, en bas à droite de l'écran (centré en bas sur mobile),
 * sur le modèle du site Doxamed mais sans animation. Passe sous l'en-tête : le menu mobile ouvert le recouvre.
 * Il s'efface tant qu'un élément marqué data-hide-float est à l'écran (bouton de l'ouverture de l'accueil,
 * formulaire de candidature de la page Médecins), pour ne pas faire doublon.
 */
export function FloatingJoin({ href }: { href: string }) {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const targets = document.querySelectorAll('[data-hide-float]')
    setHidden(false)
    if (!targets.length) return
    const visibles = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visibles.add(e.target)
        else visibles.delete(e.target)
      }
      setHidden(visibles.size > 0)
    })
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [pathname])

  return (
    <Link className={cx('btn btn-amber float-join', { 'is-hidden': hidden })} href={href} aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : undefined}>
      Rejoindre Teledok
    </Link>
  )
}
