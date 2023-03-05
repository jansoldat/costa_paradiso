import { createContext, useContext } from 'react'

export const RootContext = createContext({
  apiUrl: '',
})

export const useRootContext = () => useContext(RootContext)
