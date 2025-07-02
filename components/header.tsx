"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/explorar", label: "Explorar Sana" },
    { href: "/jornada", label: "Monte sua Jornada" },
    { href: "/sobre", label: "Quem Somos" },
    { href: "/contato", label: "Contato" },
    { href: "/diario", label: "Diário dos Exploradores" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "pt-3 px-4" : "pt-0 px-0"}`}>
      <div
        className={`transition-all duration-500 ${
          isScrolled ? "backdrop-blur-md shadow-2xl rounded-3xl mx-auto max-w-6xl" : "bg-transparent"
        }`}
        style={{
          backgroundColor: isScrolled ? "#14491bCC" : "transparent",
          boxShadow: isScrolled
            ? "0 25px 50px -12px rgba(20, 73, 27, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "none",
        }}
      >
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                <Image src="/logo-naturexplore.png" alt="NatureXplore Logo" fill className="object-contain" priority />
              </div>
              <span
                className={`font-title text-xl font-bold transition-all duration-300 hover:text-verde ${
                  isScrolled ? "text-headerGreen" : "text-headerTransparent"
                }`}
              >
                NatureXplore
              </span>
            </Link>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 hover:text-verde transition-colors duration-300 relative ${
                  isScrolled ? "text-headerGreen" : "text-headerTransparent"
                }`}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src="/backpack-icon.png"
                    alt="Mochila"
                    fill
                    className="object-contain"
                    style={{
                      filter: isScrolled
                        ? "brightness(0) saturate(100%) invert(73%) sepia(25%) saturate(434%) hue-rotate(66deg) brightness(95%) contrast(89%)"
                        : "brightness(0) saturate(100%) invert(22%) sepia(18%) saturate(1234%) hue-rotate(66deg) brightness(95%) contrast(95%)",
                    }}
                  />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-verde rounded-full text-xs text-terra flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button
                className={`p-2 hover:text-verde transition-colors duration-300 ${
                  isScrolled ? "text-headerGreen" : "text-headerTransparent"
                }`}
              >
                <User size={24} />
              </button>

              {/* Hamburger Menu Button */}
              <button
                className={`p-2 hover:text-verde transition-colors duration-300 ${
                  isScrolled ? "text-headerGreen" : "text-headerTransparent"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Hamburger Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-white/20 animate-slide-up">
              <nav className="py-6 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block font-medium tracking-wide py-3 px-2 rounded-lg hover:text-verde transition-all duration-300 hover:bg-white/10 ${
                      isScrolled ? "text-headerGreen" : "text-headerTransparent"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
