import BlogPost from '@/components/BlogPost'
import Carousel from '@/components/Carousel'
import FlowContainerWithBackground from '@/components/FlowContainerWithBackground'
import RelatedContent from '@/components/RelatedContent'
import Socials from '@/components/Socials'
import { fetchCMSEntries, getPageData } from '@/lib/utils'
import { Metadata } from 'next'

export interface PageProps {
  params: { slug: string }
}
export async function generateStaticParams() {
  const entries = await fetchCMSEntries()
  return entries.map((entry) => ({
    slug: entry.attributes.slug,
  }))
}
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { pageData } = await getPageData(props.params.slug)
  return {
    title: `Shore | ${pageData?.title}`,
    keywords: pageData?.keywords?.map(({ keyword }) => keyword),
    description: pageData?.pageDescription ?? '',
    openGraph: {
      images: `/yazilar/${pageData!.slug}/og.png`,
      title: pageData?.title,
      description: pageData?.highlightedParagraph,
      siteName: 'Shore',
      type: 'website',
      url: `https://skknshore.com/yazilar/${pageData!.slug}`,
    },
    applicationName: 'Shore',
  }
}
const Page = async ({ params: { slug } }: PageProps) => {
  const { pageData, imgUrl, allEntries } = await getPageData(slug)
  const entries = await fetchCMSEntries()
  if (!pageData) return <></>
  return (
    <main className='w-screen md:w-full font-light text-justify text-neutral-800 text-sm md:overflow-visible overflow-x-hidden'>
      <div className='flex justify-center py-[20%] md:py-32 pb-[10%]'>
        <div className='top-20 md:sticky md:flex flex-[0.1] justify-end hidden pr-6 self-start'>
          <Socials shareUrl={slug} isVertical={true} isLarge={false} />
        </div>
        <BlogPost blogPostData={pageData} imgUrl={imgUrl!} />
        <div className='md:block top-20 md:sticky flex-[0.3] hidden p-6 pt-0 self-start'>
          <RelatedContent relatedContents={allEntries.slice(0, 7)} />
        </div>
      </div>
      <FlowContainerWithBackground>
        <Carousel
          width='md:w-[90%] w-[90%]'
          isHero={false}
          entries={entries}
          text={`Daha fazlası`}
          paginationStyle='bg-gray-100'
        />
      </FlowContainerWithBackground>
    </main>
  )
}

export default Page
