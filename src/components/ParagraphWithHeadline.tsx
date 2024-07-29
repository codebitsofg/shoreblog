import React from 'react'

interface ParagraphWithHeadlineProps {
  headline: string
  paragraph: string
}
const ParagraphWithHeadline = ({
  headline,
  paragraph,
}: ParagraphWithHeadlineProps) => {
  return (
    <div className='mb-10'>
      <h2 className='mb-2 text-2xl font-normal'> {headline} </h2>
      <p> {paragraph} </p>
    </div>
  )
}

export default ParagraphWithHeadline
