import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
  
export const Header= ()=>{
return(
    <div className='header'>
<Link to ='/'><span>Home</span> </Link>
<Link to ='/products'><span>Products</span>  </Link>
<Link to ='/details'><span>ProductDetails</span> </Link>
<Link to ='/blog'><span>Blog</span> </Link>
<Link to ='/aboutus'><span>About Us</span>  </Link>
    </div>
)
}