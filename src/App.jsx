import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import DreamGirl from './pages/DreamGirl'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import TransmissionService from './pages/TransmissionService'
import Mentorship from './pages/Mentorship'

import Research from './pages/Research'
import Witness from './pages/Witness'
import Letter from './pages/Letter'
import Recruit from './pages/Recruit'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const cosmicExcluded = ['/courses', '/mentorship', '/transmission']
  const showCosmicBackground = !cosmicExcluded.includes(location.pathname)

  useEffect(() => {
    const redirect = searchParams.get('redirect')
    if (redirect) {
      navigate(redirect, { replace: true })
    }
  }, [])

  return (
    <div className={`app${showCosmicBackground ? ' cosmic-surface' : ''}`}>
      {showCosmicBackground && (
        <>
          <video className="site-cosmic-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={`${import.meta.env.BASE_URL}videos/home-cosmic-hero.mp4`} type="video/mp4" />
          </video>
          <div className="site-cosmic-vignette" aria-hidden="true" />
        </>
      )}
      <Navbar />
      <main className="main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dream-girl" element={<DreamGirl />} />
            <Route path="/research" element={<Research />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/transmission" element={<TransmissionService />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/witness" element={<Witness />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/recruit" element={<Recruit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
