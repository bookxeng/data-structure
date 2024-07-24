import React from 'react'

export default function Array ()  {
  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='text-black text-5xl font-extrabold max-w-[1000px] mx-auto py-12 justify-center flex'>
            Array
        </div>
        <div className='max-w-[1000px] mx-auto py-12 justify-start flex text-black'>
          Type an index for array
          <input type='text' className='form-text border-black border-2 text-black mx-2'/>
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
