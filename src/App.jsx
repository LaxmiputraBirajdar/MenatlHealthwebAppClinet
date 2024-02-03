import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Appbar from './Appbar';
import Home from './Home'
import './App.css'

function App() {
   return (
    <>
    <Router>
      <Appbar/>
      
      <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/login"} element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
