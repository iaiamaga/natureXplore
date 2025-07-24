import { type NextRequest, NextResponse } from "next/server"
import { getUsersCollection } from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password } = await request.json()
    const collection = await getUsersCollection()

    // Verificar se usuário já existe
    const existingUser = await collection.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "Usuário já existe com este email" }, { status: 400 })
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = {
      name,
      email,
      phone,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await collection.insertOne(newUser)

    // Remover senha da resposta
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json(
      {
        message: "Usuário criado com sucesso",
        id: result.insertedId,
        user: userWithoutPassword,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Erro ao criar usuário:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
