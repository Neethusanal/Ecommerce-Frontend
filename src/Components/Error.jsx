import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='error'>
        <h1>Error!!! Page Not Found</h1>
        <div>
        <Link to ='/'>Go Home</Link>
        </div>
       
    </div>
  )
}
