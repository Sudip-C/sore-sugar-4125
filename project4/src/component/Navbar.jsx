import React, { useContext } from 'react'
import "../CSS/Navbar.css"
import logo from "../image/Logo2.png"
import track from "../image/tracking.png"
import user from "../image/user.png"
import love from "../image/love.png"
import cart from "../image/shopping-cart.png"
import {Link} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

function Navbar() {
const{authState}=useContext(AuthContext)

    return (
        <div>
           <div className='topNav'>Spring into Sale | Up to 60% off | Now Live | Click to shop!</div>
           <div className='nav'>
         <div>
            <h3>Help</h3>
            <h3>Track Order</h3>
         </div>
         <div>
            <h3>Stores</h3>
            <h3>Bulk Orders</h3>
            <h3>Gift Orders</h3>
            <h3>UL Services</h3>
         </div>
           </div>
          <div className='middle'>
          <div className='middleNav'>
            <div className='flex1' >
            <Link to="/"> <img  style={{width:"25%"}} src={logo} alt="alt"/></Link>
            <input type="text" placeholder='Search'/>
            </div>
            <div className='flex2' >
            <Link> <img style={{width:"30%"}}src={track} alt="name"/></Link>
            <Link to="/login"><p>{authState.isAuth?"Hi,User":""}</p><img style={{width:"30%"}}src={user} alt="name"/></Link> 
            <Link to="/wishlist"><img style={{width:"30%"}}src={love} alt="name"/></Link>
            <Link to="/cart"><img style={{width:"30%"}}src={cart} alt="name"/></Link>
            </div>
           </div>
          </div>
           <div className="bottom">
            <div className='bottomNav'>
               <Link to="/product"> <h5>Deal Zone</h5></Link>
                <h5>Sofas & Recliners</h5>
                <h5>Living</h5>
                <h5>Bedroom & Mattresses</h5>
                <h5>Dining</h5>
                <h5>Storage</h5>
                <h5>Study</h5>
                <h5>Lighting& Decor</h5>
                <h5>Outdoor</h5>
                <h5>Interior</h5>
            </div>
           </div>
        </div>
    )
}

export default Navbar
