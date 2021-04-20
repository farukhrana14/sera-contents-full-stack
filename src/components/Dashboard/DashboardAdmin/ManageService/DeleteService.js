import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const DeleteService = () => {
    const [services, setServices] = useState([]);
    const [deleteState, setDeleteState] = useState([]);

    useEffect(() => {
        fetch('https://ancient-coast-73356.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [deleteState])

    console.log(services);

    const handleDelete =(id)=>{
        console.log('clientSide', id);
        fetch(`https://ancient-coast-73356.herokuapp.com/delservice?id=${id}`, {
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
                <h3 className='d-flex justify-content-center text-brand mt-3'>Remove Products </h3>

                <div className="products-table">
                    <table style={{margin: 'auto', width: '850px'}}>
                        <tbody>
                            <tr className="table-header">
                                <th className="name-column">Name</th>
                                <th className="mx-5 px-3">Description</th>
                                <th className="mx-3" style={{width: '100px'}}>Price</th>
                                <th className="action-column">Delete</th>
                            </tr>
                            {

                                services && services.map(service =>
                                    <tr key={service._id}>
                                        <td>{service.name}</td>
                                        <td>{service.description}</td>
                                        <td className="price-column"> <span>$</span> {service.price}</td>
                                        <td><FontAwesomeIcon onClick={() => handleDelete(service._id)} className="trash-svg" color="#DC143C" size='2x' icon={faTrashAlt} /> </td>
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

export default DeleteService; <h1>ManageService</h1>