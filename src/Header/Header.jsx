import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
  
<header className="bg-[#1c1c1c] shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button id="menu-btn" class="md:hidden text-white text-2xl">&#9776;</button>
        <h1 className="text-xl font-bold text-green-500">Ornime</h1>
      </div>
      <nav className="hidden md:flex space-x-6 text-sm text-white">
        <Link to="/Spidderman" className="hover:text-green-400">Spidderman</Link>
        <Link to="/Crime" className="hover:text-green-400">Crime</Link>
        <Link to="/Action" className="hover:text-green-400">Action</Link>
        <Link to="#" className="hover:text-green-400">Login</Link>
      </nav>
    </div>
  </header>
    
  )
}
