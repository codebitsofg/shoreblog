import React, { ReactNode } from 'react'

const FlowContainerWithBackground = ({ children }: { children: ReactNode }) => (
  <div className='my-8 box-border bg-gray-100 py-6 pb-2 md:py-10 md:pb-10'>
    {children}
  </div>
)

export default FlowContainerWithBackground
