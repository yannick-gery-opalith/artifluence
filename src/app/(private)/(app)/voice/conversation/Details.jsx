'use client'

import { useEffect, useState, useRef, useMemo } from 'react'

// MUI Imports
import dynamic from 'next/dynamic'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Menu, Button, MenuItem, Select, FormControl, InputLabel, ButtonBase } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import CustomIconButton from '@core/components/mui/IconButton'

import ReactPlayer from '@/libs/ReactPlayer'

const Details = ({ data }) => {
  // Hooks
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev)
  }

  const subtitleTracks = [
    { kind: 'subtitles', src: '../../fr.vtt', srcLang: 'fr', label: 'French' },
    { kind: 'subtitles', src: '../../en.vtt', srcLang: 'en', label: 'English' },
    { kind: 'subtitles', src: '../../de.vtt', srcLang: 'de', label: 'German', default: true }
  ]

  // State for selected subtitle and current active track
  const defaultTrack = subtitleTracks.find(track => track.default) || subtitleTracks[0]

  // State initialization using the actual default track
  const [selectedSubtitle, setSelectedSubtitle] = useState(defaultTrack.srcLang)
  const [currentSubtitle, setCurrentSubtitle] = useState(`${defaultTrack.label} (Default)`)
  const playerRef = useRef(null)

  // Handle subtitle change
  const handleSubtitleChange = lang => {
    const value = lang

    setSelectedSubtitle(value)
    const selectedTrack = subtitleTracks.find(track => track.srcLang === value)

    setCurrentSubtitle(selectedTrack.label)

    const player = playerRef.current?.getInternalPlayer()

    if (!player?.textTracks) return

    console.log('change')

    if (value === 'none') {
      // Turn off all subtitles
      Array.from(player.textTracks).forEach(track => {
        track.mode = 'disabled'
      })
      setCurrentSubtitle('Subtitles Off')
    } else {
      // Find and activate the selected subtitle track
      const trackToActivate = Array.from(player.textTracks).find(track => track.language === value)

      if (trackToActivate) {
        // First disable all tracks
        Array.from(player.textTracks).forEach(track => {
          track.mode = 'disabled'
        })

        // Then enable the selected one
        trackToActivate.mode = 'showing'

        setCurrentSubtitle(selectedTrack.label)
      }
    }
  }

  // Prepare tracks with only the selected subtitle enabled
  const getFilteredTracks = () => {
    if (selectedSubtitle === 'none') return []

    return subtitleTracks.map(track => ({
      ...track,
      default: track.srcLang === selectedSubtitle
    }))
  }

  // Handle track changes (when user changes subtitles through native player controls)
  const handleOnReady = () => {
    const player = playerRef.current?.getInternalPlayer()

    if (player?.textTracks) {
      player.textTracks.onchange = () => {
        const activeTrack = Array.from(player.textTracks).find(track => track.mode === 'showing')

        if (activeTrack) {
          const matchedTrack = subtitleTracks.find(t => t.srcLang === activeTrack.language)

          if (matchedTrack) {
            setCurrentSubtitle(matchedTrack.label)
            setSelectedSubtitle(matchedTrack.srcLang)
          }
        } else {
          setCurrentSubtitle('Subtitles Off')
          setSelectedSubtitle('none')
        }
      }
    }
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = ({ lang }) => {
    if (lang) {
      console.log('Language present')
      console.log(lang)
      handleSubtitleChange(lang)
    }

    setAnchorEl(null)
  }

  return (
    <Card suppressHydrationWarning>
      <CardContent className='flex flex-wrap items-center justify-between gap-4'>
        <div>
          <Typography variant='h5'>Opalith x Ankorstore</Typography>
          <Typography>
            <i className='far fa-clock mr-2'></i>
            2025-04-02 12h30
          </Typography>
        </div>
        <div className='flex items-center gap-2'>
          <Chip label='Discovery' variant='tonal' size='small' color='error' />
          <Chip label='Sales team' variant='tonal' size='small' color='primary' />
          <IconButton size='small' className='text-primary'>
            <i className='far fa-share-nodes cursor-pointer' />
          </IconButton>
          <IconButton size='small' className='text-primary'>
            <i className='fas fa-star cursor-pointer' />
          </IconButton>
        </div>
      </CardContent>
      <CardContent>
        <div className='border rounded'>
          <div className='mli-2 mbs-2 overflow-hidden rounded'>
            <ReactPlayer
              ref={playerRef}
              onReady={handleOnReady}
              playing={isPlaying}
              url='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
              controls
              width='100%'
              height='100%'
              className='rounded'
              onClickPreview={() => handlePlayPause()}
              light={
                <img src='/images/4.png' alt='Thumbnail' className='is-full bs-full object-cover bg-backgroundPaper' />
              }
              config={{
                file: {
                  tracks: getFilteredTracks()
                }
              }}
            />
            <Button
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleMenu}
              className='mt-5'
            >
              <i className='fa fa-subtitles mr-2'></i> Subtitles: {currentSubtitle}
            </Button>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              {subtitleTracks.map(track => (
                <MenuItem onClick={() => handleClose({ lang: track.srcLang })} key={track.srcLang}>
                  {track.label || track.srcLang.toUpperCase()}
                </MenuItem>
              ))}
              <Divider />
              <MenuItem>
                <i className='fa fa-sparkles text-xs' fontSize='small'></i> Add language
              </MenuItem>
            </Menu>
          </div>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Transcript</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra at nunc sed ultricies. Sed
                tempor mollis luctus. Duis lobortis id dui sit amet tempor. Sed eu lacus mauris. Donec id metus finibus,
                pulvinar ipsum eget, tempus elit. Sed sed justo ut libero vestibulum malesuada. Suspendisse molestie ex
                sit amet leo bibendum, sit amet congue mauris dictum.
                <br />
                <br />
                Nulla facilisi. Sed finibus elit nec risus euismod sodales. In hac habitasse platea dictumst. Fusce
                porttitor porttitor mauris, ac tristique nisi tristique eu. Mauris dignissim quam ut arcu maximus
                posuere. Cras vel auctor leo. Vestibulum dignissim enim id felis imperdiet aliquet. Aliquam euismod
                ligula neque, in congue lacus eleifend et. In vulputate lorem nec justo tincidunt sodales. Curabitur
                ultricies, massa in facilisis suscipit, lacus tortor consequat neque, vitae blandit dui ante ut sem. In
                tempus ex eget metus pretium, id consequat enim tempus. Etiam consequat convallis metus, nec vulputate
                enim.
                <br />
                <br />
                Ut at dui vel augue condimentum commodo eget vel tortor. Ut fringilla, nisl a gravida maximus, erat nisi
                efficitur urna, in convallis leo enim ullamcorper elit. Curabitur in arcu nibh. Maecenas et orci vel
                magna suscipit sagittis sed id urna. Donec laoreet vehicula tortor sit amet porta. Vestibulum iaculis
                interdum tortor non bibendum. Fusce et vestibulum urna, eget scelerisque est. Donec egestas libero non
                sagittis faucibus. Mauris eu leo augue. Nam semper finibus ex, nec euismod diam porttitor quis. Proin
                faucibus risus id ligula convallis laoreet. Curabitur dignissim convallis tempor.
                <br />
                <br />
                Mauris ipsum augue, dignissim a venenatis sit amet, pharetra sed nibh. Vestibulum a urna et nibh
                faucibus congue ac tristique mauris. Duis sit amet aliquet sem. Aliquam faucibus ligula et mauris
                feugiat, sit amet hendrerit nisi gravida. Nullam id libero quis sapien viverra pretium interdum non
                magna. Pellentesque at augue nec nunc condimentum pharetra. Mauris faucibus odio ut ante cursus
                convallis. Mauris orci neque, congue non vehicula id, interdum luctus lorem. Cras ullamcorper vitae eros
                id convallis. Vivamus varius nibh non ullamcorper imperdiet. Donec tempus, ex ut cursus cursus, lectus
                tortor vulputate risus, semper bibendum nunc libero a libero. Aliquam erat volutpat.
              </Typography>
            </div>
            {/* <Divider />
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>By the numbers</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='tabler-check text-xl text-textSecondary' />
                    <Typography>Skill level: {data?.skillLevel}</Typography>
                  </ListItem>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='tabler-users text-xl text-textSecondary' />
                    <Typography>Students: {data?.totalStudents}</Typography>
                  </ListItem>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='tabler-world text-xl text-textSecondary' />
                    <Typography>Languages: {data?.language}</Typography>
                  </ListItem>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='tabler-file text-xl text-textSecondary' />
                    <Typography>Captions: {data?.isCaptions ? 'Yes' : 'No'}</Typography>
                  </ListItem>
                </List>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='tabler-video text-xl text-textSecondary' />
                    <Typography>Lectures: {data?.totalLectures}</Typography>
                  </ListItem>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='tabler-clock text-xl text-textSecondary' />
                    <Typography>Video: {data?.length}</Typography>
                  </ListItem>
                </List>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Description</Typography>
              {data?.description.map((value, index) => (
                <Typography key={index}>{value}</Typography>
              ))}
            </div> */}
            <Divider />
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Participants</Typography>
              <div className='flex items-center gap-4'>
                <AvatarGroup max={4} spacing='small'>
                  <Avatar alt='Remy Sharp' src='/images/avatars/1.png' />
                  <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
                  <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
                  <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
                  <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
                </AvatarGroup>
                {/* <CustomAvatar skin='light-static' color='error' src={data?.instructorAvatar} size={38} />
                <div className='flex flex-col gap-1'>
                  <Typography className='font-medium' color='text.primary'>
                    {data?.instructor}
                  </Typography>
                  <Typography variant='body2'>{data?.instructorPosition}</Typography>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Details
