import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const geistSans = localFont({
  src:"../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Qtr-2 Class4",
  description: "Route Groups - Use Case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="p-2 text-center font-bold text-white headerback"><div className="bg-red-950 w-32 font-bold">Login Page</div></div>
        {children}
        <div className="absolute bottom-0 w-full p-4 text-center text-white headerback"><Link className=' font-bold bg-green-950 p-2 hover:bg-yellow-700 hover:text-black' href={'/'}>HOME PAGE</Link></div>
        {/* <Footer /> */}      
      </body>
    </html>
  );
}
