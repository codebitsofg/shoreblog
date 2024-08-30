'use client'
import React, { useEffect } from 'react'
import { useToast } from './ui/use-toast'

const OnInstagramModal = () => {
  const { toast } = useToast()
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal')
    if (!hasSeenModal) {
      setTimeout(() => {
        toast({
          title: 'Çerezleri Kullanıyoruz 🍪',
          description:
            ' Kullanıcı deneyimini geliştirmek için çerezleri kullanıyoruz. Çerezler deneyimini daha iyi hale getirmek ve daha kişiselleştirilmiş içerikler sunmak için kullanılır.',
        })
        localStorage.setItem('hasSeenModal', 'true')
      }, 2000)
    }
  }, [])

  return <></>
}

export default OnInstagramModal
