import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='lg:max-w-7xl container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;