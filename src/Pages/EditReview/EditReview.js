import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
    const router = useParams()
    const id = router.id;
    const userReview = useLoaderData()
    const find = userReview.filter(user => user._id === id)
    const data = find[0];
    const navigate=useNavigate()

    const [updateDescription, setUpdateDescription] = useState(data.description)
    const [updateRating, setUpdateRating] = useState(data.rating)



    const handleChangeDescription = (event) => {
        event.preventDefault()
        const description = event.target.value;
        setUpdateDescription(description)
    }

    const changeRating = event => {
        event.preventDefault()
        const rating = event.target.value;
        setUpdateRating(rating)

    }

    // update onclick
    const handleUpdate = (event) => {
        event.preventDefault()
        const updatetValue = {
            updateDescription,
            updateRating
        }
        console.log(updatetValue)

        fetch(`http://localhost:5000/my-review/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatetValue)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success("succefully updated!")
                navigate("/my-reviews")
            }
        })
        .catch(er=>console.log(er))
    }

    return (
        <div>
            <form onSubmit={handleUpdate} className='p-3 rounded-md bg-slate-800 h-64 sticky top-0'>

                <textarea onChange={handleChangeDescription} defaultValue={data?.description} name='description' className="textarea w-full textarea-bordered my-3 bg-slate-600" placeholder="Description" required></textarea>

                <p>Ratings:
                    <select onChange={changeRating} className='ml-2' defaultValue={data?.rating} name='rating'>
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
    );
};

export default EditReview;