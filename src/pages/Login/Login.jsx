import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Link } from 'react-router';

const Login = () => {
    // handle login function
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero mt-10 bg-base-200">
                <div className="hero-content">
                    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
                        <h2 className='text-4xl font-semibold text-center mt-3'>Please Login</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='font-semibold mt-3'>Do not Have An Account ? <Link to="/register" className='text-blue-500 font-bold'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
