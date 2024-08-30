'use client'
import React, { useEffect, useState } from 'react'
import ClientPortal from './ClientPortal'
import { motion } from 'framer-motion'

const OnInstagramModal = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false)

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal')
    if (!hasSeenModal) {
      setShouldShowModal(true)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem('hasSeenModal', 'true')
    setShouldShowModal(false)
  }
  return (
    <ClientPortal show={shouldShowModal} selector='portal-container'>
      <div className='fixed bottom-3 left-3 max-w-[43%] bg-neutral-900 font-["Oswald"] text-white'>
        <div className='relative px-6 py-3'>
          <h1>Çerezleri Kullanıyoruz</h1>
          <p className='mt-1 text-[0.7rem] font-thin'>
            Kullanıcı deneyimini geliştirmek için çerezleri kullanıyoruz.
            Çerezler deneyimini daha iyi hale getirmek ve daha
            kişiselleştirilmiş içerikler sunmak için kullanılır.
          </p>
        </div>
        <span onClick={handleClose} className='absolute right-2 top-1 text-xs'>
          X
        </span>
        <div className='h-1 w-full bg-neutral-500'>
          <motion.div
            className='h-full bg-neutral-200'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 8, ease: 'easeInOut' }}
            onAnimationComplete={handleClose}
          />
        </div>
      </div>
    </ClientPortal>
  )
}

export default OnInstagramModal
