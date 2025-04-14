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
  label: '',
  url: ''
}

const languageData = ['English', 'Arabic', 'French', 'German', 'Portuguese']

const SchedulerColors = () => {
  // States
  const [formData, setFormData] = useState(initialData)

  const [autoTranslate, setautoTranslate] = useState(true)

  const autoTranslateChange = event => {
    setautoTranslate(event.target.checked)
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const [active, setActive] = useState(false)

  const handleChange = event => {
    setActive(event.target.checked)
  }

  return (
    <Card>
      <CardHeader
        title='CTA Button'
        action={<FormControlLabel className='mr-0' control={<Switch checked={active} onChange={handleChange} />} />}
      />
      <CardContent className={active ? 'hide' : 'show'}>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label='Label'
                value={formData.label}
                placeholder='Create an account for free'
                onChange={e => handleFormChange('label', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label='URL'
                value={formData.url}
                placeholder='http://app.opalith.co/register'
                onChange={e => handleFormChange('url', e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default SchedulerColors
