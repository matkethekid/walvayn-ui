import createMiddleware from "next-intl/middleware";
import { locales } from "./app/[locale]/layout";

export default createMiddleware({
  locales: ["hr", "en"],
  defaultLocale: "hr",
  localePrefix: 'always' 
});

export const config = {
  matcher: [
    '/', 
    '/(hr|en)/:path*', 
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};