import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';
import './BookingList.css';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-river-81170.herokuapp.com/showordersbyemail', {
            method: 'POST',
            headers:    { 'Content-Type': 'application/json' },
            body:   JSON.stringify({email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrders(data);
            })
    }, [])

    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }



    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12 mx--5">
                <Sidebar />
            </div>
            <div className=" booking-table table table-striped col-md-10 col-sm-12 col-12 mb-5 " style={{ margin: 'auto', maxWidth: '850px' }}>
                <h3 className='text-center text-brand mt-3'>Booking List</h3>


                <table className='bookingTable border border-success mt-5 pt-5' style={{ tableLayout: 'auto', width: '800px', alignSelf: 'center' }}>
                    <thead>
                        <tr className='border border-success' >
                            <th className="text-secondary" scope="col">Serial</th>
                            <th className="text-secondary" scope="col">Date</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Card</th>
                            <th className="text-secondary" scope="col">Status</th>
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
                                    <td>{order.status}</td>


                                </tr>

                            )

                        }

                    </tbody>

                </table>
            </div>




        </div>
    );
};

export default BookingList;