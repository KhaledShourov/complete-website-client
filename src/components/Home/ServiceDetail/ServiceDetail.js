import React from 'react';
import './ServicesDetail.css'
const ServiceDetail = ({ service }) => {
    return (
        <div div className = "col-md-4 text-center service-info rounded shadow pb-4" >
            <div>
              <img className="mt-2 ml-2 w-100" style={{height: '200px'}} src={service.img} alt="" />
              <h5 className="mt-3 mb-3">{service.name}</h5>
               <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis tempore, magnam quaerat modi tenetur quidem ab. Id nisi temporibus dolorem</p>
               <button className="btn btn-danger">Learn more</button>
            </div>
        </div>
    );
};

export default ServiceDetail;