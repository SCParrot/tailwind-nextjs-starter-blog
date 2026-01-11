import { Link as NextIntlLink } from '@/i18n/routing'
import { AnchorHTMLAttributes, ReactNode } from 'react'

const CustomLink = ({
  href,
  children,
  ...rest
}: {
  href: string
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextIntlLink className="break-words" href={href} {...rest}>
        {children}
      </NextIntlLink>
    )
  }

  if (isAnchorLink) {
    return (
      <a className="break-words" href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink
