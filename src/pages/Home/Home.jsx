import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNab from '../shared/LeftSideNab/LeftSideNab';
import MainNews from '../MainNews/MainNews';
import RightSideNab from '../shared/RightSideNab/RightSideNab';

const Home = () => {
    return (
        <div>
            <h2 className="text-3xl font-poppins font-bold">This is home</h2>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='border'>
                    <LeftSideNab></LeftSideNab>
                </div>
                <div className='col-span-2 border'>
                    <MainNews></MainNews>
                </div>
                <div className='border'>
                    <RightSideNab></RightSideNab>
                </div>
            </div>
        </div>
    );
};

export default Home;
