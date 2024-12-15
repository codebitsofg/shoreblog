'use client'
import React, { useState } from 'react'
import PostFlow, { PostFlowProps } from './PostFlow'
import { EntryCategory, EntryCategoryValues } from '@/types/api'
import { filterEntries } from '@/lib/utils'
import { motion } from 'framer-motion'
import YazılarPageHeader from './YazılarPageHeader'
import FilterItem from './FilterItem'

interface PostFlowWithFilterProps extends PostFlowProps {}
const PostFlowWithFilter = ({ entries }: PostFlowWithFilterProps) => {
  const [filteredEntries, setfilteredEntries] = useState(entries)
  const categories = Object.entries(EntryCategory)
  const [filterTitle, setFilterTitle] = useState<string | null>('YAZILAR')
  const [filterCategoryToDisplay, setFilterCategoryToDisplay] =
    useState<number>(-1)

  const handleClick = (filter: EntryCategory, objectValue: string) => {
    //@ts-ignore
    const filterTypedCasted = EntryCategoryValues[objectValue]
    const filteredEntries = filterEntries(filter, entries)
    setFilterTitle(filterTypedCasted)
    setfilteredEntries(filteredEntries)
  }

  return (
    <div className='flex flex-col items-center text-center font-["Lora"]'>
      <YazılarPageHeader />
      <div className='w min-h-[90vh] min-w-full bg-gray-100 py-8 pb-32'>
        <div className='mx-auto'>
          <div className='mx-auto w-[80%]'>
            <h2 className='text-left text-[2rem] font-light'>
              Aradığını Bulalım
            </h2>
            <motion.div className='relative mt-7 box-border flex items-center gap-[2%] overflow-hidden border-b border-black pb-3'>
              <FilterItem
                onClick={() => {
                  setFilterCategoryToDisplay(-1)
                  setfilteredEntries(entries)
                }}
                text={'Bütün Yazılar'}
                shouldShowUnderline={filterCategoryToDisplay === -1}
              />
              {categories.map(
                ([key, value], i) =>
                  i < categories.length - 1 && (
                    <FilterItem
                      onClick={() => {
                        setFilterCategoryToDisplay(i)
                        handleClick(value, key)
                      }}
                      /* @ts-ignore */
                      text={EntryCategoryValues[key]}
                      shouldShowUnderline={filterCategoryToDisplay === i}
                    />
                  ),
              )}
            </motion.div>
          </div>

          <div className=''>
            <PostFlow
              renderFullContent={true}
              isTitleVisible={false}
              entries={filteredEntries}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostFlowWithFilter
