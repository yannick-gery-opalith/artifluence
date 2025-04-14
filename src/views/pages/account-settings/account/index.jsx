// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import { Stack } from '@mui/material'

import AccountDetails from './AccountDetails'

const Account = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <AccountDetails />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}></Grid>
      <Grid size={{ xs: 12, sm: 6, md: 8 }}></Grid>
    </Grid>
  )
}

export default Account
