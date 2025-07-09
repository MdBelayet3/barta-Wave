import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNab from '../shared/RightSideNab/RightSideNab';

const News = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <p>news details</p>
                    <button  className='btn btn-secondary'>Latest News</button></div>
                <RightSideNab></RightSideNab>
            </div>
        </div>
    );
};

export default News;
