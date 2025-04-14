// Component Imports
import GettingStartedSteps from '@/views/pages/getting-started'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const GettingStartedPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <GettingStartedSteps mode={mode} />
}

export default GettingStartedPage
