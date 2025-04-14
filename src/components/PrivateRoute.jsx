'use client'

import { useRouter } from 'next/navigation'

import { useAuth } from '@/firebase/AuthContext'

export default function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth()
  const router = useRouter()

  if (loading) {
    return <div>Loading...</div>
  }

  if (currentUser && (!currentUser.workspace || !currentUser.ready)) {
    router.push('/getting-started')

    return children
  }

  if (!currentUser) {
    router.push('/login')

    return null
  }

  return children
}
