import React, { forwardRef, Ref, useCallback, useMemo } from 'react'
import { Question } from '@/types/api'
import InternalLink from './InternalLink'

interface ParagraphWithHeadlineProps {
  question: Question
}

const ParagraphWithHeadline = forwardRef<
  HTMLDivElement,
  ParagraphWithHeadlineProps
>(
  (
    {
      question: {
        mediaUrl,
        question,
        answer,
        mediaAlt,
        linkOrDescription,
        questionInnerList,
        referenceUsername,
        innerListTitle,
        internalLink,
      },
    }: ParagraphWithHeadlineProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const isLink = linkOrDescription?.startsWith('https://')
    const splitIntoParagraphs = useCallback((text: string) => {
      if (answer) {
        const sentences = answer.split(/(?<=[.!?])\s+/)
        const paragraphs: string[] = []
        for (let i = 0; i < sentences.length; i += 3) {
          paragraphs.push(sentences.slice(i, i + 3).join(' '))
        }
        return paragraphs
      }
    }, [])
    const paragraphs = useMemo(() => splitIntoParagraphs(answer), [answer])
    return (
      <div ref={ref} className='my-16 md:mb-12'>
        <div className='mb-6 text-center'>
          {mediaUrl && (
            <img
              className='mb-2 h-[50vh] w-full rounded-sm object-cover'
              src={mediaUrl}
              alt={mediaAlt || 'Image'}
            />
          )}

          {linkOrDescription && isLink ? (
            <a
              className='mt-6 block text-xs text-black'
              target='_blank'
              href={linkOrDescription}
            >
              <span className='rounded-sm bg-red-500 px-4 py-1 text-sm text-white'>
                Satın Al
              </span>
            </a>
          ) : (
            <span>{linkOrDescription}</span>
          )}
        </div>
        <h2 className='mb-3 text-left text-xl font-semibold md:text-3xl'>
          {question}
        </h2>
        {paragraphs &&
          paragraphs.map((para, index) => (
            <p className='mb-2' key={index}>
              {para}
            </p>
          ))}

        <span className='my-3 block font-semibold'>{innerListTitle}</span>
        <ul className='list-inside list-disc pl-3'>
          {questionInnerList.map(({ listElement, listElementTitle }) => (
            <li className='mb-5'>
              <h3 className='inline font-semibold'>{listElementTitle}</h3>
              {listElement}
            </li>
          ))}
        </ul>

        {internalLink && <InternalLink {...internalLink} />}
      </div>
    )
  },
)

export default ParagraphWithHeadline
