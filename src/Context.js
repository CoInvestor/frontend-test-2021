import React, { createContext, useState } from 'react';

export const Context = createContext();

//using context to share state and functions that are used by two or more child components
const ContextProvider = ({ children }) => {
    const [userProfileData, setUserProfileData] = useState(null);

    //removing parts of string from api that aren't the actual phone number
    const formatPhoneNumber = (string) => {
        return string.split(' ')[0];
    }

    return (
        <Context.Provider value={{ userProfileData, setUserProfileData, formatPhoneNumber }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;