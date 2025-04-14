// MUI Imports
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import { AuthProvider } from '@/firebase/AuthContext'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import '@assets/font-awesome/styles/all.min.css'

export const metadata = {
  title: 'Opalith - Revenue & Service Stack',
  description: 'Opalith - The full revenue and service stack to handle you customer journey end to end.',
  ogTitle: 'Hello world',
  icons: {
    // Favicon for browsers (can be an array for different sizes/types)
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' }, // .ico often covers multiple sizes
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],

    // Apple Touch Icon (for iOS home screen)
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' } // You can add 'sizes' if you have multiple apple icons
    ]

    // Icons for Android (often referenced via a manifest)
    // You can also define them here or link to a manifest.json
    // For simplicity, we'll focus on the direct links first.
    // The android icons are often linked via a web app manifest file.
  }
}

const RootLayout = async props => {
  const { children } = props

  // Vars
  const systemMode = await getSystemMode()
  const direction = 'ltr'

  return (
    <html id='__next' lang='en' dir={direction} suppressHydrationWarning>
      <AuthProvider>
        <body className='flex is-full min-bs-full flex-auto flex-col' suppressHydrationWarning>
          <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}

export default RootLayout
