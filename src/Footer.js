import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer>
           <div class="container">
            <div class="footer-content">
                <h3 style={{backgroundColor:'#f18930',display:'inline-flex',borderRadius:'20px',padding:'10px',position:'relative',marginLeft:'30px'}}>GET IN TOUCH</h3>
                <p style={{textAlign:'center'}}>Address: Bhisma Dept , ISKCON, Hare<br/>Krishna Land, Juhu, Mumbai,<br/>Maharashtra 400049<br/>Phone: +91  7400056919<br/>Email:pranav@iskconmumbai.com</p>
            </div>

            <div className='footer-content'>
                <h3 style={{color:'#f18930',marginTop:'4vh',fontSize:'15px'}}>Dr. Mukunda Madhav Das, Ph.D.</h3>
                <p style={{textAlign:'center'}}>Director,<br/>ISKCON Food for Child</p>
                <div class="footer-content" style={{paddingLeft:'1.1vw'}}>
                <h3 style={{color:'#f18930',paddingLeft:'5.5vw'}}>Follow Us</h3>
                <ul class="social-icons">
                 <li><a href=""><FaFacebook /></a></li>
                 <li><a href=""><FaTwitter /></a></li>
                 <li><a href=""><FaInstagram /></a></li>
                 <li><a href=""><FaYoutube /></a></li>
              
                </ul>
              </div>
            </div>

            <div class="footer-content">
                <h3  style={{color:'#f18930',marginTop:'4vh'}}>Quick Links</h3>
                 <ul class="list">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact</a></li>
                 </ul>
            </div>

        </div>
      <div class="bottom-bar">
        <div>
          <p>Registered under Maharastra Public Trust act 1950 vide Registration No. F-2179(Bom)</p>
          <p>International Society For Krishna Consiousness (ISKCON) | Funder-Acharya: H.D.G. A.C. Bhaktivedanta Swami Prabhupada</p>
        </div>
            <p>  &copy;{new Date().getFullYear()} ISKCON Food For Child | All rights reserved |
            Terms Of Service | Privacy</p>
        </div>
    </footer>
  );
}

export default Footer;