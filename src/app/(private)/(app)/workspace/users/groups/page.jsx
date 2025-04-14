// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import GroupListTable from './GroupListTable'

const getUserData = async () => {
  // Vars
  const res = db

  return res
}

const db = [
  {
    id: 1,
    name: 'Internaional Sales: SDR',
    users: 13,
    status: 'active'
  },
  {
    id: 2,
    name: 'French Sales: SDR',
    users: 7,
    status: 'active',
    icon: 'wine-glass'
  }
]

const UserList = async () => {
  const userData = await getUserData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <GroupListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default UserList
