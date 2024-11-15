import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    {/* Maing Footer */}
    <div className='bg-blue-950 h-48 justify-evenly flex items-center'>

        {/* Web Logo */}
        <h1 className='text-3xl text-yellow-300'>MIT Portfolio</h1>

        {/* About Us */}
        <div>
            <ul>
                <h1 className='text-yellow-500'><Link target='_blank' href="/components/about">● About Us</Link></h1>
                <p className='w-72 text-gray-400 mr-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate eaque ex sequi cum deserunt minima laudantium quod a, aliquam illo voluptatibus perferendis nulla distinctio. Ipsa ad alias similique error!</p>
            </ul>
        </div>

        {/* Our Services */}
        <div>
            <ul>
                <h1 className='text-yellow-500'><Link target='_blank' href="/components/ourservices">● Our Services</Link></h1>
                <p className='w-72 text-gray-400 mr-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate eaque ex sequi cum deserunt minima laudantium quod a, aliquam illo voluptatibus perferendis nulla distinctio. Ipsa ad alias similique error!</p>
            </ul>
        </div>

        {/* Contact  Us */}
        <div>
            <ul>
                <h1 className='text-yellow-500'><Link target='_blank' href="/components/contact">● Contact Us</Link></h1>
                <p className='w-72 text-gray-400 mr-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate eaque ex sequi cum deserunt minima laudantium quod a, aliquam illo voluptatibus perferendis nulla distinctio. Ipsa ad alias similique error!</p>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer