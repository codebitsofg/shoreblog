import AboutUsExplainer from '@/components/AboutUsExplainer'
import Carousel from '@/components/Carousel'
import Divider from '@/components/Divider'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import HorizontalFlowRow from '@/components/HorizontalFlowRow'
import PostFlow from '@/components/PostFlow'
import { fetchCMSEntries } from '@/lib/utils'
import { EntryCategory } from '@/types/api'

const Home = async () => {
  const entries = await fetchCMSEntries()
  const filterEntries = (filter: EntryCategory) => {
    return entries.filter(({ attributes: { category } }) => category === filter)
  }

  return (
    <main>
      <Hero entries={filterEntries(EntryCategory.HERO)} />
      <Divider />
      <PostFlow entries={entries} />
      <Divider />
      <HorizontalFlowRow
        title='Endişe'
        entries={filterEntries(EntryCategory.ENDISE)}
      />

      <Carousel text='Trendler' showMoreVisible={true} />
      <Gallery entries={filterEntries(EntryCategory.İÇERİKLER)} />
      <Divider />
      <HorizontalFlowRow
        title='Cilt Türleri'
        entries={filterEntries(EntryCategory.CILTTURU)}
      />
      <Carousel text='İpuçları' showMoreVisible={true} />
      <Divider />
      <AboutUsExplainer />
    </main>
  )
}

export default Home
