import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Components/Home'

const UserRoute = () => {
  return (
    <div>
      
     
      <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
        
        
      
     
    </div>
  )
}

export default UserRoute