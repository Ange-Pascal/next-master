import React from "react";
import "./globals.css" 
import Navbar from "@/components/Navbar"; 
import {Poppins, Montserrat} from "next/font/google"; 
import { Metadata } from "next";

// const inter = Inter({subsets: ['latin']}); 
const montserrat = Montserrat({subsets: ["latin"]}) 

export const metadata: Metadata = {
  title: "Next.js project", 
  description: "A NextJs project with Typescript and tailwindcss", 
  keywords: "NextJs, Typescript, Tailwindcss"
}

export default function RootLayout({children} : {children: React.ReactNode}){
  return (
    <html lang="en">
      <body className={montserrat.className} >
        <Navbar/>
        <main className="max-w-3xl mx-auto py-10">
        {children}
        </main>
      </body>
    </html>
  )
}