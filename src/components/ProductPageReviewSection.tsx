import { StarIcon, ThumbsUpIcon } from 'lucide-react'

interface EvaluationElement {
  title: string
  percentage: number
  average: string
  color: string
}

interface UserComment {
  name: string
  date: string
  rating: number
  comment: string
  likes: number
}

const evaluationElements: EvaluationElement[] = [
  {
    title: 'Professionalism of our service personnel',
    percentage: 92,
    average: 'Great',
    color: 'bg-blue-500',
  },
  {
    title: 'Efficiency of service call handling',
    percentage: 74,
    average: 'Good',
    color: 'bg-green-500',
  },
  {
    title: 'Response time to service calls',
    percentage: 55,
    average: 'So-so',
    color: 'bg-purple-500',
  },
  {
    title: 'Timeliness of contract administration',
    percentage: 34,
    average: 'Bad',
    color: 'bg-orange-500',
  },
  {
    title: 'Accuracy of contract administration',
    percentage: 18,
    average: 'Worst',
    color: 'bg-red-500',
  },
]

const userComments: UserComment[] = [
  {
    name: 'User Name Here',
    date: '18 APR 2023',
    rating: 4,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, ipsum at tristique consequat, turpis tellus ullamcorper turpis, at ullamcorper justo neque sed quam.',
    likes: 298,
  },
  {
    name: 'User Name Here',
    date: '15 APR 2023',
    rating: 2,
    comment:
      'Proin nibh augue, pellentesque sed lorem et, mattis facilisis lorem. Integer eu eros in justo porta luctus id in nulla. Morbi auctor magna sit amet elit tempor blandit.',
    likes: 178,
  },
]

const ProductPageReviewSection = () => {
  return (
    <div className='mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg'>
      <h2 className='mb-4 text-2xl font-bold'>Review & Comments</h2>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div className='lg:w-1/2'>
          <div className='mb-6 flex items-center'>
            <span className='mr-4 text-5xl font-bold'>3.75</span>
            <div>
              <div className='flex'>
                {[1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className='h-6 w-6 fill-current text-yellow-400'
                  />
                ))}
                <StarIcon className='h-6 w-6 text-gray-300' />
              </div>
              <span className='text-sm text-gray-500'>[1,297 Reviews]</span>
            </div>
          </div>
          <div>
            <h3 className='mb-2 text-lg font-semibold'>Most liked comments</h3>
            {userComments.map((comment, index) => (
              <div key={index} className='mb-4 rounded-lg bg-gray-100 p-4'>
                <div className='mb-2 flex items-center'>
                  <div className='mr-3 h-10 w-10 rounded-full bg-gray-300'></div>
                  <div>
                    <h4 className='font-semibold'>{comment.name}</h4>
                    <span className='text-sm text-gray-500'>
                      {comment.date}
                    </span>
                  </div>
                </div>
                <div className='mb-2 flex'>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < comment.rating
                          ? 'fill-current text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className='mb-2 text-sm'>{comment.comment}</p>
                <div className='flex items-center text-sm text-gray-500'>
                  <ThumbsUpIcon className='mr-1 h-4 w-4' />
                  <span>{comment.likes} Liked</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/2'>
          <h3 className='mb-2 text-lg font-semibold'>Element of Evaluation</h3>
          {evaluationElements.map((element, index) => (
            <div key={index} className='mb-4'>
              <div className='mb-1 flex justify-between text-sm'>
                <span>{element.title}</span>
                <span className='text-gray-500'>{`Average: ${element.average}`}</span>
              </div>
              <div className='relative pt-1'>
                <div className='mb-2 flex items-center justify-between'>
                  <div>
                    <span className='inline-block rounded-full bg-gray-500 px-2 py-1 text-xs font-semibold uppercase text-white'>
                      {element.percentage}%
                    </span>
                  </div>
                </div>
                <div className='mb-4 flex h-2 overflow-hidden rounded bg-gray-200 text-xs'>
                  <div
                    style={{ width: `${element.percentage}%` }}
                    className={`flex flex-col justify-center whitespace-nowrap text-center text-white shadow-none ${element.color}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPageReviewSection
