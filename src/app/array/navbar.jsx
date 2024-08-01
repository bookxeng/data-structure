import React from 'react'
import Link from 'next/link'

export default function Navbar(){
    return(
        <div className='w-full bg-white'>
            <div className='px-2 pt-2'>
                <Link href="/" className='text-black font-extrabold text-xl hover:text-blue-500'>
                    Home
                </Link>
            </div>
        </div>
    )
}
