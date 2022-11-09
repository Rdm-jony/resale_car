import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineUsergroupDelete, AiOutlineWifi, AiOutlinePlusSquare } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { MdEmojiFoodBeverage, MdPool } from "react-icons/md";
import Reviews from '../Reviews/Reviews';


const ServiceDetails = () => {
   
    const service = useLoaderData();
    const { img, title, price, description, capacity, spft, _id } = service;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-warning">{title}</h2>
                    <p>{description}</p>
                    <div className=' grid grid-cols-3 gap-y-7'>
                        <p className='flex'><AiOutlineUsergroupDelete className='text-2xl text-warning
                        '></AiOutlineUsergroupDelete> <span className='text-xl ml-2'>{capacity}{" "}Persons</span></p>
                        <p className='flex'><AiOutlinePlusSquare className='text-2xl text-warning'></AiOutlinePlusSquare> <span className='text-xl ml-2'>{spft}{" "}Sqft</span></p>
                        <p className='flex'><AiOutlineWifi className='text-2xl text-warning'></AiOutlineWifi><span className='text-xl ml-2'>Free Wifi</span></p>
                        <p className='flex'><BiBed className='text-2xl text-warning'></BiBed><span className='text-xl ml-2'>Twin Bed</span></p>
                        <p className='flex'><MdEmojiFoodBeverage className='text-2xl text-warning'></MdEmojiFoodBeverage><span className='text-xl ml-2'>Breakfast</span></p>
                        <p className='flex'><MdPool className='text-2xl text-warning'></MdPool><span className='text-xl ml-2'> S.Fool</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <Reviews id={_id}></Reviews>
        </div>
    );
};

export default ServiceDetails;