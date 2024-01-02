import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Components/Home'
import { Header } from '../Components/Header'

const UserRoute = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
     
      <Routes>
       
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
        
        
      
     
    </div>
  )
}

export default UserRoute