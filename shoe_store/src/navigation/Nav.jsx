import React from 'react'
import "./Nav.css"
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart , AiOutlineUserAdd } from 'react-icons/ai';


const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className='search-input' placeholder='Enter Your Search Shoes' />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className='nav-icons' style={{color : 'black'}}/>
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" style={{color : 'black'}} />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" style={{color : "black"}}/>
        </a>
      </div>
    </nav>
  )
}

export default Nav