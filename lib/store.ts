"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Experience } from "./data"

interface MochilaStore {
  items: Experience[]
  addItem: (experience: Experience) => void
  removeItem: (id: string) => void
  clearMochila: () => void
  getTotalPrice: () => number
  getTotalDuration: () => string
}

export const useMochilaStore = create<MochilaStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (experience) =>
        set((state) => {
          const exists = state.items.find((item) => item.id === experience.id)
          if (exists) return state
          return { items: [...state.items, experience] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearMochila: () => set({ items: [] }),
      getTotalPrice: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.basePrice, 0)
      },
      getTotalDuration: () => {
        const { items } = get()
        const totalHours = items.reduce((total, item) => {
          const duration = item.duration
          if (duration.includes("hora")) {
            const hours = Number.parseInt(duration.match(/\d+/)?.[0] || "0")
            return total + hours
          }
          if (duration.includes("noite")) {
            return total + 24 // Considera 1 dia por noite
          }
          return total
        }, 0)

        if (totalHours >= 24) {
          const days = Math.floor(totalHours / 24)
          const hours = totalHours % 24
          return hours > 0 ? `${days} dias e ${hours} horas` : `${days} dias`
        }
        return `${totalHours} horas`
      },
    }),
    {
      name: "mochila-storage",
    },
  ),
)
