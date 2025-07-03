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
            <div className='grid grid-cols-3'>
                <LeftSideNab></LeftSideNab>
                <div className='col-span-2'>
                    <MainNews></MainNews>
                </div>
                <RightSideNab></RightSideNab>
            </div>
        </div>
    );
};

export default Home;
