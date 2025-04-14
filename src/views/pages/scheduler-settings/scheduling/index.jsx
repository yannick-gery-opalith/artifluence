// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import { Stack } from '@mui/material'

import SchedulerBasics from './SchedulerBasics'
import SchedulerRanges from './SchedulerRanges'
import SchedulerDurations from './SchedulerDurations'
import SchedulerAdvanced from './SchedulerAdvanced'

const Account = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack spacing={6}>
          <SchedulerBasics />
          <SchedulerAdvanced />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack spacing={6}>
          <SchedulerDurations />
          <SchedulerRanges />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 8 }}></Grid>
    </Grid>
  )
}

export default Account
