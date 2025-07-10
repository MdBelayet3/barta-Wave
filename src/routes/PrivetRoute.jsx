import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {

    const location = useLocation();
    console.log(location);
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(user){
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;