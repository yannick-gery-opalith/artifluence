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
import { Avatar } from '@mui/material'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Vars
const initialData = {
  firstName: 'Yannick',
  lastName: 'Gery',
  displayName: 'Yannick Géry',
  email: 'yannick@opalith.co',
  organization: 'Opalith',
  phoneNumber: '+33 7 86 11 06 80',
  address: '7 rue Bonnefond, 69003 Lyon',
  state: '',
  zipCode: '69003',
  country: 'fr',
  language: 'English',
  timezone: 'gmt-12',
  currency: 'euro'
}

const languageData = ['English', 'Arabic', 'French', 'German', 'Portuguese']

const AccountDetails = () => {
  // States
  const [formData, setFormData] = useState(initialData)
  const [fileInput, setFileInput] = useState('')

  const [imgSrc, setImgSrc] = useState(
    'https://storage.googleapis.com/opalith.firebasestorage.app/images/fItWq48wNBMGHqaAmelvyihODYn1/66a5ee15-f960-467d-bf0e-58770a31f994.png?GoogleAccessId=firebase-adminsdk-1uh04%40opalith.iam.gserviceaccount.com&Expires=1828780439&Signature=xej14QE8yB8DGJZJWUu%2Bmt9jXh7EgCyfSTEqS5yuypN1L8bASLb3b9N0dkYMXtbNw2BboSdLV3vvxCaamlpuCU9SPp%2Br4OVazwxSDogfhSxKSGSKL4usqehblxo0GymhHzA%2BpdRQZ9hnAAIiUPJi6aii%2FABQJ0EnSNa2vnEBY2vs%2BK1FoKKEwA%2Bu2Kgvgjkp%2BggWl1AeYgC0Ee7E5PiU0f3byjVlkN5GJBNs%2B1SiGbGQ%2FzHu%2F6Oas8s0kPoyi%2BTMcN6q%2F6d%2FCGQhPUaHsrdELIUsj%2BZ7chg%2BIUkk%2BQWMzBcMWO5XIZygIPmzYcuFaKN8Rr2r%2FuEJSrjSvQy8aitfQg%3D%3D'
  )

  const [language, setLanguage] = useState(['French'])

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

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('')
  }

  return (
    <Card>
      <CardContent className='mbe-4'>
        <div className='flex max-sm:flex-col items-center gap-6'>
          <Avatar
            src={imgSrc}
            alt={initialData?.displayName}
            className='cursor-pointer bs-[100px] is-[100px]'
            variant='rounded'
          />
          <div className='flex flex-grow flex-col gap-4'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button component='label' variant='contained' htmlFor='account-settings-upload-image'>
                Upload New Photo
                <input
                  hidden
                  type='file'
                  value={fileInput}
                  accept='image/png, image/jpeg'
                  onChange={handleFileInputChange}
                  id='account-settings-upload-image'
                />
              </Button>
              <Button variant='tonal' color='secondary' onClick={handleFileInputReset}>
                Reset
              </Button>
            </div>
            <Typography>Allowed JPG, GIF or PNG. Max size of 3M</Typography>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='First Name'
                value={formData.firstName}
                placeholder='John'
                onChange={e => handleFormChange('firstName', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Last Name'
                value={formData.lastName}
                placeholder='Doe'
                onChange={e => handleFormChange('lastName', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Email'
                value={formData.email}
                placeholder='john.doe@gmail.com'
                onChange={e => handleFormChange('email', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Organization'
                value={formData.organization}
                placeholder='Pixinvent'
                onChange={e => handleFormChange('organization', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Phone Number'
                value={formData.phoneNumber}
                placeholder='+1 (234) 567-8901'
                onChange={e => handleFormChange('phoneNumber', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Address'
                value={formData.address}
                placeholder='Address'
                onChange={e => handleFormChange('address', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='State'
                value={formData.state}
                placeholder='New York'
                onChange={e => handleFormChange('state', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type='number'
                label='Zip Code'
                value={formData.zipCode}
                placeholder='123456'
                onChange={e => handleFormChange('zipCode', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                label='Country'
                value={formData.country}
                onChange={e => handleFormChange('country', e.target.value)}
              >
                <MenuItem value='us'>USA</MenuItem>
                <MenuItem value='uk'>UK</MenuItem>
                <MenuItem value='fr'>France</MenuItem>
                <MenuItem value='de'>Germany</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                label='Language'
                value={language}
                slotProps={{
                  select: {
                    multiple: true, // @ts-ignore
                    onChange: handleChange,
                    renderValue: selected => (
                      <div className='flex flex-wrap gap-2'>
                        {selected.map(value => (
                          <Chip
                            key={value}
                            clickable
                            onMouseDown={event => event.stopPropagation()}
                            size='small'
                            label={value}
                            onDelete={() => handleDelete(value)}
                          />
                        ))}
                      </div>
                    )
                  }
                }}
              >
                {languageData.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                label='TimeZone'
                value={formData.timezone}
                onChange={e => handleFormChange('timezone', e.target.value)}
                slotProps={{
                  select: { MenuProps: { PaperProps: { style: { maxHeight: 250 } } } }
                }}
              >
                <MenuItem value='gmt-12'>(GMT-12:00) International Date Line West</MenuItem>
                <MenuItem value='gmt-11'>(GMT-11:00) Midway Island, Samoa</MenuItem>
                <MenuItem value='gmt-10'>(GMT-10:00) Hawaii</MenuItem>
                <MenuItem value='gmt-09'>(GMT-09:00) Alaska</MenuItem>
                <MenuItem value='gmt-08'>(GMT-08:00) Pacific Time (US & Canada)</MenuItem>
                <MenuItem value='gmt-08-baja'>(GMT-08:00) Tijuana, Baja California</MenuItem>
                <MenuItem value='gmt-07'>(GMT-07:00) Chihuahua, La Paz, Mazatlan</MenuItem>
                <MenuItem value='gmt-07-mt'>(GMT-07:00) Mountain Time (US & Canada)</MenuItem>
                <MenuItem value='gmt-06'>(GMT-06:00) Central America</MenuItem>
                <MenuItem value='gmt-06-ct'>(GMT-06:00) Central Time (US & Canada)</MenuItem>
                <MenuItem value='gmt-06-mc'>(GMT-06:00) Guadalajara, Mexico City, Monterrey</MenuItem>
                <MenuItem value='gmt-06-sk'>(GMT-06:00) Saskatchewan</MenuItem>
                <MenuItem value='gmt-05'>(GMT-05:00) Bogota, Lima, Quito, Rio Branco</MenuItem>
                <MenuItem value='gmt-05-et'>(GMT-05:00) Eastern Time (US & Canada)</MenuItem>
                <MenuItem value='gmt-05-ind'>(GMT-05:00) Indiana (East)</MenuItem>
                <MenuItem value='gmt-04'>(GMT-04:00) Atlantic Time (Canada)</MenuItem>
                <MenuItem value='gmt-04-clp'>(GMT-04:00) Caracas, La Paz</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                label='Currency'
                value={formData.currency}
                onChange={e => handleFormChange('currency', e.target.value)}
              >
                <MenuItem value='usd'>USD</MenuItem>
                <MenuItem value='euro'>EUR</MenuItem>
                <MenuItem value='pound'>Pound</MenuItem>
                <MenuItem value='bitcoin'>Bitcoin</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }} className='flex gap-4 flex-wrap'>
              <Button variant='contained' type='submit'>
                Save Changes
              </Button>
              <Button variant='tonal' type='reset' color='secondary' onClick={() => setFormData(initialData)}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AccountDetails
