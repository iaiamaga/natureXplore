import { type NextRequest, NextResponse } from "next/server"
import { getBookingsCollection } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const collection = await getBookingsCollection()

    const newBooking = {
      ...body,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await collection.insertOne(newBooking)

    // Aqui você pode adicionar lógica para enviar emails, notificações, etc.

    return NextResponse.json(
      {
        message: "Reserva criada com sucesso",
        id: result.insertedId,
        booking: newBooking,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Erro ao criar reserva:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const collection = await getBookingsCollection()
    const bookings = await collection.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(bookings)
  } catch (error) {
    console.error("Erro ao buscar reservas:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
