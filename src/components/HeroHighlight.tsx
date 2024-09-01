'use client'
import { formatTheDate } from '@/lib/utils'
import { DataItem } from '@/types/api'

import React, { useState } from 'react'
import Loader from './Loader'
import Image from 'next/image'
import Link from 'next/link'

export interface HeroHighlightProps {
  entry: DataItem
  isSmall?: boolean
}
const HeroHighlight = ({ entry, isSmall = false }: HeroHighlightProps) => {
  const height = isSmall ? 'h-[10vh] md:h-[20vh]' : 'h-[30vh] md:h-[60vh]'
  return (
    <Link className='flex-1' href={`/yazilar/${entry.attributes.slug}`}>
      <div className='flex-1'>
        <div className='relative'>
          <Image
            className={`${height} w-full rounded-sm object-cover contrast-[0.9] transition-all duration-300 ease-in-out hover:contrast-[1]`}
            src={entry.attributes.image.data.attributes.url}
            alt=''
            width={0}
            height={0}
          />
        </div>
        <div className={`mt-6 flex flex-col items-center justify-center`}>
          <h1 className='mb-2 text-center text-neutral-800 text-xl md:text-[1.3rem] capitalize'>
            {entry.attributes.title}
          </h1>
          <span className='md:block hidden font-["Oswald"] font-extralight text-[0.6rem]pa text-neutral-600 md:text-base'>
            {formatTheDate(entry.attributes.createdAt)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default HeroHighlight
