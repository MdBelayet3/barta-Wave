import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';

const NewsLatest = () => {
    return (
        <div>
            <div className='flex my-4 bg-[#F3F3F3] p-4 rounded-lg'>
                <button className="btn btn-secondary">Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link className='mr-4' to={""}>Bangladesh Women's Cricket Team Gears Up for T20 Series.....
                    </Link>
                    <Link className='mr-4' to={""}>I can be a React component, multiple React components, or just some text.....
                    </Link>
                    <Link className='mr-4' to={""}>Popular Bangladeshi Drama Series Finale Airs Tonight, Fans Eager for Conclusion...
                    </Link>
                    <Link className='mr-4' to={""}>I can be a React component, multiple React components, or just some text....
                    </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default NewsLatest;