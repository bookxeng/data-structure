import React from 'react'
import Link from 'next/link'

export default function Navbar(){
    return(
        <div className='w-full bg-white'>
            <div className='pt-2 px-2'>
                <Link href="/" className='text-xl font-extrabold text-black hover:text-blue-500'> 
                    Home
                </Link>
            </div>
        </div>
    )
}