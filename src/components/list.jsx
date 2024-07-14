'use client'
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';



const List = () => {
    const router = useRouter()
  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='font-extrabold max-w-[1000px] py-12 mx-auto text-black text-2xl items-center justify-start'>
            <ul className='flex-col flex'>
                <li>
                    <Link href="/array" className='text-black hover:text-blue-500'>
                        Array
                    </Link>
                </li>
                <li>
                    <Link href="/linked-list" className='text-black hover:text-blue-500'>
                        Linked List
                    </Link>
                </li>
                <li>
                    <Link href="/tree" className='text-black hover:text-blue-500'>
                        Tree
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default List;