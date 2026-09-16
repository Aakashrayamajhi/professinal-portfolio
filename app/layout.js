import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Aakash Rayamajhi — Full Stack Software Engineer",
  description:
    "Aakash Rayamajhi — full stack software engineer building scalable web products, backend systems, and AI-powered experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Aakash Rayamajhi — Full Stack Software Engineer",
    description: "Full stack software engineer building scalable products, systems, and AI-powered experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-cream text-ink font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
