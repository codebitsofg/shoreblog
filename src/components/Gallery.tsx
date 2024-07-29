import React from 'react'
import Headline from './Headline'
import PostPreview from './PostPreview'
import { PostFlowProps } from './PostFlow'

interface GalleryProps extends PostFlowProps {}
const Gallery = ({ entries }: GalleryProps) => {
  return (
    <div className='mx-auto my-36 w-[80%]'>
      <Headline text={'İçerikler'} />

      <div className='flex items-center justify-around gap-10'>
        <div className='flex flex-1 items-center justify-center self-stretch'>
          {entries[0] && (
            <PostPreview
              isLarge={true}
              entryData={entries[0]}
              isVertical={true}
            />
          )}
        </div>

        <div className='flex flex-1 flex-col gap-6'>
          {entries
            .slice(1)
            .map(
              (entry, index) =>
                entry && <PostPreview entryData={entry} isVertical={false} />,
            )}
        </div>
      </div>
    </div>
  )
}

export default Gallery
