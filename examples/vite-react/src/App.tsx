import { useAccount, useConnect } from 'wagmi'

export const App = () => {
  const account = useAccount({ fetchEns: true })
  // console.log(account)

  const connect = useConnect()
  const connect2 = useConnect()
  // console.log({ connect, connect2 })
  // console.log(connect)

  if (account.data?.address)
    return (
      <div>
        <div>{account.data.address}</div>
        <button onClick={account.disconnect}>disconnect</button>
      </div>
    )

  return (
    <div>
      {account.data?.address}
      <div>
        <h3>connect 1</h3>
        <div>
          {connect.connectors.map((x) => (
            <button
              disabled={!x.ready || connect.isConnecting}
              key={x.name}
              onClick={() => connect.connect(x)}
            >
              {x.name}
              {connect.isConnecting && x.id === connect.connector?.id && '…'}
            </button>
          ))}
        </div>
        <div>
          {connect.error && (connect.error?.message ?? 'Failed to connect')}
        </div>
      </div>

      <div>
        <h3>connect 2</h3>
        <div>
          {connect2.connectors.map((x) => (
            <button
              disabled={!x.ready || connect2.isConnecting}
              key={x.name}
              onClick={() => connect2.connect(x)}
            >
              {x.name}
              {connect2.isConnecting && x.id === connect2.connector?.id && '…'}
            </button>
          ))}
        </div>
        <div>
          {connect2.error && (connect2.error?.message ?? 'Failed to connect')}
        </div>
      </div>
    </div>
  )
}
