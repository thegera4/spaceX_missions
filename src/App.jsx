import logo from './assets/logo_spacex.jpg'
import { Image } from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom'
import { LaunchDetails } from './components/LaunchDetails'
import { LaunchList } from './components/LaunchList'
import {  RocketDetails} from './components/RocketDetails'
import './App.css'

export function App() {

  return (
    <>
      <Link to='/'>
        <header className="header-container">
          <Image src="https://logosmarcas.net/wp-content/uploads/2020/09/SpaceX-Simbolo.jpg"  alt="SpaceX" />
        </header>
      </Link>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  )
}

