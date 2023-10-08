import UserCard from './UserCard'

const Results = ({ users }: { users: GitHubUserItem[] }) => {
  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-lg'>
      <h2 className=' text-2xl'>Results: </h2>
      <div className=' mx-auto'>
        {users && users.length > 0 ? (
          users.map((user, i) => {
            if (i < 10) {
              return (
                <UserCard
                  i={i}
                  key={user.id}
                  user={user}
                />
              )
            }
          })
        ) : (
          <div>No users located</div>
        )}
      </div>
    </div>
  )
}

export default Results
