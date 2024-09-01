import React from 'react'
import Headline from './Headline'
import PostPreview from './PostPreview'
import { PostFlowProps } from './PostFlow'

interface GalleryProps extends PostFlowProps {
  title?: string
}
const Gallery = ({ entries, title }: GalleryProps) => {
  return (
    <div className='mx-auto mt-12 w-[88%]'>
      <Headline text={title} />

      <div className='flex md:flex-row flex-col items-start gap-10'>
        <div className='flex flex-1 items-center self-stretch'>
          {entries[0] && (
            <PostPreview
              isLarge={true}
              entryData={entries[0]}
              isVertical={true}
            />
          )}
        </div>

        <div className='flex flex-1 justify-between gap-2'>
          {entries
            .slice(1, 3)
            .map((entry, index) => entry && <PostPreview entryData={entry} />)}
        </div>
      </div>
    </div>
  )
}

export default Gallery
