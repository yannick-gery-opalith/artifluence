// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'

// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'

// Vars
const connectedAccountsArr = [
  {
    checked: true,
    title: 'Google',
    logo: '/images/logos/google.png',
    subtitle: 'Calendar and Contacts'
  },
  {
    checked: false,
    title: 'Slack',
    logo: '/images/logos/slack.png',
    subtitle: 'Communications'
  },
  {
    checked: true,
    title: 'Github',
    logo: '/images/logos/github.png',
    subtitle: 'Manage your Git repositories'
  },
  {
    checked: true,
    title: 'Mailchimp',
    subtitle: 'Email marketing service',
    logo: '/images/logos/mailchimp.png'
  },
  {
    title: 'Asana',
    checked: false,
    subtitle: 'Task Communication',
    logo: '/images/logos/asana.png'
  }
]

const socialAccountsArr = [
  {
    title: 'Linkedin',
    isConnected: true,
    username: '@yannickgery',
    logo: '/images/logos/linkedin.png'
  },
  {
    isConnected: true,
    title: 'Google',
    logo: '/images/logos/google.png',
    username: 'yannick@opalith.co'
  },
  {
    isConnected: false,
    title: 'Slack',
    logo: '/images/logos/slack.png'
  }
]

const Connections = () => {
  return (
    <Card>
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <CardHeader title='Connected Accounts' subheader='Activated apps to work with Opalith' />
          <CardContent className='flex flex-col gap-4'>
            {socialAccountsArr.map((item, index) => (
              <div key={index} className='flex items-center justify-between gap-4'>
                <div className='flex flex-grow items-center gap-4'>
                  <img height={32} width={32} src={item.logo} alt={item.title} />
                  <div className='flex-grow'>
                    <Typography className='text-textPrimary font-medium'>{item.title}</Typography>
                    {item.isConnected ? (
                      <Typography variant='body2' color='primary.main' component={Link} href={item.href || '#'}>
                        {item.username}
                      </Typography>
                    ) : (
                      <Typography variant='body2'>Not Connected</Typography>
                    )}
                  </div>
                </div>
                <CustomIconButton variant='tonal' color={item.isConnected ? 'error' : 'secondary'}>
                  <i className={item.isConnected ? 'tabler-trash' : 'tabler-link'} />
                </CustomIconButton>
              </div>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Connections
