import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from 'react-router';

const AllNews = ({ news }) => {
    console.log(news)
    const { _id, title, author, image_url, details } = news;
    return (
        <div className='space-y-5 mt-5'>
            {/* card head */}
            <div className='flex items-center justify-between p-5 bg-[#F3F3F3] rounded-t-md'>
                <div className='flex gap-4'>
                    <img className='h-12 w-12 rounded-full' src={author?.img} alt="" />
                    <div>
                        <p className='font-semibold'>{author?.name}</p>
                        <p className='text-[#706F6F]'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <span className='flex text-3xl text-[#706F6F]'><CiBookmark /> <CiShare2 /></span>
                </div>
            </div>
            {/* card body */}
            <div className='space-y-5'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <img className='' src={image_url} alt="" />
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link
                     className='text-blue-500 font-bold'
                     to={`/news/${_id}`}
                     >Reed More</Link></p> : <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default AllNews;
