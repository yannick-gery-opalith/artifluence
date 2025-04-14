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
import { Avatar, CardHeader, Switch, FormControlLabel } from '@mui/material'
import moment from 'moment'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

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

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const DayConfig = data => {
  const parseStart = moment(data.start, 'HH:mm').toDate()
  const parseEnd = moment(data.end, 'HH:mm').toDate()

  // if (data.day !== 'Saturday' && data.day !== 'Sunday') data.active = true

  const [start, setStart] = useState(parseStart)
  const [end, setEnd] = useState(parseEnd)
  const [active, setActive] = useState(data.day !== 'Saturday' && data.day !== 'Sunday')

  const handleChange = event => {
    setActive(event.target.checked)
  }

  return (
    <Grid container spacing={6} className='mb-[20px]'>
      <Grid size={{ xs: 4 }}>
        <FormControlLabel control={<Switch checked={active} onChange={handleChange} />} label={data.day} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <AppReactDatepicker
          showTimeSelect
          selected={start}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat='h:mm aa'
          id='time-only-picker'
          onChange={date => setStart(date)}
          disabled={!active}
          customInput={<TextField size='small' label='Start' fullWidth />}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <AppReactDatepicker
          showTimeSelect
          selected={end}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat='h:mm aa'
          id='time-only-picker'
          onChange={date => setEnd(date)}
          disabled={!active}
          customInput={<TextField size='small' label='End' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

const AccountDetails = () => {
  // States
  const [formData, setFormData] = useState(initialData)
  const [fileInput, setFileInput] = useState('')
  const [time, setTime] = useState('')

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
      <CardHeader title='Availability' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          {days.map((day, index) => (
            <DayConfig key={index} day={day} start='10:15' end='17:30' />
          ))}
        </form>
      </CardContent>
    </Card>
  )
}

export default AccountDetails
