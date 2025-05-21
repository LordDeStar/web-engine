import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { ThemeProvider } from "./providers/ThemeProvider";




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
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-neutral-800 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>

      </body>
    </html >
  );
}
