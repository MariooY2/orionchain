import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', ], // You can adjust weights based on your needs
  subsets: ['latin'], 
  display: 'swap', 
});
export const metadata: Metadata = {
  title: "OrionChain",
  description: "OrionChain Web Development Agency specialized to solve all your problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
