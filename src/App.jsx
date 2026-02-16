import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Teams from './components/teams.jsx'
import TeamDetails from './components/teamDetails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
      </Routes>
    </>
  )
}

export default App
