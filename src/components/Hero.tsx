import React from 'react'
import HeroHighlight from './HeroHighlight'
import { PostFlowProps } from './PostFlow'
import Carousel from './Carousel'

interface HeroProps extends PostFlowProps {}
const Hero = ({ entries }: HeroProps) => {
  return (
    <div className='relative mx-auto w-[88%] pt-16 font-["Lora"] md:pt-24'>
      <Carousel
        carouselBasis='full'
        width='md:w-[100%] w-[100%]'
        height='h-[80vh]'
        showMoreVisible={false}
        entries={entries}
        isHero={true}
        isHeadlineVisible={false}
      />

      <div className='my-4 flex flex-col gap-12 md:mb-12 md:flex-row md:gap-2'>
        {entries.length > 1 && (
          <>
            <HeroHighlight entry={entries[0]} />
            <HeroHighlight entry={entries[2]} />
          </>
        )}
      </div>
    </div>
  )
}

export default Hero
