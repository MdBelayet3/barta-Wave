import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='sm:p-5 lg:max-w-7xl max-w-96 container lg:mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
