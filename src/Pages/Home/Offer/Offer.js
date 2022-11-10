import React from 'react';
import img1 from '../../../assets/offer/guest1.jpg.webp'
import img2 from '../../../assets/offer/guest2.jpg.webp'
import img3 from '../../../assets/offer/guest3.jpg.webp'

const Offer = () => {

    return (
        <div className='my-10'>
            <h2 className='text-3xl font-semibold text-warning text-center my-10'>Our Offer</h2>
            <div className='grid grid-cols-3 gap-4'>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Free Drinks</h2>
                        <p>The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body flex justify-center">
                        <h2 className="card-title">Free BreakFast</h2>
                        <p>The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Free Dinner</h2>
                        <p>The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Offer;