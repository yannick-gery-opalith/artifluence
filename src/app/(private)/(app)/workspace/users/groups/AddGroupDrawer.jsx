// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { TextField } from '@mui/material'
import { MuiColorInput } from 'mui-color-input'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Vars
const initialData = {
  name: '',
  color: '#7367f0',
  icon: 'user',
  description: ''
}

const AddGroupDrawer = props => {
  // Props
  const { open, handleClose, userData, setData } = props

  // States
  const [formData, setFormData] = useState(initialData)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      color: '#7367f0',
      icon: 'user',
      description: ''
    }
  })

  const onSubmit = data => {
    console.log('Form data submitted:', data)

    const newUser = {
      id: (userData?.length && userData?.length + 1) || 1
    }

    setData([...(userData ?? []), newUser])
    console.log(userData)
    console.log(newUser)
    console.log(formData)
    handleClose()
    setFormData(initialData)
    resetForm({ name: '', color: '#7367f0', icon: 'user', description: '' })
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  const permissionIcons = [
    { label: 'User', value: 'user', className: 'far fa-user' },
    { label: 'Users', value: 'users', className: 'far fa-users' },
    { label: 'Crown', value: 'crown', className: 'far fa-crown' },
    { label: 'Shield', value: 'shield', className: 'far fa-shield' },
    { label: 'Lock', value: 'lock', className: 'far fa-lock' },
    { label: 'Unlock', value: 'unlock', className: 'far fa-unlock' },
    { label: 'Cog', value: 'cog', className: 'far fa-cog' },
    { label: 'Cogs', value: 'cogs', className: 'far fa-cogs' },
    { label: 'Key', value: 'key', className: 'far fa-key' },
    { label: 'Database', value: 'database', className: 'far fa-database' },
    { label: 'File', value: 'file', className: 'far fa-file' },
    { label: 'Edit', value: 'edit', className: 'far fa-edit' },
    { label: 'Trash', value: 'trash', className: 'far fa-trash' },
    { label: 'Eye', value: 'eye', className: 'far fa-eye' },
    { label: 'Eye Slash', value: 'eye-slash', className: 'far fa-eye-slash' },
    { label: 'Plus', value: 'plus', className: 'far fa-plus' },
    { label: 'Minus', value: 'minus', className: 'far fa-minus' },
    { label: 'Check', value: 'check', className: 'far fa-check' },
    { label: 'Times', value: 'times', className: 'far fa-times' },
    { label: 'Ban', value: 'ban', className: 'far fa-ban' },
    { label: 'Clipboard', value: 'clipboard', className: 'far fa-clipboard' },
    { label: 'Tasks', value: 'tasks', className: 'far fa-tasks' },
    { label: 'Project Diagram', value: 'project-diagram', className: 'far fa-project-diagram' },
    { label: 'Chart Bar', value: 'chart-bar', className: 'far fa-chart-bar' },
    { label: 'Wrench', value: 'wrench', className: 'far fa-wrench' },
    { label: 'Tools', value: 'tools', className: 'far fa-tools' },
    { label: 'Calendar', value: 'calendar', className: 'far fa-calendar' },
    { label: 'Bell', value: 'bell', className: 'far fa-bell' },
    { label: 'Envelope', value: 'envelope', className: 'far fa-envelope' },
    { label: 'Globe', value: 'globe', className: 'far fa-globe' },
    { label: 'Info Circle', value: 'info-circle', className: 'far fa-info-circle' }
  ]

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between plb-5 pli-6'>
        <Typography variant='h5'>New User Group</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='far fa-close  text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-6 p-6'>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Name'
                {...(errors.name && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='description'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Description'
                multiline
                rows={4}
                {...(errors.description && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='icon'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                select
                fullWidth
                id='icon'
                label='Select icon'
                {...field}
                {...(errors.icon && { error: true, helperText: 'This field is required.' })}
              >
                {permissionIcons.map(icon => (
                  <MenuItem key={icon.value} value={icon.value} className='flex items-center gap-2'>
                    <div>
                      <i
                        className={`${icon.className} text-[14px] w-6 h-6 leading-6 [border-radius:4px] bg-gray-400/30 -ml-[2px] shadow-md text-center`}
                      ></i>
                      <span className='ml-[10px]'>{icon.label}</span>
                    </div>
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Controller
            name='color'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MuiColorInput
                {...field}
                format='hex'
                label='Color'
                fullWidth
                {...(errors.color && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Save
            </Button>
            <Button variant='tonal' color='secondary' type='reset' onClick={() => handleReset()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddGroupDrawer
