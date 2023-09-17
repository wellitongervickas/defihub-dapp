'use client'

import { type HTMLProps } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useCurrentLocale } from '@/locales/client'

export type LanguageSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
  onClick?: () => void
}

export const LanguageSelector = ({
  isOpen,
  ...props
}: LanguageSelectorProps) => {
  const currentLocale = useCurrentLocale()

  return (
    <div {...props}>
      <div className='flex cursor-pointer justify-between space-x-2 rounded-md bg-black/10 px-4 py-2'>
        <div className='flex items-center space-x-2'>
          <span className='text-xs font-bold text-white'>{currentLocale}</span>
        </div>
        <ChevronDownIcon
          width={18}
          className={classNames('transform', {
            'rotate-180': isOpen,
            'rotate-0': !isOpen
          })}
        />
      </div>
    </div>
  )
}

export default LanguageSelector