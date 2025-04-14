// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import SchedulerSettings from '@views/pages/scheduler-settings'

const SchedulingTab = dynamic(() => import('@views/pages/scheduler-settings/scheduling'))
const DesignTab = dynamic(() => import('@/views/pages/scheduler-settings/design'))
const AdvancedTab = dynamic(() => import('@views/pages/scheduler-settings/advanced'))
const ConnectionsTab = dynamic(() => import('@views/pages/scheduler-settings/connections'))

// Vars
const tabContentList = () => ({
  scheduling: <SchedulingTab />,
  design: <DesignTab />,
  advanced: <AdvancedTab />,
  connections: <ConnectionsTab />
})

const SchedulerSettingsPage = () => {
  return <SchedulerSettings tabContentList={tabContentList()} />
}

export default SchedulerSettingsPage

// // MUI Imports
// import Grid from '@mui/material/Grid2'

// import { ButtonGroup, Button, Tooltip } from '@mui/material'

// const meeting = {
//   title: '15-min Long title working out as expected',
//   duration: 15,
//   link: '/quick-chat',
//   date: 'Mon, Jun 5, 2023',
//   primary: '#E91E63',
//   secondary: '#3F51B5',
//   location: { name: 'Zoom', icon: 'far fa-camera' }
// }

// const getLinksData = async () => {
//   return meeting
// }

// const CalendarSettingsPage = async ({ params }) => {
//   const { id } = await params

//   console.log(id)

//   // Vars
//   const links = await getLinksData()

//   return (
//     <Grid container spacing={6}>
//       <Grid size={{ xs: 12 }} className='flex justify-between items-center'>
//         <Button variant='tonal'>
//           <i className='far fa-link mr-[10px]'></i>
//           https://cal.opalith.co/yannick-gery/30min
//         </Button>
//         <ButtonGroup variant='contained' aria-label='Basic button group'>
//           <Tooltip title='Add new link'>
//             <Button>
//               <i className='far fa-plus'></i>
//             </Button>
//           </Tooltip>
//           <Tooltip title='Duplicate'>
//             <span>
//               <Button disabled>
//                 <i className='far fa-copy'></i>
//               </Button>
//             </span>
//           </Tooltip>
//           <Tooltip title='Delete'>
//             <Button>
//               <i className='far fa-trash'></i>
//             </Button>
//           </Tooltip>
//         </ButtonGroup>
//       </Grid>
//       <Grid size={{ xs: 12 }}></Grid>
//     </Grid>
//   )
// }

// export default CalendarSettingsPage
