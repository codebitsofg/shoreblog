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
    <div className='flex-1 px-2 md:flex-[0.65] md:px-0'>
      <div className='text-center'>
        <span className='mb-1 hidden text-xs uppercase text-neutral-600 md:mb-3 md:block md:text-base'>
          {splitOnUppercase(category)}
        </span>
        <h1 className='m-0 mb-3 p-0 text-center text-3xl font-normal capitalize text-neutral-800 md:mb-6 md:text-6xl md:leading-[4rem]'>
          {title}
        </h1>
        <div className='mb-12'>
          <span className='capitalize'>By {editor}</span>
          <span className='mx-3 inline-block text-neutral-600'>|</span>
          {formatTheDate(createdAt)}
        </div>
      </div>
      <motion.img
        className='mb-6 h-[40vh] w-full rounded object-cover md:mb-12 md:h-[60vh]'
        alt={title}
        src={imgUrl}
        onViewportLeave={() => setisImageOnView(true)}
        onViewportEnter={() => setisImageOnView(false)}
      />

      <PostPageSummary
        subHeadlines={questions.map(({ question }, i) => (
          <h2
            onClick={() => scrollToSection(i)}
            className='flex cursor-pointer items-baseline gap-1 text-base md:text-lg'
          >
            <span className='font-normal text-neutral-700'>•</span> {question}
          </h2>
        ))}
      />

      <div className='mx-auto flex w-[90%] flex-col items-center text-sm leading-5 md:w-[80%] md:gap-8 md:text-base md:leading-[1.8rem]'>
        <p className='first-letter:float-left first-letter:mr-4 first-letter:text-7xl'>
          {paragraphs[0].paragraph}
        </p>

        {paragraphs.length > 1 &&
          paragraphs.map(({ paragraph }, i) => i >= 1 && <p> {paragraph} </p>)}
        <div>
          {highlightedParagraph && (
            <p className='mx-auto mb-6 mt-4 w-[90%] text-center text-base font-medium italic md:mb-12 md:w-[80%] md:text-2xl'>
              <span className='text-3xl font-semibold'>"</span>
              {highlightedParagraph}
              <span className='text-3xl font-semibold'>"</span>
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
