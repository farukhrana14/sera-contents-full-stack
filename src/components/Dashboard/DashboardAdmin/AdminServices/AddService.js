import React, { useContext, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {
    
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    const handleImageUpload = (event) => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'd136f1b08c3a19d44bcad67e010bd23c');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // console.log(imageURL);
    const onSubmit = (data, e) => {
        const serviceData = {
            name: data.serviceTitle,
            description: data.description,
            price: data.price,
            photoURL: imageURL
        }

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers:    { 'Content-Type': 'application/json' },
            body:   JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        setIMageURL(null);
        e.target.reset();
    };


    



    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>


            <div className="col-md-8 col-sm-12 col-12" >
                <h2 className='d-flex justify-content-center text-brand mt-3'>Add Service</h2>

                <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceTitle" placeholder='Name of Service' className="form-control" />
                        {errors.name && <span className="text-danger"> Name is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="description" placeholder='Description of Service' className="form-control" />
                        {errors.email && <span className="text-danger">Description is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="price" placeholder='Price of Service' className="form-control" />
                        {errors.email && <span className="text-danger">Price is required</span>}
                    </div>

                    <span>Image of Service</span> <br/>
                    <input name="inputFile" type="file" onChange={handleImageUpload} ref={register({ required: true })} />
                        {errors.name && <span className="error">Image is required</span>}
                    <br/>

                    <div className="form-group text-right">
                    {
                       imageURL && <input type="submit" className="btn btn-primary"></input>
                    }
                    </div>
                
                </form>
            </div>


        </div>
    );
};

export default AddService;