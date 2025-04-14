// Component Imports
import AcademyMyCourse from '@/views/pages/conversations'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Data Imports
// import { getAcademyData } from '@/app/server/actions'

const db = {
  courses: [
    {
      id: 4,
      user: 'Estella Chace',
      image: '/images/avatars/3.png',
      completedTasks: 33,
      tutorImg: '/images/apps/academy/4.png',
      totalTasks: 50,
      userCount: 28,
      note: 21,
      view: 87,
      time: '2025-04-01 11h00',
      duration: '45min',
      logo: 'tabler-pencil',
      color: 'success',
      courseTitle: 'Ankorstore x Opalith',
      desc: 'The client is overall interested in our solution but has doubts if the system integration will work out properly. Adam will check the requirements internally next week (W21/2025) and Helmut will send afollow-up email with all certifications.',
      tags: 'Discovery',
      rating: 4.7,
      ratingCount: 18,
      userId: 'yannickgery',
      source: 'Google Meet'
    },
    {
      id: 5,
      user: 'Euell Bownass',
      tutorImg: '/images/misc/soundwave-block.png',
      image: '/images/avatars/6.png',
      completedTasks: 30,
      totalTasks: 100,
      userCount: 13,
      note: 19,
      view: 13,
      time: '2025-03-29 15h15',
      duration: '27min',
      logo: 'tabler-star',
      color: 'primary',
      courseTitle: 'Kima x Yannick (Opalith)',
      desc: '...',
      tags: 'Investors',
      rating: 4.6,
      ratingCount: 11,
      userId: 'thomasmonvoisin',
      source: 'Aircall'
    },
    {
      id: 6,
      user: 'Thierry & Thomas',
      tutorImg: '/images/misc/soundwave-block.png',
      image: '/images/avatars/3.png',
      completedTasks: 18,
      totalTasks: 25,
      userCount: 78,
      note: 36,
      view: 36,
      time: '2025-04-02 09h30',
      duration: '47min',
      logo: 'tabler-brand-react-native',
      color: 'info',
      courseTitle: 'Thierry & Thomas',
      desc: '...',
      tags: 'MEDDIC',
      rating: 4.5,
      ratingCount: 68,
      userId: 'thomasmonvoisin',
      source: 'Aircall'
    },
    {
      id: 7,
      user: 'Deliveroo x Opalith',
      tutorImg: '/images/misc/soundwave-block.png',
      image: '/images/avatars/6.png',
      completedTasks: 11,
      totalTasks: 20,
      userCount: 74,
      note: 21,
      view: 60,
      time: '2025-04-01 13h45',
      duration: '1h33min',
      logo: 'tabler-star',
      color: 'primary',
      courseTitle: 'Deliveroo x Opalith',
      desc: '...',
      tags: 'BANT',
      rating: 4.4,
      ratingCount: 64,
      userId: 'thomasmonvoisin',
      source: 'Aircall'
    }
  ]
}

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/academy` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
const getAcademyData = async () => {
  // Vars
  // const res = await fetch(`${process.env.API_URL}/apps/academy`)

  // if (!res.ok) {
  //   throw new Error('Failed to fetch academy data')
  // }

  // return res.json()

  return db
}

const ConversationsPage = async () => {
  // Vars
  const mode = await getServerMode()
  const data = await getAcademyData()

  return <AcademyMyCourse mode={mode} courseData={data?.courses} />
}

export default ConversationsPage
