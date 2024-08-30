import { fetchCMSEntries, formatTheDate, getPageData } from '@/lib/utils'
import { ImageResponse } from 'next/og'
import { PageProps } from '../page'

export async function generateStaticParams() {
  const entries = await fetchCMSEntries()
  return entries.map((entry) => ({
    slug: entry.attributes.slug,
  }))
}

export async function GET(req: Request, { params: { slug } }: PageProps) {
  const { imgUrl, pageData } = await getPageData(slug)

  return new ImageResponse(
    (
      <div tw='flex bg-white w-full h-full items-center justify-center'>
        <img src={imgUrl} alt={pageData!.title} />
        <div tw='absolute bottom-0 right-0 w-1/2 items-center capitalize bg-white justify-center flex-col flex text-xl h-full bg-black  text-white font-bold'>
          <div tw='relative flex w-full h-full p-2'>
            <div tw='flex flex-col justify-center border-white border-2 items-center w-full h-full'>
              <span tw='border-b-2 border-gray-500  block max-w-[75%] mx-auto text-center px-6 pb-2'>
                {pageData!.title}
              </span>
              <span tw='text-sm mt-2 opacity-70'>
                {formatTheDate(pageData!.createdAt)}
              </span>
              <img
                tw='absolute top-[80%] w-1/2 left-[25%]  opacity-10'
                src='http://localhost:3000/logo2.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
