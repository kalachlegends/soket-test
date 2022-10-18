import { createContext } from 'react'
export const AuthContext = createContext({
    isAuth: "",
    token: "",
    setAuth: () => { },
    setToken: () => { },
});

