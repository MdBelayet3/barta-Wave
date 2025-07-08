import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNab from '../shared/LeftSideNab/LeftSideNab';
import MainNews from '../MainNews/MainNews';
import RightSideNab from '../shared/RightSideNab/RightSideNab';

const Home = () => {
    return (
        <div className='mt-5'>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-7'>
                <div className=''>
                    <LeftSideNab></LeftSideNab>
                </div>
                <div className='col-span-2'>
                    <MainNews></MainNews>
                </div>
                <div className=''>
                    <RightSideNab></RightSideNab>
                </div>
            </div>
        </div>
    );
};

export default Home;
