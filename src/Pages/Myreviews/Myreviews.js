import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const Myreviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [dependency,setDependency]=useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/my-review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(er => console.log(er))
    }, [dependency,user])
    return (
        <div>
            <p>my reviews:{reviews?.length}</p>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review=><ReviewTable key={review._id} review={review} dependency={dependency} setDependency={setDependency}></ReviewTable>)
                            }
                            
                        </tbody>
                        {/* <!-- foot --> */}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myreviews;