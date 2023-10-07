import Search from './Search'
import Results from './Results'
import { useState } from 'react'

const GithubProfiles: React.FC = () => {
  const [users, setUsers] = useState<GitHubUserItem[]>([])

  return (
    <>
      <Search setUsers={setUsers} />
      <Results users={users} />
    </>
  )
}

export default GithubProfiles
