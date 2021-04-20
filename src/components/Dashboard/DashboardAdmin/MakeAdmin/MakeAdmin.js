import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';

// style={{display: shippingData ? 'none' : 'block'}}

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminData, setAdminData] = useState({});

    const onSubmit = (data, event) => {
        
        setAdminData(data);
        // console.log(data);
        console.log(adminData);


        if (adminData.length !== 0) {
            fetch('http://localhost:5000/makeadmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(adminData)
            })
                .then(res => res.json())
                .then(resData => {
                    if (resData) {
                        console.log(resData);
                        alert('Admin is set successfully.')
                        // setAdminData({});
                        // window.location.reload();
                        event.target.reset();
                    }
                })
        }

    };

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>


            <div className="col-md-8 col-sm-12 col-12" >
                <h2 className='d-flex justify-content-center text-brand mt-3'>Make An Admin</h2>

                <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder='Name' className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder='Email' className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>


                    <div className="form-group text-right">
                        <input type="submit" defaultValue='Make Admin' className="btn btn-primary"></input>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default MakeAdmin;