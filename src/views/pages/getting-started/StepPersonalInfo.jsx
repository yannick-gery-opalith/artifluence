// MUI Imports
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import { TextField, Divider } from '@mui/material'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'
import CustomTextField from '@core/components/mui/TextField'

import Countries from '@/utils/countries'

const starredCountries = Countries.filter(country => country.starred).sort((a, b) => a.name.localeCompare(b.name))

const otherCountries = Countries.filter(country => !country.starred).sort((a, b) => a.name.localeCompare(b.name))

console.log(Countries)

const StepPersonalInfo = ({ handleNext, handlePrev }) => {
  return (
    <>
      <div className='mbe-5'>
        <Typography variant='h4'>Personal Information</Typography>
        <Typography>Tell us about you</Typography>
      </div>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label='First Name' placeholder='John' />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label='Last Name' placeholder='Doe' />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField select fullWidth label='Country'>
            {starredCountries.map(country => (
              <MenuItem key={country.code} value={country.code}>
                {country.name}
              </MenuItem>
            ))}

            <Divider />
            {otherCountries.map(country => (
              <MenuItem key={country.code} value={country.code}>
                {country.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label='Linkedin URL' placeholder='https://www.linkedin.com/in/richard-hendricks' />
        </Grid>
        <Grid size={{ xs: 12 }} className='flex justify-between mt-[25px]'>
          <Button
            variant='tonal'
            color='secondary'
            onClick={handlePrev}
            startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            onClick={handleNext}
            endIcon={<DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepPersonalInfo
