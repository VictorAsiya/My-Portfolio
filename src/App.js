import React from 'react'
import Container from './Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About/index'

function App() {
  return (
    <div className='Main'>
      
      <Router>
        <Routes>
          <Route path='/' element={<Container/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
