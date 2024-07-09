import React from 'react'

const List = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='font-extrabold max-w-[1000px] py-12 mx-auto text-black text-2xl items-center justify-start'>
            <ul className='flex-col flex'>
                <li>
                    Array
                </li>
                <li>
                    Linked List
                </li>
                <li>
                    tree
                </li>
            </ul>
        </div>
    </div>
  )
}

export default List;