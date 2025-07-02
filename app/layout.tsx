import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import Providers from '@/app/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased font-normal`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
