'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { TextField } from '@mui/material'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const PermissionSet = () => {
  return (
    <Card>
      <CardHeader title='Permissions' />
      <CardContent className='!pb-0'>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <form className='flex justify-end items-end bs-full flex-col gap-5 pbe-6'>
              <TextField select fullWidth label='Type' defaultValue='individual'>
                <MenuItem value='individual'>Individual</MenuItem>
                <MenuItem value='group'>Group (inherited)</MenuItem>
              </TextField>
              <TextField select fullWidth label='Set' defaultValue='user'>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='user'>User</MenuItem>
              </TextField>
              <Button variant='contained' fullWidth>
                Save
              </Button>
            </form>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className='flex items-end justify-center '>
            <img src='/images/illustrations/characters/9.png' width={227} height={224} alt='api illustration' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PermissionSet
