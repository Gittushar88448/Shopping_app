import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const {ShoppingCart} = useSelector((state)=> state)
  return (
    <div className='bg-slate-900'>
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            <NavLink to="/">
                <div className='ml-5'>
                    <img src="../logo.png" className='h-14' alt='logo'></img>
                </div>
            </NavLink>

            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to="/">
                    <p className='hover:text-green-400 transition-all duration-200'>
                        Home
                    </p>
                </NavLink>

                <NavLink to="/cart">
                    <div className='relative'>
                        {
                            ShoppingCart.length > 0 &&
                            <span 
                            className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                             justify-center items-center animate-bounce rounded-full text-white select-none"
                            >
                            {ShoppingCart.length}</span> 
                        }

                        <FaShoppingCart className="text-2xl hover:text-green-400 transition-all duration-200"/>
                    </div>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar