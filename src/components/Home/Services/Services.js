import React from 'react';
import motherboard from '../../../images/motherboard.jpeg'
import dataRecovery from '../../../images/dataRecovery.jpeg'
import powerSupply from '../../../images/powerSupply.jpeg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [{
    name: 'Motherboard Replace',
    price: 232,
    img: motherboard
  },
  {
    name: 'Data Recovery',
    price:139,
    img: dataRecovery
  },
  {
    name: 'Power Supply',
    price: 89,
    img: powerSupply
  }
]

const Services = () => {
  return (
    <section className="services">
    <div>
      <h2 className= "text-primary mt-5 text-uppercase">Services</h2>
      <p>Hundreds of satisfied customers</p>
       <div className ="d-flex justify-content-center">
        <div className="w-75 row mt-4">
          {
            serviceData.map(service=> <ServiceDetail service={service}></ServiceDetail>)
          }
        </div>
     </div>
    </div>

   
    </section>
  );
};

export default Services;