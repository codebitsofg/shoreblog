import Carousel from '@/components/Carousel'
import Divider from '@/components/Divider'
import ParagraphWithHeadline from '@/components/ParagraphWithHeadline'
import { fetchCMSEntries, formatTheDate } from '@/lib/utils'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const entries = await fetchCMSEntries()
  return entries.map((entry) => ({
    slug: entry.attributes.slug,
  }))
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { pageData, imgUrl } = await getPageData(props.params.slug)
  return {
    title: `Shore | ${pageData?.title}`,
    keywords: [''],
    description: pageData?.highlightedParagraph,
    openGraph: { images: imgUrl },
    applicationName: 'Shore',
  }
}

const getPageData = async (pageSlug: string) => {
  const allEntries = await fetchCMSEntries()
  const pageData = allEntries.find(
    ({ attributes: { slug } }) => slug === pageSlug,
  )?.attributes
  const imgUrl = pageData?.image.data.attributes.url
  return {
    pageData,
    imgUrl,
  }
}

interface PageProps {
  params: { slug: string }
}

const Page = async ({ params: { slug } }: PageProps) => {
  const { pageData, imgUrl } = await getPageData(slug)
  if (!pageData) return <></>
  const {
    paragraphs,
    questions,
    highlightedParagraph,
    createdAt,
    editor,
    category,
  } = pageData

  return (
    <main className='flex w-screen flex-col items-center py-32 text-justify text-sm font-light text-neutral-800'>
      <span className='mb-3 uppercase text-red-500'>{category}</span>
      <h1 className='m-0 mb-6 w-[60%] p-0 text-center text-6xl font-normal capitalize leading-[4rem] text-neutral-800'>
        {pageData.title}
      </h1>

      <div className='mb-12'>
        <span className='capitalize'>By {editor}</span>
        <span className='mx-3 inline-block text-neutral-600'>|</span>
        {formatTheDate(createdAt)}
      </div>

      <img
        className='mb-12 h-[60vh] w-[60%] object-cover'
        alt=''
        src={imgUrl}
      />

      <div className='mx-auto flex w-[45%] flex-col items-center gap-20'>
        <p className='first-letter:float-left first-letter:mr-4 first-letter:text-7xl'>
          {paragraphs[0].paragraph}
        </p>

        <p className='w-[80%] text-center text-2xl font-medium italic'>
          <span className='text-3xl font-semibold'>"</span>
          {highlightedParagraph}
          <span className='text-3xl font-semibold'>"</span>
        </p>

        {paragraphs.length > 1 &&
          paragraphs.map(({ paragraph }) => <p> {paragraph} </p>)}
        <div>
          {questions.map(({ question, answer }) => (
            <ParagraphWithHeadline headline={question} paragraph={answer} />
          ))}
        </div>
      </div>

      <span>Teşekkürler!</span>
      <Divider />

      <Carousel text={`Daha fazlası`} />
    </main>
  )
}

export default Page
