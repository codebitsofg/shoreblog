'use client'
import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel as CarouselBase,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Headline from './Headline'

export interface CarouselProps {
  showMoreVisible?: boolean
  text: string
}

const Carousel = ({ showMoreVisible, text }: CarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }))
  return (
    <div className='mx-auto my-12 mb-36 w-[80%] font-light'>
      <Headline showMoreVisible={showMoreVisible} text={text} />

      <CarouselBase
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className=''>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='pl-1 md:basis-1/2 lg:basis-1/4'
            >
              <div className='flex h-[30vh] items-center justify-center bg-black'>
                {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselBase>
    </div>
  )
}

export default Carousel
