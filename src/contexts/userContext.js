import { createContext, useState } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [menu, setMenu] = useState(false)

  return (
    <UserContext.Provider value={{menu,setMenu}}>
      {children}
    </UserContext.Provider>
  )
}
