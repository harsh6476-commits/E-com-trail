import React from 'react'
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className='w-full h-20  flex items-center border-b-1 shadow-xl border-zinc-200'>
        <div className='w-1/10 h-full flex items-center pl-5'><img className='h-11' src={logo} alt="logo" /></div>
        <div className='w-9/10 h-full'>
            
        </div>
    </div>
  )
}

export default Navbar
