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
    <div className='mx-auto w-[88%]'>
      <Headline text={title} />
      <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-16'>
        {entries.map(
          (entry, index) =>
            entry && <PostPreview entryData={entry} isLong={true} />,
        )}
      </div>
    </div>
  )
}

export default HorizontalFlowRow
