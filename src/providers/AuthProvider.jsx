import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from 'react';
import auth from "../firebase/firebase.config";

// create context
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    
    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
<<<<<<< HEAD
        user, createUser
=======
        user, 
        createUser,
>>>>>>> ef84c8e419fe028b67a14b6769146540a8aaf573
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
