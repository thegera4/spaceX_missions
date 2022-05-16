import logo from './assets/logo_spacex.jpg'
import { Image } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { LaunchDetails } from './components/LaunchDetails'
import { LaunchList } from './components/LaunchList'
import {  RocketDetails} from './components/RocketDetails'
import './App.css'

export function App() {

  return (
    <>
      <Image m={4} src={logo}  alt="SpaceX" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  )
}

