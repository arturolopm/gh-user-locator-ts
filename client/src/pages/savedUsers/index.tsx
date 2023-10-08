import UserCard from 'src/components/UserCard'
import { BASE_URL } from 'src/constants'
import { useFetch } from 'src/hooks/useFetch'

const SavedUsers: React.FC = () => {
  const { data, error } = useFetch<GitHubUserItem[]>(`${BASE_URL}/api/users`)

  return (
    <div>
      {data &&
        data.map((user, i) => (
          <UserCard
            user={user}
            i={i}
          />
        ))}
      {error && <div>{error.message}</div>}
    </div>
  )
}

export default SavedUsers
