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
      <span className='mb-5 block text-xl font-semibold'>Alakalı Yazılar</span>
      {relatedContents.map(({ attributes: { image, title, slug } }) => (
        <div className='mb-2 flex items-center gap-2'>
          <Link passHref href={`/yazilar/${slug}`}>
            <img
              className='inline-block h-[5.5vw] w-[5vw] rounded-sm object-cover'
              src={image.data.attributes.url}
              alt={title}
            />
          </Link>
          <span className='w-[50%] text-left font-medium'>{title}</span>
        </div>
      ))}
    </div>
  )
}

export default RelatedContent
