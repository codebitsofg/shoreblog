import { DataItem, EntryCategory, Response } from '@/types/api'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchCMSEntries = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate[questions][populate][questionInnerList]=*&populate[image]=*&populate[paragraphs]=*&populate[attributions]=*&populate[keywords]=*`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      // cache: 'no-store',
    },
  )
  const data = await res.json()
  return data.data.reverse() as DataItem[]
}

export const getPageData = async (pageSlug: string) => {
  const allEntries = await fetchCMSEntries()
  const pageData = allEntries.find(
    ({ attributes: { slug } }) => slug === pageSlug,
  )?.attributes
  const imgUrl = pageData?.image.data.attributes.url
  return {
    pageData,
    imgUrl,
    allEntries,
  }
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

export const getFirstThreeSentences = (text: string) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g)
  return sentences ? sentences.slice(0, 2).join(' ') : ''
}

export const splitOnUppercase = (word: string) =>
  word.replace(/([A-Z])/g, ' $1').trim()

export const filterEntries = (filter: EntryCategory, entries: DataItem[]) => {
  return entries.filter(({ attributes: { category } }) => category === filter)
}
