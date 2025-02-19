import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";
import Image from "next/image";
import logo from "@/app/assets/img/logo1.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-gray-900 bg-gradient-to-t from-gray-900 to-blue-900`}
      >
        {/* Header Section */}
        <header className="bg-transparent p-4 shadow-lg animate__animated animate__fadeInDown animate__faster">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="text-white text-3xl font-extrabold tracking-wider">
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  className="animate__animated animate__bounceIn"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-white text-lg font-medium">
              {[
                "Home",
                "Company",
                "How We Work",
                "Hire Developers",
                "Services",
                "Portfolio",
                "Contact Us",
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`${
                    item.toLowerCase() === "home"
                      ? "/"
                      : item.toLowerCase().replace(/\s+/g, "-")
                  }`}
                  className="relative group hover:text-lightblue-300 transition duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightblue-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
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
        <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-12 pb-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="animate-fadeIn">
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  className="animate__animated animate__bounceIn mb-5"
                />
                <p className="text-sm leading-relaxed opacity-90">
                  Our aim is to surpass the high standards set by our clients,
                  employees, candidates, and community, and guarantee a positive
                  experience for everyone who interacts with us. To achieve
                  growth and improve profitability, it&apos;s crucial for your
                  enterprise to enhance collaboration with employees, customers,
                  and businesses.
                </p>
              </div>

              {/* Quick Links */}
              <div className="animate-fadeIn">
                <nav className="space-y-2">
                  <Link
                    href="/company"
                    className="block hover:text-blue-500 transition-colors"
                  >
                    → Company
                  </Link>
                  <Link
                    href="/we-work-on"
                    className="block hover:text-blue-500 transition-colors"
                  >
                    → We Work On
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="block hover:text-blue-500 transition-colors"
                  >
                    → How We Work
                  </Link>
                  <Link
                    href="/hire-developers"
                    className="block hover:text-blue-500 transition-colors"
                  >
                    → Hire Developers
                  </Link>
                  <Link
                    href="/services"
                    className="block hover:text-blue-500 transition-colors"
                  >
                    → Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="block hover:text-blue-500 transition-colors"
                  >
                    → Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="block hover:text-blue-400 transition-colors"
                  >
                    → Contact Us
                  </Link>
                </nav>
              </div>

              {/* Strategy Section */}
              <div className="animate-fadeIn">
                <nav className="space-y-2">
                  <Link
                    href="/strategy"
                    className="block hover:text-blue-400 transition-colors"
                  >
                    → STRATEGY
                  </Link>
                  <Link
                    href="/design"
                    className="block hover:text-blue-400 transition-colors"
                  >
                    → DESIGN
                  </Link>
                  <Link
                    href="/execution"
                    className="block hover:text-blue-400 transition-colors"
                  >
                    → EXECUTION
                  </Link>
                  <Link
                    href="/deployment"
                    className="block hover:text-blue-400 transition-colors"
                  >
                    → DEPLOYMENT
                  </Link>
                </nav>
              </div>

              {/* Contact Info */}
              <div className="animate-fadeIn">
                <h3 className="text-lg font-semibold mb-4">OUR LOCATION</h3>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">INDIA Office</h4>
                  <p className="text-sm mb-2">
                    86, FF4, Gyand Khand 1, Indirapuram, Delhi NCR, GZB, 201010,
                    India
                  </p>
                  <p className="text-sm mb-2">ceo@letsachive.com</p>
                  <p className="text-sm">9911960868 / 9871927350</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">CANADA Office</h4>
                  <div className="mb-4">
                    <p className="text-sm mb-1">
                      6 Porter Dr, Guelph, ON, Canada
                    </p>
                    <p className="text-sm mb-1">Mr Kevin</p>
                    <p className="text-sm">+1 226 706 3696</p>
                  </div>

                  <div>
                    <p className="text-sm mb-1">
                      2057 College avenue,Windsor, Ontario, Canada
                    </p>
                    <p className="text-sm mb-1">Mr Kunal Kumar</p>
                    <p className="text-sm">+1 (226) 961-1186</p>
                  </div>
                </div>

                <button className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors animate-pulse">
                  Download Our Portfolio
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors animate-bounce"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 transition-colors animate-bounce"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-colors animate-bounce"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700 transition-colors animate-bounce"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          <div className="container pt-5 mx-auto text-center text-white pb-0 animate__animated animate__fadeIn animate__faster">
            <p className="text-sm">
              © 2025 Crystal InfoTech. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
