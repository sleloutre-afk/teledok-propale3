import { getPayload } from 'payload'
import config from '@payload-config'
import { THEMES, VALEURS, type ThemeId } from '@/data/themes'
import { REALISATIONS, type RealisationTexte } from '@/data/realisations'
import { COORDONNEES } from '@/lib/site'

/** Contenus saisis dans le BO, tels que les pages du site les affichent. */

type UploadDoc = { url?: string | null; alt?: string | null; width?: number | null; height?: number | null }
const asUpload = (value: unknown): UploadDoc | null => (value && typeof value === 'object' ? (value as UploadDoc) : null)

export type PublicationView = {
  id: string | number
  title: string
  type: string | null
  theme: ThemeId
  /** Date ISO de publication, si elle est renseignée. */
  date: string | null
  authors: string | null
  /** Adresse du PDF, s'il a été déposé. */
  pdf: string | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toPublication = (doc: any): PublicationView => ({
  id: doc.id,
  title: doc.title,
  type: doc.type || null,
  theme: doc.theme in THEMES ? doc.theme : 'prev',
  date: doc.date || null,
  authors: doc.authors || null,
  pdf: asUpload(doc.file)?.url || null,
})

/** Publications publiées, dans l'ordre choisi dans le BO. */
export async function getPublications(filter?: 'showOnHome' | 'showOnMedecins', limit?: number): Promise<PublicationView[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'publications',
    where: { and: [{ _status: { equals: 'published' } }, ...(filter ? [{ [filter]: { equals: true } }] : [])] },
    sort: '_order',
    depth: 1,
    ...(limit ? { limit } : { pagination: false }),
  })
  return docs.map(toPublication)
}

export type RealisationVoletView = {
  tag: string
  image: { src: string; alt: string } | null
  contexte: string | null
  role: RealisationTexte
  resultat: RealisationTexte
  linkToRecherche: boolean
}

export type RealisationView = {
  id: string
  title: string
  theme: string
  tagsLabel: string
  tags: string[]
  contexte: string | null
  role: RealisationTexte
  resultat: RealisationTexte
  image: { src: string; alt: string; width?: number | null; height?: number | null } | null
  imageBrief: string | null
  linkToRecherche: boolean
  volets?: RealisationVoletView[]
}

/** Études de cas de la page « Réalisations », textes en dur (voir src/data/realisations.ts). */
export async function getRealisations(): Promise<RealisationView[]> {
  return REALISATIONS.map((cas) => ({ ...cas, image: null }))
}

export type ValeurView = { titre: string; texte: string | null }

/** Les six valeurs, textes en dur (voir src/data/themes.ts). */
export async function getValeurs(): Promise<ValeurView[]> {
  return VALEURS.map((valeur) => ({ titre: valeur.titre, texte: valeur.texte }))
}

export type CoordonneesView = { adresse: string | null; telephone: string | null; email: string | null }

/** Coordonnées de TeleDok, en dur (voir COORDONNEES dans src/lib/site.ts). */
export async function getCoordonnees(): Promise<CoordonneesView> {
  return COORDONNEES
}
