import type { Metadata } from "next";
import "./globals.css";




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
        {children}
      </body>
    </html >
  );
}
