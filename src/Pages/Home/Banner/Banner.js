import React from 'react';
import img from '../../../assets/banner.webp'
import './Banner.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
    return (
        <div className='img-overlay relative block'>
            <img className='w-full h-screen' src={img} alt=''></img>
            <div className='absolute top-1/3 z-10 w-full'>
                <h1 class="text-6xl text-center text-slate-300">Enjoy a Luxury Experience</h1>
                <p className='w-2/3 mx-auto my-7 text-lg'>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane</p>
                <div className='flex'>
                    <button className="btn btn-outline btn-accent  mx-auto">Services <AiOutlineArrowRight></AiOutlineArrowRight></button>

                </div>
            </div>
        </div>
    );
};

export default Banner;