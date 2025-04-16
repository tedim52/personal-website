import type React from "react"
import { Lora, Figtree } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Define your fonts - more organic combination
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
})

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
})

export const metadata = {
  title: "Tedi Mitiku | Open Source Engineer",
  description: "Personal website of Tedi Mitiku, open source software engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${figtree.variable}`}>
      <body className="min-h-screen bg-background">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'