'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useCurrentLocale, useI18n } from '@/locales/client'
import { LocalesKeys } from '@/locales/locales'

export const Variant = {
  default: {
    default: '',
    active: 'dark:text-cyan-50 font-bold hover:dark:text-cyan-50/75',
    classes: 'dark:text-cyan-50 hover:dark:text-cyan-50/75'
  },
  secondary: {
    default: '',
    active: 'text-secondary dark:text-primary font-bold',
    classes:
      'text-secondary hover:text-secondary/75 dark:text-primary hover:dark:text-primary/75'
  }
} as const

export type NavListItemProps = LinkProps & {
  tabIndex?: number
  label: string
  variant?: keyof typeof Variant
}

export const NavListItem = ({
  href,
  label,
  variant = 'default',
  ...props
}: NavListItemProps) => {
  const t = useI18n()
  const currentLocale = useCurrentLocale()
  const pathname = usePathname()
  return (
    <Link
      {...props}
      href={href}
      className={classNames([
        [Variant[variant || 'default'].default],
        pathname === `/${currentLocale + href}`
          ? [Variant[variant || 'default'].active]
          : Variant[variant || 'default'].classes
      ])}
    >
      {t(label as keyof LocalesKeys)}
    </Link>
  )
}

export default NavListItem
