import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <h2 className="text-3xl font-poppins font-bold">This is home</h2>
            <Header></Header>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;