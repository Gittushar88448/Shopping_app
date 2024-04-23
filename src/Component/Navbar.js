import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // Fetching the ShoppingCart from the redux store

    const {ShoppingCart} = useSelector((state)=> state)

  return (
    <div className='bg-slate-900'>
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

            {/* When you click on image then you'll redirect to home page */}

            <NavLink to="/">
                <div className='ml-5'>
                    <img src="../logo.png" className='h-14' alt='logo'></img>
                </div>
            </NavLink>

            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>

                {/* Home text do same work as above */}

                <NavLink to="/">
                    <p className='hover:text-green-400 transition-all duration-200'>
                        Home
                    </p>
                </NavLink>
                
                {/* Click on cart then you'll redirect to cart page */}

                <NavLink to="/cart">
                    <div className='relative'>
                        {

                            // Bubble which shows the currently present items in cart

                            ShoppingCart.length > 0 &&
                            <span 
                            className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                             justify-center items-center animate-bounce rounded-full text-white select-none"
                            >
                            {ShoppingCart.length}</span> 
                        }
                        
                        {/* Shopping icon */}

                        <FaShoppingCart className="text-2xl hover:text-green-400 transition-all duration-200"/>
                    </div>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar