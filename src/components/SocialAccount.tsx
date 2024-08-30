import React, { ReactNode } from 'react'
import { SocialsProps } from './Socials'

interface SocialAccountProps extends SocialsProps {
  children: ReactNode
  href: string
}

const SocialAccount = ({
  isVertical,
  isLarge,
  children,
  href,
}: SocialAccountProps) => {
  const containerSize = isLarge ? 'w-12 h-12' : 'w-10 h-10'
  const bgColor = isVertical ? 'bg-neutral-700' : 'bg-black'
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`inline-flex ${containerSize} items-center justify-center rounded-full ${bgColor}`}
    >
      {children}
    </a>
  )
}

export default SocialAccount
