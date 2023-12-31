'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import { Button, ButtonProps } from '@/app/components/Button'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'
import { useDarkMode, useIsClient } from 'usehooks-ts'

export const ConnectButton = ({ loading, ...props }: ButtonProps) => {
  const t = useI18n()
  const isClient = useIsClient()
  const { isDarkMode } = useDarkMode()

  const {
    connectors: [connector],
    connect,
    isConnecting,
    isReconnecting
  } = useWallet()

  return (
    <Button
      {...props}
      loadingProps={{
        variant: isDarkMode ? 'dark' : 'default',
        className: 'w-8'
      }}
      className='w-full justify-center rounded-md'
      type='button'
      key={connector.id}
      onClick={() => connect({ connector })}
      loading={isClient && (loading || isReconnecting || isConnecting)}
      disabled={props.disabled || isConnecting}
    >
      {isClient && (loading || isReconnecting || isConnecting)
        ? t(Locales.WALLET_CONNECT_CONNECTING_BUTTON_LABEL)
        : t(Locales.WALLET_CONNECT_STANDBY_BUTTON_LABEL)}
    </Button>
  )
}

export default ConnectButton
