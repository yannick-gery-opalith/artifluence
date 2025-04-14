import Button from '@mui/material/Button'

const DashboardPage = () => {
  return (
    <div>
      <h1 className='mb-[30px]'>Dashboard</h1>
      <Button color='primary' variant='contained' href='/voice/conversation/123'>
        See an example recording
      </Button>
    </div>
  )
}

export default DashboardPage
