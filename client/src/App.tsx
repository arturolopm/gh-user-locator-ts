import { Header } from './layout'
import { Routes, Route } from 'react-router-dom'
import GithubProfiles from 'src/pages/githubProfiles'
import UserProfile from 'src/pages/userProfile'
import SavedUsers from 'src/pages/savedUsers'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<GithubProfiles />}
        />
        <Route
          path='/users'
          element={<SavedUsers />}
        />
        <Route
          path='/users/:user'
          element={<UserProfile />}
        />
      </Routes>
    </>
  )
}

export default App
