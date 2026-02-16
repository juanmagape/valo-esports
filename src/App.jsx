import { Routes, Route } from 'react-router-dom'
import Teams from './components/teams.jsx'
import TeamDetails from './components/teamDetails.jsx'
import './styles/global.css'
import About from './components/about.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
      </Routes>
    </>
  )
}

export default App
