import { useEffect } from "react";
import { createContext, useState } from "react";
import App from "../App";

const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    };
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])
    const logout = () => {
        setUser(null)
        localStorage.removeItem("user");
    }
 
    return (
        <UserContext.Provider value={{user,login,logout}}>
          {children}
        </UserContext.Provider>
    )    
}
export {UserContext,UserProvider}