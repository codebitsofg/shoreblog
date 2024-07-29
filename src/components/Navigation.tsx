import Link from 'next/link'
import React from 'react'
import ShoreLogo from './ShoreLogo'

const Navigation = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-screen items-center justify-between border-b bg-gray-50 bg-opacity-90 px-12 py-5 font-['Oswald'] font-light backdrop-blur-lg">
      <div className='w-28'>
        <ShoreLogo isWhite={false} />
      </div>

      <div className='text-[0.9rem] uppercase text-neutral-800'>
        <Link href={'/'}>
          <span>Anasayfa</span>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
