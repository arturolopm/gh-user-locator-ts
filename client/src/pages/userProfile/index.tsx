import { useParams } from 'react-router-dom'
import Profile from './Profile'

const UserProfile = () => {
  const params = useParams()
  const userParam = params.user as string
  return <Profile userParam={userParam} />
}

export default UserProfile
