import React from 'react'
import HeroHighlight from './HeroHighlight'
import { PostFlowProps } from './PostFlow'

interface HeroProps extends PostFlowProps {}
const Hero = ({ entries }: HeroProps) => {
  return (
    <div className='relative mb-12 w-screen p-12 pt-32 font-["Lora"]'>
      <HeroHighlight entry={entries[1]} />
      <div className='my-12 flex gap-2'>
        <HeroHighlight entry={entries[0]} />
        <HeroHighlight entry={entries[2]} />
      </div>
    </div>
  )
}

export default Hero
