import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing'; // if you have this, otherwise see below

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback to default locale if invalid or missing
  if (!locale || !['hr', 'en'].includes(locale)) {
    locale = 'hr';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});