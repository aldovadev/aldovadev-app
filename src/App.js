import './App.scss'
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
