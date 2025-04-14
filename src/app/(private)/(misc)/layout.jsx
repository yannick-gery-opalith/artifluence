// Component Imports
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithMicrosoft
} from 'react-firebase-hooks/auth'

import PrivateRoute from '@/components/PrivateRoute'
import { auth } from '@/firebase/config'

import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

// Config Imports

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

const Layout = async props => {
  const params = await props.params
  const { children } = props

  // Vars
  const direction = 'ltr'
  const systemMode = await getSystemMode()

  console.log(systemMode)

  return (
    <PrivateRoute>
      <Providers direction={direction}>
        <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
      </Providers>
    </PrivateRoute>
  )
}

export default Layout
