/** Bloc de données structurées schema.org (JSON-LD), lu par les moteurs de recherche. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // « < » échappé : le contenu ne peut pas refermer la balise script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
