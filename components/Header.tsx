'use client'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg' // SVG import issue in Next.js 16.1.1
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale

    // 处理博客文章路径，替换slug中的语言标识
    if (segments.includes('blog')) {
      const blogIndex = segments.indexOf('blog')
      if (blogIndex + 1 < segments.length) {
        // 检查slug的第一个部分是否是语言标识
        const currentLangInSlug = segments[blogIndex + 1]
        if (currentLangInSlug === 'en' || currentLangInSlug === 'zh') {
          segments[blogIndex + 1] = newLocale
        }
      }
    }

    router.push(segments.join('/'))
  }

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <img src="/static/images/logo.svg" alt={siteMetadata.headerTitle} width={32} height={32} />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {t(link.title.toLowerCase().replace(/\s+/g, '_'))}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <div className="flex items-center gap-2">
          <button
            onClick={() => switchLocale('en')}
            className="hover:text-primary-500 dark:hover:text-primary-400 text-sm font-medium"
          >
            EN
          </button>
          <span className="text-gray-500 dark:text-gray-400">|</span>
          <button
            onClick={() => switchLocale('zh')}
            className="hover:text-primary-500 dark:hover:text-primary-400 text-sm font-medium"
          >
            中文
          </button>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
