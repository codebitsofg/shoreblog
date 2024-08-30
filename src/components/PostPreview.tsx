'use client'
import { getTimeDifference, splitOnUppercase } from '@/lib/utils'
import { DataItem } from '@/types/api'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Loader from './Loader'

interface PostPreviewProps {
  entryData: DataItem
  title?: string
  imageSrc?: string
  isVertical?: boolean
  hasBackground?: boolean
  isLarge?: boolean
  isLong?: boolean
}

const PostPreview = ({
  entryData,
  isVertical = true,
  isLarge = false,
  isLong,
}: PostPreviewProps) => {
  // const [isLoaded, setIsLoaded] = useState(false)
  const { title, image, editor, category } = entryData.attributes
  const imgRef = useRef<HTMLImageElement | null>(null)
  const textContainerStyle = !isVertical && 'justify-center'

  // useEffect(() => {
  //   if (imgRef.current?.complete) {
  //     setIsLoaded(true)
  //   }
  // }, [imgRef.current?.complete])

  const imageSize = isVertical
    ? isLong
      ? 'md:w-full  md:h-[50vh] h-[35vh]'
      : isLarge
        ? 'w-full h-[62vh]'
        : 'w-full h-[15vh] md:h-[28vh]'
    : 'w-full h-[20vh]'
  const titleSize = isLarge
    ? 'text-2xl leading-10'
    : 'md:text-[1.1rem]  text-md md:leading-7'
  const titleWidth = isVertical ? 'w-full' : 'w-[70%]'
  const containerFlex = isLarge
    ? 'flex-col w-[100%]'
    : isVertical
      ? isLong
        ? 'flex-col md:w-[19vw] w-[90vw]'
        : 'flex-col md:w-[19vw] w-[40vw]'
      : 'flex-row w-full gap-6'

  return (
    <div className={`inline-flex font-['Lora'] ${containerFlex}`}>
      <div className='relative flex-[0.5]'>
        <Link passHref href={`/yazilar/${entryData.attributes.slug}`}>
          <img
            className={`${imageSize} mb-2 rounded-sm object-cover contrast-[0.9] transition-all duration-300 hover:contrast-[1.02]`}
            src={image.data.attributes.url}
            alt={title}
            ref={imgRef}
          />
        </Link>
        {/* {!isLoaded && (
            <div className={`${imageSize} absolute left-0 top-0`}>
              <Loader />
            </div>
          )} */}
      </div>

      <div
        className={`flex-col ${textContainerStyle} flex flex-1 items-start gap-1 md:gap-2`}
      >
        <span className='-mb-1 mt-2 flex items-center justify-center gap-2 font-["Oswald"] text-[0.65rem] font-normal uppercase text-neutral-800 md:text-[0.7rem]'>
          {splitOnUppercase(category)}
        </span>
        <span
          className={`text-left ${titleSize} ${titleWidth} block font-medium text-neutral-800`}
        >
          {title}
        </span>
      </div>
    </div>
  )
}

export default PostPreview
