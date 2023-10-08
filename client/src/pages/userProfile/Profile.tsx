import { useFetch } from 'src/hooks/useFetch'
import ProfileCard from './ProfileCard'
const Profile = ({ userParam }: { userParam: string }) => {
  const { data, error } = useFetch<GithubUser>(
    `https://api.github.com/users/${userParam}`
  )

  return (
    <div>
      <ProfileCard
        user={data!}
        error={error!}
      />
    </div>
  )
}

export default Profile
