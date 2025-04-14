// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import CreateApiKey from './CreateApiKey'
import ApiKeyList from './ApiKeyList'

const Security = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <CreateApiKey />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ApiKeyList />
      </Grid>
    </Grid>
  )
}

export default Security
