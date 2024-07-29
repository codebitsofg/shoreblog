import React from 'react'
import Divider from './Divider'
import ShoreLogo from './ShoreLogo'
import Socials from './Socials'

const AboutUsExplainer = () => {
  return (
    <div className='mx-auto mb-32 flex w-[80%] items-center gap-4'>
      <div className='flex-[0.3]'>
        <ShoreLogo />
      </div>
      <p className='flex-[0.5] font-["Oswald"] font-thin'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        sapiente, voluptatibus error nulla sed dolor! Facere sed dolor impedit
        delectus nobis, provident laudantium iure velit, asperiores officiis,
        eveniet quasi adipisci?
      </p>
      <div className='flex flex-[0.2] items-center justify-center'>
        <Socials />
      </div>
    </div>
  )
}

export default AboutUsExplainer
