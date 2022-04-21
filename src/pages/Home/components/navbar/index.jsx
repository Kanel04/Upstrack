import React from 'react'
import LogoUpstrack from '../../assets/images/LogoUpstrack.png'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div>
<nav className='flex flex-row space-x-15'>
<div className='grow-0 mt-2 ml-3'>
  <img src={LogoUpstrack} alt="logoPhoto" className='h-9' />
</div>
<div className='items-center mt-3 ml-96'>
<Link to="/" className="mx-4 border-b-2 border-red-500">Home</Link>
<Link to="/marketplace" className='ml-8 ' >Marketplace</Link>
<Link to="/creator" className='ml-8'>Creator</Link>
<Link to="/community" className='ml-8'>Community</Link>
</div>
<div className='ml-96 mt-3 m-5'>
<div className='bg-black h-12 w-32 px-6 py-3'>
<label className='text-white'>Search</label>
</div>
</div>
      </nav>
    </div>
  )
}

export default NavBar