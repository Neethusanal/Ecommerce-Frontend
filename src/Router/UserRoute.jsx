import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Components/Login'

const UserRoute = () => {
  return (
    <div>
      
     
      <Routes>
            <Route exact path="/login" element={<Login/>}/>
        </Routes>
        
        
      
     
    </div>
  )
}

export default UserRoute