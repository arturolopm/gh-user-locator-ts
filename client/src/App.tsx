import { Header } from './layout'
import { Routes, Route } from 'react-router-dom'
import GithubProfiles from './pages/githubprofiles'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<GithubProfiles />}
        />
      </Routes>
    </>
  )
}

export default App
