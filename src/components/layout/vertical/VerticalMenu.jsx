// React imports
import { useState, useEffect } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Divider, Tooltip } from '@mui/material'

import { Menu, MenuItem, SubMenu, MenuSection } from '@menu/vertical-menu'
import CustomChip from '@core/components/mui/Chip'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const getUser = async => {
  return {
    firstName: 'Yannick',
    admin: true
  }
}

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser()

      setUser(userData)
    }

    fetchUser()
  }, [])

  if (!user) return 'Loading...'

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem href='/dashboard' icon={<i className='far fa-gem fa-xs me-2' />}>
          Dashboard
        </MenuItem>
        <SubMenu label={'Meeting scheduler'} icon={<i className='far fa-calendar-range fa-xs me-2' />}>
          <MenuItem
            href={`/scheduler/links`}
            icon={<i className='far fa-calendar-lines-pen ml-[-5px]' />}
            routes={['/scheduler/view']}
          >
            Links
          </MenuItem>

          <MenuItem href={`/scheduler/shared-links`} icon={<i className='far fa-calendar-lines-pen ml-[-5px]' />}>
            Shared Links
          </MenuItem>

          <MenuItem href={`/scheduler/settings`} icon={<i className='far fa-cog ml-[-5px]' />}>
            Settings
          </MenuItem>
          <MenuItem href={`/scheduler/statistics`} icon={<i className='far fa-chart-pie ml-[-5px]' />}>
            Statistics
          </MenuItem>
        </SubMenu>
        <SubMenu label={'Voice intelligence'} icon={<i className='far fa-waveform-lines fa-xs me-2' />}>
          {/* defaultOpen */}
          <MenuItem
            href={`/voice/conversations`}
            icon={<i className='far fa-list ml-[-5px]' />}
            routes={['/voice/conversation']}
          >
            Conversations
          </MenuItem>
          <SubMenu label={'Collections'} icon={<i className='far fa-bookmark  ml-[-5px]' />}>
            <MenuItem href={`/voice/collections/personal`} icon={<i className='far fa-heart ml-[-5px]' />}>
              Personal
            </MenuItem>
            <MenuItem
              className='text-primary'
              href={`/voice/collections/add`}
              icon={<i className='far fa-add ml-[-5px]' />}
            >
              Add collection
            </MenuItem>
          </SubMenu>
          <MenuItem href={`/voice/settings`} icon={<i className='far fa-cog ml-[-5px]' />}>
            Settings
          </MenuItem>
          <MenuItem href={`/voice/statistics`} icon={<i className='far fa-chart-pie ml-[-5px]' />}>
            Statistics
          </MenuItem>
        </SubMenu>
        <MenuItem
          disabled
          suffix={
            <CustomChip
              label='Coming soon'
              size='small'
              color='default'
              className='text-primary text-[8px] text-xxs'
              round='true'
            />
          }
          href='/forms'
          icon={<i className='far fa-list-check fa-xs me-2' />}
        >
          Forms
        </MenuItem>

        <MenuItem
          disabled
          suffix={
            <CustomChip
              label='Coming soon'
              size='small'
              color='default'
              className='text-primary text-[8px] text-xxs'
              round='true'
            />
          }
          href='/outreach'
          icon={<i className='far fa-envelopes-bulk fa-xs me-2' />}
        >
          Outreach
        </MenuItem>
        <MenuItem
          disabled
          suffix={
            <CustomChip
              label='Coming soon'
              size='small'
              color='default'
              className='text-primary text-[8px] text-xxs'
              round='true'
            />
          }
          href='/enrichment'
          icon={<i className='far fa-water fa-xs me-2' />}
        >
          Enrichment
        </MenuItem>
        <MenuItem
          disabled
          suffix={
            <CustomChip
              label='Coming soon'
              size='small'
              color='default'
              className='text-primary text-[8px] text-xxs'
              round='true'
            />
          }
          href='/data'
          icon={<i className='far fa-chart-pie fa-xs me-2' />}
        >
          Business intelligence
        </MenuItem>
        {user?.admin && (
          <>
            <Divider className='mt-[20px]' />
            <MenuSection label={'Workspace administration'} />
            <MenuItem href='/workspace/settings' icon={<i className='far fa-sliders fa-xs me-2' />}>
              General settings
            </MenuItem>
            <SubMenu label={'Access'} icon={<i className='far fa-unlock-keyhole fa-xs me-2' />}>
              <MenuItem
                href={`/workspace/users/list`}
                icon={<i className='far fa-user ml-[-5px]' />}
                routes={['/workspace/users/view']}
              >
                Users
              </MenuItem>
              <MenuItem href={`/workspace/users/groups`} icon={<i className='far fa-users ml-[-5px]' />}>
                Groups
              </MenuItem>
              <MenuItem
                href={`/workspace/users/permissions/list`}
                routes={['/workspace/users/permissions/view']}
                icon={<i className='far fa-shield-keyhole ml-[-5px]' />}
              >
                Permissions
              </MenuItem>
              <MenuItem href={`/workspace/api`} icon={<i className='far fa-webhook ml-[-5px]' />}>
                API & Webhooks
              </MenuItem>
            </SubMenu>
            <MenuItem href='/workspace/billing' icon={<i className='far fa-credit-card fa-xs me-2' />}>
              Billing
            </MenuItem>
          </>
        )}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
