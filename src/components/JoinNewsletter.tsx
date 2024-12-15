import React from 'react'

const JoinNewsletter = () => {
  return (
    <div className='flex flex-col items-center gap-6 font-thin text-center'>
      <span className='block mb-2 w-[70%] text-base md:text-xl'>
        Her hafta ipuçları ve güncel bilgiler alman için çalışıyoruz. Yakında
        newsletter'ımıza kayıt olabilirsin!
      </span>
      <form className='relative w-1/2'>
        <span className='top-1/2 left-1/2 z-10 absolute font-normal text-white transform -translate-x-1/2 -translate-y-1/2'></span>
        <input
          disabled
          type='email'
          placeholder=''
          className='bg-gray-500 blur-sm px-6 py-3 rounded-l-3xl w-1/2 text-white focus:outline-none'
          required
        />
        <button
          disabled
          type='submit'
          className='bg-gray-500 blur-sm px-4 py-3 rounded-r-3xl focus:outline-none'
        >
          {'>'}
        </button>
      </form>
      <span className='inline-block w-[60%] font-thin text-[0.65rem] md:text-[0.8rem]'>
        Ekstra içerikler ve rehberler için bizi{' '}
        <span className='underline'>Instagram</span> hesabımızdan takip et!
      </span>
    </div>
  )
}

export default JoinNewsletter
