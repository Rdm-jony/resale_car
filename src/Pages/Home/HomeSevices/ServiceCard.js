import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price,description} = service;
    return (
        <div>
            <div className="card h-80 border-2 bg-base-100 shadow-xl image-full">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {description.length>100?`${description.slice(0,100)}...`:description}
                    </p>
                    <div className="card-actions justify-between">
                        <p className='font-semibold text-warning text-xl'>Price: ${price}<small>/Night</small></p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;