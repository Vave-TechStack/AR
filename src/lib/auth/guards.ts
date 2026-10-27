import { auth } from '@/auth'

export { auth as getServerSession }

export async function requireAuth() {
  const session = await auth() as any
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  if ((session.user as any).role !== 'ADMIN' && (session.user as any).role !== 'SUPER_ADMIN') {
    throw new Error('Forbidden')
  }
  return session
}
