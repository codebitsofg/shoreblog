import React from 'react'
import ShoreLogo from './ShoreLogo'
import JoinNewsletter from './JoinNewsletter'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='fle relative h-[45vh] flex-col items-center overflow-hidden bg-neutral-900 py-12 font-["Oswald"] text-gray-300'>
      <JoinNewsletter />

      <div className='absolute bottom-3 left-3 z-50 flex gap-1 text-[0.5rem] font-thin underline md:gap-8 md:text-sm'>
        <Link href={'/legal'}>Hakkında</Link>
        <Link href={'/legal'}>Reklam ve İşbirliği</Link>
        <Link href={'/legal'}>
          <span>Legal</span>
        </Link>
      </div>
      <div className='absolute bottom-3 right-3 text-[0.65rem] font-thin text-gray-300'>
        <p>2024 &copy; Rutinhero'daki içeriklerin her hakkı saklıdır.</p>
      </div>

      <div className='absolute bottom-0 flex w-full items-center justify-center opacity-20'>
        <div className='w-[40%]'>
          <img src='/footer-type.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer
