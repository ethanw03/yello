import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'; // Import the Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YELLO",
  description: "Vancouver Creative Hair Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Yello Creative Studio</title>
        <meta name="description" content='Vancouver creative hair studio' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Any other head elements you need */}
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
