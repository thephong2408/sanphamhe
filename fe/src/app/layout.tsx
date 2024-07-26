import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/component/footer/page";
import Header from "./components/component/header/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white sm:text-[15px] text-[12px]">
        <header>
          <Header/>
        </header>
         <div> {children}</div>
          <Footer/>
        </div>
        </body>
    </html>
  );
}