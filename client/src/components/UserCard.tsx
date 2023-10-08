import { Link } from 'react-router-dom'

const UserCard = ({ user, i }: { user: GitHubUserItem; i: number }) => {
  return (
    <Link to={`/users/${user.login}`}>
      <div className='bg-white p-2 mb-4  shadow-lg'>
        <div className='text-xl font-bold mb-2'>
          {i + 1}. {user.login}
        </div>
        <div className='text-gray-700'> {user.id}</div>
      </div>
    </Link>
  )
}

export default UserCard
