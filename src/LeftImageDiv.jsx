import React from 'react'
import bar_drinks from './assets/background/bar_drinks.jpg'

export default function LeftImageDiv() {
  return (
    <div className=' bg-gray-300 flex flex-row justify-start items-center h-120'>
    <img src={bar_drinks} alt="background" className='w-3/7 aspect-[1/1] h-full object-cover' />
    <div className='w-1/2 h-full flex flex-col justify-center items-center'>
      <p className='text-4xl font-raleway text-black'>Joey's Place</p>
    </div>
  </div>
  )
}
