import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface ImageWithSkeletonProps {
  styles: string
  src: string
  alt: string
}

const ImageWithSkeleton = ({ styles, src, alt }: ImageWithSkeletonProps) => {
  return (
    <div className='relative'>
      <Skeleton className='absolute z-10 h-full w-full rounded-full' />
      <img src={src} className={styles} alt={alt} />
    </div>
  )
}

export default ImageWithSkeleton
