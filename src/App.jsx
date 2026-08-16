import { useEffect } from 'react'
import { Routes, Route, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Mysticism from './pages/Mysticism'
import DreamGirl from './pages/DreamGirl'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Shop from './pages/Shop'

import Research from './pages/Research'
import Witness from './pages/Witness'
import Letter from './pages/Letter'
import Recruit from './pages/Recruit'
import Admin from './pages/Admin'

export default function App() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const isAdminPage = location.pathname === '/admin'

  useEffect(() => {
    const redirect = searchParams.get('redirect')
    if (redirect) {
      navigate(redirect, { replace: true })
    }
  }, [])

  if (isAdminPage) {
    return <Admin />
  }

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
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/witness" element={<Witness />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
