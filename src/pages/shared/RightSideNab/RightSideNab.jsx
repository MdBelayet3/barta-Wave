import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/swimming.png'
import qZone2 from '../../../assets/class.png'
import qZone3 from '../../../assets/playground.png'

const RightSideNab = () => {
    return (
        <div className='p-5 space-y-8'>
            {/* Login section */}
            <div className=' space-y-4'>
                <h2 className='text-xl font-extrabold'>Login With</h2>
                <button className='btn btn-outline w-full'><FaGoogle></FaGoogle> <span>Login With Google</span></button>
                <button className='btn btn-outline w-full'><FaGithub></FaGithub> <span>Login With Github</span></button>
            </div>
            {/* Find us section */}
            <div className=''>
                <h2 className='font-semibold text-xl mb-5'>Find Us On</h2>
                <a className='flex items-center gap-3 p-4 border rounded-t-lg' href=""><FaFacebook className='text-blue-500 text-2xl'></FaFacebook> Facebook</a>
                <a className='flex items-center gap-3 p-4 border-x' href=""><FaTwitter className='text-blue-500 text-2xl'></FaTwitter> Twitter</a>
                <a className='flex items-center gap-3 p-4 border rounded-b-lg' href=""><FaInstagram className='text-[#ED4F4D] text-2xl'></FaInstagram> Instagram</a>
            </div>
            {/* Q Zone */}
            <div className='space-y-5 p-4 bg-[#F3F3F3] rounded-md'>
                <h2 className='text-xl font-semibold'>Q-Zone</h2>
                <img src={qZone1} alt="Swimming Photo" />
                <img src={qZone2} alt="Class Photo" />
                <img src={qZone3} alt="Play ground Photo" />
            </div>
        </div>
    );
};

export default RightSideNab;