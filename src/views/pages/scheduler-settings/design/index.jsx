'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

// Component Imports
import Link from '@components/Link'
import Form from '@components/Form'
import CustomTextField from '@core/components/mui/TextField'

import SchedulerColors from './SchedulerColors'
import SchedulerCTA from './SchedulerCTA'

const Security = () => {
  return (
    <Grid container spacing={6} alignItems='stretch'>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack spacing={6}>
          <SchedulerColors />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack spacing={6}>
          <SchedulerCTA />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Security
