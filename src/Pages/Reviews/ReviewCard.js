import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { AiFillStar } from "react-icons/ai";


const ReviewCard = ({ review }) => {
    const { user } = useContext(AuthContext)
    const { description, rating } = review;
    return (
        <div>
            <div className="card w-96 bg-slate-600 shadow-xl">
                <div className="card-body">
                    <div className='flex'>
                        <img className='w-10 h-10 rounded-full mr-2' src={user?.photoURL} alt=""></img>
                        <h2 className="card-title">{user?.displayName}</h2>
                    </div>
                    <p className='flex'>Rating: {rating}<span className='my-auto'><AiFillStar className='text-warning text-lg'></AiFillStar></span></p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;