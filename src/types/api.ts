// Define and export TypeScript types

export interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface ImageData {
  id: number
  attributes: {
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: {
      thumbnail: ImageFormat
      small: ImageFormat
      medium: ImageFormat
      large: ImageFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: string
    updatedAt: string
  }
}

export interface Question {
  id: number
  question: string
  answer: string
}

export interface Paragraph {
  id: number
  paragraph: string
}

export enum EntryCategory {
  İÇERİKLER = 'icerikler',
  MİTLER = 'mitler',
  UNLULER = 'ünlüler',
  İPUÇLARI = 'ipuçları',
  ENDISE = 'endise',
  CILTTURU = 'ciltTuru',
  HERO = 'hero',
}

export interface Attributes {
  title: string
  highlightedParagraph: string
  editor: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  slug: string
  category: string
  image: {
    data: ImageData
  }
  questions: Question[]
  paragraphs: Paragraph[]
}

export interface DataItem {
  id: number
  attributes: Attributes
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Meta {
  pagination: Pagination
}

export interface Response {
  data: DataItem[]
  meta: Meta
}
