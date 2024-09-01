'use client'
import { formatTheDate, splitOnUppercase } from '@/lib/utils'
import { DataItem } from '@/types/api'
import React, { useRef, useState } from 'react'
import PostPageSummary from './PostPageSummary'
import ParagraphWithHeadline from './ParagraphWithHeadline'
import Attirbutions from './Attirbutions'
import FollowUsFromInstagram from './FollowUsFromInstagram'
import { AnimatePresence, motion } from 'framer-motion'
interface BlogPostProps {
  blogPostData: DataItem['attributes']
  imgUrl: string
}
const BlogPost = ({ blogPostData, imgUrl }: BlogPostProps) => {
  const {
    paragraphs,
    questions,
    highlightedParagraph,
    createdAt,
    editor,
    category,
    title,
    attributions,
  } = blogPostData
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [isImageOnView, setisImageOnView] = useState(false)
  const [shouldShowGif, setShouldShowGif] = useState(true)
  const scrollToSection = (index: number) => {
    refs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleCloseGif = () => setShouldShowGif(false)
  return (
    <div className='flex-1 md:flex-[0.65] px-2 md:px-0'>
      <div className='text-center'>
        <span className='md:block hidden mb-1 md:mb-3 text-neutral-600 text-xs md:text-base uppercase'>
          {splitOnUppercase(category)}
        </span>
        <h1 className='m-0 mb-3 md:mb-6 p-0 font-normal text-3xl text-center text-neutral-800 md:text-6xl capitalize md:leading-[4rem]'>
          {title}
        </h1>
        <div className='mb-12'>
          <span className='capitalize'>By {editor}</span>
          <span className='inline-block mx-3 text-neutral-600'>|</span>
          {formatTheDate(createdAt)}
        </div>
      </div>
      <motion.img
        className='mb-6 md:mb-12 rounded w-full h-[40vh] md:h-[60vh] object-cover'
        alt={title}
        src={imgUrl}
        onViewportLeave={() => setisImageOnView(true)}
        onViewportEnter={() => setisImageOnView(false)}
      />

      <PostPageSummary
        subHeadlines={questions.map(({ question }, i) => (
          <h2
            onClick={() => scrollToSection(i)}
            className='flex items-baseline gap-1 text-base md:text-lg cursor-pointer'
          >
            <span className='font-normal text-neutral-700'>•</span> {question}
          </h2>
        ))}
      />

      <div className='flex flex-col items-center md:gap-8 mx-auto w-[90%] md:w-[80%] text-sm md:text-base leading-5 md:leading-[1.8rem]'>
        <p className='first-letter:float-left first-letter:mr-4 first-letter:text-7xl'>
          {paragraphs[0].paragraph}
        </p>

        {paragraphs.length > 1 &&
          paragraphs.map(({ paragraph }, i) => i >= 1 && <p> {paragraph} </p>)}
        <div>
          {highlightedParagraph && (
            <p className='mx-auto mt-4 mb-6 md:mb-12 w-[90%] md:w-[80%] font-medium text-base text-center md:text-2xl italic'>
              <span className='font-semibold text-3xl'>"</span>
              {highlightedParagraph}
              <span className='font-semibold text-3xl'>"</span>
            </p>
          )}
          {questions.map((questionWithMedia, i) => (
            <ParagraphWithHeadline
              key={i}
              ref={(el) => {
                refs.current[i] = el
              }}
              question={questionWithMedia}
            />
          ))}
        </div>
      </div>
      <motion.div onViewportEnter={() => setisImageOnView(false)}>
        {attributions.length >= 1 && (
          <Attirbutions attributions={attributions} />
        )}
      </motion.div>

      <AnimatePresence mode='wait'>
        {isImageOnView && shouldShowGif && (
          <FollowUsFromInstagram onClose={handleCloseGif} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default BlogPost
