import React from 'react'
import ShoreLogo from './ShoreLogo'
import JoinNewsletter from './JoinNewsletter'

const Footer = () => {
  return (
    <div className='relative flex h-[45vh] justify-center overflow-hidden bg-neutral-900 py-16 font-["Oswald"] text-gray-300'>
      <JoinNewsletter />
      <div className='absolute bottom-3 right-3 text-[0.65rem] font-thin text-gray-300'>
        <p>&copy; 2024 Shore.com, All rights reserved.</p>
      </div>

      <div className='absolute -bottom-[25%] flex w-full items-center justify-center'>
        <div className='w-1/2'>
          <ShoreLogo isWhite={true} />
        </div>
      </div>
    </div>
  )
}

export default Footer
