// MUI Imports
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import ReactPlayer from '@/libs/ReactPlayer'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import CustomIconButton from '@core/components/mui/IconButton'

const FreeCourses = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <div className='flex flex-col items-center justify-center gap-y-4 bs-full text-center'>
              <CustomAvatar variant='rounded' skin='light' color='primary' size={52}>
                <i className='far fa-gift text-[30px]' />
              </CustomAvatar>
              <Typography variant='h4'>Learn more about Conversations</Typography>
              <Typography>
                Discover our Youtube <span className='text-primary font-bold'>OpAcademy</span> Channel where we share
                tips and tricks, best practices and new ways to create value.
              </Typography>
              <Button variant='contained'>Learn more</Button>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='border rounded bs-full'>
              <div className='mli-2 mbs-2 overflow-hidden rounded'>
                <ReactPlayer
                  playing
                  controls
                  url='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                  height={200}
                  className='bg-black !is-full'
                  light={
                    <img src='/images/apps/academy/7.png' alt='Thumbnail' className='is-full bs-full object-cover' />
                  }
                  playIcon={
                    <CustomIconButton variant='contained' color='error' className='absolute rounded-full'>
                      <i className='far fa-play w-[60px] text-center' />
                    </CustomIconButton>
                  }
                />
              </div>
              <div className='flex flex-col gap-2 p-6'>
                <Typography variant='h5'>Creating AI templates</Typography>
                <Typography className='line-clamp-3 min-h-[calc(1lh*3)]'>
                  Extract information in a structured way and save it in your favorite destination like Salesforce,
                  Hubspot or Notion. Follow-up email ? No trouble, just prompt for it !
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='border rounded bs-full'>
              <div className='mli-2 mbs-2 overflow-hidden rounded'>
                <ReactPlayer
                  playing
                  controls
                  url='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                  height={200}
                  className='bg-black !is-full'
                  light={
                    <img src='/images/apps/academy/8.png' alt='Thumbnail' className='is-full bs-full object-cover' />
                  }
                  playIcon={
                    <CustomIconButton variant='contained' color='error' className='absolute rounded-full'>
                      <i className='far fa-play w-[60px] text-center' />
                    </CustomIconButton>
                  }
                />
              </div>
              <div className='flex flex-col gap-2 p-6'>
                <Typography variant='h5'>Voice AI on the road</Typography>
                <Typography className='line-clamp-3 min-h-[calc(1lh*3)]'>
                  Have an in-person meeting ? No trouble, you can record the meeting and just send it over to get
                  transcribed and analyzed the same way you would in a virtual meeting !
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FreeCourses
