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
  mediaUrl?: string
  mediaAlt?: string
  questionInnerList: { listElement: string; listElementTitle: string }[]
  linkOrDescription?: string
  referenceUsername?: string
  innerListTitle: string
}

export interface Paragraph {
  id: number
  paragraph: string
}

export enum EntryCategory {
  ICERIKLER = 'içerikler',
  UNLULER = 'ünlüler',
  IPUCLARI = 'ipuçları',
  ENDISE = 'endişe',
  TRENDLER = 'trendler',
  RUTINLER = 'rutinler',
  ISLEMLER = 'işlemler',
  URUNLER = 'ürünler',
  MERAK = 'merak',
  HABERLER = 'haberler',
}

export const EntryCategoryValues = {
  ICERIKLER: 'İçerikler',
  UNLULER: 'Ünlüler',
  IPUCLARI: 'İpuçları',
  ENDISE: 'Endişe',
  TRENDLER: 'Trendler',
  RUTINLER: 'Rutinler',
  ISLEMLER: 'İşlemler',
  URUNLER: 'Ürünler',
  MERAK: 'SSS',
  HABERLER: 'Haberler',
  MITLER: 'Mitler',
  CILTTURU: 'Cilt Türü',
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
  pageDescription?: string
  attributions: Attirbution[]
  keywords: { id: number; keyword: string }[]
  paragraphs: Paragraph[]
}

export interface DataItem {
  id: number
  attributes: Attributes
}

export interface Attirbution {
  author: number
  nameOfArticle: string
  link: string
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
