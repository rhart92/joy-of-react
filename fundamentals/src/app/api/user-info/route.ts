import { delayMs, normalize } from '@/utils/utils'
import casual from 'casual'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const ms = normalize({
    value: Math.random(),
    currentMin: 0,
    currentMax: 1,
    newMin: 1000,
    newMax: 3000,
  })

  const params = new URL(req.url).searchParams
  const maybeError = Boolean(params.get('simulatedError'))
  if (maybeError) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Simulated error.',
      },
      {
        status: 400,
      }
    )
  }

  // TODO: Could move to middleware to test across all endpoints
  await delayMs(ms)
  return NextResponse.json({
    user: {
      name: casual.name,
      email: casual.email,
    },
  })
}
