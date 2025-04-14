'use client'

// React Imports
import { useRef, useState, useEffect } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

import { useAuthState } from 'react-firebase-hooks/auth'

// MUI Imports
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

import { auth } from '@/firebase/config'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Styled component for badge content
const BadgeContentSpan = styled('span')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: 'var(--mui-palette-success-main)',
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
})

const UserDropdown = () => {
  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef(null)

  // Hooks
  const router = useRouter()
  const { settings } = useSettings()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event, url) => {
    if (url) {
      router.push(url)
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target)) {
      return
    }

    setOpen(false)
  }

  const handleUserLogout = async () => {
    // Redirect to login page
    await auth.signOut()
    router.push('/login')
    setTimeout(() => {
      router.push('/login')
    }, 500)
  }

  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (!user && !loading) {
      router.push('/')
    }
  }, [user, loading, router])

  const [photoURL, setPhotoURL] = useState('')

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(
        'https://storage.googleapis.com/opalith.firebasestorage.app/images/fItWq48wNBMGHqaAmelvyihODYn1/66a5ee15-f960-467d-bf0e-58770a31f994.png?GoogleAccessId=firebase-adminsdk-1uh04%40opalith.iam.gserviceaccount.com&Expires=1828780439&Signature=xej14QE8yB8DGJZJWUu%2Bmt9jXh7EgCyfSTEqS5yuypN1L8bASLb3b9N0dkYMXtbNw2BboSdLV3vvxCaamlpuCU9SPp%2Br4OVazwxSDogfhSxKSGSKL4usqehblxo0GymhHzA%2BpdRQZ9hnAAIiUPJi6aii%2FABQJ0EnSNa2vnEBY2vs%2BK1FoKKEwA%2Bu2Kgvgjkp%2BggWl1AeYgC0Ee7E5PiU0f3byjVlkN5GJBNs%2B1SiGbGQ%2FzHu%2F6Oas8s0kPoyi%2BTMcN6q%2F6d%2FCGQhPUaHsrdELIUsj%2BZ7chg%2BIUkk%2BQWMzBcMWO5XIZygIPmzYcuFaKN8Rr2r%2FuEJSrjSvQy8aitfQg%3D%3D'
      )
    }
  }, [user])

  return (
    <>
      <Avatar
        ref={anchorRef}
        src={photoURL}
        alt={user?.displayName}
        onClick={handleDropdownOpen}
        className='cursor-pointer bs-[38px] is-[38px] ml-5'
      />
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-is-[240px] !mbs-3 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
            }}
          >
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={e => handleDropdownClose(e)}>
                <MenuList>
                  <div className='flex items-center plb-2 pli-6 gap-2' tabIndex={-1}>
                    <Avatar alt={user?.displayName} src={photoURL} />
                    <div className='flex items-start flex-col'>
                      <Typography className='font-medium' color='text.primary'>
                        {user?.displayName || 'User'}
                      </Typography>
                      <Typography variant='caption'>{user?.email || 'Unknown email'}</Typography>
                    </div>
                  </div>
                  <Divider className='mlb-1' />
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-user' />
                    <Typography color='text.primary'>My Profile</Typography>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-settings' />
                    <Typography color='text.primary'>Settings</Typography>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-currency-dollar' />
                    <Typography color='text.primary'>Pricing</Typography>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-help-circle' />
                    <Typography color='text.primary'>FAQ</Typography>
                  </MenuItem>
                  <div className='flex items-center plb-2 pli-3'>
                    <Button
                      fullWidth
                      variant='contained'
                      color='error'
                      size='small'
                      endIcon={<i className='tabler-logout' />}
                      onClick={handleUserLogout}
                      sx={{ '& .MuiButton-endIcon': { marginInlineStart: 1.5 } }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default UserDropdown
