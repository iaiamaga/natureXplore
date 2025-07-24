import { type NextRequest, NextResponse } from "next/server"
import { getExperiencesCollection } from "@/lib/mongodb"

export async function GET() {
  try {
    const collection = await getExperiencesCollection()
    const experiences = await collection.find({}).toArray()

    return NextResponse.json(experiences)
  } catch (error) {
    console.error("Erro ao buscar experiências:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const collection = await getExperiencesCollection()

    const newExperience = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await collection.insertOne(newExperience)

    return NextResponse.json({ message: "Experiência criada com sucesso", id: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar experiência:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
