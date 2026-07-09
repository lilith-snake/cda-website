import { useEffect } from 'react'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Mysticism from './pages/Mysticism'
import DreamGirl from './pages/DreamGirl'
import Courses from './pages/Courses'
import Contact from './pages/Contact'

import Research from './pages/Research'
import Witness from './pages/Witness'
import Letter from './pages/Letter'

export default function App() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const redirect = searchParams.get('redirect')
    if (redirect) {
      navigate(redirect, { replace: true })
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mysticism" element={<Mysticism />} />
          <Route path="/dream-girl" element={<DreamGirl />} />
          <Route path="/research" element={<Research />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/witness" element={<Witness />} />
          <Route path="/letter" element={<Letter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
