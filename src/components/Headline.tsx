import React from 'react'
import { CarouselProps } from './Carousel'

interface HeadlineProps extends CarouselProps {
  text: string
}
const Headline = ({ text, showMoreVisible = true }: HeadlineProps) => {
  return (
    <div className='flex items-baseline'>
      <div className='flex flex-1 flex-col gap-8 font-["Lora"]'>
        <span className='h-max text-[5rem] font-light leading-none'>
          {text}
        </span>
        {showMoreVisible && (
          <div className='mb-12 h-[0.7vh] w-[10%] bg-neutral-500' />
        )}
      </div>

      {showMoreVisible && (
        <div className='font-["Oswald"] font-light'>
          Daha fazlasını keşfet
          <img className='ml-2 inline w-[2vw]' src='/arrow-right.svg' />
        </div>
      )}
    </div>
  )
}

export default Headline
