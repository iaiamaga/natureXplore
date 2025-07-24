"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoginModal from "@/components/login-modal"
import { useMochilaStore } from "@/lib/store"
import { Trash2, GripVertical } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MochilaPage() {
  const { items, removeItem, getTotalPrice, getTotalDuration, clearMochila } = useMochilaStore()
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    setDraggedItem(null)
  }

  const handleLoginSubmit = (data: any) => {
    console.log("Dados da jornada:", {
      ...data,
      experiencias: items,
      dataEnvio: new Date().toISOString(),
    })

    // Limpar mochila após envio
    clearMochila()

    // Redirecionar para página de sucesso
    router.push("/sucesso")
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-areia">
        <Header />

        {/* Empty State Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F220B]/60 via-[#0F220B]/40 to-[#2E450F]/80" />
          </div>

          <div className="relative z-10 text-center section-padding max-w-6xl mx-auto py-[40vh]">
            <div className="mb-8">
              <img
                width="120"
                height="120"
                src="https://img.icons8.com/ios/100/rucksack.png"
                alt="rucksack"
                className="mx-auto opacity-80"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(463%) hue-rotate(18deg) brightness(106%) contrast(92%)",
                }}
              />
            </div>
            <h1 className="font-title text-5xl md:text-7xl font-bold text-areia mb-8 text-shadow leading-tight">
              Sua Mochila
              <br />
              <span className="text-[#B6F442]">está Vazia</span>
            </h1>
            <p className="text-xl md:text-2xl text-areia/90 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
              Adicione experiências à sua mochila para criar sua jornada personalizada no Sana.
            </p>
            <Link
              href="/jornada"
              className="inline-block bg-[#B6F442] text-terra px-8 py-4 rounded-lg font-medium text-lg hover:bg-areia hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explorar Experiências
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2E450F] to-transparent z-5" />
        </section>

        <Footer />
      </main>
    )
  }

  return (
    <>
      <main className="min-h-screen bg-areia">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F220B]/60 via-[#0F220B]/40 to-[#2E450F]/80" />
          </div>

          <div className="relative z-10 text-center section-padding max-w-6xl mx-auto py-[20vh]">
            <div className="mb-6">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/ios/100/rucksack.png"
                alt="rucksack"
                className="mx-auto opacity-80"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(463%) hue-rotate(18deg) brightness(106%) contrast(92%)",
                }}
              />
            </div>
            <h1 className="font-title text-4xl md:text-6xl font-bold text-areia mb-6 text-shadow leading-tight">
              Sua <span className="text-[#B6F442]">Mochila</span>
            </h1>
            <p className="text-lg md:text-xl text-areia/90 leading-relaxed text-shadow">
              Revise suas experiências selecionadas e finalize sua jornada personalizada no Sana.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2E450F] to-transparent z-5" />
        </section>

        {/* Journey Map Section */}
        <section className="min-h-[40vh] flex items-center justify-center section-padding bg-[#2E450F] relative py-[15vh]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/ios/100/waypoint-map.png"
                  alt="waypoint-map"
                  className="mx-auto opacity-80"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(463%) hue-rotate(18deg) brightness(106%) contrast(92%)",
                  }}
                />
              </div>
              <h2 className="font-title text-3xl md:text-4xl font-bold text-areia mb-4">
                Aqui está um mapa da sua jornada!
              </h2>
              <p className="text-lg text-areia/90 leading-relaxed">
                Visualize o roteiro das suas experiências selecionadas e prepare-se para uma aventura inesquecível.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F220B] to-transparent" />
        </section>

        {/* Mochila Content */}
        <section className="min-h-screen flex items-center justify-center section-padding bg-[#0F220B] relative py-[40vh]">
          <div className="container-max">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-title text-3xl md:text-4xl font-bold text-areia mb-8">
                  Experiências Selecionadas ({items.length})
                </h2>

                {items.map((item, index) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, item.id)}
                    className="bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-6 hover:bg-white/20 hover:shadow-xl transition-all duration-300 cursor-move"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <GripVertical size={20} className="text-areia/70 mt-2" />
                      </div>

                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-title text-xl font-bold text-areia">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-areia/70 hover:text-red-400 transition-colors duration-300"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>

                        <p className="text-areia/90 mb-2">{item.shortDescription}</p>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4 text-sm text-areia/70">
                            <span>{item.location}</span>
                            <span>{item.duration}</span>
                          </div>
                          <div className="text-xl font-bold text-[#B6F442]">R$ {item.basePrice}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Sidebar */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-6 sticky top-32">
                  <h3 className="font-title text-2xl font-bold text-areia mb-6">Resumo da Jornada</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-areia/90">Experiências:</span>
                      <span className="font-medium text-[#B6F442]">{items.length}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-areia/90">Duração estimada:</span>
                      <span className="font-medium text-[#B6F442]">{getTotalDuration()}</span>
                    </div>

                    <div className="border-t border-areia/20 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-areia">Total estimado:</span>
                        <span className="text-2xl font-bold text-[#B6F442]">R$ {getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="block w-full py-3 px-6 bg-[#B6F442] text-terra text-center rounded-lg font-medium hover:bg-areia hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 mb-3"
                  >
                    Enviar minha Jornada
                  </button>

                  <Link
                    href="/jornada"
                    className="block w-full py-3 px-6 bg-white/20 text-areia text-center rounded-lg font-medium hover:bg-white/30 transition-all duration-300"
                  >
                    Adicionar mais experiências
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040C04] to-transparent" />
        </section>

        {/* Call to Action Section */}
        <section className="min-h-screen flex items-center justify-center section-padding bg-[#040C04] relative py-[40vh]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <div className="p-8 md:p-12 bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl">
                <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Pronto para a Aventura?</h2>

                <div className="space-y-6 text-lg text-areia/90 leading-relaxed mb-8">
                  <p>
                    Sua jornada personalizada está quase pronta! Cada experiência selecionada foi cuidadosamente curada
                    para proporcionar conexões autênticas com o Sana e sua comunidade.
                  </p>
                  <p>
                    Ao finalizar sua reserva, você estará contribuindo diretamente com a economia local e apoiando o
                    turismo sustentável na região.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="bg-[#B6F442] text-terra px-8 py-4 rounded-lg font-medium text-lg hover:bg-areia hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Finalizar Jornada
                  </button>
                  <Link
                    href="/sobre"
                    className="bg-white/20 text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Conheça Nossa História
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B6F442] to-transparent" />
        </section>

        {/* Final Section */}
        <section className="min-h-screen flex items-center justify-center section-padding bg-[#B6F442] relative py-[40vh]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-title text-4xl md:text-5xl font-bold text-terra mb-8">"Explorar é Pertencer"</h2>

              <div className="space-y-6 text-lg text-terra/90 leading-relaxed mb-8">
                <p>
                  Sua mochila representa mais que uma coleção de experiências - ela é o início de uma jornada de
                  descoberta, conexão e transformação no coração da Mata Atlântica.
                </p>
                <p>
                  Cada item selecionado foi pensado para criar memórias duradouras enquanto contribui positivamente com
                  a comunidade do Sana. Obrigado por escolher o turismo consciente!
                </p>
              </div>

              <Link
                href="/"
                className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#344E27] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#344E27] to-transparent" />
        </section>

        <Footer />
      </main>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onSubmit={handleLoginSubmit} />
    </>
  )
}
