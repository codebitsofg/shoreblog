import { Attirbution } from '@/types/api'
import React from 'react'

interface AttirbutionsProps {
  attributions: Attirbution[]
}
const Attirbutions = ({ attributions }: AttirbutionsProps) => {
  return (
    <div className='mx-auto pt-6 border-t-4 border-black w-[90%] md:w-[80%] text-[0.4rem] md:text-[0.6rem] leading-3'>
      <span className='block font-bold text-xs'>Kaynaklar Ve Notlar</span>
      <span className='block mb-1 md:mb-2 font-medium text-black leading-3'>
        Bu metindeki öneriler ve bilgiler profesyonel tasviye yerine geçmez ve
        tıbbi danışmanlık sağlamak amacıyla kullanılmamalıdır. Bu içerik sadece
        bilgilendirme amaçlıdır. | Görseller kaynakları: Unsplash & Pexels.
      </span>
      <span className='block mb-1 md:mb-2 font-medium text-black leading-3'></span>
      {attributions.map(({ nameOfArticle, author, link }) => (
        <p className='md:mb-1'>
          {author}. <em>{nameOfArticle}</em>{' '}
          <a href={link} target='_blank'>
            | Kaynağa göz at!
          </a>
          .
        </p>
      ))}
    </div>
  )
}

export default Attirbutions
