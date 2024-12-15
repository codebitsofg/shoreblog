import React from 'react'
import HeroHighlight from './HeroHighlight'
import { PostFlowProps } from './PostFlow'
import Carousel from './Carousel'

interface HeroProps extends PostFlowProps {}
const Hero = ({ entries }: HeroProps) => {
  return (
    <div className='relative mx-auto mb-12 pt-16 md:pt-24 w-[88%] font-["Lora"]'>
      <Carousel
        carouselBasis='full'
        width='md:w-[100%] w-[100%]'
        height='md:h-[80vh]'
        showMoreVisible={false}
        entries={entries}
        isHero={true}
        isHeadlineVisible={false}
      />

      {/* <div className='flex md:flex-row flex-col gap-12 md:gap-2 my-4 md:mb-12'>
        {entries.length > 1 && (
          <>
            <HeroHighlight entry={entries[0]} />
            <HeroHighlight entry={entries[1]} />
          </>
        )}
      </div> */}
    </div>
  )
}

export default Hero
