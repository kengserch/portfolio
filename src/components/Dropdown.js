import React from 'react'
import {Link} from 'react-router-dom'
const dropdown = ({isOpen,toggle}) => {
 return (
  <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-white' : 'hidden'} onClick={toggle}>
    <Link className="p-4 shadow-sm font-mono border-solid border-2 border-light-blue-500 text-pink-400 hover:text-red-700" to="/">Home</Link>
    <Link className="p-4 shadow-sm font-mono border-solid border-2 border-light-blue-500 text-pink-400 hover:text-red-700" to="/about">About</Link>
    <Link className="p-4 shadow-sm font-mono border-solid border-2 border-light-blue-500 text-pink-400 hover:text-red-700" to="/project">Project</Link>
    <Link className="p-4 shadow-sm font-mono border-solid border-2 border-light-blue-500 text-pink-400 hover:text-red-700" to="/contact">Contact</Link>
  </div>
 )
}

export default dropdown
