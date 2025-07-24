"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function SanaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center section-padding bg-[#0F220B] relative py-[40vh] overflow-hidden"
    >
      {/* Animated Reveal Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Desktop - Horizontal Split */}
        <div className="hidden md:flex h-full">
          <div
            className={`w-1/2 bg-[#0F220B] transition-transform duration-1000 ease-out ${
              isVisible ? "-translate-x-full" : "translate-x-0"
            }`}
          />
          <div
            className={`w-1/2 bg-[#0F220B] transition-transform duration-1000 ease-out ${
              isVisible ? "translate-x-full" : "translate-x-0"
            }`}
          />
        </div>

        {/* Mobile - Vertical Split */}
        <div className="md:hidden flex flex-col h-full">
          <div
            className={`h-1/2 bg-[#0F220B] transition-transform duration-1000 ease-out ${
              isVisible ? "-translate-y-full" : "translate-y-0"
            }`}
          />
          <div
            className={`h-1/2 bg-[#0F220B] transition-transform duration-1000 ease-out ${
              isVisible ? "translate-y-full" : "translate-y-0"
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-max relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 bg-white/20 backdrop-blur-md border border-areia/30 rounded-2xl">
            <div className="text-center">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-areia mb-8">Conhecendo o Sana</h2>

              <p className="text-lg text-areia/90 leading-relaxed mb-8">
                Descubra a história fascinante deste distrito único de Macaé, onde a Mata Atlântica preservada encontra
                uma comunidade vibrante e acolhedora. O Sana é um refúgio natural que mantém vivas suas tradições
                centenárias, oferecendo aos visitantes uma experiência autêntica de conexão com a natureza e a cultura
                local. Conheça suas trilhas históricas, cachoeiras cristalinas, arquitetura colonial e os saberes
                ancestrais que fazem deste lugar um verdadeiro tesouro da região serrana fluminense.
              </p>

              <Link 
                href="/sana"
                className="inline-block bg-areia text-[#0F220B] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#B6F442] hover:text-terra hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative z-30"
              >
                Venha saber sobre o Sana
              </Link>
           
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040C04] to-transparent pointer-events-none" />
    </section>
  )
}
