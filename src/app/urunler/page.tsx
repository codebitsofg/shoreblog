'use client'
import ProductHero from '@/components/ProductHero'
import ProductPageReviewSection from '@/components/ProductPageReviewSection'
import ReviewCard from '@/components/ReviewCard'
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

const page = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')

  return (
    <div className='w-full pt-32'>
      <ProductHero />
      <ProductPageReviewSection />
      <ReviewCard
        name='Towhidur Rahman'
        totalSpend={200}
        totalReviews={14}
        date='24-10-2022'
        rating={4}
        reviewText="My first and only mala ordered on Etsy, and I'm beyond delighted! I requested a custom mala based on two stones I was called to invite together in this kind of creation. The fun and genuine joy."
        profileImage='https://example.com/profile.jpg'
      />
    </div>
  )
}

export default page
