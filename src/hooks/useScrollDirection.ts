'use client'
import { useState, useEffect } from 'react'

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (
      currentScrollY > lastScrollY &&
      window.innerWidth > 700 &&
      window.location.pathname.startsWith('/yazilar')
    ) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  return isVisible
}

export default useScrollDirection
