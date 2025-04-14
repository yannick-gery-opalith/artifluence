// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import LinearProgress from '@mui/material/LinearProgress'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import UpgradePlan from '@components/dialogs/upgrade-plan'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const CurrentPlan = ({ data }) => {
  const buttonProps = (children, color, variant) => ({
    children,
    variant,
    color
  })

  return (
    <Card>
      <CardHeader title='Current Plan' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Your Current Plan is
                </Typography>
                <Chip color='primary' variant='tonal' label='Starter' size='small' />
              </div>
              <Typography>Including 1200 tokens / User</Typography>
            </div>
            <div className='flex flex-col'>
              <Typography>Breakdown: </Typography>
              <List component='nav' aria-label='main mailbox'>
                <ListItem>
                  <ListItemIcon>
                    <i className='far fa-gift text-[16px]' />
                  </ListItemIcon>
                  <ListItemText primary='8 free users' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <i className='far fa-rocket-launch text-[16px]' />
                  </ListItemIcon>
                  <ListItemText primary='27 starter users' />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className='flex flex-col gap-6'>
            <Alert severity='success'>
              <AlertTitle>Everything is up to date !</AlertTitle>
              Thank you for trusting us
            </Alert>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center justify-between'>
                <Typography color='text.primary' className='font-medium'>
                  Days
                </Typography>
                <Typography color='text.primary' className='font-medium'>
                  3 of 30 Days
                </Typography>
              </div>
              <LinearProgress variant='determinate' value={10} />
              <Typography variant='body2'>27 days remaining until your plan renews</Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center justify-between'>
                <Typography color='text.primary' className='font-medium'>
                  Tokens
                </Typography>
                <Typography color='text.primary' className='font-medium'>
                  12 773 / 32 400
                </Typography>
              </div>
              <LinearProgress variant='determinate' value={39} />
              <Typography variant='body2'>19 627 available</Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12 }} className='flex gap-4 flex-wrap'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Upgrade Plan', 'primary', 'contained')}
              dialog={UpgradePlan}
              dialogProps={{ data: data }}
            />
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Cancel Subscription', 'error', 'tonal')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'unsubscribe' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CurrentPlan
