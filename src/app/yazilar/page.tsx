import PostFlow from '@/components/PostFlow'
import PostFlowWithFilter from '@/components/PostFlowWithFilter'
import { fetchCMSEntries } from '@/lib/utils'
import React, { useState } from 'react'

const page = async () => {
  const entries = await fetchCMSEntries()
  return (
    <div>
      <PostFlowWithFilter entries={entries} />
    </div>
  )
}

export default page
