"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useMochilaStore } from "@/lib/store"
import { Trash2, GripVertical } from "lucide-react"

export default function MochilaPage() {
  const { items, removeItem, getTotalPrice, getTotalDuration } = useMochilaStore()
  const [draggedItem, setDraggedItem] = useState<string | null>(null)

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedItem(id)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    // Implementar reordenação aqui se necessário
    setDraggedItem(null)
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />

        <section className="pt-32 pb-16 section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-8xl mb-8">🎒</div>
              <h1 className="font-title text-5xl font-bold text-terra mb-6">Sua Mochila está Vazia</h1>
              <p className="text-xl text-pedra mb-8">
                Adicione experiências à sua mochila para criar sua jornada personalizada no Sana.
              </p>
              <Link href="/experiencia" className="btn-primary text-lg">
                Explorar Experiências
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-gradient-to-br from-folha/10 to-verde/5">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🎒</div>
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-6">Sua Mochila</h1>
            <p className="text-xl text-pedra leading-relaxed">
              Revise suas experiências selecionadas e finalize sua jornada personalizada no Sana.
            </p>
          </div>
        </div>
      </section>

      {/* Mochila Content */}
      <section className="py-16 section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-title text-3xl font-bold text-terra mb-6">
                Experiências Selecionadas ({items.length})
              </h2>

              {items.map((item, index) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, item.id)}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-move"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <GripVertical size={20} className="text-pedra mt-2" />
                    </div>

                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-title text-xl font-bold text-terra">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-pedra hover:text-red-500 transition-colors duration-300"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <p className="text-pedra mb-2">{item.shortDescription}</p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm text-pedra">
                          <span>{item.location}</span>
                          <span>{item.duration}</span>
                        </div>
                        <div className="text-xl font-bold text-terra">R$ {item.basePrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
                <h3 className="font-title text-2xl font-bold text-terra mb-6">Resumo da Jornada</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-pedra">Experiências:</span>
                    <span className="font-medium text-terra">{items.length}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-pedra">Duração estimada:</span>
                    <span className="font-medium text-terra">{getTotalDuration()}</span>
                  </div>

                  <div className="border-t border-pedra/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-terra">Total estimado:</span>
                      <span className="text-2xl font-bold text-terra">R$ {getTotalPrice()}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/login"
                  className="block w-full py-3 px-6 bg-terra text-areia text-center rounded-lg font-medium hover:bg-folha hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Enviar minha Jornada
                </Link>

                <Link
                  href="/experiencia"
                  className="block w-full py-3 px-6 border-2 border-terra text-terra text-center rounded-lg font-medium hover:bg-terra hover:text-areia transition-all duration-300 mt-3"
                >
                  Adicionar mais experiências
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
