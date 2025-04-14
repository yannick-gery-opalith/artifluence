// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import PermissionListTable from './PermissionListTable'

const getData = async () => {
  // Vars
  const res = db

  return res
}

const db = [
  {
    id: '1',
    name: 'Admin',
    icon: 'crown',
    description: 'Full admin rights on all applications and billing',
    enrolled: [
      {
        email: 'yannick@opalith.co',
        photoURL: null
      },
      {
        email: 'thomas@opalith.co',
        photoURL: null
      }
    ]
  },
  {
    id: '2',
    name: 'User',
    icon: 'user',
    description: 'Standard user rights to access all applications',
    enrolled: [
      {
        email: 'A',
        photoURL: null
      },
      {
        email: 'B',
        photoURL: null
      },
      {
        email: 'C',
        photoURL: null
      },
      {
        email: 'D',
        photoURL: null
      },
      {
        email: 'E',
        photoURL: null
      }
    ]
  },
  {
    id: '2',
    name: 'Sales: SDR',
    icon: 'globe',
    description: 'International SDRs only',
    enrolled: [
      {
        email: 'A',
        photoURL: null
      },
      {
        email: 'B',
        photoURL: null,
        icon: 'users'
      },
      {
        email: 'C',
        photoURL: null,
        icon: 'users'
      },
      {
        email: 'D',
        photoURL: null
      },
      {
        email: 'E',
        photoURL: null
      },
      {
        email: 'F',
        photoURL: null
      }
    ]
  }
]

const UserList = async () => {
  const permissionData = await getData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <PermissionListTable tableData={permissionData} />
      </Grid>
    </Grid>
  )
}

export default UserList
