import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/img/logo1.png";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crystal InfoTech",
  description: "Crystal InfoTech - Excellence in Tech Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-gray-900 bg-black`}
      >
        {/* Header Section */}
        <header className="bg-black p-4 shadow-lg animate__animated animate__fadeInDown animate__faster">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="text-white text-3xl font-extrabold tracking-wider">
                <Image src={logo} alt="Logo" width={150} className="animate__animated animate__bounceIn" />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-white text-lg font-medium">
              {["Home", "How We Work", "Hire Developers", "Services", "Portfolio", "Contact Us"].map(
                (item, index) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative group hover:text-lightblue-300 transition duration-300"
                  >
                    {item}
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightblue-300 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </Link>
                )
              )}
            </nav>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 transform hover:scale-105 animate__animated animate__pulse animate__infinite">
                REQUEST A QUOTE
              </button>
              <a
                href="#"
                className="text-white hover:text-lightblue-300 transition duration-300 animate__animated animate__fadeInRight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-6.08 19h-2.05v-7.41h-1.69v-2.06h1.69v-1.55c0-1.35.64-3.44 3.44-3.44h2.17v2.41h-1.57c-.33 0-.78.17-.78.86v1.72h2.33l-.26 2.06h-2.07v7.41zm6.08 0h-2.06v-7.41h2.06v7.41z" />
                </svg>
              </a>
            </div>
          </div>
        </header>
        <main className="min-h-screen ">
          {/* <div className=" mx-auto p-6"> */}
          {children}
          {/* </div> */}
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-6 animate__animated animate__fadeIn animate__faster">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © 2025 Crystal InfoTech. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
