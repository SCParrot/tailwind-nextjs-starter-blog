import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse } from 'next/server'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(zh|en)/:path*', '/((?!_next|favicon|static|search\.json).*)'],
}
