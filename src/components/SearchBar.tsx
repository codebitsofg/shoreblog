'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Search,
  Building2,
  ChevronDown,
  RotateCw,
  NotebookPen,
  SprayCan,
} from 'lucide-react'

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='mx-auto mt-12 w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-800 shadow-lg'>
      <div className='space-y-4 p-4'>
        <div className='flex items-center space-x-2'>
          <Search className='text-gray-400' />
          <Input
            className='flex-1 border-none bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0 focus-visible:ring-slate-200'
            placeholder='Marka, ürün, ve blog yazıları içinde bir arama yap'
            onFocus={() => setIsExpanded(true)}
          />
          <Button variant='ghost' size='icon'>
            <RotateCw className='h-4 w-4' />
          </Button>
          <Button variant='ghost' size='icon'>
            F
          </Button>
        </div>

        {isExpanded && (
          <>
            <div>
              <p className='mb-2 text-sm text-gray-500'>Aradığım şey...</p>
              <div className='flex space-x-2'>
                <Badge
                  variant='secondary'
                  className='bg-gray-100 text-gray-700'
                >
                  <SprayCan className='mr-1 h-3 w-3' /> Ürünler
                  <Button
                    variant='ghost'
                    size='sm'
                    className='ml-1 h-4 w-4 p-0'
                  >
                    ×
                  </Button>
                </Badge>
                <Badge
                  variant='secondary'
                  className='bg-gray-100 text-gray-700'
                >
                  <Building2 className='mr-1 h-3 w-3' /> Marka
                  <Button
                    variant='ghost'
                    size='sm'
                    className='ml-1 h-4 w-4 p-0'
                  >
                    ×
                  </Button>
                </Badge>
                <Badge
                  variant='secondary'
                  className='bg-gray-100 text-gray-700'
                >
                  <NotebookPen className='mr-1 h-3 w-3' /> Yazılar
                  <Button
                    variant='ghost'
                    size='sm'
                    className='ml-1 h-4 w-4 p-0'
                  >
                    ×
                  </Button>
                </Badge>
                <Button variant='ghost' size='sm' className='text-gray-500'>
                  Dahası <ChevronDown className='ml-1 h-3 w-3' />
                </Button>
              </div>
            </div>

            <div>
              <p className='mb-2 text-sm text-gray-500'>Son aramaların</p>
              {/* <ScrollArea className='h-[120px]'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <Avatar className='h-8 w-8'>
                        <img
                          src='/placeholder.svg?height=32&width=32'
                          alt='J'
                        />
                      </Avatar>
                      <div>
                        <p className='text-sm font-medium'>Jason Woodheart</p>
                        <p className='text-xs text-gray-500'>
                          jason@dribbble.com
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Badge variant='secondary' className='bg-gray-100'>
                        2
                      </Badge>
                      <Button variant='ghost' size='icon'>
                        <ChevronDown className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <Avatar className='h-8 w-8'>
                        <img
                          src='/placeholder.svg?height=32&width=32'
                          alt='R'
                        />
                      </Avatar>
                      <div>
                        <p className='text-sm font-medium'>Rob Miller</p>
                        <p className='text-xs text-gray-500'>rob@icloud.com</p>
                      </div>
                    </div>
                    <Button variant='ghost' size='icon'>
                      <ChevronDown className='h-4 w-4' />
                    </Button>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <Avatar className='h-8 w-8'>
                        <img
                          src='/placeholder.svg?height=32&width=32'
                          alt='H'
                        />
                      </Avatar>
                      <div>
                        <p className='text-sm font-medium'>Hannah Steward</p>
                        <p className='text-xs text-gray-500'>
                          replied in thread
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Badge variant='secondary' className='bg-gray-100'>
                        6
                      </Badge>
                      <Button variant='ghost' size='icon'>
                        <ChevronDown className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollArea> */}
            </div>

            {/* <div>
              <p className='mb-2 text-sm text-gray-500'>Quick actions</p>
              <div className='space-y-2'>
                <Button
                  variant='ghost'
                  className='w-full justify-between hover:bg-gray-100'
                >
                  <div className='flex items-center'>
                    <Plus className='mr-2 h-4 w-4' />
                    Create new task
                  </div>
                  <Badge variant='outline'>E</Badge>
                </Button>
                <Button
                  variant='ghost'
                  className='w-full justify-between hover:bg-gray-100'
                >
                  <div className='flex items-center'>
                    <Plus className='mr-2 h-4 w-4' />
                    Create note
                  </div>
                  <Badge variant='outline'>S</Badge>
                </Button>
                <Button
                  variant='ghost'
                  className='w-full justify-between hover:bg-gray-100'
                >
                  <div className='flex items-center'>
                    <Plus className='mr-2 h-4 w-4' />
                    Add member
                  </div>
                  <Badge variant='outline'>R</Badge>
                </Button>
              </div>
            </div> */}

            {/* <div>
              <p className='mb-2 text-sm text-gray-500'>Files 1</p>
              <div className='flex items-center justify-between rounded border border-gray-200 bg-gray-50 p-2'>
                <div className='flex items-center space-x-2'>
                  <FileText className='h-5 w-5 text-gray-400' />
                  <p className='text-sm'>Invoice.pdf</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <Avatar className='h-6 w-6'>
                    <img src='/placeholder.svg?height=24&width=24' alt='User' />
                  </Avatar>
                  <Avatar className='h-6 w-6'>
                    <img src='/placeholder.svg?height=24&width=24' alt='User' />
                  </Avatar>
                  <Button variant='ghost' size='sm'>
                    <Share2 className='mr-1 h-4 w-4' />
                    Share
                  </Button>
                </div>
              </div>
            </div> */}
          </>
        )}
      </div>
    </div>
  )
}
