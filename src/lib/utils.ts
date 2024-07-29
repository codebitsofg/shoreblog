import { DataItem, Response } from '@/types/api'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchCMSEntries = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const data = await res.json()
  return data.data as DataItem[]
}

export const formatTheDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const getTimeDifference = (createdAt: string): string => {
  const createdDate = new Date(createdAt)
  const turkeyOffset = 3 * 60 * 60 * 1000
  const turkeyCreatedDate = new Date(createdDate.getTime() + turkeyOffset)
  const now = new Date()
  const turkeyNow = new Date(now.getTime() + turkeyOffset)
  const timeDifference = turkeyNow.getTime() - turkeyCreatedDate.getTime()
  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
  const hours = Math.floor(
    (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
  )
  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000))

  if (days > 0) {
    return `${days} gün önce`
  } else if (hours > 0) {
    return `${hours} saat önce`
  } else if (minutes > 0) {
    return `${minutes} dakika önce`
  } else {
    return '0 dakika önce'
  }
}
