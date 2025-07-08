import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

// create context
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    
    // function for create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // function for user login
    const loginWithEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // function for LogOut
    const logOut = () =>{
        return signOut(auth)
    }

    // useEffect for user observer by using onAuthStateChange
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('User in the On auth state Change', currentUser)
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user, 
        createUser,
        loginWithEmail,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
