import Carousel from '@/components/Carousel'
import Divider from '@/components/Divider'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import HorizontalFlowRow from '@/components/HorizontalFlowRow'
import CookieModal from '@/components/CookieModal'
import PostFlow from '@/components/PostFlow'
import { fetchCMSEntries, filterEntries } from '@/lib/utils'
import { EntryCategory } from '@/types/api'
import FlowContainerWithBackground from '@/components/FlowContainerWithBackground'
import ZodiacEdition from '@/components/ZodiacEdition'

const Home = async () => {
  const entries = await fetchCMSEntries()

  return (
    <main className='overflow-hidden'>
      <Hero entries={filterEntries(EntryCategory.HABERLER, entries)} />

      <Gallery
        title={'A-Z İçerikler'}
        entries={filterEntries(EntryCategory.ICERIKLER, entries)}
      />

      <div className='my-10 py-6'>
        <HorizontalFlowRow
          title='Medikal İşlemler'
          entries={filterEntries(EntryCategory.ISLEMLER, entries)}
        />
      </div>

      <ZodiacEdition />

      <div className='my-6 py-2 md:py-6'>
        <Carousel
          text='Endişeler'
          showMoreVisible={true}
          isHero={false}
          isHeadlineVisible={true}
          entries={filterEntries(EntryCategory.ENDISE, entries)}
        />
      </div>

      <HorizontalFlowRow
        title='Trendler'
        entries={filterEntries(EntryCategory.TRENDLER, entries)}
      />

      <FlowContainerWithBackground>
        <Gallery
          title='Merak Edilenler'
          entries={filterEntries(EntryCategory.MERAK, entries)}
        />
      </FlowContainerWithBackground>

      <Carousel
        isHero={false}
        isHeadlineVisible={true}
        text='Ürün İncelemeleri'
        entries={filterEntries(EntryCategory.URUNLER, entries)}
        showMoreVisible={true}
      />

      <Gallery
        title={'İpuçları'}
        entries={filterEntries(EntryCategory.IPUCLARI, entries)}
      />

      <FlowContainerWithBackground>
        <HorizontalFlowRow
          title='Ünlüler'
          entries={filterEntries(EntryCategory.UNLULER, entries)}
        />
      </FlowContainerWithBackground>

      <Carousel
        isHero={false}
        isHeadlineVisible={true}
        text='Haberler'
        entries={filterEntries(EntryCategory.HABERLER, entries)}
        showMoreVisible={true}
      />

      <FlowContainerWithBackground>
        <HorizontalFlowRow
          title='Rutinler'
          entries={filterEntries(EntryCategory.RUTINLER, entries)}
        />
      </FlowContainerWithBackground>

      <Divider />
      <PostFlow entries={entries} />
      <CookieModal />
    </main>
  )
}

export default Home
