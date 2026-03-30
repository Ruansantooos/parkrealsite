import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en", "es"];
const defaultLocale = "pt";

function getLocale(request: NextRequest) {
  // Poderiamos analisar 'accept-language' aqui,
  // mas vamos padronizar pro default se n\u00e3o tiver na URL.
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se a URL j\u00e1 tem algum dos locales
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Ignorar arquivos est\u00e1ticos, pastas do public, e requests da API
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') || 
    pathname.startsWith('/api')
  ) {
    return;
  }

  // Redirecionar se n\u00e3o houver locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Pula internal paths (_next) e requests na API
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.jpg|.*\\.svg|.*\\.mp4|.*\\.webm).*)',
  ],
};
