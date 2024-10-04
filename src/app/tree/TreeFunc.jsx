'use client'
import React, {useState} from 'react'


export default function Tree ()  {
  const [inputValue, setInputValue] = useState('')
  const [arrayRepresent, setArrayRepresent] = useState([])

  const handleInputChange = (e) =>{
    setInputValue(e.target.value)
  }

  const handleParseArray = () =>{
    const ParsedArray = inputValue.split(',').map((item) => item.trim(' '))
    const sortedArray = ParsedArray.toSorted(function(a,b){return a-b})
    setArrayRepresent(sortedArray)
  }

  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='text-black text-5xl font-extrabold max-w-[1000px] mx-auto py-12 justify-center flex'>
            Tree
        </div>
        <div className='flex max-w-[1000px] mx-auto justify-center py-2'>
          <input className='text-black mx-2' type='text' placeholder='type an input' value={inputValue} onChange={handleInputChange} />
          <button className='border-black border px-2 text-black' onClick={handleParseArray}> Clcik me </button>
        </div>

        <div className='flex max-w-[1000px] justify-center mx-auto text-2xl py-2'>
          {arrayRepresent.map((item, index) => (
            <span key={index} className='rounded-full border-2 border-black text-black border-separate mx-2 px-1'>
              {item}
            </span>
          ))}
        </div>
    </div>
  )
}