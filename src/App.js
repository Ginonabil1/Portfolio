import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { RiseLoader } from 'react-spinners'
import Home from './Home'
import Nav_bar from './Nav_bar'
import Project from './Project'
import './App.css';





const App = () => {
  const [Loading , setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false)
    },2000)
  },[]);


  return (
    <BrowserRouter>
            {/* Ternary operator if Loading using useeffect is true until 2s run the loading if false get the home */}
      {Loading ?  
      <div className='preload'>
        <RiseLoader color="#f87765" cssOverride={{}} loading margin={2} size={20} speedMultiplier={1} />
      </div> :
      
      <>
      <Nav_bar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
      </>
      }

  </BrowserRouter>
  )
}

export default App
