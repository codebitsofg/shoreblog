import React from 'react'
import { HeroHighlightProps } from './HeroHighlight'
import { formatTheDate, getFirstThreeSentences } from '@/lib/utils'
import Link from 'next/link'

interface MainHeroViewProps extends HeroHighlightProps {}
const MainHeroView = ({ entry }: MainHeroViewProps) => {
  const entryData = entry.attributes
  return (
    <div className='flex h-[78vh] w-full flex-col-reverse items-center justify-end text-center md:h-[70vh] md:flex-row md:justify-around md:gap-0 md:text-left'>
      <div className='relative flex h-full w-full items-end'>
        <div className='relative z-10 flex h-auto w-full flex-col justify-between rounded-l-md bg-gray-100 px-2 py-4 md:h-full md:w-[40%] md:px-10 md:py-20'>
          <div className='px-1'>
            <span className='hidden font-["Oswald"] text-xs capitalize text-gray-400 md:block md:text-base'>
              {entryData.category}
            </span>
            <h1 className='my-2 text-[1.6rem] font-medium leading-8 text-neutral-800 md:mb-6 md:text-4xl md:leading-10'>
              {entryData.title}
            </h1>
            <p className='mx-auto w-[85%] text-xs text-gray-500 md:w-full md:text-base'>
              {getFirstThreeSentences(entryData.paragraphs[0].paragraph)}
            </p>
            <button className='mt-4 w-max rounded-sm bg-gray-300 px-3 py-1 font-["Oswald"] text-sm text-gray-50 md:px-6 md:py-2'>
              <Link passHref href={`/yazilar/${entryData.slug}`}>
                Yazıyı Oku
              </Link>
            </button>
          </div>
          <span className='hidden font-["Oswald"] text-xs text-gray-500 md:block md:text-base'>
            {formatTheDate(entryData.createdAt)}
          </span>
        </div>

        <img
          className='absolute left-0 top-0 h-full w-full rounded-md object-cover'
          src={entry.attributes.image.data.attributes.url}
          alt=''
        />
      </div>
    </div>
  )
}

export default MainHeroView
