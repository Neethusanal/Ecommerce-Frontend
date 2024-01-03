import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Components/Home'
import { Header } from '../Components/Header'
import { Error } from '../Components/Error'


const UserRoute = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
     
      <Routes>
       
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route  path ="*" element ={<Error/>}/>
        </Routes>
        
        
      
     
    </div>
  )
}

export default UserRoute