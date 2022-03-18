import * as React from 'react'
import {
  WriteContractArgs,
  WriteContractConfig,
  WriteContractResult,
  writeContract,
} from '@wagmi/core'
import { useMutation } from 'react-query'

import { MutationConfig } from '../../types'

export type UseContractWriteArgs = Partial<WriteContractConfig>

export type UseContractWriteConfig = MutationConfig<
  WriteContractResult,
  Error,
  UseContractWriteArgs
>

export const mutationKey = ([
  contractConfig,
  functionName,
  { args, overrides },
]: [WriteContractArgs, string, Partial<WriteContractConfig>]) =>
  [
    {
      entity: 'writeContract',
      args,
      contractConfig,
      functionName,
      overrides,
    },
  ] as const

const mutationFn =
  ([contractConfig, functionName]: [WriteContractArgs, string]) =>
  (args: UseContractWriteArgs): Promise<WriteContractResult> => {
    return writeContract(contractConfig, functionName, args)
  }

export function useContractWrite(
  contractConfig: WriteContractArgs,
  functionName: string,
  {
    args,
    overrides,
    onError,
    onMutate,
    onSettled,
    onSuccess,
  }: UseContractWriteArgs & UseContractWriteConfig = {},
) {
  const { mutate, mutateAsync, ...writeContractMutation } = useMutation(
    mutationKey([contractConfig, functionName, { args, overrides }]),
    mutationFn([contractConfig, functionName]),
    {
      onError,
      onMutate,
      onSettled,
      onSuccess,
    },
  )

  const write = React.useCallback(
    (overrideConfig?: WriteContractConfig) =>
      mutate(<WriteContractConfig>overrideConfig || { args, overrides }),
    [args, mutate, overrides],
  )

  const writeAsync = React.useCallback(
    (overrideConfig?: WriteContractConfig) =>
      mutateAsync(<WriteContractConfig>overrideConfig || { args, overrides }),
    [args, mutateAsync, overrides],
  )

  return {
    ...writeContractMutation,
    writeAsync,
    write,
  }
}
