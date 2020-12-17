import { useGlobalState } from 'global-context'

export const useCustomHookWithContext = () => {
  const [{searchText}] = useGlobalState()
  return searchText;
}
