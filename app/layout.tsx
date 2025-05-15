import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";




export const metadata: Metadata = {
  title: "Web Engine",
  description: "This a my full web engine for game development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html >
  );
}
