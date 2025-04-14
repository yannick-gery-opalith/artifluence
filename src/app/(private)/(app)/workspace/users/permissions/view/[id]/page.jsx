// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import Settings from '@views/pages/permission-settings'

const GeneralTab = dynamic(() => import('@views/pages/permission-settings/general'))
const EnrollmentTab = dynamic(() => import('@/views/pages/permission-settings/enrollment'))
const SchedulerTab = dynamic(() => import('@/views/pages/permission-settings/scheduler'))

// Vars
const tabContentList = () => ({
  general: <GeneralTab />,
  enrollment: <EnrollmentTab />,
  scheduler: <SchedulerTab />
})

const eCommerceSettings = () => {
  return (
    <div>
      <Settings tabContentList={tabContentList()} />
    </div>
  )
}

export default eCommerceSettings
