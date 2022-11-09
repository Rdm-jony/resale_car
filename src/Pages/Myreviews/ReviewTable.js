import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { toast } from 'react-hot-toast';

const ReviewTable = ({ review,setDependency,dependency }) => {
    const { rating, img, title, name,_id} = review;

    const handleDelete=id=>{
        const agree=window.confirm("Are you sure to delet?")
        if(agree){
            fetch(`http://localhost:5000/my-review/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount===1){
                    toast.success('successfully deleted')
                    setDependency(!dependency)
                }
            })
            .catch(er=>console.log(er))

            
        }
    }
    return (

        <tr className='border-2'>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td className=''><span className='flex'>{rating}<AiFillStar className='my-auto text-warning'></AiFillStar></span> 
            </td>
            <td>
                <BiEditAlt className='cursor-pointer'></BiEditAlt>
            </td>
            <td>
                <BsTrash onClick={()=>handleDelete(_id)} className='cursor-pointer'></BsTrash>
            </td>
        </tr>

    );
};

export default ReviewTable;