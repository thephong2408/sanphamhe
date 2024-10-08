import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";
import Providers from "./redux/Provider";
import { useDispatch } from "react-redux";
import DarkModeToggle from "./components/darkShape/button";

import "./globals.css";
import Header from "./components/component/header/page";
import Footer from "./components/component/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Laptop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(inter.className, "w-screen overflow-x-hidden")}
      >
        <div className="">
          <Providers>
            <div className="flex flex-col min-h-[100vh] bg-white text-black dark:bg-[#18191b] dark:text-white  sm:text-[15px] text-[12px]">
              <header>
                <Header />
              </header>
              <div className="flex-grow  flex  flex-col xl:px-[150px] lg:px-[40px] px-[10px] mt-5">
                {children}
              </div>
              <footer>
                <Footer />
              </footer>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
