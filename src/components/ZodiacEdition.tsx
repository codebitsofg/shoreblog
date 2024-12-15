import React from 'react'

const ZodiacEdition = () => {
  return (
    <div className='relative z-50'>
      <img
        src='/zodiac.svg'
        className='absolute left-1/2 top-1/2 z-50 w-[120vw] -translate-x-1/2 -translate-y-1/2 transform opacity-90'
        alt=''
      />
      <div className='mx-auto flex min-h-[80vh] max-w-[88%] flex-col items-center justify-center gap-4 rounded-sm border-4 border-slate-700 bg-[#111318] shadow-2xl'>
        <h1 className='border-b border-b-gray-700 pb-3 text-5xl font-bold text-white'>
          Yıldızlar Ne Söylüyor?
        </h1>
        <p className='max-w-lg text-center text-xs text-gray-400'>
          Çok yakında göksel olayların yaşamımız üzerindeki etkilerini beraber
          keşfediyor olacağız! Beklemede kalın...
        </p>
      </div>
    </div>
  )
}

export default ZodiacEdition
