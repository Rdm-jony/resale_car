import React from 'react';
import toast from 'react-hot-toast';

const Addservice = () => {

    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;
        const capacity = form.capacity.value;
        const spft = form.spft.value;
        const time=new Date().toLocaleString();
        console.log(title, img, description, price, capacity, spft)
        const service = {
            title,
            img,
            description,
            price,
            capacity,
            time,
            spft
        }

        fetch("http://localhost:5000/all-services",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success("successfully added the service!")
            }
            form.reset()
        })
        .catch(er=>console.log(er))
    }
    return (
        <div className='flex justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleAddService} className="card-body">
                    <div className="form-control">
                        <input name='title' type="text" placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='img' type="text" placeholder="Image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Description"></textarea>                    </div>
                    <div className="form-control">
                        <input name='price' type="number" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='capacity' type="text" placeholder="Capacity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='spft' type="number" placeholder="Square-feet" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addservice;