'use client'
import React, { useState } from 'react'



export default function Array ()  {
  const [inputValue, setInputValue] = useState('')
  const [ arrayRepresent, setArrayRepresent ] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleParseArray = () => {
    const ParsedArray = inputValue.split(',').map((item) => item.trim());
    setArrayRepresent(ParsedArray)


  }
  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='text-black text-5xl font-extrabold max-w-[1000px]  mx-auto py-12 justify-center flex'>
            Array
        </div>
        <div className='w-full text-black bg-white max-w-[1000px] py-4 mx-auto flex justify-center'>
          <input placeholder='type an input' className='border-black border' type='text' value={inputValue} onChange={handleInputChange} />
          <button className='mx-2 px-1 border-black border hover:text-blue-500' onClick={handleParseArray}  >Click me</button>
        </div>

        <div className='w-full py-8 bg-white text-black max-w-[1000px] justify-center flex mx-auto'>
          {arrayRepresent.map((item, index) => (
            <span key={index} className='border-black border-2 mx-2 px-1 font-extrabold text-2xl' > {item} </span>
          ))}
        </div>
    </div>
  )
}
