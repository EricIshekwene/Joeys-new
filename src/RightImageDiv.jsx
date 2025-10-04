import React from 'react'
import bar_drinks from './assets/background/bar_drinks.jpg'
import collage from './assets/srcimages/collage.png'
export default function RightImageDiv() {
  return (
    <div className=' bg-[#f5f0e6] hidden flex flex-row justify-between items-center h-150'>
          
          <div className='w-2/5 h-full flex flex-col justify-center items-center'>
            <p className='text-4xl font-raleway text-white'>Joey's Place</p>
          </div>
          <div className='w-3/7  h-full flex flex-col justify-center items-center'>
          <img src={collage} alt="background" className='h-full' />
          </div>
        </div>
  )
}
