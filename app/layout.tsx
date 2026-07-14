import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ARTA MULYA RAYA",
    template: "%s | ARTA MULYA RAYA",
  },

  description:
    "ARTA MULYA RAYA is an Indonesia Sourcing, Procurement & Export Partner helping international buyers connect with reliable Indonesian suppliers.",

  applicationName: "ARTA MULYA RAYA",

  keywords: [
    "Indonesia sourcing",
    "Procurement Indonesia",
    "Export Indonesia",
    "Indonesian suppliers",
    "B2B sourcing",
    "Procurement partner",
    "Supply chain Indonesia",
  ],

  authors: [
    {
      name: "ARTA MULYA RAYA",
    },
  ],

  creator: "ARTA MULYA RAYA",

  publisher: "ARTA MULYA RAYA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}