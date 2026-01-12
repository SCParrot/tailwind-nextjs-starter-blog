import { sortPosts } from 'pliny/utils/contentlayer'
import { customAllCoreContent } from '../utils'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { getTranslations } from 'next-intl/server'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })
export default async function BlogPage(props: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ page: string }>
}) {
  const { locale } = await props.params
  const t = await getTranslations('pages')

  // 根据当前语言过滤博客，排除没有 slug 的文章
  const filteredBlogs = allBlogs.filter((post) => post.language === locale && post.slug)
  const posts = customAllCoreContent(sortPosts(filteredBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={t('blog.title')}
    />
  )
}
