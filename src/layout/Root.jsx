import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='lg:max-w-7xl container mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;