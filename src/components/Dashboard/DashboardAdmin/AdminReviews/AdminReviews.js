import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';




const AdminReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [deleteState, setDeleteState] = useState([]);

    useEffect(() => {
        fetch('https://sera-contents.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [deleteState])

    console.log(reviews);

    const handleDelete =(id)=>{
        console.log('clientSide', id);
        fetch(`https://sera-contents.herokuapp.com/delreview?id=${id}`, {
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
                    <table style={{margin: 'auto', width: '850px'}}>
                        <tbody>
                            <tr className="table-header">
                                <th className="name-column">Name</th>
                                <th className="mx-5 px-3">Description</th>
                                <th className="action-column">Delete</th>
                            </tr>
                            {

                                reviews && reviews.map(review =>
                                    <tr key={review._id}>
                                        <td>{review.userName}</td>
                                        <td>{review.description}</td>
                                        <td><FontAwesomeIcon onClick={() => handleDelete(review._id)} className="trash-svg" color="#DC143C" size='2x' icon={faTrashAlt} /> </td>
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