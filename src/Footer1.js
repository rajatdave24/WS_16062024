// import React from "react";
import { BiSolidMessage } from "react-icons/bi";
import { FaFacebook , FaTwitter , FaInstagram , FaYoutube} from "react-icons/fa";
import footerStyle from './footerStyle.css';

const Footer = () => {
  return (
  <>
    <footer className="flex justify-center">
      <div className="row flex align-center">
        <div className="col">
          <h3>Founder Acharya</h3>
          <img
            src="https://iskconmumbai.com/images/author-iskcon.jpg"
            className="logo1"
          ></img>
          <p>His Divine Grace</p>
          <p>A.C Bhaktivedanta Swami Prabhupada</p>
        </div>

        <div className="col">
          <h3>Registered Head Office</h3>
          <p>ISKCON Juhu</p>
          <p>Hare Krishna Land, Juhu, Mumbai-400049, India</p>
          <p>Registered under Maharashtra Public Trust Act 1950</p>
        </div>

        <div className="col">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Donations</a>
            </li>
          </ul>
        </div>

        <div className="col ">
          <h3>Contact Us</h3>
          <form>
            <div className=" icon "><BiSolidMessage /></div>
            <input
              type="email"
              placeholder="Enter your email id"
              required
            ></input>
            <button type="submit">Submit</button>
          </form>
 
          <div className="social-icons">
            <ul>
                <li> <FaFacebook /></li>
                <li>  <FaTwitter /></li>
                <li> <FaInstagram /></li>
                <li>  <FaYoutube /></li>
           
           </ul>
            
           
          </div>  


        </div>

    <p style={{position:'relative',width:'100vw',top:'30px',textAlign:'center'}}>
        <hr />
       <p className="text-center">&copy; {new Date().getFullYear()} ISKCON Juhu . All rights reserved.</p>
    </p>



      </div>
    </footer>

</>
  );
};

export default Footer;
