import React from 'react'
import PostPreview from './PostPreview'
import Headline from './Headline'
import { DataItem } from '@/types/api'
import Link from 'next/link'

export interface PostFlowProps {
  entries: DataItem[]
  isTitleVisible?: boolean
  renderFullContent?: boolean
}

const PostFlow = ({
  entries,
  isTitleVisible = true,
  renderFullContent = false,
}: PostFlowProps) => {
  return (
    <div className='mx-auto my-0'>
      <div className='flex items-center justify-center'>
        {isTitleVisible && (
          <Headline showMoreVisible={false} text={'Son Yazılar'} />
        )}
      </div>

      <div className='mx-auto my-0 mt-12 flex w-[95%] flex-wrap items-start justify-center gap-5 gap-y-10 md:gap-10'>
        {entries
          .slice(0, renderFullContent ? entries.length : 10)
          .map((entryData) => (
            <PostPreview entryData={entryData} />
          ))}
      </div>

      {!renderFullContent && (
        <div className='mx-auto mt-16 w-max bg-black px-4 py-2 text-white md:px-8 md:py-3'>
          <Link href={'/yazilar'}>Tüm Yazıları Gör</Link>
        </div>
      )}
    </div>
  )
}

export default PostFlow
