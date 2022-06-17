import { createContext, useState } from 'react';

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
  const auth = localStorage.getItem('auth');
  const parsedCurrentUser = auth ? JSON.parse(auth) : null;
  const [currentUser, setCurrentUser] = useState(parsedCurrentUser);

  return (
    <AuthContext.Provider value={{
      currentUser,
      setCurrentUser
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

