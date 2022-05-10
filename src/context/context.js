import React, { useState, useContext, createContext } from "react"

const GatsbyContext = createContext()

const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <GatsbyContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(GatsbyContext)
}
export default ContextProvider
