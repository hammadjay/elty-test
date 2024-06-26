import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elty Test | Hammad",
  description: "This is Elty interview test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
