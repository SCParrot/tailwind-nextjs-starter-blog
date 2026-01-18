import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, github, demoLabel, githubLabel }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-4 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-3">
          {href && (
            <Link
              href={href}
              className="inline-flex items-center rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-900 hover:border-primary-500 dark:border-gray-700 dark:text-gray-100"
              aria-label={`${demoLabel}: ${title}`}
            >
              {demoLabel}
            </Link>
          )}
          {github && (
            <Link
              href={github}
              className="inline-flex items-center rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-900 hover:border-primary-500 dark:border-gray-700 dark:text-gray-100"
              aria-label={`${githubLabel}: ${title}`}
            >
              {githubLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
