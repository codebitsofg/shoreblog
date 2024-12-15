'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import useScrollDirection from '@/hooks/useScrollDirection'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
const Navigation = () => {
  const isVisible = useScrollDirection()
  const pathName = usePathname()

  return (
    <div
      className={`fixed left-0 top-0 z-[100] w-screen border-b border-gray-200 bg-gray-50 bg-opacity-90 px-4 py-4 font-['Oswald'] backdrop-blur-lg transition-transform duration-300 md:px-12 md:py-5 ${
        isVisible ? 'translate-y-0 transform' : '-translate-y-full transform'
      }`}
    >
      <div className='relative flex h-full w-full items-center justify-between'>
        <div className='flex w-28 items-center gap-12 md:w-32'>
          <img src='/brand-logo.svg' alt='' />
          <div className='flex gap-8 text-[0.65rem] font-light text-neutral-400 md:text-[1rem]'>
            <Link
              className={`hover:text-slate-700 ${
                pathName === '/'
                  ? 'text-slate-800 underline underline-offset-8'
                  : ''
              }`}
              href={'/'}
            >
              <span>Anasayfa</span>
            </Link>
            <Link
              className={`hover:text-slate-700 ${
                pathName.startsWith('/yazilar')
                  ? 'text-slate-800 underline underline-offset-8'
                  : ''
              }`}
              href={'/yazilar'}
            >
              <span>Yazılar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
