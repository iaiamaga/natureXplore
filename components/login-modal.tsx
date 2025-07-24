"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: FormData) => void
}

interface FormData {
  nomeCompleto: string
  telefone: string
  email: string
  quantidadePessoas: string
  quantidadeDias: string
  compartilharExperiencia: "sim" | "nao" | ""
  detalhesEspeciais: string
}

export default function LoginModal({ isOpen, onClose, onSubmit }: LoginModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    telefone: "",
    email: "",
    quantidadePessoas: "",
    quantidadeDias: "",
    compartilharExperiencia: "",
    detalhesEspeciais: "",
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = "Nome completo é obrigatório"
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.quantidadePessoas.trim()) {
      newErrors.quantidadePessoas = "Quantidade de pessoas é obrigatória"
    }

    if (!formData.quantidadeDias.trim()) {
      newErrors.quantidadeDias = "Quantidade de dias é obrigatória"
    }

    if (!formData.compartilharExperiencia) {
      newErrors.compartilharExperiencia = "Esta pergunta é obrigatória"
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

    try {
      // Simular processamento
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Log dos dados (em produção, você pode integrar com um serviço de email)
      console.log("Dados da jornada:", {
        customerName: formData.nomeCompleto,
        customerEmail: formData.email,
        customerPhone: formData.telefone,
        numberOfPeople: Number.parseInt(formData.quantidadePessoas),
        numberOfDays: formData.quantidadeDias,
        shareExperience: formData.compartilharExperiencia === "sim",
        specialRequests: formData.detalhesEspeciais,
        timestamp: new Date().toISOString(),
      })

      onSubmit(formData)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro ao enviar reserva. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-pedra/20 p-6 flex justify-between items-center">
          <h2 className="font-title text-2xl font-bold text-terra">Finalize sua Jornada</h2>
          <button onClick={onClose} className="p-2 hover:bg-pedra/10 rounded-full transition-colors duration-300">
            <X size={24} className="text-pedra" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome Completo */}
            <div className="md:col-span-2">
              <label htmlFor="nomeCompleto" className="block text-sm font-medium text-terra mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300 ${
                  errors.nomeCompleto ? "border-red-500" : "border-pedra/30"
                }`}
                placeholder="Seu nome completo"
              />
              {errors.nomeCompleto && <p className="text-red-500 text-sm mt-1">{errors.nomeCompleto}</p>}
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

            {/* Quantidade de Pessoas */}
            <div>
              <label htmlFor="quantidadePessoas" className="block text-sm font-medium text-terra mb-2">
                Quantidade de Pessoas *
              </label>
              <select
                id="quantidadePessoas"
                value={formData.quantidadePessoas}
                onChange={(e) => handleInputChange("quantidadePessoas", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300 ${
                  errors.quantidadePessoas ? "border-red-500" : "border-pedra/30"
                }`}
              >
                <option value="">Selecione</option>
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
                <option value="5">5 pessoas</option>
                <option value="6+">6+ pessoas</option>
              </select>
              {errors.quantidadePessoas && <p className="text-red-500 text-sm mt-1">{errors.quantidadePessoas}</p>}
            </div>

            {/* Quantidade de Dias */}
            <div>
              <label htmlFor="quantidadeDias" className="block text-sm font-medium text-terra mb-2">
                Quantos Dias de Experiência *
              </label>
              <select
                id="quantidadeDias"
                value={formData.quantidadeDias}
                onChange={(e) => handleInputChange("quantidadeDias", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300 ${
                  errors.quantidadeDias ? "border-red-500" : "border-pedra/30"
                }`}
              >
                <option value="">Selecione</option>
                <option value="1">1 dia</option>
                <option value="2">2 dias</option>
                <option value="3">3 dias</option>
                <option value="4">4 dias</option>
                <option value="5">5 dias</option>
                <option value="7">1 semana</option>
                <option value="14">2 semanas</option>
                <option value="mais">Mais de 2 semanas</option>
              </select>
              {errors.quantidadeDias && <p className="text-red-500 text-sm mt-1">{errors.quantidadeDias}</p>}
            </div>

            {/* Compartilhar Experiência */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-terra mb-4">
                Gostaria de contar sua experiência no nosso blog? *
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="compartilharExperiencia"
                    value="sim"
                    checked={formData.compartilharExperiencia === "sim"}
                    onChange={(e) => handleInputChange("compartilharExperiencia", e.target.value)}
                    className="mr-3 text-folha focus:ring-folha"
                  />
                  <span className="text-pedra">Sim, gostaria de compartilhar</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="compartilharExperiencia"
                    value="nao"
                    checked={formData.compartilharExperiencia === "nao"}
                    onChange={(e) => handleInputChange("compartilharExperiencia", e.target.value)}
                    className="mr-3 text-folha focus:ring-folha"
                  />
                  <span className="text-pedra">Não, prefiro manter privado</span>
                </label>
              </div>
              {errors.compartilharExperiencia && (
                <p className="text-red-500 text-sm mt-1">{errors.compartilharExperiencia}</p>
              )}
            </div>

            {/* Detalhes Especiais */}
            <div className="md:col-span-2">
              <label htmlFor="detalhesEspeciais" className="block text-sm font-medium text-terra mb-2">
                Algum detalhe ou particularidade que precisa de cuidado (opcional)
              </label>
              <textarea
                id="detalhesEspeciais"
                value={formData.detalhesEspeciais}
                onChange={(e) => handleInputChange("detalhesEspeciais", e.target.value)}
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-pedra/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-folha transition-colors duration-300"
                placeholder="Descreva qualquer necessidade especial, restrição alimentar, mobilidade, etc. (máximo 10 linhas)"
              />
              <p className="text-sm text-pedra mt-1">{formData.detalhesEspeciais.length}/500 caracteres</p>
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
              {isSubmitting ? "Enviando..." : "Finalizar e Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
