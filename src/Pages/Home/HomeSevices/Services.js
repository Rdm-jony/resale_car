import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-20'>
            <h2 className='text-4xl font-semibold text-center'>Services</h2>
            <p className='w-2/3 mx-auto text-center my-5'>Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.Com, The Biggest Travel Site In The World. We speak your language. 24/7 Customer Service. Read Real Guest Reviews. Save 10% with Genius.</p>
            <div className='grid grid-cols-3 gap-4 my-7'>
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to="../services">
                    <button className="btn btn-accent mx-auto">View ALL</button>
                </Link>
            </div>

        </div>
    );
};

export default Services;