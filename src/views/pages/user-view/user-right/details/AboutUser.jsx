'use client'

// React Imports
import { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const ChangePassword = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  const [user, setUser] = useState(null)

  // const [user, setUser] = useState({ firstname: '', lastname: '' })

  // const handleChange = e => {
  //   const { name, value } = e.target

  //   setUser(prevUser => ({ ...prevUser, [name]: value }))
  // }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty }
  } = useForm({
    defaultValues: {}
  })

  useEffect(() => {
    var data = {
      firstname: 'Yannick',
      lastname: 'Gery',
      email: 'yannick@opalith.co'
    }

    reset({
      user: data
    })
  }, [reset])

  return (
    <Card>
      <CardHeader title='About' />
      <CardContent className='flex flex-col gap-4'>
        <form>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12 }}></Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Firstname'
                variant='outlined'
                name='firstname'
                type='text'
                {...register('user.firstname')}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type='text'
                fullWidth
                label='Lastname'
                variant='outlined'
                name='lastname'
                {...register('user.lastname')}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                fullWidth
                label='Email'
                variant='outlined'
                name='email'
                type='email'
                {...register('user.email')}
              />
            </Grid>

            <Grid size={{ xs: 12 }} className='flex gap-4'>
              <Button variant='contained' disabled={!isDirty}>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePassword
