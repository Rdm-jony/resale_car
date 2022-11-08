import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const[services,setServices]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <h2>Services:{services.length}</h2>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    services?.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <button className="btn btn-accent mx-auto">View ALL</button>

        </div>
    );
};

export default Services;