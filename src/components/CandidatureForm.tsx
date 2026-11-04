'use client'

import { SiteForm } from './SiteForm'

/** Candidature médecin : Nom, Prénom, E-mail, Téléphone, numéro RPPS (11 chiffres). */
export function CandidatureForm({ labelledBy }: { labelledBy: string }) {
  return (
    <SiteForm
      kind="candidature"
      prefix="b"
      labelledBy={labelledBy}
      consent="J’accepte que les informations saisies soient utilisées par Teledok pour traiter ma candidature."
      conservation="Si ma candidature n’est pas suivie d’une collaboration, elles sont supprimées au plus tard deux ans après le dernier contact."
      submitLabel="Envoyer ma candidature"
      doneTitle="Votre candidature a bien été transmise."
      doneText={(nom) => <>Merci, Dr {nom}. L’équipe Teledok vous recontactera sous 2 jours ouvrés.</>}
      resetLabel="Revenir au formulaire"
      aside={
        <p className="hint" style={{ margin: 0 }}>
          Site hébergé en France par Clever Cloud. Votre candidature est transmise par e-mail à l’équipe Teledok et n’est pas
          conservée sur le site.
        </p>
      }
    >
      {(Field) => (
        <>
          <div className="fields" style={{ gap: 24 }}>
            {Field({ name: 'nom', label: 'Nom', autoComplete: 'family-name', maxLength: 200 })}
            {Field({ name: 'prenom', label: 'Prénom', autoComplete: 'given-name', maxLength: 200 })}
            {Field({ name: 'email', label: 'E-mail', type: 'email', autoComplete: 'email', maxLength: 200 })}
            {Field({ name: 'tel', label: 'Téléphone', type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
          </div>
          {Field({
            className: 'field--full rpps',
            name: 'rpps',
            label: 'Numéro RPPS',
            inputMode: 'numeric',
            maxLength: 14,
            hint: '11 chiffres, sans espace (par exemple 10000000000).',
          })}
        </>
      )}
    </SiteForm>
  )
}
