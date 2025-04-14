'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'

// Styled component for Accordion component
export const Accordion = styled(MuiAccordion)({
  margin: '0 !important',
  boxShadow: 'none !important',
  border: '1px solid var(--mui-palette-divider) !important',
  borderRadius: '0 !important',
  overflow: 'hidden',
  background: 'none',
  '&:not(:last-of-type)': {
    borderBottom: '0 !important'
  },
  '&:before': {
    display: 'none'
  },
  '&:first-of-type': {
    borderTopLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderTopRightRadius: 'var(--mui-shape-borderRadius) !important'
  },
  '&:last-of-type': {
    borderBottomLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderBottomRightRadius: 'var(--mui-shape-borderRadius) !important'
  }
})

// Styled component for AccordionSummary component
export const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(3, 6),
  transition: 'none',
  backgroundColor: 'var(--mui-palette-action-hover)',
  borderBlockEnd: '0 !important',
  '&.Mui-expanded': {
    borderBlockEnd: '1px solid var(--mui-palette-divider) !important'
  }
}))

// Styled component for AccordionDetails component
export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(4, 3)} !important`,
  backgroundColor: 'var(--mui-palette-background-paper)'
}))

const Sidebar = ({ content }) => {
  // States
  const [expanded, setExpanded] = useState(0)
  const [items, setItems] = useState(content?.map(item => item.topics) ?? [])

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleCheckboxChange = (e, index1, index2) => {
    setItems(
      items.map((item, i) => {
        if (i === index1) {
          return item.map((topic, j) => {
            if (j === index2) {
              return { ...topic, isCompleted: e.target.checked }
            }

            return topic
          })
        }

        return item
      })
    )
  }

  return (
    <div>
      <Accordion key='0' expanded={expanded === 0} onChange={handleChange(0)}>
        <AccordionSummary
          id='customized-panel-header-0'
          expandIcon={<i className='tabler-chevron-right text-textSecondary' />}
          aria-controls={'sd'}
        >
          <div>
            <Typography variant='h5'>Quickview</Typography>
            <Typography className='!font-normal !text-textSecondary'>Summary, statistics</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
            <ListItem role='listitem' className='flex gap-2 p-0'>
              <i className='far fa-messages text-textSecondary text-center min-w-[30px] w-[30px]' />
              <Typography>
                <span className='font-[700]'>Participants:</span> 3
              </Typography>
            </ListItem>
            <ListItem role='listitem' className='flex gap-2 p-0'>
              <i className='far fa-temperature-list text-textSecondary text-center min-w-[30px] w-[30px]' />
              <Typography>
                <span className='font-[700]'>Sentiment:</span> 87% positive
              </Typography>
            </ListItem>
            <ListItem role='listitem' className='flex gap-2 p-0'>
              <i className='far fa-sparkles text-textSecondary text-center min-w-[30px] w-[30px]' />
              <Typography>
                <span className='font-[700]'>AI Template:</span> BANT
              </Typography>
            </ListItem>
            <ListItem role='listitem' className='flex gap-2 p-0 justify-start items-start'>
              <i className='far fa-waveform-lines text-textSecondary text-center min-w-[30px] w-[30px] mt-[5px]' />
              <Typography>
                <span className='font-[700] flex w-full'>Summary:</span>
                The client is overall interested in our solution but has doubts if the system integration will work out
                properly. Adam will check the requirements internally next week (W21/2025) and Helmut will send a
                follow-up email with all certifications.
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion key='1' expanded={expanded === 1} onChange={handleChange(1)}>
        <AccordionSummary
          id='customized-panel-header-1'
          expandIcon={<i className='tabler-chevron-right text-textSecondary' />}
          aria-controls={'sd'}
        >
          <div>
            <Typography variant='h5'>AI Analysis</Typography>
            <Typography className='!font-normal !text-textSecondary'>Structured data, prompting</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>Some content</p>
        </AccordionDetails>
      </Accordion>
      <Accordion key='2' expanded={expanded === 2} onChange={handleChange(2)}>
        <AccordionSummary
          id='customized-panel-header-2'
          expandIcon={<i className='tabler-chevron-right text-textSecondary' />}
          aria-controls={'sd'}
        >
          <div>
            <Typography variant='h5'>Settings</Typography>
            <Typography className='!font-normal !text-textSecondary'>Subtitles, sharing</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>Some content</p>
        </AccordionDetails>
      </Accordion>
    </div>
  )

  // return (
  //   <>
  //     {content?.map((item, index) => {
  //       const totalTime = items[index]
  //         .reduce((sum, topic) => {
  //           const time = parseFloat(topic.time || '0')

  //           return sum + time
  //         }, 0)
  //         .toFixed(2)

  //       const selectedTopics = items[index].filter(topic => topic.isCompleted).length

  //       return (
  //         <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
  //           <AccordionSummary
  //             id='customized-panel-header-1'
  //             expandIcon={<i className='tabler-chevron-right text-textSecondary' />}
  //             aria-controls={'sd'}
  //           >
  //             <div>
  //               <Typography variant='h5'>{item.title}</Typography>
  //               <Typography className='!font-normal !text-textSecondary'>{`${selectedTopics} / ${item.topics.length} | ${parseFloat(totalTime)} min`}</Typography>
  //             </div>
  //           </AccordionSummary>
  //           <AccordionDetails>
  //             <List role='list' component='div' className='flex flex-col gap-4 plb-0'>
  //               {item.topics.map((topic, i) => {
  //                 return (
  //                   <ListItem key={i} role='listitem' className='gap-3 p-0'>
  //                     <ListItemIcon>
  //                       <Checkbox
  //                         tabIndex={-1}
  //                         checked={items[index][i].isCompleted}
  //                         onChange={e => handleCheckboxChange(e, index, i)}
  //                       />
  //                     </ListItemIcon>
  //                     <div>
  //                       <Typography className='font-medium !text-textPrimary'>{`${i + 1}. ${topic.title}`}</Typography>
  //                       <Typography variant='body2'>{topic.time}</Typography>
  //                     </div>
  //                   </ListItem>
  //                 )
  //               })}
  //             </List>
  //           </AccordionDetails>
  //         </Accordion>
  //       )
  //     })}
  //   </>
  // )
}

export default Sidebar
