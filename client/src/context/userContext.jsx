import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const value = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};