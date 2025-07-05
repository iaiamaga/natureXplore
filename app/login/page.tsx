"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useMochilaStore } from "@/lib/store"

interface FormData {
  nome: string
  email: string
  telefone: string
  dataInicio: string
  necessidadesEspeciais: string
  compartilharVivencias: "sim" | "nao" | ""
}

export default function LoginPage() {
  const router = useRouter()
  const { items, clearMochila } = useMochilaStore()
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    dataInicio: "",
    necessidadesEspeciais: "",
    compartilharVivencias: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome completo é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório"
    }

    if (!formData.dataInicio) {
      newErrors.dataInicio = "Data de início é obrigatória"
    }

    if (!formData.compartilharVivencias) {
      newErrors.compartilharVivencias = "Esta pergunta é obrigatória"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Aqui você integraria com seu backend
    console.log("Dados da jornada:", {
      ...formData,
      experiencias: items,
      dataEnvio: new Date().toISOString(),
    })

    // Limpar mochila após envio
    clearMochila()

    // Redirecionar para página de sucesso
    router.push("/sucesso")
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-gradient-to-br from-folha/10 to-verde/5">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-6">Finalize sua Jornada</h1>
            <p className="text-xl text-pedra leading-relaxed">
              Preencha seus dados para recebermos sua solicitação de jornada personalizada no Sana.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome Completo */}
                <div className="md:col-span-2">
                  <label htmlFor="nome" className="block text-sm font-medium text-terra mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300 ${
                      errors.nome ? "border-red-500" : "border-pedra/30"
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-terra mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300 ${
                      errors.email ? "border-red-500" : "border-pedra/30"
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-terra mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300 ${
                      errors.telefone ? "border-red-500" : "border-pedra/30"
                    }`}
                    placeholder="(22) 99999-9999"
                  />
                  {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
                </div>

                {/* Data de Início */}
                <div className="md:col-span-2">
                  <label htmlFor="dataInicio" className="block text-sm font-medium text-terra mb-2">
                    Data de Início da Jornada *
                  </label>
                  <input
                    type="date"
                    id="dataInicio"
                    value={formData.dataInicio}
                    onChange={(e) => handleInputChange("dataInicio", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300 ${
                      errors.dataInicio ? "border-red-500" : "border-pedra/30"
                    }`}
                  />
                  {errors.dataInicio && <p className="text-red-500 text-sm mt-1">{errors.dataInicio}</p>}
                </div>

                {/* Necessidades Especiais */}
                <div className="md:col-span-2">
                  <label htmlFor="necessidadesEspeciais" className="block text-sm font-medium text-terra mb-2">
                    Necessidades Especiais (opcional)
                  </label>
                  <textarea
                    id="necessidadesEspeciais"
                    value={formData.necessidadesEspeciais}
                    onChange={(e) => handleInputChange("necessidadesEspeciais", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-pedra/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300"
                    placeholder="Descreva qualquer necessidade especial, restrição alimentar, mobilidade, etc."
                  />
                </div>

                {/* Compartilhar Vivências */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-terra mb-4">
                    Gostaria de compartilhar suas vivências no Sana no nosso blog 'Diário do Explorador'? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="compartilharVivencias"
                        value="sim"
                        checked={formData.compartilharVivencias === "sim"}
                        onChange={(e) => handleInputChange("compartilharVivencias", e.target.value)}
                        className="mr-3 text-folha focus:ring-folha"
                      />
                      <span className="text-pedra">Sim, gostaria de compartilhar</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="compartilharVivencias"
                        value="nao"
                        checked={formData.compartilharVivencias === "nao"}
                        onChange={(e) => handleInputChange("compartilharVivencias", e.target.value)}
                        className="mr-3 text-folha focus:ring-folha"
                      />
                      <span className="text-pedra">Não, prefiro manter privado</span>
                    </label>
                  </div>
                  {errors.compartilharVivencias && (
                    <p className="text-red-500 text-sm mt-1">{errors.compartilharVivencias}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-pedra text-areia cursor-not-allowed"
                      : "bg-terra text-areia hover:bg-folha hover:shadow-lg transform hover:-translate-y-1"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Confirmar e Enviar Jornada"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
