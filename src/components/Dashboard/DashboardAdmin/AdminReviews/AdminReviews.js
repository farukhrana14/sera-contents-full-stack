import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './AdminReviews.css';




const AdminReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [deleteState, setDeleteState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [deleteState])

    console.log(reviews);

    const handleDelete =(id)=>{
        console.log('clientSide', id);
        fetch(`http://localhost:5000/delreview?id=${id}`, {
            method: 'POST',
            headers:    {'Content-Type': 'application/json'},
            body:   JSON.stringify() 
            
        })
        .then(res => res.json())
        .then(data => {data && setDeleteState(data)})
        
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-9 col-sm-6 col-12">
                <h3 className='d-flex justify-content-center text-brand mt-3'>All Reviews and Delete </h3>

                <div className="products-table">
                    <table className='mb-3 table table-striped' style={{margin: 'auto', maxWidth: '850px'}}>
                        <tbody>
                            <tr className="table-header" style={{border: '1px solid gray'}}>
                                <th style={{width: '150px'}} className="name-column">Name</th>
                                <th className="text-center">Description</th>
                                <th style={{width: '80px'}} className="action-column text-center">Delete</th>
                            </tr>
                            {

                                reviews && reviews.map(review =>
                                    <tr key={review._id} style={{border: '1px solid gray'}}>
                                        <td className="px-3">{review.userName}</td>
                                        <td>{review.description}</td>
                                        <td><FontAwesomeIcon onClick={() => handleDelete(review._id)} className="trash-svg mx-5" color="#DC143C" size='2x' icon={faTrashAlt} /> </td>
                                    </tr>
                                )

                            }


                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AdminReviews;