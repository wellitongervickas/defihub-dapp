'use client'

import { useWallet } from '@/app/lib/wallet'
import Separator from '@/app/components/Separator'

import { WalletAvatar } from './avatar'
import { WalletConnectButton } from './buttons'
import { WalletNetwork } from './network'

export const Wallet = () => {
  const { isConnected, address } = useWallet()
  return (
    <>
      {!isConnected ? (
        <WalletConnectButton />
      ) : (
        <div className='flex items-center justify-end space-x-4'>
          <WalletNetwork />
          <Separator className='hidden lg:inline-flex' />
          <WalletAvatar title={address} address={address} />
        </div>
      )}
    </>
  )
}

export default Wallet
