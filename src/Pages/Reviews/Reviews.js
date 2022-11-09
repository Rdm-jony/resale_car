import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const Reviews = ({ service }) => {
    const { _id, title } = service;
    console.log(_id)
    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])
    const [dependency, setDependency] = useState(true)

    const handleAddReview = event => {
        event.preventDefault()
        const form = event.target;
        const description = form.description.value;
        const rating = form.rating.value;
        const time = new Date().toLocaleString()
        const currentUser = {
            email: user?.email,
            name: user?.displayName,
            title,
            id: _id,
            description,
            rating,
            img: user.photoURL,
            time
        }

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("successfully added")
                    setDependency(!dependency)
                }
            })
            .catch(er => console.log(er))

        form.reset()

    }

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(er => console.log(er))
    }, [_id, dependency])

    return (
        <div className='border-2 sticky top-0'>
            <div>
                <h2 className='text-3xl text-warning my-7 text-center'>Reviews & Ratings</h2>
                <div className='grid grid-cols-4'>
                    <div className='col-span-3 grid grid-cols-2'>
                        {
                            reviews?.map(review => <ReviewCard review={review}></ReviewCard>)
                        }
                    </div>
                    {
                        user ? <form className='p-3 rounded-md bg-slate-800 h-64 sticky top-0' onSubmit={handleAddReview}>

                            <textarea name='description' className="textarea w-full textarea-bordered my-3 bg-slate-600" placeholder="Description" required></textarea>

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
                        </form> :
                            <h2>Please log in to add comment....
                                <Link className='font-semibold text-accent' to="../sign-in">
                                    Log in
                                </Link>
                            </h2>
                    }

                </div>
            </div>
        </div>
    );
};

export default Reviews;