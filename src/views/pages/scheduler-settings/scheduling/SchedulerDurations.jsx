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
  url: 'https://cal.opalith.co/yannickgery/30-min'
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

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('')
  }

  return (
    <Card>
      <CardHeader title='Duration' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <TextField
                select
                fullWidth
                label='Duration'
                value={formData.duration}
                onChange={e => handleFormChange('duration', e.target.value)}
              >
                <MenuItem value='15'>15 min</MenuItem>
                <MenuItem value='30'>30 min</MenuItem>
                <MenuItem value='45'>45 min</MenuItem>
                <MenuItem value='60'>60 min</MenuItem>
                <MenuItem value='90'>90 min</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                select
                fullWidth
                label='Buffer before event'
                value={formData.bufferBefore}
                onChange={e => handleFormChange('bufferBefore', e.target.value)}
              >
                <MenuItem value='0'>0 min</MenuItem>
                <MenuItem value='5'>5 min</MenuItem>
                <MenuItem value='10'>10 min</MenuItem>
                <MenuItem value='15'>15 min</MenuItem>
                <MenuItem value='30'>30 min</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                select
                fullWidth
                label='Buffer after event'
                value={formData.bufferAfter}
                onChange={e => handleFormChange('bufferAfter', e.target.value)}
              >
                <MenuItem value='0'>0 min</MenuItem>
                <MenuItem value='5'>5 min</MenuItem>
                <MenuItem value='10'>10 min</MenuItem>
                <MenuItem value='15'>15 min</MenuItem>
                <MenuItem value='30'>30 min</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AccountDetails
