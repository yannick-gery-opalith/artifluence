'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import { Avatar, CardHeader, InputAdornment, IconButton, Switch, FormControlLabel } from '@mui/material'
import { Controller } from 'react-hook-form'
import { MuiColorInput } from 'mui-color-input'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Vars
const initialData = {
  primary: '#7367f0',
  secondary: '#00a1a1',
  avatar: 'photo'
}

const languageData = ['English', 'Arabic', 'French', 'German', 'Portuguese']

const SchedulerColors = () => {
  // States
  const [formData, setFormData] = useState(initialData)

  const [autoTranslate, setautoTranslate] = useState(true)

  const autoTranslateChange = event => {
    setautoTranslate(event.target.checked)
  }

  const handleDelete = value => {
    setLanguage(current => current.filter(item => item !== value))
  }

  const handleChange = event => {
    setLanguage(event.target.value)
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileInputChange = file => {
    const reader = new FileReader()
    const { files } = file.target

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setFileInput(reader.result)
      }
    }
  }

  const handleUrl = () => {
    alert('Change URL')
  }

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('')
  }

  const imgSrc =
    'https://storage.googleapis.com/opalith.firebasestorage.app/images/fItWq48wNBMGHqaAmelvyihODYn1/66a5ee15-f960-467d-bf0e-58770a31f994.png?GoogleAccessId=firebase-adminsdk-1uh04%40opalith.iam.gserviceaccount.com&Expires=1828780439&Signature=xej14QE8yB8DGJZJWUu%2Bmt9jXh7EgCyfSTEqS5yuypN1L8bASLb3b9N0dkYMXtbNw2BboSdLV3vvxCaamlpuCU9SPp%2Br4OVazwxSDogfhSxKSGSKL4usqehblxo0GymhHzA%2BpdRQZ9hnAAIiUPJi6aii%2FABQJ0EnSNa2vnEBY2vs%2BK1FoKKEwA%2Bu2Kgvgjkp%2BggWl1AeYgC0Ee7E5PiU0f3byjVlkN5GJBNs%2B1SiGbGQ%2FzHu%2F6Oas8s0kPoyi%2BTMcN6q%2F6d%2FCGQhPUaHsrdELIUsj%2BZ7chg%2BIUkk%2BQWMzBcMWO5XIZygIPmzYcuFaKN8Rr2r%2FuEJSrjSvQy8aitfQg%3D%3D'

  return (
    <Card>
      <CardHeader title='Avatar & Colors' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <TextField
                select
                fullWidth
                label='Avatar'
                value={formData.avatar}
                onChange={e => handleFormChange('avatar', e.target.value)}
              >
                <MenuItem value='none' className='flex items-center gap-2'>
                  <div className='flex items-center'>
                    <Avatar sx={{ width: 28, height: 28 }}>
                      <i className='far fa-image-slash'></i>
                    </Avatar>
                    <span className='flex ml-[10px]'>No avatar</span>
                  </div>
                </MenuItem>
                <MenuItem value='photo' className='flex items-center gap-2'>
                  <div className='flex items-center'>
                    <Avatar src={imgSrc} sx={{ width: 28, height: 28 }}></Avatar>
                    <span className='flex ml-[10px]'>Profile picture</span>
                  </div>
                </MenuItem>
                <MenuItem value='logo' className='flex items-center gap-2'>
                  <div className='flex items-center'>
                    <Avatar
                      variant='rounded'
                      src='http://yannick-nextjs.web.app/android-chrome-512x512.png'
                      sx={{ width: 28, height: 28 }}
                    ></Avatar>
                    <span className='flex ml-[10px]'>Company logo</span>
                  </div>
                </MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <MuiColorInput
                format='hex'
                label='Primary'
                value={formData.primary}
                onChange={e => handleFormChange('primary', e)}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <MuiColorInput
                format='hex'
                label='Secondary'
                value={formData.secondary}
                onChange={e => handleFormChange('secondary', e)}
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default SchedulerColors
