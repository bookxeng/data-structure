'use client'

import React, { useState } from 'react'

export default function Linked ()  {
  const [inputValue, setInputValue] = useState('')
  const [arrayRepresent, setArrayRepresent] = useState([])

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleParseArray = () =>{
    const ParsedArray = inputValue.split(',').map((item) => item.trim())
    setArrayRepresent(ParsedArray)
  }

  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='text-black text-5xl font-extrabold max-w-[1000px] mx-auto py-12 justify-center flex'>
            Linked List
        </div>
        <div className='max-w-[1000px] mx-auto justify-center flex py-2'>
          <input type='text' placeholder='type an input' value={inputValue} onChange={handleInputChange} className='text-black mx-2'/>
          <button className='border-black text-black border px-2  bg-gray-300 hover:bg-gray-700' onClick={handleParseArray}>Click me</button>
        </div>
        <div className='max-w-[1000px] mx-auto flex justify-center text-black'>
            {arrayRepresent.map((item, index) => (
              <span key={index} className='text-black'> {item} </span>
            ))}
          </div>
    </div>
  )
}
