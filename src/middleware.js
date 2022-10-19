import { NextResponse } from 'next/server'
import { locales } from 'nextra/locales'

export default function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/fonts')) {
    return NextResponse.next()
  }

  return locales(request)
}
