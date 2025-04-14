// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import UserListTable from './UserListTable'
import UserListCards from './UserListCards'

const getUserData = async () => {
  // Vars
  const res = db

  return res
}

const db = [
  {
    id: 1,
    fullName: 'Yannick Géry',
    company: 'Yotz PVT LTD',
    role: 'admin',
    username: 'yannickgery',
    country: 'France',
    contact: '(479) 232-9151',
    email: 'yannick@opalith.co',
    currentPlan: 'pro',
    status: 'active',
    avatar:
      'https://storage.googleapis.com/opalith.firebasestorage.app/images/fItWq48wNBMGHqaAmelvyihODYn1/66a5ee15-f960-467d-bf0e-58770a31f994.png?GoogleAccessId=firebase-adminsdk-1uh04%40opalith.iam.gserviceaccount.com&Expires=1828780439&Signature=xej14QE8yB8DGJZJWUu%2Bmt9jXh7EgCyfSTEqS5yuypN1L8bASLb3b9N0dkYMXtbNw2BboSdLV3vvxCaamlpuCU9SPp%2Br4OVazwxSDogfhSxKSGSKL4usqehblxo0GymhHzA%2BpdRQZ9hnAAIiUPJi6aii%2FABQJ0EnSNa2vnEBY2vs%2BK1FoKKEwA%2Bu2Kgvgjkp%2BggWl1AeYgC0Ee7E5PiU0f3byjVlkN5GJBNs%2B1SiGbGQ%2FzHu%2F6Oas8s0kPoyi%2BTMcN6q%2F6d%2FCGQhPUaHsrdELIUsj%2BZ7chg%2BIUkk%2BQWMzBcMWO5XIZygIPmzYcuFaKN8Rr2r%2FuEJSrjSvQy8aitfQg%3D%3D',
    avatarColor: 'primary',
    billing: 'Auto Debit'
  },
  {
    id: 2,
    fullName: 'Thomas Monvoisin',
    company: 'Opalith',
    role: 'admin',
    username: 'thomasmonvoisin',
    country: 'France',
    contact: '(472) 607-9137',
    email: 'thomas@opalith.co',
    currentPlan: 'pro',
    status: 'active',
    avatar: '',
    billing: 'Auto Debit'
  }
]

const UserList = async () => {
  const userData = await getUserData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <UserListCards />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <UserListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default UserList
