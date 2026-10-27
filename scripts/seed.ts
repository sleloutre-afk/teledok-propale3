/**
 * Charge dans le BO les contenus de départ repris des maquettes : les huit
 * travaux de la page « Recherche & publications ». Dates, auteurs et PDF
 * restent à compléter dans le BO.
 *
 * Idempotent : une fiche déjà présente (même titre) est laissée telle
 * quelle, on peut donc relancer sans risque d'écraser des modifications
 * faites depuis le BO. En local, crée aussi les tables de la base SQLite.
 *
 *   npm run seed
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import type { Publication } from '../src/payload-types'

type PublicationSeed = Pick<Publication, 'title' | 'type' | 'theme'> & { showOnHome?: boolean; showOnMedecins?: boolean }

// Ordre = ordre d'affichage sur le site.
const PUBLICATIONS: PublicationSeed[] = [
  { title: '[Titre de la thèse à préciser]', type: 'Thèse', theme: 'th' },
  { title: 'Rapport médical sur 1 000 patients en bilan de prévention', type: 'Rapport', theme: 'prev', showOnHome: true },
  { title: 'Rapport sur la téléconsultation en période de Covid sur camps de migrants', type: 'Rapport', theme: 'crise' },
  {
    title: 'Évaluation de l’apport du télérequérant lors d’une téléconsultation en soins primaires',
    theme: 'sp',
    showOnMedecins: true,
  },
  {
    title:
      'Efficacité des téléconsultations par des médecins généralistes avec objets connectés, en présence d’un pharmacien d’officine télérequérant',
    theme: 'sp',
  },
  {
    title: 'Efficacité des téléconsultations en cabines avec dispositifs médicaux connectés dans les lieux publics',
    theme: 'dmc',
    showOnHome: true,
  },
  {
    title: 'La téléconsultation assistée par infirmier à domicile : premiers retours d’expérience, versant infirmier',
    type: 'Étude qualitative',
    theme: 'sp',
    showOnHome: true,
  },
  {
    title: 'Ressenti des médecins généralistes effectuant des téléconsultations à bord de Médicobus en Île-de-France',
    theme: 'mob',
    showOnMedecins: true,
  },
]

async function main() {
  const payload = await getPayload({ config })
  let created = 0

  for (const item of PUBLICATIONS) {
    const existing = await payload.find({ collection: 'publications', where: { title: { equals: item.title } }, limit: 1, depth: 0, draft: true })
    if (existing.docs[0]) continue
    await payload.create({ collection: 'publications', data: { ...item, _status: 'published' } })
    created++
  }

  payload.logger.info(`Amorçage terminé : ${created} fiche(s) créée(s).`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
