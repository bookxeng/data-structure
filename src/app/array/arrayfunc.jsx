'use client'

import React from 'react'
import { submitForm } from './action'

export default function Array ()  {

  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='text-black text-5xl font-extrabold max-w-[1000px] mx-auto py-12 justify-center flex'>
            Array
        </div>
        <div className='max-w-[1000px] mx-auto flex'>
        <form action={submitForm} className=''>
          Input:&emsp; 
          <input name='array' className='border-2 border-black' placeholder='type an array'/>
          <button className=' border-2 border-black mx-2 hover:border-dotted shadow-md'><span className='mx-1'>Submit</span></button>
        </form>
        </div>
        <div className='text-center justify-center flex py-12'>
          <table className='border-separate border-black border-4 border-spacing-2'>
            <tbody>
            <tr className='text-4xl font-extrabold text-black'>
              <td className=' border-black border-2'>1</td>
              <td className=' border-black border-2'>2</td>
              <td className=' border-black border-2'>200</td>
            </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}
