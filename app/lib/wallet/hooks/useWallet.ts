import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function useWallet() {
  const { isConnected, address, isConnecting } = useAccount()
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()

  return {
    isConnecting,
    address,
    isConnected,
    connect,
    connectors,
    error,
    disconnect
  }
}

export default useWallet
