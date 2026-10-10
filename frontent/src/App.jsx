import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import HeroPage from './pages/HeroPage'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HeroPage/>}/>
      </Route>
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='/auth/signup' element={<Signup/>}/>
      <Route element={<MainLayout/>}>
        <Route  path='/home' element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
