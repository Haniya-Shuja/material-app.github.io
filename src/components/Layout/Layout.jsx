import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import About from '../About/About'


const Layout = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
    
    </Routes>

</BrowserRouter>
  )
}

export default Layout