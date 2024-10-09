import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
