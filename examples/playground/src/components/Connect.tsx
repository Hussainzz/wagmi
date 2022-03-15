import * as React from 'react'
import { useConnect } from 'wagmi'

import { useIsMounted } from '../hooks'

export const Connect = () => {
  const isMounted = useIsMounted()
  const { activeConnector, connectors, connector, connect, status, error } =
    useConnect()

  return (
    <div>
      {typeof window !== 'undefined' && activeConnector?.name && (
        <div>Connected to {activeConnector.name}</div>
      )}
      <div>
        {connectors.map((x) => (
          <button
            disabled={isMounted && !x.ready}
            key={x.name}
            onClick={() => connect(x)}
          >
            {x.id === 'injected' ? (isMounted ? x.name : x.id) : x.name}
            {isMounted && !x.ready && ' (unsupported)'}
            {status === 'connecting' && x.name === connector?.name && '…'}
          </button>
        ))}
      </div>
      <div>{error && (error?.message ?? 'Failed to connect')}</div>
    </div>
  )
}
