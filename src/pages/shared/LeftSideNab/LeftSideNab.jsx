import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const LeftSideNab = () => {

    // useState and useEffect use for loading data
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='space-y-6 sm-p-5'>
            <p className='text-xl font-semibold'>All Category</p>
            {
                categories.map(category => <Link 
                    className='block hover:bg-[#E7E7E7] py-2 text-xl text-[#9F9F9F] font-semibold  rounded-lg px-10'
                    to={`/category/${category.id}`}><button className=' hover:text-black'>{category.name}</button></Link>)
            }
        </div>
    );
};

export default LeftSideNab;
