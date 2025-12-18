import { Header } from "@/components/header";
import "./globals.css";
import { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Test",
  description: "Test"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Header />
        <main className="h-max">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
