import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ServiceCard from '../Home/HomeSevices/ServiceCard';
import Loader from '../Loader/Loader';

const Services = () => {
    const{loader}=useContext(AuthContext)
    const services = useLoaderData();
    return (
        <div className='my-20'>
            <h2 className='text-4xl font-semibold text-center'>Services</h2>
            <p className='w-2/3 mx-auto text-center my-5'>Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.Com, The Biggest Travel Site In The World. We speak your language. 24/7 Customer Service. Read Real Guest Reviews. Save 10% with Genius.</p>
            <>
                {
                    !loader?<div className='grid grid-cols-3 gap-6'>
                    {
                        services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                :
                <div className='flex justify-center'>
                    <Loader></Loader>
                </div>
                }
            </>
        </div>
    );
};

export default Services;