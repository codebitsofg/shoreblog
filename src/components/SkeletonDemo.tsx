import { Skeleton } from '@/components/ui/skeleton'

const SkeletonDemo = () => {
  return (
    <div className='relative z-20 flex justify-center items-center space-x-2 md:space-x-4 w-full h-full'>
      <Skeleton className='rounded-full w-8 md:w-24 h-8 md:h-24' />
      <div className='space-y-2'>
        <Skeleton className='w-40 md:w-[30vw] h-3 md:h-6' />
        <Skeleton className='w-36 md:w-[25vw] h-3 md:h-6' />
      </div>
    </div>
  )
}

export default SkeletonDemo
