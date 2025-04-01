import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accueil | Thomas Zabalo",
  description: "Découvrez mon portfolio et mes projets en développement web.",
  keywords: ["Développement Web", "Next.js", "React", "Portfolio", "Thomas Zabalo"],
  openGraph: {
    title: "Accueil | Thomas Zabalo",
    description: "Découvrez mon portfolio et mes projets en développement web.",
    url: "https://thomas-zabalo.vercel.app/",
    siteName: "Thomas Zabalo",
    images: [
      {
        url: "/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Aperçu de mon portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
