import React from 'react';
import { AiFillStar } from "react-icons/ai";


const ReviewCard = ({ review }) => {
    const { description, rating,time,img,name } = review;
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <p>{time}</p>
                    <div className='flex'>
                        <img className='w-10 h-10 rounded-full mr-2' src={img} alt=""></img>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <p>
                        {
                            [...Array(rating).keys()].map(star=><AiFillStar></AiFillStar>)
                        }
                    </p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;