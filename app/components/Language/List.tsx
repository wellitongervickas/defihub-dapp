'use client'

import { Children, type HTMLProps } from 'react'
import classNames from 'classnames'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { localeConfig, Locale } from '@/locales/config'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export const LanguageList = (props: HTMLProps<HTMLUListElement>) => {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  return (
    <ul {...props}>
      {Children.toArray(
        localeConfig.locales.map((locale) => (
          <li
            onClick={() =>
              locale !== currentLocale && changeLocale(locale as Locale)
            }
            className={classNames(
              'cursor-pointer bg-black/70 p-2 hover:bg-black/40 hover:text-white',
              'flex items-center justify-between space-x-2'
            )}
          >
            <span>{locale}</span>
            {locale === currentLocale && (
              <CheckBadgeIcon
                width={18}
                className='text-green-400'
                title='Ativo'
              />
            )}
          </li>
        ))
      )}
    </ul>
  )
}

export default LanguageList
