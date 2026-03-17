import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discover Spain | Premium Travel Guide",
  description: "A premium Spain travel guide — curated itineraries, food culture, and practical tips.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
