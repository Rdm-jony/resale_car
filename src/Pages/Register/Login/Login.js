import React, { useContext } from 'react';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img from '../../../assets/login.svg'
import useTitle from '../../../hooks/useTitle';
import jwt from '../../../jwt/jwt';

const LogIn = () => {
    //update title
    useTitle("signIn")

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const { signInWithEmail, signInWithGoogle, user } = useContext(AuthContext)

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        signInWithEmail(email, password)
            .then(result => {
                console.log(result.user)

                const setUser = {
                    email: result.user.email
                }
                jwt(setUser)
                navigate(from, { replace: true })
            })
            .catch(er => console.log)

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                const setUser = {
                    email: result.user.email
                }
                jwt(setUser)
                // navigate(from, { replace: true })
            })
            .catch(er => console.log(er))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold ">Login now!</h1>
                        <img src={img} alt="" className='mt-5'></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">

                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <span className='font-bold text-purple-600'>Sign in with: </span>
                                <AiFillGooglePlusCircle onClick={handleGoogleSignIn} className='text-orange-600 text-5xl cursor-pointer mx-auto'></AiFillGooglePlusCircle>
                            </div>
                            <small>Not a member?<Link to="../sign-up" className="text-primary font-semibold">sign up</Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;