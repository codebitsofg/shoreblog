'use client'
import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import {
  CarouselApi,
  Carousel as CarouselBase,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Headline from './Headline'
import HeroHighlight from './HeroHighlight'
import { DataItem } from '@/types/api'
import PostPreview from './PostPreview'
import MainHeroView from './MainHeroView'

export interface CarouselProps {
  showMoreVisible?: boolean
  text?: string
  carouselBasis?: string
  height?: string
  width?: string
  entries?: DataItem[]
  isHero?: boolean
  paginationStyle?: string
  isHeadlineVisible?: boolean
}

const Carousel = ({
  showMoreVisible,
  text,
  carouselBasis = '1/4',
  height = 'h-[32vh]',
  width = 'w-[88%]',
  entries,
  paginationStyle = 'bg-gray-50',
  isHero,
  isHeadlineVisible = true,
}: CarouselProps) => {
  const basis = isHero ? 'basis-full' : 'basis-1/2 md:basis-1/4'
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }))
  const fadePlugin = useRef(Fade({ active: isHero ? true : false }))

  return (
    <div className={`relative mx-auto mb-2 md:mb-12 ${width} font-light`}>
      {isHeadlineVisible && (
        <Headline text={text} showMoreVisible={showMoreVisible} />
      )}

      <CarouselBase
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin.current, fadePlugin.current]}
      >
        <CarouselContent>
          {entries!.map((entry, idx) => (
            <CarouselItem
              key={idx}
              className={`flex items-start justify-center ${basis}`}
            >
              {!isHero ? (
                <PostPreview entryData={entry} />
              ) : (
                <MainHeroView entry={entry} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className={paginationStyle} />
        <CarouselPrevious className={paginationStyle} />
      </CarouselBase>
    </div>
  )
}

export default Carousel
