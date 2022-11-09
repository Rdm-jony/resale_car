import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then()
        .then()
    }
    return (
        <div>
            <div className="navbar bg-slate-300 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="home">Item 1</Link></li>
                            <li><Link to="sign-up">Item 1</Link></li>

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="home">Item 1</Link></li>
                        <li><Link to="sign-up">Item 1</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?

                            <div className="dropdown dropdown-bottom dropdown-end">
                                <img tabIndex={0} className='w-10 h-10 rounded-full border-primary border-2' src={user.photoURL} alt=""></img>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                                    <button onClick={handleLogOut} className='btn btn-active btn-accent text-white py-1 px-5'>log out</button>
                                </ul>
                            </div>
                            :
                            <>
                                <button className='btn btn-ghost'>log in</button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;