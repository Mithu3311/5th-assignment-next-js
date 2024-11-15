import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>

    {/* Creating Nav Bar */}
    <div className='bg-blue-950 flex justify-between h-14 text-yellow-400 items-center'>

      {/* Web Logo */}
        <h1 className='text-3xl font-semibold pl-6'>MIT Portfolio</h1>
            {/* Making Buttons and Linking Other Pages with Link Tag*/}
            <ul className='pr-6'>
                <Link className='pr-6 hover:text-white' target='_blank' href="/"><button>Home</button></Link>
                <Link className='pr-6 hover:text-white' target='_blank' href="/components/ourwork"><button>Our Work</button></Link>
                <Link className='pr-6 hover:text-white' target='_blank' href="/components/ourservices"><button>Our Services</button></Link>
                <Link className='pr-6 hover:text-white' target='_blank' href="/components/contact"><button>Contact Us</button></Link>
            </ul>
    </div>
    </>
  )
}

export default Navbar