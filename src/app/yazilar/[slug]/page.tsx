import BlogPost from '@/components/BlogPost'
import Carousel from '@/components/Carousel'
import FlowContainerWithBackground from '@/components/FlowContainerWithBackground'
import RelatedContent from '@/components/RelatedContent'
import Socials from '@/components/Socials'
import { addArticleJsonLd, fetchCMSEntries, getPageData } from '@/lib/utils'
import { Metadata } from 'next'
import Script from 'next/script'

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
    title: `Rutinity | ${pageData?.title}`,
    keywords: pageData?.keywords?.map(({ keyword }) => keyword),
    description: pageData?.pageDescription ?? '',
    openGraph: {
      images: `/yazilar/${pageData!.slug}/og.png`,
      title: pageData?.title,
      description: pageData?.pageDescription ?? '',
      siteName: 'Rutinity',
      locale: 'tr_TR',
      type: 'article',
      url: `https://skknshore.com/yazilar/${pageData!.slug}`,
    },
    applicationName: 'Rutinity',
  }
}
const Page = async ({ params: { slug } }: PageProps) => {
  const { pageData, imgUrl, allEntries } = await getPageData(slug)
  const entries = await fetchCMSEntries()

  if (!pageData) return <></>
  return (
    <main className='w-screen overflow-x-hidden text-justify text-sm font-light text-neutral-800 md:w-full md:overflow-visible'>
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={addArticleJsonLd(pageData)}
      />
      <div className='flex justify-center py-[20%] pb-[10%] md:py-32'>
        <div className='top-20 hidden flex-[0.1] justify-end self-start pr-6 md:sticky md:flex'>
          <Socials shareUrl={slug} isVertical={true} isLarge={false} />
        </div>
        <BlogPost blogPostData={pageData} imgUrl={imgUrl!} />
        <div className='top-20 hidden flex-[0.3] self-start p-6 pt-0 md:sticky md:block'>
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
