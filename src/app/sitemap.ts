import { fetchCMSEntries } from '@/lib/utils'

export default async function sitemap() {
  const entries = await fetchCMSEntries()
  return entries.map(({ attributes: { slug, createdAt } }) => ({
    url: `https://www.skknshore.com/blog/yazilar/${slug}`,
    lastModified: createdAt,
  }))
}
