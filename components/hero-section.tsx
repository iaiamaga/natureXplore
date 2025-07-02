"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-background.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-6xl mx-auto animate-fade-in pt-20 md:pt-0">
        <h1 className="font-title text-5xl md:text-7xl lg:text-8xl font-bold text-areia mb-8 text-shadow leading-tight">
          Explorar é<br />
          <span className="text-headerTransparent">pertencer</span>
        </h1>

        <p className="text-xl md:text-2xl text-areia/90 mb-12 max-w-2xl mx-auto leading-relaxed text-shadow">
          Conecte-se à natureza e comunidade do Sana de forma ética, estética e transformadora
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-between items-center max-w-4xl mx-auto">
          <button className="flex items-center space-x-3 text-areia hover:text-verde transition-colors duration-300 group order-2 md:order-1">
            <div className="w-12 h-12 rounded-full border-2 border-areia group-hover:border-verde flex items-center justify-center transition-colors duration-300">
              {isVideoPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </div>
            <span className="text-lg font-medium">Assista ao vídeo</span>
          </button>

          <button
            onClick={toggleVideo}
            className="flex items-center space-x-3 text-areia hover:text-verde transition-colors duration-300 group order-1 md:order-2"
          >
            <span className="text-lg font-medium">Comece sua Jornada</span>
            <div className="w-12 h-12 rounded-full border-2 border-areia group-hover:border-verde flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
