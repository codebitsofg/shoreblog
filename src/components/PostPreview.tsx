'use client'
import { getTimeDifference } from '@/lib/utils'
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
  const textContainerStyle = !isVertical && 'justify-around'

  // useEffect(() => {
  //   if (imgRef.current?.complete) {
  //     setIsLoaded(true)
  //   }
  // }, [imgRef.current?.complete])

  const imageSize = isVertical
    ? isLong
      ? 'w-full h-[50vh]'
      : isLarge
        ? 'w-full h-[45vh]'
        : 'w-full h-[25vh]'
    : 'w-full h-[15vh]'
  const titleSize = isLarge ? 'text-3xl leading-10' : 'text-[1.2rem] leading-7'
  const titleWidth = isVertical ? 'w-full' : 'w-[70%]'
  const containerFlex = isLarge
    ? 'flex-col w-[100%]'
    : isVertical
      ? 'flex-col w-[20vw]'
      : 'flex-row w-full gap-6'

  return (
    <Link passHref href={`/yazilar/${entryData.attributes.slug}`}>
      <div className={`inline-flex font-['Lora'] ${containerFlex}`}>
        <div className='relative flex-[0.5]'>
          <img
            className={`${imageSize} mb-2 object-cover transition-all duration-300 hover:border-8 hover:border-white`}
            src={image.data.attributes.url}
            alt=''
            ref={imgRef}
          />
          {/* {!isLoaded && (
            <div className={`${imageSize} absolute left-0 top-0`}>
              <Loader />
            </div>
          )} */}
        </div>

        <div
          className={`flex-col ${textContainerStyle} flex flex-1 items-start gap-2`}
        >
          <span className='flex items-center justify-center gap-2 font-["Oswald"] text-[0.7rem] font-light capitalize text-neutral-800'>
            {category} <span className='inline-block h-1 w-1 bg-neutral-400' />
            {getTimeDifference(entryData.attributes.createdAt)}
          </span>
          <h1
            className={`text-left ${titleSize} ${titleWidth} font-medium text-neutral-800`}
          >
            {title}
          </h1>
          <span className='font-["Oswald"] text-[0.55rem] font-light uppercase text-neutral-600'>
            Editor: {editor}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
