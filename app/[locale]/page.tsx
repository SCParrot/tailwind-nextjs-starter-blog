import { sortPosts } from 'pliny/utils/contentlayer'
import { customAllCoreContent } from './utils'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params
  const filteredBlogs = allBlogs.filter((post) => post.language === locale && post.slug)
  const sortedPosts = sortPosts(filteredBlogs)
  const posts = customAllCoreContent(sortedPosts).filter((post) => post.slug) as Array<{
    slug: string
    date: string
    title: string
    summary?: string
    tags: string[]
  }>
  return <Main posts={posts} />
}
