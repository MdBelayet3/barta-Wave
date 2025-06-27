import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='lg:max-w-7xl max-w-96 container mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;