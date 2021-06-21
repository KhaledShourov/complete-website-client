import React from 'react';
import './MainHeader.css'
import macanic from '../../../images/macanic.jpg'

const MainHeader = () => {
  return (
    <div>
      <main style = {{ height: '600px'}} className = "row d-flex align-items-center header-container" >
        <div className="col-md-6">
          <img style = {{ height: '600px'}} className="img-fluid rounded" src={macanic} alt="" />
        </div>
        <div div className = "col-md-6 col-sm-12">
            <div className="header-info p-5 rounded">
              <h1>For Batter Service <br /> For You</h1>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi officiis saepe, odio esse dolore voluptatum, veniam soluta, corporis aspernatur distinctio. Beatae, ullam. Illum dignissimos qui sunt ipsa fugiat rerum numquam quaerat delectus at sit obcaecati porro, adipisci eaque et voluptatum, accusamus molestias pariatur id facere. Aspernatur voluptatem excepturi hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem in asperiores fuga numquam odit deleniti dolorum culpa dignissimos iste itaque.</p>
              <button className="btn btn-warning mt-3">Learn more</button>
            </div>
          </div>
      </main>
    </div>
  );
};

export default MainHeader;