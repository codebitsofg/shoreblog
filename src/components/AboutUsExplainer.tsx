import React from 'react'
import Divider from './Divider'
import ShoreLogo from './ShoreLogo'
import Socials from './Socials'

const AboutUsExplainer = () => {
  return (
    <div className='mx-auto mb-12 flex w-[80%] flex-col items-center gap-4 text-center md:mb-32 md:flex-row md:text-left'>
      <div className='h-12 w-full md:h-auto md:w-auto md:flex-[0.3]'>
        <ShoreLogo />
      </div>
      <p className='my-6 flex-[0.5] font-["Oswald"] text-sm font-thin md:my-0 md:text-sm'>
        Shore cilt bakımının bazılarının yaşamında vazgeçilmez bir öneme sahip
        olduğuna inanarak; farklı cilt tipleri ve ihtiyaçları için etkili,
        bilimsel temelli ve pratik öneriler sunan bir platform. Ve misyonumuz
        basit: Bireyselliği kutlamak ve okuyucularn farkındalık ve biraz ışıltı
        yoluyla kendilerine güven bulmalarını sağlamak.
      </p>
      <div className='-mt-3 flex flex-[0.2] items-center justify-center md:mt-0'>
        <Socials />
      </div>
    </div>
  )
}

export default AboutUsExplainer
