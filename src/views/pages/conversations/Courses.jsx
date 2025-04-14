import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import LinearProgress from '@mui/material/LinearProgress'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'
import SoundWave from '@components/SoundWave'

// Util Imports

const chipColor = {
  Sales: { color: 'primary' },
  Investors: { color: 'success' },
  Discovery: { color: 'error' },
  BANT: { color: 'warning' },
  MEDDIC: { color: 'info' }
}

const Courses = props => {
  // Props
  const { courseData, searchValue } = props

  // States
  const [course, setCourse] = useState('All')
  const [hideOthers, sethideOthers] = useState(false)
  const [data, setData] = useState([])
  const [activePage, setActivePage] = useState(0)

  // Hooks
  const { lang: locale } = useParams()

  useEffect(() => {
    let newData =
      courseData?.filter(courseItem => {
        if (course === 'All') return !hideOthers || courseItem.userId === 'yannickgery'

        return courseItem.tags === course && (!hideOthers || courseItem.userId === 'yannickgery')
      }) ?? []

    if (searchValue) {
      newData = newData.filter(category => category.courseTitle.toLowerCase().includes(searchValue.toLowerCase()))
    }

    if (activePage > Math.ceil(newData.length / 6)) setActivePage(0)
    setData(newData)
  }, [searchValue, activePage, course, hideOthers, courseData])

  const handleChange = e => {
    sethideOthers(e.target.checked)
    setActivePage(0)
  }

  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div>
            <Typography variant='h5'>{hideOthers ? 'My' : 'All'} conversations </Typography>
            <Typography>{hideOthers ? '1' : '4'} / 4 conversations</Typography>
          </div>
          <div className='flex flex-wrap items-center gap-y-4 gap-x-6'>
            <FormControl fullWidth size='small' className='is-[250px] flex-auto'>
              <Select
                fullWidth
                id='select-course'
                value={course}
                onChange={e => {
                  setCourse(e.target.value)
                  setActivePage(0)
                }}
                labelId='course-select'
              >
                <MenuItem value='All'>All tags</MenuItem>
                <MenuItem value='Sales'>Sales</MenuItem>
                <MenuItem value='Investors'>Investors</MenuItem>
                <MenuItem value='Discovery'>Discovery</MenuItem>
                <MenuItem value='BANT'>BANT</MenuItem>
                <MenuItem value='MEDDIC'>MEDDIC</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Switch onChange={handleChange} checked={hideOthers} />}
              label={hideOthers ? 'My conversations' : 'All conversations'}
            />
          </div>
        </div>
        {data.length > 0 ? (
          <Grid container spacing={6}>
            {data.slice(activePage * 6, activePage * 6 + 6).map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <div className='border rounded bs-full'>
                  <div className='pli-2 pbs-2 relative'>
                    <Link href={'/voice/conversations/123'} className='flex'>
                      <img src={item.tutorImg} alt={item.courseTitle} className='is-full' />
                    </Link>
                    {item?.source && (
                      <>
                        <Chip
                          className='absolute top-[15px] right-[15px]'
                          label={item.source}
                          variant='tonal'
                          size='small'
                          color='secondary'
                        />
                      </>
                    )}
                  </div>
                  <div className='flex flex-col gap-4 p-5'>
                    <div className='flex items-center justify-between'>
                      <Chip label={item.tags} variant='tonal' size='small' color={chipColor[item.tags].color} />
                      <div className='flex items-center'>
                        <i className='far fa-star mt-[-2px] mr-[5px]' />
                        <Typography className='font-medium mie-1'>{item.rating}</Typography>
                        <i className='far fa-eye mr-[5px] ml-[10px]' />
                        <Typography>{item.ratingCount}</Typography>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <Typography
                        variant='h5'
                        component={Link}
                        href={'/voice/conversations/123'}
                        className='hover:text-primary'
                      >
                        {item.courseTitle}
                      </Typography>
                      <Typography className='line-clamp-3 min-h-[calc(1lh*3)]'>{item.desc}</Typography>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-1 text-[12px]'>
                        <i className='far fa-calendar w-[15px] mr-[5px]' />
                        <Typography className='text-[12px]'>{`${item.time}`}</Typography>
                      </div>
                      <div className='flex items-center gap-1 text-[12px]'>
                        <i className='far fa-clock w-[15px] mr-[5px]' />
                        <Typography className='text-[12px]'>{`${item.duration}`}</Typography>
                      </div>
                      <LinearProgress
                        color='primary'
                        value={Math.floor((item.completedTasks / item.totalTasks) * 100)}
                        variant='determinate'
                        className='is-full bs-2'
                      />
                    </div>
                    <Button
                      variant='tonal'
                      startIcon={<i className='far fa-play' />}
                      component={Link}
                      href={'/voice/conversation/123'}
                    >
                      Open
                    </Button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography className='text-center'>No conversations found</Typography>
        )}
        <div className='flex justify-center'>
          <Pagination
            count={Math.ceil(data.length / 6)}
            page={activePage + 1}
            showFirstButton
            showLastButton
            shape='rounded'
            variant='tonal'
            color='primary'
            onChange={(e, page) => setActivePage(page - 1)}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default Courses
