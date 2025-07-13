import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from 'next-themes';
import './styles/globals.css';
import { AudioProvider } from './providers/AudioProvider';
import MiniSpotifyPlayer from './components/MiniSpotifyPlayer'; // ← Nuevo import


export const metadata: Metadata = {
  title: "Carlos Martín Salvatierra - Portfolio",
  description: "Desarrollador Fullstack especializado en JavaScript, Node.js y React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <AudioProvider>
            {children}
            <MiniSpotifyPlayer /> {/* ← Reemplaza SpotifyBottomBar */}
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
