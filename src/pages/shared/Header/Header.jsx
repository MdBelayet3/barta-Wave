import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='lg:flex lg:justify-center'>
                <img  src="/src/assets/logo.png" alt="" />
            </div>
            <h2 className='text-center text-lg my-3 text-[#706F6F]'>Journalism Without Fear or Favour</h2>
        </div>
    );
};

export default Header;