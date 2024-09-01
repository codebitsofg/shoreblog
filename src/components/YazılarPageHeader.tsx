import Image from 'next/image'
import React, { useState } from 'react'
import SkeletonDemo from './SkeletonDemo'

const YazılarPageHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      <div className='relative w-full h-[50vh] overflow-hidden'>
        <Image
          src='https://skknshoreimagebucket.s3.eu-central-1.amazonaws.com/david_clode_6ldb5s_OY_7o_unsplash_1_min_a0a3bdffe1.jpg'
          className={`object-cover ${isLoaded && 'opacity-100'} bg-white opacity-0`}
          onLoad={() => {
            setIsLoaded(true)
          }}
          fill={true}
          alt=''
        />
        {!isLoaded && <SkeletonDemo />}
        <h1 className='bottom-4 left-[10%] z-20 absolute font-normal text-7xl text-white'>
          Yazılar
        </h1>
        <div
          className={`top-0 ${isLoaded && 'opacity-30'} absolute left-0 z-10 h-full w-full bg-black opacity-0`}
        />
      </div>

      <p className='mx-auto my-14 w-[80%] font-extralight text-left text-neutral-600 text-sm'>
        Cilt bakımının herkese uyan tek bir formülü olmadığını biliyoruz.
        Burada, cildiniz için en uygun bakım önerilerini bulabileceğiniz bir
        filtreleme sistemi sunuyoruz. İster cilt tipinize göre, ister spesifik
        bir cilt sorununuz için aradığınız bilgilere ulaşabilirsiniz. Ayrıca,
        popüler cilt bakım ürünleri hakkında tarafsız incelemeler, kullanıcı
        deneyimleri ve ideal cilt bakımı rutinlerini keşfetmek için yazılarımızı
        inceleyebilirsiniz.
      </p>
    </>
  )
}

export default YazılarPageHeader
