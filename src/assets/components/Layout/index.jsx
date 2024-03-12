import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import ParticlesComponent from '../Particles/index'

const Layout = () => {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
