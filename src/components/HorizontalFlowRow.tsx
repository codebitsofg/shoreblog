import React from 'react'
import Headline from './Headline'
import PostPreview from './PostPreview'
import { PostFlowProps } from './PostFlow'
import { title } from 'process'

interface HorizontalFlowRowProps extends PostFlowProps {
  title: string
}

const HorizontalFlowRow = ({ entries, title }: HorizontalFlowRowProps) => {
  return (
    <div className='mx-auto my-36 w-[80%]'>
      <Headline text={title} />
      <div className='flex items-center justify-center gap-16'>
        {entries.map(
          (entry, index) =>
            entry && <PostPreview entryData={entry} isLong={true} />,
        )}
      </div>
    </div>
  )
}

export default HorizontalFlowRow
