import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Winners Draw",
  description: "Created by henry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="A website with an Ethereum blockchain connection to read winners from the results contract." />
        <meta property="og:title" content="Winneres Draw" />
        <meta property="og:site_name" content="Winneres Draw" />
        <meta property="og:description" content="A website with an Ethereum blockchain connection to read winners from the results contract." />
        <meta property="og:image" content="https://winners.henrypye.xyz/placeholder.png" />
        <meta property="og:image:secure_url" content="https://winners.henrypye.xyz/placeholder.png" />
        <meta property="og:url" content={`https://winners.henrypye.xyz`} />
        <meta property="og:image:width" content="708" />
        <meta property="og:image:height" content="372" />
        <meta name="twitter:title" content="Winneres Draw" />
        <meta name="twitter:image" content="https://winners.henrypye.xyz/placeholder.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="A website with an Ethereum blockchain connection to read winners from the results contract." />
        <meta name="twitter:url" content={`https://winners.henrypye.xyz`} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
