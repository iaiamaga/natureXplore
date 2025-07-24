"use client"

import type React from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function GlassCard({ children, className = "", onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        backdrop-blur-md bg-white/10 
        border border-folha/30 
        rounded-2xl 
        shadow-2xl shadow-terra/20
        hover:shadow-3xl hover:shadow-terra/30
        transition-all duration-500
        hover:-translate-y-2
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </div>
  )
}
