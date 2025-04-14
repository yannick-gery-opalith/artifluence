'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'

// Component Imports
import { Divider } from '@mui/material'

import CustomTabList from '@core/components/mui/TabList'

const Settings = ({ tabContentList }) => {
  // States
  const [activeTab, setActiveTab] = useState('general')

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  return (
    <TabContext value={activeTab}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant='h5' className='mbe-4'>
            Permission Set: {'Admin'}
          </Typography>
          <CustomTabList orientation='vertical' onChange={handleChange} className='is-full' pill='true'>
            <Tab
              label='General'
              icon={<i className='far fa-home' />}
              iconPosition='start'
              value='general'
              className='flex-row justify-start !min-is-full'
            />
            <Tab
              label='Enrollment'
              icon={<i className='far fa-users' />}
              iconPosition='start'
              value='enrollment'
              className='flex-row justify-start !min-is-full'
            />
            <Divider className='mt-[20px] mb-[20px]' />
            <Tab
              label='Meeting scheduler'
              icon={<i className='far fa-calendar-range' />}
              iconPosition='start'
              value='scheduler'
              className='flex-row justify-start !min-is-full'
            />
            <Tab
              label='Voice Intelligence'
              icon={<i className='far fa-waveform-lines' />}
              iconPosition='start'
              value='voice'
              className='flex-row justify-start !min-is-full'
              disabled
            />
            <Tab
              label='Forms'
              icon={<i className='far fa-list-check' />}
              iconPosition='start'
              value='forms'
              className='flex-row justify-start !min-is-full'
              disabled
            />
            <Tab
              label='Outreach'
              icon={<i className='far fa-envelopes-bulk' />}
              iconPosition='start'
              value='outreach'
              className='flex-row justify-start !min-is-full'
              disabled
            />
            <Tab
              label='Enrichment'
              icon={<i className='far fa-water' />}
              iconPosition='start'
              value='enrichment'
              className='flex-row justify-start !min-is-full'
              disabled
            />
            <Tab
              label='Business intelligence'
              icon={<i className='far fa-chart-pie' />}
              iconPosition='start'
              value='data'
              className='flex-row justify-start !min-is-full'
              disabled
            />
          </CustomTabList>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <TabPanel value={activeTab} className='p-0'>
                {tabContentList[activeTab]}
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default Settings
