// Root layout — locale sub-layout handles <html> and <body>
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
