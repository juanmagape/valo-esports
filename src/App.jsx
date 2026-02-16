import { Routes, Route } from 'react-router-dom'
import Teams from './components/teams.jsx'
import TeamDetails from './components/teamDetails.jsx'
import About from './components/about.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App