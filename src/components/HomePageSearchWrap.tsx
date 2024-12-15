import React from 'react'
import SearchBar from './SearchBar'

const HomePageSearchWrap = () => {
  return (
    <div className='relative flex h-screen justify-center overflow-hidden bg-gray-50 pt-52 font-["Poppins"]'>
      <div className='relative z-10 flex w-full flex-col items-center gap-4'>
        <h1 className='w-[45%] text-center font-["Lora"] text-[3.3rem] font-medium leading-[4.5rem] text-neutral-800'>
          Gerçek Kullanıcı Yorumlarını Ve Ürün Analizlerini Keşfet
        </h1>
        <span className='font-light text-neutral-500'>
          Veya diger kullanıcılarla deneyimini paylaşarak etkileşiminin
          artmasını sağla.
        </span>
        <SearchBar />
      </div>

      <div className='absolute left-1/2 top-[70%] h-[150vw] w-[150vw] -translate-x-1/2 transform rounded-full bg-slate-100'></div>

      <img
        src='/home-page-elements/star.png'
        className='absolute bottom-56 left-12 w-96 opacity-60'
        alt=''
      />

      <img
        src='/home-page-elements/star.png'
        className='absolute bottom-10 left-28 w-16 opacity-60'
        alt=''
      />

      <img
        src='/home-page-elements/star.png'
        className='absolute right-20 top-32 w-32 opacity-60'
        alt=''
      />

      <img
        src='/home-page-elements/example.png'
        className='absolute bottom-24 right-[18%] w-96'
        alt=''
      />

      <img
        src='/home-page-elements/chart.png'
        className='absolute -bottom-14 right-24 w-44'
        alt=''
      />
      <img
        src='/home-page-elements/fp.png'
        className='absolute -bottom-0 right-64 w-96'
        alt=''
      />
    </div>
  )
}

export default HomePageSearchWrap
