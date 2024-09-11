import type { Metadata } from "next";
import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { AppProvider } from '@/context/AppContext';

export const metadata: Metadata = {
  title: "خرید بلیط هواپیما",
  description: "A development test for fly-today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <PrimeReactProvider>
          <body
            className={`antialiased`}
          >
            {children}
          </body>
        </PrimeReactProvider>
      </AppProvider>
    </html>
  );
}
