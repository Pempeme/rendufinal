import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null )
    
    const login = async(inputs) => {
       const res =  await axios.post("http://localhost:8800/api/auth/login" , inputs)
       console.log("le login de authContex0",res.data)
       setCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        console.log("logout appelé")
        await axios.post("http://localhost:8800/api/auth/logout", {}, { withCredentials: true });
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user" , JSON.stringify(currentUser))
    }, [currentUser])

    return <AuthContext.Provider value={{currentUser , login  , logout }}>{children}</AuthContext.Provider>
}   