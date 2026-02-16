import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Teams from './components/teams.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </>
  )
}

export default App
