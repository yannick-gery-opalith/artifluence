// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import AboutUser from './AboutUser'
import TwoStepVerification from './TwoStepVerification'
import RecentDevice from './RecentDevice'

const SecurityTab = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <AboutUser />
      </Grid>
    </Grid>
  )
}

export default SecurityTab
