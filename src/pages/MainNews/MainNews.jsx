import React, { useEffect, useState } from 'react';
import AllNews from './AllNews';

const MainNews = () => {

    // useState and useEffect for loading data
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <p className='text-xl font-semibold'>Dragon News Home</p>
            <div className='mt-5 pl-3'>
                {
                    news.splice(1,5).map(news => <AllNews key={news._id} news={news}></AllNews>)
                }
            </div>
        </div>
    );
};

export default MainNews;
