import type { NextRequest } from 'next/server'
import { handleForm } from '@/lib/formEndpoint'

/** Candidature médecin (page « Médecins : rejoindre Teledok »). */
export const POST = (request: NextRequest) => handleForm('candidature', request)
