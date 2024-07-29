import React from 'react'
import PostPreview from './PostPreview'
import Headline from './Headline'
import { DataItem } from '@/types/api'

export interface PostFlowProps {
  entries: DataItem[]
}

const PostFlow = ({ entries }: PostFlowProps) => {
  return (
    <div className='mx-auto my-0'>
      <div className='flex items-center justify-center'>
        <Headline showMoreVisible={false} text='Son Yazılar' />
      </div>

      <div className='mx-auto my-0 mt-12 flex w-[95%] flex-wrap items-start justify-center gap-10'>
        {entries.map((entryData) => (
          <PostPreview entryData={entryData} />
        ))}
      </div>
    </div>
  )
}

export default PostFlow
