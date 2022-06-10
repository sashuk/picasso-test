import { ChangeEvent } from 'react'

import { ValueType, UseSelectProps } from '../../../types'

const useSearchChangeHandler =
  <T extends ValueType, M extends boolean = false>({
    selectState: { setFilterOptionsValue },
  }: UseSelectProps<T, M>) =>
  (event: ChangeEvent<HTMLInputElement>) =>
    setFilterOptionsValue(event.target.value)

export default useSearchChangeHandler
