// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { AvatarGroup } from '@mui/material'
import Switch from '@mui/material/Switch'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const ShippingDelivery = () => {
  return (
    <Card>
      <CardHeader title='Meeting scheduler' subheader='Use and create meeting links' />
      <CardContent className='flex flex-col gap-6'>
        <div className='flex flex-col items-start gap-4'>
          <div className='is-full border rounded overflow-x-auto'>
            <table className={tableStyles.table}>
              <tbody>
                <tr className='border-none'>
                  <td>Access to Meeting scheduler</td>
                  <td className='text-right'>
                    <Switch color='success' defaultChecked />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <div className='is-full border rounded overflow-x-auto'>
            <table className={tableStyles.table}>
              <thead className='border-0'>
                <tr>
                  <th>Permissions</th>
                  <th className='is-[100px]'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Create public page</td>
                  <td className='text-right'>
                    <Switch color='success' defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td>Create meeting links</td>
                  <td className='text-right'>
                    <Switch color='success' defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td>Opt-out of global link</td>
                  <td className='text-right'>
                    <Switch color='success' />
                  </td>
                </tr>
                <tr>
                  <td>Send e-mail reminders</td>
                  <td className='text-right'>
                    <Switch color='success' defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td>Send sms reminders</td>
                  <td className='text-right'>
                    <Switch color='success' defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td>Create automations</td>
                  <td className='text-right'>
                    <Switch color='success' defaultChecked />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ShippingDelivery
