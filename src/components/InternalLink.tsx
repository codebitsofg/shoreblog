import { type InternalLink } from '@/types/api'
import React from 'react'

const InternalLink = ({ link, linkDescription }: InternalLink) => {
  return (
    <div className='mt-8 flex flex-col rounded-sm bg-gray-200 p-4'>
      <div className='flex items-center justify-around gap-2'>
        <span className='text-slate-700 underline'>{linkDescription}</span>
        <span className='rounded-sm bg-black p-2 px-5 text-white'>
          <a href={link}>Yazıyı Oku!</a>
        </span>
      </div>
    </div>
  )
}

export default InternalLink
