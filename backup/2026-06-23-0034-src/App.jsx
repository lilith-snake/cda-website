import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Mysticism from './pages/Mysticism'
import DreamGirl from './pages/DreamGirl'
import Communication from './pages/Communication'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Research from './pages/Research'
import Witness from './pages/Witness'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mysticism" element={<Mysticism />} />
          <Route path="/dream-girl" element={<DreamGirl />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<Research />} />
          <Route path="/witness" element={<Witness />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
