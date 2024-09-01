import React from 'react'
import PostPreview from './PostPreview'
import { DataItem } from '@/types/api'
import Link from 'next/link'

interface RelatedContentProps {
  relatedContents: DataItem[]
}
const RelatedContent = ({ relatedContents }: RelatedContentProps) => {
  return (
    <div>
      <span className='block mb-5 font-semibold text-xl'>Alakalı Yazılar</span>
      {relatedContents.map(({ attributes: { image, title, slug } }) => (
        <div className='flex items-center gap-2 mb-2'>
          <Link passHref href={`/yazilar/${slug}`}>
            <img
              className='inline-block rounded w-[5vw] h-[5.5vw] object-cover'
              src={image.data.attributes.url}
              alt={title}
            />
          </Link>
          <span className='w-[50%] font-medium text-left'>{title}</span>
        </div>
      ))}
    </div>
  )
}

export default RelatedContent
