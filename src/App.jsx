import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home/Home"
import Hotels from './Components/Hotels/Hotels'
import AboutUs from './Components/AboutUs/AboutUs'
import Gallery from './Components/Gallery/Gallery'
import News from './Components/News/News'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className=''>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='hotels' element={<Hotels />}></Route>
      <Route path='aboutUs' element={<AboutUs />}></Route>
      <Route path='gallery' element={<Gallery />}></Route>
      <Route path='news' element={<News />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App;
