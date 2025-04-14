// MUI Imports
import Grid from '@mui/material/Grid2'

import { ButtonGroup, Button, Tooltip } from '@mui/material'

import MeetingCard from '@/views/pages/meeting-scheduler/meeting-card/MeetingCard'

const meetings = [
  {
    title: '15-min Long title working out as expected',
    duration: 15,
    link: '/quick-chat',
    date: 'Mon, Jun 5, 2023',
    primary: '#E91E63',
    secondary: '#3F51B5',
    location: { name: 'Zoom', icon: 'far fa-camera' }
  },
  {
    title: '30-min Meeting',
    duration: 30,
    link: '/random-coffee',
    date: 'Tue, Jun 6, 2023',
    primary: '#7367f0',
    secondary: '#01aa9a',
    location: { name: 'Google Meet', icon: 'far fa-camera' }
  },
  {
    title: '45-min Meeting',
    duration: 45,
    link: '/45min',
    date: 'Tue, Jun 6, 2023',
    primary: '#7367f0',
    secondary: '#01aa9a',
    location: { name: 'Phone', icon: 'far fa-camera' }
  },
  {
    title: '60-min Meeting',
    duration: 60,
    link: '/60min',
    date: 'Tue, Jun 6, 2023',
    primary: '#7367f0',
    secondary: '#01aa9a',
    location: { name: 'Google Meet', icon: 'far fa-camera' }
  },
  {
    title: '90-min Meeting',
    duration: 90,
    link: '/90min',
    date: 'Tue, Jun 6, 2023',
    primary: '#7367f0',
    secondary: '#01aa9a',
    location: { name: 'Google Meet', icon: 'far fa-camera' }
  }
]

var data = {}

const getLinksData = async () => {
  return meetings
}

const CalendarSettingsPage = async ({ params }) => {
  const { id } = await params

  // Vars
  const links = await getLinksData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }} className='flex justify-between items-center'>
        <Button variant='tonal'>
          <i className='far fa-link mr-[10px]'></i>
          https://cal.opalith.co/yannick-gery
        </Button>
        <ButtonGroup variant='contained' aria-label='Basic button group'>
          <Tooltip title='Add new link'>
            <span>
              <Button>
                <i className='far fa-plus'></i>
              </Button>
            </span>
          </Tooltip>
          <Tooltip title='Duplicate'>
            <span>
              <Button disabled>
                <i className='far fa-copy'></i>
              </Button>
            </span>
          </Tooltip>
          <Tooltip title='Delete'>
            <span>
              <Button disabled>
                <i className='far fa-trash'></i>
              </Button>
            </span>
          </Tooltip>
        </ButtonGroup>
      </Grid>
      {links.map((meeting, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 3 }} key={index}>
          <MeetingCard key={index} {...meeting} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CalendarSettingsPage
