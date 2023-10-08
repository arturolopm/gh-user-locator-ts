import { useState } from 'react'
import { useFetch } from 'src/hooks/useFetch'
import MainButton from 'src/components/MainButton'
import { BASE_URL } from 'src/constants'
interface Post extends GithubUser {}
const ProfileCard = ({ user, error }: { user: GithubUser; error: Error }) => {
  const githubReposUrl = user ? user.repos_url : ''
  const [url, setUrl] = useState('')
  const { data, error: errorPost } = useFetch<Post>(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  })

  const handleClick = () => {
    setUrl(`${BASE_URL}/api/users`)
  }

  return (
    <div className='max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
      {user && (
        <div className='p-6'>
          <div className='flex justify-center mb-4'>
            <img
              src={user.avatar_url}
              alt='Avatar'
              className='w-32 h-32 rounded-full'
            />
          </div>
          <div className='text-center mb-4'>
            <div className='text-xl font-bold'>{user.login}</div>
            <div className='text-sm text-gray-500'>{user.bio}</div>
          </div>
          <div className='flex justify-between mb-4'>
            <div className='text-center'>
              <div className='text-lg font-bold'>{user.public_repos}</div>
              <div className='text-gray-500'>Public Repos</div>
            </div>
            <div className='text-center'>
              <div className='text-lg font-bold'>{user.followers}</div>
              <div className='text-gray-500'>Followers</div>
            </div>
          </div>
          <div className='text-center mb-2'>
            <div className='text-gray-500'>
              <span className='font-bold'>Location:</span>{' '}
              {user.location || 'N/A'}
            </div>
          </div>
          <div className='text-center mb-2'>
            <div className='text-gray-500'>
              <span className='font-bold'>Email:</span> {user.email || 'N/A'}
            </div>
          </div>
          <div className='text-center mb-2'>
            <a
              href={githubReposUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 font-bold'>
              View GitHub Repositories
            </a>
          </div>
          <div>
            {data && <div>User succesfully created</div>}
            {errorPost && (
              <div className=' text-red-700'>
                Error creating user {errorPost.message}
              </div>
            )}
          </div>
          <div className=' text-center'>
            <MainButton
              text='Export'
              onClick={handleClick}
            />
          </div>
        </div>
      )}

      {error && (
        <div className='p-6 text-center'>
          <p className='text-red-500'>No user located</p>
        </div>
      )}
    </div>
  )
}

export default ProfileCard
