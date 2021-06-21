import React from 'react';
import './ServicesDetail.css'
const ServiceDetail = ({ service }) => {
    return (
        <div className = "col-md-4 col-sm-12 text-center service-info rounded shadow pb-4" >
            <div>
              <img className="mt-2 ml-2 w-100" style={{height: '200px'}} src={service.img} alt="" />
              <h5 className="mt-3 mb-3">{service.name}</h5>
              <h5 className="mt-3 mb-3">${service.price}</h5>
               <button className="btn btn-danger">Buy Service</button>
            </div>
        </div>
    );
};

export default ServiceDetail;