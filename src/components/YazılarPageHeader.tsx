import React from 'react'

const YazılarPageHeader = () => {
  return (
    <>
      <div className='relative h-[50vh] overflow-hidden'>
        <img
          src='https://skknshoreimagebucket.s3.eu-central-1.amazonaws.com/david_clode_6ldb5s_OY_7o_unsplash_1_min_a0a3bdffe1.jpg'
          alt=''
        />
        <h1 className='absolute bottom-4 left-[10%] z-20 text-7xl font-normal text-white'>
          Yazılar
        </h1>
        <div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-30'></div>
      </div>

      <p className='mx-auto my-14 w-[80%] text-left text-sm font-extralight text-neutral-600'>
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
