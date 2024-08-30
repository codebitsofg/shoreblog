import React from 'react'

interface PostPageSummaryProps {
  subHeadlines: any
}
const PostPageSummary = ({ subHeadlines }: PostPageSummaryProps) => {
  return (
    <div className='mx-auto mb-10 w-[90%] rounded-sm border-black bg-gray-100 p-4 pb-8 font-["Oswald"] md:w-[70%]'>
      <span className='mb-6 block w-full text-start text-base md:text-xl'>
        Bu Yazıda
      </span>
      <div className='flex flex-col justify-start gap-4 gap-x-12 md:flex-row md:flex-wrap'>
        {subHeadlines}
      </div>
    </div>
  )
}

export default PostPageSummary
