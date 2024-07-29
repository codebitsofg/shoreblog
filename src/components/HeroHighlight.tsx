'use client'
import { formatTheDate } from '@/lib/utils'
import { DataItem } from '@/types/api'

import React, { useState } from 'react'
import Loader from './Loader'
import Image from 'next/image'
import Link from 'next/link'

interface HeroHighlightProps {
  entry: DataItem
}
const HeroHighlight = ({ entry }: HeroHighlightProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <Link className='flex-1' href={`/yazilar/${entry.attributes.slug}`}>
      <div className='flex-1'>
        <div className='relative'>
          <Image
            className='h-[60vh] w-full object-cover transition-all duration-300 ease-in-out hover:border-4 hover:border-white'
            src={entry.attributes.image.data.attributes.url}
            alt=''
            width={0}
            height={0}
            onLoad={() => setIsLoaded(true)}
          />

          {!isLoaded && (
            <div
              className={`absolute left-0 top-0 flex h-[60vh] w-full items-center justify-center bg-gray-50`}
            >
              <Loader />
            </div>
          )}
        </div>
        <div className={`mt-2 flex flex-col items-center justify-center`}>
          <span
            className={`mb-1 text-left font-['Oswald'] text-[0.8rem] font-extralight uppercase text-red-500`}
          >
            Öne Çıkanlar
          </span>
          <h1 className='mb-2 text-[1.3rem] capitalize text-neutral-800'>
            {entry.attributes.title}
          </h1>
          <span className='font-["Oswald"] font-extralight text-neutral-600'>
            {formatTheDate(entry.attributes.createdAt)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default HeroHighlight
