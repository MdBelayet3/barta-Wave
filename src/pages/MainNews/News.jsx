import Header from '../shared/Header/Header';
import RightSideNab from '../shared/RightSideNab/RightSideNab';
import { Link, Navigate, useLoaderData, useParams } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';

const News = () => {

    // useLoaderData and useParams
    const allNews = useLoaderData();
    console.log(allNews);
    const { id } = useParams();
    const aNews = allNews.find(aNews => aNews._id === id);
    console.log(aNews);


    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-3'>
                <div className='col-span-2'>
                    <p className='text-xl font-semibold'>News details</p>
                    <div className='space-y-5'>
                        <img className='w-full' src={aNews?.image_url} alt="" />
                        <h2 className='text-2xl font-extrabold'>{aNews?.title}</h2>
                        <p className='text-[#706F6F]'>{aNews?.details}</p>
                        <Link to='/'> <button className='btn btn-secondary mt-6'>Go to Home</button></Link>
                    </div>
                </div>
                <div>
                    <RightSideNab></RightSideNab>
                </div>
            </div>
        </div>
    );
};

export default News;
