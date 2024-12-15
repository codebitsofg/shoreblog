import { Trophy, NotebookPen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProductHero = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center mx-auto mb-20 px-4 py-12 max-w-[88%]'>
      <div className='mb-8 md:mb-0 md:w-[35%]'>
        <div>
          <span className='font-light text-3xl text-neutral-500'>
            La Roche Posay
          </span>
          <h1 className='mb-4 font-bold text-4xl text-neutral-800 md:text-6xl leading-tight'>
            La Roche Posay Effeclar Musant
          </h1>
        </div>
        <p className='mb-8 font-light text-neutral-500'>
          Yağlı ve düzensiz cilt tipleri için temizlik ve koruma sağlar.
          Effaclar Gel hassas ciltler için yeni formülüyle cildi nazikçe
          temizler, kirden ve sebumdan arındırmaya yardımcı olur. Ciltte
          temizlik ve tazelik sağlar. pH5.5'dir. Alkol içermez.
        </p>
        <div className='flex sm:flex-row flex-col gap-4'>
          <Button className='bg-zinc-800 px-8 font-light'>
            <Trophy className='mr-2 w-5 h-5' />
            Dene
          </Button>
          <Button className='bg-zinc-800 px-8 font-light'>
            <NotebookPen className='mr-2 w-5 h-5' />
            Yorum Bırak Veya Bir Soru Yanıtla
          </Button>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-center items-center border-slate-200 bg-white py-12 p-8 border rounded-sm w-[80vh] h-[70vh]'>
          <img
            className='h-full'
            src='https://skknshoreimagebucket.s3.eu-central-1.amazonaws.com/la_roche_posay_productpage_acne_effaclar_cleansing_foaming_gel_m_400ml_3337872411991_zoom_front_8a55532238.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
export default ProductHero
