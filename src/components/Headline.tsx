import React from 'react'
import { CarouselProps } from './Carousel'

interface HeadlineProps extends CarouselProps {
  text?: string
}
const Headline = ({ text, showMoreVisible = true }: HeadlineProps) => {
  return (
    <div className='mb-10 flex items-baseline'>
      <div className='flex flex-1 flex-col font-["Lora"] md:gap-8'>
        <span className='-mb-2 h-max text-3xl font-extralight leading-none md:text-[2.3rem]'>
          {text}
        </span>
      </div>
    </div>
  )
}

export default Headline
