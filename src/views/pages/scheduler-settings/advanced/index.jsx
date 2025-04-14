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

import TwoFactorAuthenticationCard from './TwoFactorAuthenticationCard'
import ChangePasswordCard from './ChangePasswordCard'
import AccountDelete from './AccountDelete'
import RecentDevicesTable from './RecentDevicesTable'
import PermissionSet from './PermissionSet'

const Security = () => {
  return (
    <Grid container spacing={6} alignItems='stretch'>
      <Grid size={{ xs: 12 }}>
        <PermissionSet />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <ChangePasswordCard />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack spacing={6}>
          <TwoFactorAuthenticationCard />
          <AccountDelete />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <RecentDevicesTable />
      </Grid>
    </Grid>
  )
}

export default Security
