import React, { createContext } from 'react';

// create context
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;