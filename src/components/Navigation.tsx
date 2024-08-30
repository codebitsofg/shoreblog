'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ShoreLogo from './ShoreLogo'
import useScrollDirection from '@/hooks/useScrollDirection'
import Menu from './Menu'

const Navigation = () => {
  const isVisible = useScrollDirection()
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-screen bg-gray-50 bg-opacity-90 px-4 py-4 font-['Oswald'] backdrop-blur-lg transition-transform duration-300 md:px-12 md:py-4 ${
        isVisible ? 'translate-y-0 transform' : '-translate-y-full transform'
      }`}
    >
      <div className='relative flex h-full w-full items-center justify-center'>
        <div className='w-28 md:w-40'>
          <ShoreLogo isWhite={false} />
        </div>

        <div className='absolute left-0 top-1/2 -translate-y-1/2'>
          <div className='flex gap-2 text-[0.65rem] font-light uppercase text-neutral-800 md:text-[0.9rem]'>
            <Link href={'/'}>
              <span>Anasayfa</span>
            </Link>
            <Link href={'/yazilar'}>
              <span>Yazılar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
