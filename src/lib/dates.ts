const MOIS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

/** « Mars 2025 » — la date est enregistrée en UTC, le mois affiché ne dépend pas du fuseau du serveur. */
export function formatMonth(iso: string): string {
  const date = new Date(iso)
  return `${MOIS[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}
