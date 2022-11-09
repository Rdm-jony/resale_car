import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const Reviews = ({id}) => {
    const {_id}=id;
    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])
    const [dependency, setDependency] = useState(true)

    const handleAddReview = event => {
        event.preventDefault()
        const form = event.target;
        const description = form.description.value;
        const rating = form.rating.value;
        const currentUser = {
            email: user?.email,
            name: user?.displayName,
            id: _id,
            description,
            rating
        }

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                
            })
            .catch(er => console.log(er))
            setDependency(!dependency)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(er => console.log(er))
    }, [_id,dependency])
    console.log(dependency)
    return (
        <div>
            <div>
                <h2 className='text-3xl text-warning my-7 text-center'>Reviews & Ratings</h2>
                <div className='grid grid-cols-4'>
                    <div className='col-span-3 grid grid-cols-2'>
                        {
                            reviews?.map(review=><ReviewCard review={review}></ReviewCard>)
                        }
                    </div>
                    <form className='mr-3' onSubmit={handleAddReview}>

                        <textarea name='description' className="textarea w-full textarea-bordered my-3" placeholder="Description"></textarea>

                        <p>Ratings:
                            <select className='ml-2' defaultValue="3" name='rating'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <div className='flex justify-center'>
                            <button className="btn btn-outline btn-accent">Add</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Reviews;