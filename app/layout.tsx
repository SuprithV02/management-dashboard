import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "Strategic Executive Dashboard",
  description: "Insurance SMT Dashboard UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-800 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
