import React from 'react'

export default function Array ()  {
  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='text-black text-5xl font-extrabold max-w-[1000px] mx-auto py-12 justify-center flex'>
            Array
        </div>
        <div className='text-center justify-center flex'>
          <table className='border-separate border-black border-4 border-spacing-2'>
            <tbody>
            <tr className='text-4xl font-extrabold'>
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
