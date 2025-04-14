// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { AvatarGroup } from '@mui/material'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

// Vars
const domesticTableData = [
  { rate: 'Weight', condition: '5Kg-10Kg', price: '$9' },
  { rate: 'VAT', condition: '12%', price: '$25' },
  { rate: 'Duty', condition: '-', price: '-' }
]

const internationalTableData = [
  { rate: 'Weight', condition: '5Kg-10Kg', price: '$19' },
  { rate: 'VAT', condition: '12%', price: '$25' },
  { rate: 'Duty', condition: 'Japan', price: '$49' }
]

const ShippingDelivery = () => {
  return (
    <Card>
      <CardHeader title='Enrollment' subheader='Choose users and groups that share these permissions' />
      <CardContent className='flex flex-col gap-6'>
        <div className='flex flex-col items-start gap-4'>
          <div className='flex items-center gap-2 is-full'>
            <Avatar variant='rounded'>
              <i className='far fa-user'></i>
            </Avatar>
            <div className='flex-auto'>
              <Typography className='font-medium' color='text.primary'>
                Users
              </Typography>
            </div>
          </div>
          <div className='is-full border rounded overflow-x-auto'>
            <table className={tableStyles.table}>
              <thead className='border-0'>
                <tr>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th className='is-[100px]'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yannick Géry</td>
                  <td>yannick@opalith.co</td>
                  <td className='text-right'>
                    <IconButton color='secondary' size='small'>
                      <i className='far fa-trash-alt' />
                    </IconButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-row justify-end is-full'>
            <Button variant='tonal' size='small'>
              Add User
            </Button>
          </div>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <div className='flex items-center gap-2 is-full'>
            <Avatar variant='rounded'>
              <i className='far fa-user'></i>
            </Avatar>
            <div className='flex-auto'>
              <Typography className='font-medium' color='text.primary'>
                Groups
              </Typography>
            </div>
          </div>
          <div className='is-full border rounded overflow-x-auto'>
            <table className={tableStyles.table}>
              <thead className='border-0'>
                <tr>
                  <th>Name</th>
                  <th>Users</th>
                  <th className='is-[100px]'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>International Sales: SDR</td>
                  <td>13</td>
                  <td className='text-right'>
                    <IconButton color='secondary' size='small'>
                      <i className='far fa-trash-alt' />
                    </IconButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-row justify-end is-full'>
            <Button variant='tonal' size='small'>
              Add Group
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ShippingDelivery
