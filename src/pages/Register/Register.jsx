import React, { useContext, useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    // useContext
    const [eyeShow, setEyeShow] = useState(false)
    const { createUser } = useContext(AuthContext);

    // handle login function
    const handleRegister = e => {
        e.preventDefault();

        // to get input data
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero mt-10 bg-base-200">
                <div className="hero-content">
                    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
                        <h2 className='text-4xl font-semibold text-center mt-3'>Please Register</h2>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                    <input name='password' type={eyeShow ? 'text' : 'password'} placeholder="password" className="input w-full input-bordered" required />
                                    <div onClick={() => setEyeShow(!eyeShow)} className='absolute bottom-[30%] right-[10%]'>
                                        {
                                            eyeShow ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </div>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='font-semibold mt-3'>Already Have An Account ? <Link to="/login" className='text-blue-500 font-bold'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
