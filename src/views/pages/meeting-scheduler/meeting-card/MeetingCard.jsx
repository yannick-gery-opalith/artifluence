'use client'

import React, { useState } from 'react'

import Moment from 'react-moment'
import moment from 'moment'

import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Checkbox,
  Box
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { withEmotionCache } from '@emotion/react'

import OptionMenu from '@core/components/option-menu'

import styles from './MeetingCard.css'

const MeetingCard = props => {
  const { title, duration, link, date, color, selected, location, primary, secondary } = props
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setSnackbarOpen(true)
  }

  const [anchorEl, setAnchorEl] = useState('')
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAction = action => {
    console.log(`Selected action: ${action}`)
    handleClose()
  }

  const handleSelect = props => {
    console.log('checked')
    console.log(props)
  }

  const formatDuration = minutes => {
    if (minutes === 60) return '60min'

    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    if (hours && mins) return `${hours}h${mins}min`
    if (hours) return `${hours}h`

    return `${mins}min`
  }

  return (
    <Card
      sx={{
        borderTop: '5px solid #808080',
        borderColor: primary + ' !important'
      }}
    >
      <CardHeader
        title={title}
        action={
          <div>
            <Checkbox onChange={() => handleSelect(props)} />
            {/* <IconButton
              aria-label='more'
              id='action-button'
              aria-controls={open ? 'action-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
              size='small'
            >
              <i className='far fa-ellipsis-v'></i>
            </IconButton> */}
          </div>
        }
        className='pbe-4'
      />
      <CardContent>
        <table>
          <tbody>
            <tr>
              <td className='text-[12px] w-[100px] py-1 truncate'>
                <i className='far fa-clock mr-[5px]'></i>
                <span>Duration</span>
              </td>
              <td className='text-[12px] py-1'>{formatDuration(duration)}</td>
            </tr>
            <tr>
              <td className='text-[12px] w-[100px] py-1'>
                <i className='far fa-link mr-[5px]'></i>
                <span>Link</span>
              </td>
              <td className='text-[12px] py-1'>{link}</td>
            </tr>
            <tr>
              <td className='text-[12px] w-[100px] py-1'>
                <i className='far fa-map mr-[5px]'></i>
                <span>Location</span>
              </td>
              <td className='text-[12px] py-1'>{location.name}</td>
            </tr>
            <tr>
              <td className='text-[12px] w-[100px] py-1'>
                <i className='far fa-palette mr-[5px]'></i>
                <span>Style</span>
              </td>
              <td className='text-[12px] py-1'>
                <Box className='color-swatch shadow-md' sx={{ backgroundColor: primary + ' !important' }}></Box>
                <Box className='color-swatch shadow-md' sx={{ backgroundColor: secondary + ' !important' }}></Box>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardActions className='flex items-center justify-end'>
        <IconButton size='small' onClick={copyToClipboard}>
          <i className='far fa-copy'></i>
        </IconButton>
        <IconButton size='small' href='#' target='_blank'>
          <i className='far fa-external-link'></i>
        </IconButton>
        <Button variant='outlined' color='secondary' size='small' href='/scheduler/view/123'>
          Configuration
        </Button>
      </CardActions>
      <Menu
        id='action-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'action-button'
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem onClick={() => handleAction('show')}>Show</MenuItem>
        <MenuItem onClick={() => handleAction('edit')}>Edit</MenuItem>
        <MenuItem onClick={() => handleAction('delete')}>Delete</MenuItem>
        <MenuItem onClick={() => copyToClipboard('Amazing stuff')}>Copy</MenuItem>
      </Menu>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={30000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message='Copied'
        severity='success'
        sx={{
          '& .MuiSnackbarContent-root': {
            minWidth: '75px',
            paddingInline: 2 // optional: cleaner padding
          },
          '& .MuiSnackbarContent-root > div': {
            width: '100%',
            textAlign: 'center'
          }
        }}
      />
    </Card>
  )
}

export default MeetingCard
