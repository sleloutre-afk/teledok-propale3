import path from 'path'
import { fileURLToPath } from 'url'
import { CreateBucketCommand, HeadBucketCommand, S3Client } from '@aws-sdk/client-s3'
import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { s3 } from '../lib/s3'

// Migration de données : remplace les fiches provisoires de « Recherche & publications »
// par les travaux saisis dans le BO local, avec leurs synthèses PDF (dossier ./files).
// Crée au passage le bucket Cellar s'il n'existe pas encore.

const dirname = path.dirname(fileURLToPath(import.meta.url))

const PUBLICATIONS = [
  {
    title: 'Les risques silencieux, premier enjeu de prévention',
    type: 'Rapport',
    theme: 'prev',
    date: '2026-11-01T12:00:00.000Z',
    file: 'synthese-rapport-epidemiologique-doxamed-2025.pdf',
    showOnHome: true,
    showOnMedecins: true,
  },
  {
    title:
      "Efficacité des téléconsultations effectuées par des médecins généralistes avec objets connectés en présence d'un pharmacien d'officine télérequérant",
    type: 'Thèse',
    theme: 'sp',
    date: '2021-10-01T12:00:00.000Z',
    file: 'synthese-these-2021-teleconsultation-pharmacies.pdf',
    showOnHome: false,
    showOnMedecins: false,
  },
  {
    title: 'Ressenti des médecins généralistes effectuant des téléconsultations à bord de Médicobus en Île-de-France',
    type: 'Thèse',
    theme: 'mob',
    date: '2026-11-01T12:00:00.000Z',
    file: 'synthese-these-2026-medicobus.pdf',
    showOnHome: true,
    showOnMedecins: true,
  },
  {
    title: 'Efficacité des téléconsultations dans des cabines avec dispositifs médicaux connectés dans les lieux publics',
    type: 'Thèse',
    theme: 'sp',
    date: '2023-07-01T12:00:00.000Z',
    file: 'synthese-these-2023-teleconsultation-cabines.pdf',
    showOnHome: true,
    showOnMedecins: false,
  },
  {
    title: "Évaluation de l'apport du télérequérant lors d'une téléconsultation en soins primaires",
    type: 'Thèse',
    theme: 'sp',
    date: '2021-05-01T12:00:00.000Z',
    file: 'synthese-these-2021-apport-telerequerant.pdf',
    showOnHome: false,
    showOnMedecins: false,
  },
] as const

async function ensureBucket() {
  if (!s3.bucket) return
  const client = new S3Client({ endpoint: s3.endpoint, region: s3.region, credentials: s3.credentials, forcePathStyle: true })
  try {
    await client.send(new HeadBucketCommand({ Bucket: s3.bucket }))
  } catch {
    await client.send(new CreateBucketCommand({ Bucket: s3.bucket }))
  }
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await ensureBucket()
  await payload.delete({ collection: 'publications', where: { id: { exists: true } }, req })
  // Création dans l'ordre d'affichage : chaque fiche est ajoutée en fin de liste.
  for (const { file, ...data } of PUBLICATIONS) {
    const media = await payload.create({ collection: 'media', data: {}, filePath: path.resolve(dirname, 'files', file), req })
    await payload.create({
      collection: 'publications',
      data: { ...data, file: media.id, _status: 'published' },
      draft: false,
      req,
    })
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  const files = PUBLICATIONS.map((p) => p.file)
  await payload.delete({ collection: 'publications', where: { title: { in: PUBLICATIONS.map((p) => p.title) } }, req })
  await payload.delete({ collection: 'media', where: { filename: { in: files } }, req })
}
