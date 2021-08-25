import { useContext, useState, createContext } from 'react'
import { useFetch } from './useFetch'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')
  const { loading, data, error } = useFetch(`&s=${query}`)
  return (
    <AppContext.Provider value={{ loading, setQuery, query, error, data }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
