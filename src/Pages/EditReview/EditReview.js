import React from 'react';

const EditReview = ({id}) => {
   console.log(id)

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='p-3 rounded-md bg-slate-800 h-64 sticky top-0'>

                        <input name='description' className="textarea w-full textarea-bordered my-3 bg-slate-600" placeholder="Description"  required></input>

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

export default EditReview;