import React, { useContext, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddReview = () => {

    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageURL, setIMageURL] = useState(null);
    const history = useHistory();  

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
   
    const onSubmit = (data, e) => {
        const reviewData = {
            userName: data.userName,
            description: data.description,
            photoURL: imageURL
        }

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers:    { 'Content-Type': 'application/json' },
            body:   JSON.stringify(reviewData)
        })
        .then(res => res.json())
        // .then(res => console.log(res))
        setIMageURL(null);
        history.push('/addreview');

    }


    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>


            <div className="col-md-8 col-sm-12 col-12" >
                <h2 className='d-flex justify-content-center text-brand mt-3'>Add Review</h2>

                <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="userName" placeholder='Your Name' className="form-control"  />
                        {errors.name && <span className="text-danger">Service Name is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="description" placeholder='Description of Review' className="form-control" />
                        {errors.email && <span className="text-danger">Description is required</span>}
                    </div>

                                      
                    <br/>

                    <span>Your Image</span> <br/>
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

export default AddReview;