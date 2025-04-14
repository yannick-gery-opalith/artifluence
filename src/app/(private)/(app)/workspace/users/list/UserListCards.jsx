// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Vars
const data = [
  {
    title: 'Free users',
    stats: '11',
    avatarIcon: 'far fa-gift text-[20px]',
    avatarColor: 'warning'
  },
  {
    title: 'Paid Users',
    stats: '27',
    avatarIcon: 'far fa-rocket-launch text-[20px]',
    avatarColor: 'success'
  },
  {
    title: 'Apps used',
    stats: '3',
    avatarIcon: 'far fa-grid-2-plus text-[20px]',
    avatarColor: 'primary'
  },
  {
    title: 'Pending invitations',
    stats: '2',
    avatarIcon: 'far fa-hourglass-half text-[20px]',
    avatarColor: 'error'
  }
]

const UserListCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards
