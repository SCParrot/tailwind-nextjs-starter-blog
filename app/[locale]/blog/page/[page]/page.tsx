import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const locales = ['en', 'zh']

  // 为每种语言生成路径
  const paths = locales.flatMap((locale) => {
    const localeBlogs = allBlogs.filter((post) => post.language === locale)
    const totalPages = Math.ceil(localeBlogs.length / POSTS_PER_PAGE)

    return Array.from({ length: totalPages }, (_, i) => ({
      locale,
      page: (i + 1).toString(),
    }))
  })

  return paths
}

export default async function Page(props: { params: Promise<{ locale: string; page: string }> }) {
  const params = await props.params
  const { locale, page } = params
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => post.language === locale)))
  const pageNumber = parseInt(page as string)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  // Return 404 for invalid page numbers or empty pages
  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  const t = await getTranslations('pages')

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={t('blog.title')}
    />
  )
}
