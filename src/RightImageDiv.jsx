import React from 'react'
import bar_drinks from './assets/background/bar_drinks.jpg'
import collage from './assets/srcimages/collage.png'
export default function RightImageDiv() {
  return (
    <div className=' bg-[#f5f0e6] flex flex-row justify-between items-center h-120'>
          
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <p className='text-4xl font-raleway text-black'>Joey's Place</p>
          </div>
          <div className='w-3/7 h-full flex flex-col justify-center items-center'>
          <img src={collage} alt="background"  />
          </div>
        </div>
  )
}
