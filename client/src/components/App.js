import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddReview from './AddReview'
import Home from './Home'
import Reviews from './Reviews'
import Login from './Login'
import SignUp from './SignUp'
import NavBar from './NavBar'

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/add_review' element={<AddReview />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
