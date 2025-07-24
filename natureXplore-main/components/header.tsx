"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User } from "lucide-react"
import { useMochilaStore } from "@/lib/store"
import LoginModal from "./login-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const { items } = useMochilaStore()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { href: "/sana", label: "Explorar Sana" },
    { href: "/jornada", label: "Monte sua Jornada" },
    { href: "/sobre", label: "Quem Somos" },
    { href: "/diario", label: "Diário dos Exploradores" },
  ]

  const handleLoginSubmit = (data: any) => {
    console.log("Dados do login:", data)
    setIsLoginModalOpen(false)
    // Aqui você pode processar os dados do formulário
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "pt-3 px-4" : "pt-0 px-0"}`}
      >
        <div
          ref={menuRef}
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
              {/* Logo - Always visible */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/logo-naturexplore.png"
                    alt="NatureXplore Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span
                  className={`font-title text-xl font-bold transition-all duration-300 group-hover:text-[#B6F442] ${
                    isScrolled ? "text-headerGreen" : "text-white"
                  }`}
                >
                  NatureXplore
                </span>
              </Link>

              {/* Right Side Icons */}
              <div className="flex items-center space-x-4">
                {/* Mochila Button */}
                <Link
                  href="/mochila"
                  className={`p-2 hover:text-[#B6F442] transition-colors duration-300 relative ${
                    isScrolled ? "text-headerGreen" : "text-white"
                  }`}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/backpack-icon.png"
                      alt="Mochila"
                      fill
                      className="object-contain transition-all duration-300 hover:brightness-150"
                      style={{
                        filter: isScrolled
                          ? "brightness(0) saturate(100%) invert(73%) sepia(25%) saturate(434%) hue-rotate(66deg) brightness(95%) contrast(89%)"
                          : "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                      }}
                    />
                  </div>
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-verde rounded-full text-xs text-terra flex items-center justify-center font-bold animate-pulse">
                      {items.length}
                    </span>
                  )}
                </Link>

                {/* Login Button */}
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className={`p-2 hover:text-[#B6F442] transition-colors duration-300 ${
                    isScrolled ? "text-headerGreen" : "text-white"
                  }`}
                >
                  <User size={24} />
                </button>

                {/* Hamburger Menu Button */}
                <button
                  className={`p-2 hover:text-[#B6F442] transition-colors duration-300 ${
                    isScrolled ? "text-headerGreen" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Hamburger Menu */}
            {isMobileMenuOpen && (
              <div
                className={`border-t border-white/20 animate-slide-up ${
                  !isScrolled ? "backdrop-blur-md bg-black/30" : ""
                }`}
              >
                <nav className="py-6 space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block font-medium tracking-wide py-3 px-2 rounded-lg hover:text-[#B6F442] transition-all duration-300 hover:bg-white/10 ${
                        isScrolled ? "text-headerGreen" : "text-white"
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

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onSubmit={handleLoginSubmit} />
    </>
  )
}
