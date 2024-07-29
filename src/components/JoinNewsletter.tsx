import React from 'react'

const JoinNewsletter = () => {
  return (
    <div className='flex flex-col items-center gap-6 text-center font-thin'>
      <h1 className='text-xl'>
        Her hafta ipuçları ve güncel bilgiler için newsletter'ımıza kaydol!
      </h1>
      <form className='w-full'>
        <input
          type='email'
          placeholder='Your email'
          className='w-1/2 rounded-l-3xl bg-white px-6 py-3 text-white focus:outline-none'
          required
        />
        <button
          type='submit'
          className='rounded-r-3xl bg-white px-4 py-3 text-neutral-400 hover:bg-blue-600 focus:outline-none'
        >
          {'>'}
        </button>
      </form>
      <span className='inline-block w-[60%] text-[0.8rem] font-thin'>
        Ekstra içerikler ve rehberler için bizi{' '}
        <span className='underline'>Instagram</span> hesabımızdan takip et!
      </span>
    </div>
  )
}

export default JoinNewsletter
