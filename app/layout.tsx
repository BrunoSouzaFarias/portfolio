import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/lib/data";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bruno Souza Farias — Full-Stack Developer",
    template: "%s | Bruno Souza Farias",
  },
  description: site.subtitulo,
  metadataBase: new URL("https://brunosouzafarias.dev"),
  openGraph: {
    title: "Bruno Souza Farias — Full-Stack Developer",
    description: site.subtitulo,
    url: "https://brunosouzafarias.dev",
    siteName: "Bruno Souza Farias",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/bruno.png", width: 460, height: 560, alt: site.nome }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Souza Farias — Full-Stack Developer",
    description: site.subtitulo,
    images: ["/bruno.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark';",
          }}
        />
        <SmoothScroll />
        <Cursor />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
