import * as Exports from './'

it('should expose correct exports', () => {
  expect(Object.keys(Exports)).toMatchInlineSnapshot(`
    [
      "connect",
      "disconnect",
      "fetchBalance",
      "fetchBlockNumber",
      "fetchEnsAddress",
      "fetchEnsAvatar",
      "fetchEnsName",
      "fetchEnsResolver",
      "fetchFeeData",
      "fetchSigner",
      "fetchToken",
      "getAccount",
      "getContract",
      "getNetwork",
      "getProvider",
      "getWebSocketProvider",
      "readContract",
      "sendTransaction",
      "signMessage",
      "signTypedData",
      "switchNetwork",
      "waitForTransaction",
      "watchAccount",
      "watchBalance",
      "watchBlockNumber",
      "watchContractEvent",
      "watchEnsAddress",
      "watchEnsAvatar",
      "watchEnsName",
      "watchEnsResolver",
      "watchFeeData",
      "watchNetwork",
      "watchReadContract",
      "watchSigner",
      "watchToken",
      "writeContract",
      "createClient",
      "createWagmiClient",
      "Client",
      "WagmiClient",
      "Connector",
      "InjectedConnector",
      "allChains",
      "chain",
      "defaultChains",
      "erc1155ABI",
      "erc20ABI",
      "erc721ABI",
      "units",
      "AddChainError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "SwitchChainError",
      "SwitchChainNotSupportedError",
      "UserRejectedRequestError",
      "createStorage",
      "createWagmiStorage",
      "normalizeChainId",
    ]
  `)
})
