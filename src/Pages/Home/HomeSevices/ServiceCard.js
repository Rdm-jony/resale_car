import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, description,_id} = service;
    return (

        <div className='border-2 rounded-xl'>
            <div className="card  glass">
                <div>
                    <PhotoProvider>
                        <PhotoView  src={img}>
                            <figure><img className='w-full h-60' src={img} alt="car!" /></figure>

                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="card-body h-60">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {
                            description.length > 100 ? `${description.slice(0, 100)}...` : description
                        }
                    </p>
                    <div className="card-actions justify-between">
                        <p className='font-semibold text-warning'>Price: {price}<small>/night</small></p>
                        <Link to={`../../../services/${_id}`}>
                        <button className="btn btn-primary">View Details <AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;