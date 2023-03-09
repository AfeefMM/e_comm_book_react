import React, {useContext,createContext,useEffect, useState} from 'react'

const AuthContext = React.createContext({
    auth: null,
    setAuth: () => {},
    user: null,
})


export function AuthProvider ({children, value}) {

    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}