import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-4'>
        <div className='flex justify-between' >
            <h1>David Ademola</h1>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li> Contact</li>
                <li>Projects</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar