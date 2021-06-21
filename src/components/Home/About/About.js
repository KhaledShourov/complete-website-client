import React from 'react';
import about from '../../../images/about.jpeg'
const About = () => {
  return (
    <section className = "about mt-4">
      <div className="row">
        <h2 className="text-primary text-uppercase">About Us</h2>
        <p>About Our Company</p>
          <div className="col-md-6">
            <img className="img-fluid" src={about} alt="img" />
          </div>
          <div className = "col-md-6 px-5" >
            <div div className = "about-detail" >
              <div className="icon">Icon</div>
              <div className="text">
                <h4>WORKING SINCE 1998</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, ex minus voluptatem numquam unde accusamus a voluptatum ipsam maiores aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus sed rerum corrupti sapiente, odit quis placeat ex commodi quidem.</p>
              </div>
              <div className="icon">Icon</div>
              <div className="text">
                <h4>ANNUAL CERTIFICATION OF EMPLOYEES</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, ex minus voluptatem numquam unde accusamus a Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo error necessitatibus asperiores totam omnis dignissimos temporibus adipisci labore. Possimus? voluptatum ipsam maiores aliquid.</p>
                <button className="btn btn-danger">Learn more</button>
              </div>
            </div>
           </div>
      </div>
    </section>
  );
};

export default About;