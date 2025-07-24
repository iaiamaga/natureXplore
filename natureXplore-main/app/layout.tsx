import type React from "react"
import type { Metadata } from "next"
import { Bree_Serif, Lato } from "next/font/google"
import "./globals.css"

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-title",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NatureXplore | Turismo Consciente no Sana",
  description: "Conecte-se à natureza e comunidade do Sana de forma ética e transformadora. Explorar é pertencer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${breeSerif.variable} ${lato.variable}`}>
      <body className="font-body bg-areia text-terra antialiased">{children}</body>
    </html>
  )
}
