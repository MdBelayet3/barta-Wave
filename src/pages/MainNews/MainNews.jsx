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
            <p className='text-xl font-semibold'>Dragon News Home : {news.length}</p>
            <div>
                {
                    news.splice(1,2).map(news => <AllNews news={news}></AllNews>)
                }
            </div>
        </div>
    );
};

export default MainNews;
