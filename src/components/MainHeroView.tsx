import React, { useState } from 'react'
import { HeroHighlightProps } from './HeroHighlight'
import { formatTheDate, getFirstThreeSentences } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import SkeletonDemo from './SkeletonDemo'

interface MainHeroViewProps extends HeroHighlightProps {}
const MainHeroView = ({ entry }: MainHeroViewProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const entryData = entry.attributes
  return (
    <div className='relative flex md:flex-row flex-col-reverse justify-end md:justify-around items-center md:gap-0 w-full h-[80vh] md:h-[70vh] text-center md:text-left overflow-hidden'>
      <div className='flex flex-col justify-end items-end md:items-start w-full h-full'>
        <div className='relative z-50 box-border flex flex-col justify-around items-start bg-gray-100 md:px-10 py-4 md:py-20 w-full md:w-[40%] h-auto md:h-full'>
          <div>
            <span className='md:block hidden font-["Oswald"] text-gray-400 text-xs md:text-base capitalize'>
              {entryData.category}
            </span>
            <h1 className='my-2 md:mb-6 font-medium text-[1.3rem] text-neutral-800 md:text-4xl leading-8 md:leading-10'>
              {entryData.title}
            </h1>
            <p className='mx-auto w-[75%] md:w-full text-[0.7rem] text-gray-500 text-justify md:text-base'>
              {getFirstThreeSentences(entryData.paragraphs[0].paragraph)}
            </p>
            <button className='bg-gray-300 mt-4 px-3 md:px-6 py-1 md:py-2 rounded-sm w-max font-["Oswald"] text-gray-50 text-sm'>
              <Link passHref href={`/yazilar/${entryData.slug}`}>
                Yazıyı Oku
              </Link>
            </button>
          </div>
          <span className='md:block hidden font-["Oswald"] text-gray-500 text-xs md:text-base'>
            {formatTheDate(entryData.createdAt)}
          </span>
        </div>

        <Image
          fill={true}
          className='z-40 absolute object-cover'
          src={entry.attributes.image.data.attributes.url}
          alt=''
          onLoad={() => setIsLoaded(true)}
        />
        <div className='top-20 md:top-1/2 left-1/2 md:left-[70%] z-30 box-border absolute w-full md:w-[55%] transform -translate-x-1/2 md:-translate-y-1/2'>
          {!isLoaded && <SkeletonDemo />}
        </div>
      </div>
    </div>
  )
}

export default MainHeroView
