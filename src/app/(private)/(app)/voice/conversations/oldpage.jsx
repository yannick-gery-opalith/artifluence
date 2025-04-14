import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const VoicePage = () => {
  return (
    <div>
      <h1>All conversations</h1>
      <Button color='primary' variant='contained' href='/voice/conversation/123'>
        See recording details
      </Button>
      <Stack spacing={2} width={210}>
        <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rectangular' width={210} height={60} />
        <Skeleton variant='rounded' width={210} height={60} />
      </Stack>
    </div>
  )
}

export default VoicePage
