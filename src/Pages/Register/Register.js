import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/login.svg'
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { signUpWithEmail,updateNamePhoto } = useContext(AuthContext)
    const navigate=useNavigate()
   
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile={
            displayName:name,
            photoURL:photo
        }
        console.log(name, photo, email, password)
        signUpWithEmail(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(profile)
                form.reset()
                navigate("/")
            })
            .catch(er => console.log(er))

    }

    const updateUserProfile=(profile)=>{
        updateNamePhoto(profile)
        .then()
        .catch()
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold ">Register Now!</h1>
                        <img src={img} alt="" className='mt-5'></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name='photo' type="text" placeholder="photoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                            <small>Already have account?<Link to="../sign-in" className="text-primary font-semibold">sign in</Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;