import "../globals.css";

export default async function LocaleLayout({ children }: any) {
  return (
    <html lang={'hr'}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}