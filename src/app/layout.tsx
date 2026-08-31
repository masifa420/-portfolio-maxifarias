import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maximiliano Farias — QA Tester Semi-Senior",
  description:
    "Portfolio de Maximiliano Farias, QA Tester Semi-Senior especializado en testing funcional, manual y automatización. Buenos Aires, Argentina.",
  keywords: [
    "QA",
    "QA Tester",
    "Testing",
    "Automatización",
    "Cypress",
    "Playwright",
    "AWS",
  ],
  authors: [{ name: "Maximiliano Farias" }],
  openGraph: {
    title: "Maximiliano Farias — QA Tester Semi-Senior",
    description:
      "Portfolio de Maximiliano Farias, QA Tester Semi-Senior especializado en Fintech y plataformas financieras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC: apply saved theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mf-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-body min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
