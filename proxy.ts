import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["hr", "en"],
  defaultLocale: "hr"
});

export const config = {
  matcher: [
    '/', 
    '/(hr|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};