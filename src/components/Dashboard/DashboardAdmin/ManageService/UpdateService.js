import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';
import Select from 'react-select';
// import './BookingList.css';

const UpdateService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [newStatus, setNewStatus] = useState([null]);
    const [updateDone, setUpdateDone] = useState(false);

    const statusList = [
        {value: 'pending', label: 'Pending'},
        {value: 'inProcess', label: 'In Process'},
        {value: 'complete', label: 'Complete'}
      ]
    
    //   console.log('first value', newStatus);

    const handleStatus = (event) => {
        
        setNewStatus(event.value);
        // console.log(event.value);
    }

    const handleUpdate = (id) => {
        // console.log('clicked:', id);
        const updateData = {id: id, status: newStatus};
        if(newStatus){
            fetch('https://powerful-reef-15346.herokuapp.com/updatestatus', {
                method: 'POST',
                headers:    {'Content-Type': 'application/json'},
                body:   JSON.stringify(updateData)   
            })
            .then(res=> res.json())
            .then(data=> {
                setUpdateDone(data)
                console.log('Updated:', data)
            })    
        }
    }



    useEffect(() => {
        fetch('https://powerful-reef-15346.herokuapp.com/showorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [updateDone])

    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    // console.log(orders);

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12 mx--5">
                <Sidebar />
            </div>
            <div className=" booking-table table table-striped col-md-10 col-sm-12 col-12 mb-5 " style={{ margin: 'auto', maxWidth: '1000px' }}>
                <h3 className='text-center text-brand mt-3'>Booking List</h3>


                <table className='bookingTable border border-success mt-5 pt-5' style={{ tableLayout: 'auto', width: '100%', alignSelf: 'center' }}>
                    <thead>
                        <tr className='border border-success' >
                            <th className="text-secondary" scope="col">Serial</th>
                            <th className="text-secondary"  style={{width: '150px'}} scope="col">Date</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Card</th>
                            <th className="text-secondary" style={{width: '150px'}}scope="col">Status</th>
                            <th className="text-secondary" scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map((order, index) =>

                                <tr key={index} className='border border-success'>
                                    <td className='text-center' >{index + 1}</td>
                                    <td>{formatDate(order.orderTime)}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.service}</td>
                                    <td>{order.price}</td>
                                    <td>{order.card}</td>
                                    <td>
                                        <Select options={statusList} placeholder={order.status} onChange={handleStatus}/>
                                    </td>
                                    <td> <button className='btn btn-danger' onClick={()=>handleUpdate(order._id)} >Update</button> </td>


                                </tr>

                            )

                        }

                    </tbody>

                </table>
            </div>




        </div>
    );
};

export default UpdateService;