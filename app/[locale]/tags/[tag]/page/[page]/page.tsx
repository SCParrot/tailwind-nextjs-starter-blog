import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const locales = ['en', 'zh'];
  const tagCounts = tagData as Record<string, number>;
  
  // 为每种语言生成路径
  return locales.flatMap((locale) => {
    return Object.keys(tagCounts).flatMap((tag) => {
      // 计算该语言下此标签的文章数
      const localeTagPosts = allBlogs.filter((post) => 
        post.tags && 
        post.tags.map((t) => slug(t)).includes(tag) &&
        post.language === locale
      );
      const postCount = localeTagPosts.length;
      const totalPages = Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE));
      
      return Array.from({ length: totalPages }, (_, i) => ({
        locale,
        tag: encodeURI(tag),
        page: (i + 1).toString(),
      }));
    });
  });
}

export default async function TagPage(props: { 
  params: Promise<{ locale: string, tag: string; page: string }> 
}) {
  const params = await props.params
  const { locale, tag, page } = params
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const pageNumber = parseInt(page)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => 
      post.tags && 
      post.tags.map((t) => slug(t)).includes(tag) &&
      post.language === locale
    ))
  )
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  // Return 404 for invalid page numbers or empty pages
  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }
  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
    />
  )
}
