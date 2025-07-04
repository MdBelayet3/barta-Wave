import React from 'react';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import NewsLatest from '../../Home/NewsLatest';

const Header = () => {
    return (
        <div>
            <div className='lg:flex lg:justify-center'>
                <img src="/src/assets/logo.png" alt="News channel name" />
            </div>
            <h2 className='text-center text-lg lg:my-3 text-[#706F6F]'>Journalism Without Fear or Favour</h2>
            <p className=' text-[#706F6F] text-xl text-center'>{moment().format('dddd, MMMM DD, YYYY')}</p>
            <NewsLatest></NewsLatest>
        </div>
    );
};

export default Header;
