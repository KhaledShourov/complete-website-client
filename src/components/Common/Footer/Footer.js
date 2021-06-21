import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    const ourAddress = [
        {name: "New York - 31002 D/1 Block" , link: "//google.com/map"},
        {name: "New York" , link: "//google.com/map"},
       
    ]
    const aboutUs = [
        {name: "Contact Us" , link: "/contact"},
        {name: "Dashboard" , link: "/dashboard"},
        {name: "Being the best in our field means that we are committed to every project, we have ingenious ideas that become reality and we make every client happy." , link: "/dashboard"},
    ]
    const services = [
        {name: "Laptop Repair" , link: "/laptop"},
        {name: "Computer Repair" , link: "/computer"},
        {name: "Cloud Services" , link: "/cloud-service"},
        {name: "Hardware Update" , link: "/hardware-update"},
        {name: "Apple Products Repair" , link: "/apple-product-repair"},
        {name: "Data Backup & Recovery" , link: "/data-recovery"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={1} menuTitle="About Us" menuItems={aboutUs}/>
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+88017222555</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p> <hr />
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;