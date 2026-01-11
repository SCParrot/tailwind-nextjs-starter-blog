import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const locales = ['en', 'zh']

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .flatMap((post) =>
      locales.map((locale) => ({
        url: `${siteUrl}/${locale}/${post.path}`,
        lastModified: post.lastmod || post.date,
      }))
    )

  const routes = locales.flatMap((locale) =>
    ['', 'blog', 'projects', 'tags'].map((route) => ({
      url: route ? `${siteUrl}/${locale}/${route}` : `${siteUrl}/${locale}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  )

  return [...routes, ...blogRoutes]
}
