import { createContext, useContext } from 'react'

const NextraPageOptsContext = createContext()

export const NextraPageOptsContextProvider = NextraPageOptsContext.Provider

export const usePageOpts = () => {
  return useContext(NextraPageOptsContext)
}
