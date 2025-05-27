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

  // Open Graph / iMessage preview configuration
  openGraph: {
    title: "Tedi Mitiku | Open Source Engineer",
    description: "Open source software engineer working on Kurtosis",
    url: "https://tedi.dev", // Replace with your actual domain
    siteName: "Tedi Mitiku",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Tedi Mitiku - Open Source Engineer",
      },
    ],
  },

  // Twitter card (also helps with some messaging apps)
  twitter: {
    card: "summary_large_image",
    title: "Tedi Mitiku | Open Source Engineer",
    description: "Open source software engineer working on Kurtosis",
    images: ["/og-image.png"],
  },
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
