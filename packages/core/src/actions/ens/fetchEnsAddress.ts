import { getAddress } from 'ethers/lib/utils'

import { client } from '../../client'

export type FetchEnsAddressArgs = {
  /** ENS name to resolve */
  name: string
}

export type FetchEnsAddressResult = string | null

export async function fetchEnsAddress({
  name,
}: FetchEnsAddressArgs): Promise<FetchEnsAddressResult> {
  const address = await client.provider.resolveName(name)

  let checksumAddress: FetchEnsAddressResult
  try {
    checksumAddress = address ? getAddress(address) : null
  } catch (_error) {
    checksumAddress = null
  }

  return checksumAddress
}
