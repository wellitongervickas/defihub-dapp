'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'

export type SettingsSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
  onClick?: () => void
}

export const SettingsSelector = ({
  isOpen,
  ...props
}: SettingsSelectorProps) => {
  return (
    <div
      {...props}
      className={classNames(props.className, 'cursor-pointer px-2 py-1')}
    >
      <Cog6ToothIcon
        width={18}
        className={classNames({
          'text-gray-400': isOpen,
          'text-white': !isOpen
        })}
      />
    </div>
  )
}

export default SettingsSelector
