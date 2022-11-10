import React from 'react';
import img from '../../../assets/about.jpg'

const AboutUs = () => {
    return (
        <div className='flex my-20'>
            <div className='w-1/2'>
                <img className='w-2/3 ml-auto rounded-md shadow-lg' src={img} alt=""></img>
            </div>
            <div className='w-1/2 ml-auto'>
                <h2 className='text-4xl text-center my-5 font-semibold text-warning'>About Us</h2>
                <p className='px-10 text-lg'>
                You're most likely to find deluxe describing a spa, hotel, car, or house. When any of these things is deluxe, it goes beyond the ordinary to provide a superior, luxurious experience. A deluxe home might have thousands of square feet and an in-ground pool, and a deluxe cruise probably includes a large berth and gourmet food. Deluxe comes from the French de luxe, "of luxury," from the Latin luxe, "excess or abundance.</p>
            </div>
        </div>
    );
};

export default AboutUs;