import { delayMs, normalize } from '@/utils/utils'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const params = new URL(req.url).searchParams

  const ms = normalize({
    value: Math.random(),
    currentMin: 0,
    currentMax: 1,
    newMin: 1000,
    newMax: 3000,
  })

  // TODO: Could move to middleware to test across all endpoints
  await delayMs(ms)

  const maybeError = Boolean(params.get('simulatedError'))
  if (maybeError) {
    return NextResponse.json(
      {
        ok: false,
        message: "Simulated error."
      },
      {
        status: 400,
      }
    )
  }

  return NextResponse.json({
    ok: true,
    dataReceived: data,
  })
}
