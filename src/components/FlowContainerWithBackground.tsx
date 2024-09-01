import React, { ReactNode } from 'react'

const FlowContainerWithBackground = ({ children }: { children: ReactNode }) => (
  <div className='box-border bg-gray-100 my-8 py-6 md:py-10 pb-12 md:pb-10'>
    {children}
  </div>
)

export default FlowContainerWithBackground
