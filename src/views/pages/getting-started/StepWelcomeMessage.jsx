// MUI Imports
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'
import CustomTextField from '@core/components/mui/TextField'

const StepPersonalInfo = ({ handleNext, handlePrev }) => {
  return (
    <>
      <div className='mbe-5'>
        <Typography variant='h4'>Congratulations !</Typography>
        <Typography className='mt-[15px]'>
          We{`'`}re glad you{`'`}re joining us to change the way your teams work (in a better way).
        </Typography>
        <Typography className='mt-[15px]'>
          Before you begin, we just need to know a little more about you and create or join a workspace to manage global
          settings.
        </Typography>
      </div>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12 }} className='flex justify-between mt-[50px]'>
          <Button
            variant='tonal'
            color='secondary'
            onClick={handlePrev}
            disabled
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
