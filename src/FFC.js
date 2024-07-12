import React, { useState, useRef, createContext } from 'react';
import Krishna from './pages/About';
import AnnaDan from './pages/AnnaDan';
import Govinda from './pages/Impact';
import Narasimha from './pages/Contact';
import Varaha from './pages/Donate';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Test from './pages/Test';
import Video from './Video';
import Footer1 from './Footer';
// import './bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Footer from './Footer';
import { Gallery } from './Gallery';
import { Testimonials } from './testimonials';

const MenuContext = createContext();

export const FFC = () => {
    const [menu, setMenu] = useState(false);



    const inforef = useRef();

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900)
            setMenu(false);
    })

    return (
        <div style={{ justifyContent: 'centre' }}>

            {/* <NavBar/> */}

            <div>
                <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'} id="menuContainer">
                    <Link to='/' style={{ color: 'black' }}>
                        <img src="https://iskconmumbai.com/images/logo-black.png" alt="Logo" className="logo" />
                        <h3 className="logoText">ISKCON Food For Child</h3>
                    </Link>
                    <ul className={(menu) ? 'menuListClicked' : 'menuList'} id="ul">

                        {/* (window.innerWidth < 900) */}
                        {/* <li><a href='/'>Home</a></li> */}
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to="/AnnaDan">Anna Daan</Link></li>
                        <li><Link to="/Govinda">Impact</Link></li>
                        <li><Link to="/Narasimha">Contact</Link></li>
                        <li><Link to="/Varaha">Donate</Link></li>
                    </ul>
                    <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} onClick={() => {
                        setMenu(prevState => !prevState); console.log(menu, document.getElementById
                            ('ul').className)
                    }}>&#9776;</div >
                </div >

            </div >
            <div className='app'>
                {/* <img src="FFC-Banner-WEB-1_JPEG.jpg" className={(menu) ? 'image1': 'image'} alt="lotus"/> */}
                <a href='#donateNow'>Donate Now</a>
            </div>

            {/* <p style={{display: 'flex',position: 'relative',paddingTop: '670px' }}>
// # E10000 Queues setup:
// If E10000 queue are not running for Cards follow below steps-</p> */}

            <div className='board'>
                <h2 className='contentTitle'>About</h2><br />
                <div className="content">Hunger kills 9 million people every year and 24,000 people every day and out of them 18,000 are children. 60% of the children in India go to sleep hungry every night. Half the children in the age group of 6 to 14 years do not have access to primary education. We feel, by subjecting children to hunger, we rob them of their God given potential. India's progress in reducing child malnutrition is very slow.</div>
            </div>

            <div className='facts'>
                <div className='facts1' style={{ width: '170px' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }}>300 Crore</p><p>meals served around the world</p></div>
                <div className='facts1' style={{ backgroundColor: '#3b95e0', width: '170px' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }}>11.6 Crore</p><p>meals served during COVID lockdown</p></div>
                <div className='facts1' style={{ backgroundColor: '#ae57cd' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }}>54 Years</p><p>of service to humanity</p></div>
                <div className='facts1' style={{ backgroundColor: '#f29e21' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }}>110</p><p>kitchens across India</p></div>

            </div>

            <div className='donationContainer' id='donateNow'>
                <div className="donationBox">
                    <div className="donationList">
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 25 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 1,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 50 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 2,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 100 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 4,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 125 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 5,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 250 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 10,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 500 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 20,000</h5>
                        </div>
                        <div className="donationFlex" style={{ borderBottom: 'none' }}>
                            <h5 className='title'>Donate 1000 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 40,000</h5>
                        </div>
                    </div>
                </div>

                <div className='donationBox'>
                    <div className="donationList">
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 1250 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 50,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 2500 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 1,00,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 5000 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 2,00,000</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate 7500 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 3,00,000</h5>
                        </div>
                        <div className="donationFlex">
                            <h5 className='title'>Donate 10000 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 4,00,000</h5>
                        </div>
                        <div className="donationFlex " style={{ borderBottom: 'none' }}>
                            <h5 className='title'>Donate 12500 meals</h5>
                            <h5 className='donateNow'>Donate Rs. 5,00,000</h5>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style={{ color: '#60349e', left: '10%', position: 'relative', fontSize: '35px', marginBottom: '20px' }}>Or, donation of your choice</h2>
            <div className='inputCont'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0 20px', top: '30px' }}>
                    <span style={{ left: '10px', float: 'left', fontWeight: 'bolder', fontSize: '20px', position: 'absolute', top: '40px' }}>₹</span>
                    <input className='donationInput' placeholder='Amount' /><h4><button style={{ color: 'white', backgroundColor: '#60349e', position: 'absolute', top: '38px', right: '10px', borderRadius: '20px', height: '35px', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%), inset 0px -4px 0px #451c7e', fontSize: '20px' }}>Donate now</button></h4>
                </div>
            </div>

            <h6 style={{ color: '#60349e', left: '10%', position: 'relative', fontSize: '35px' }}>Donate via NEFT/RTGS/IMPS/PayTm/UPI</h6>

            <div className='cardContainer'>
                <div className='c1' style={{ height: '210px' }}>
                    <h4 style={{ position: 'absolute', left: '5px', top: '-5px' }}>Donate via NEFT / RTGS</h4>
                    <div><img src='copyIcon.png' style={{ width: '40px', height: '28px', display: 'inline', position: 'absolute', top: '30px', right: '5px' }} /></div>
                    <p><span>Bank Name: </span>Indian Overseas Bank(IOB)</p>
                    <p><span>Account Name: </span>ISKCON Food For Child</p>
                    <p><span>Account No: </span>124501000022099</p>
                    <p><span>IFSC Code: </span>IOBA0001245</p>
                </div>
                <div className='c1' style={{ height: '230px' }}>
                    <h4 style={{ position: 'absolute', left: '10px', top: '-5px' }}>Donate using Mobile Number</h4>
                    <img src='iskconpaytm.png' style={{ position: 'absolute', height: '29px', float: 'left', top: '70px' }} />
                    <span className='info' ref={inforef}>7400056919</span>
                    <div><img src='copyIcon.png' style={{ width: '40px', height: '28px', display: 'inline', position: 'absolute', top: '130px', let: '5px' }} /></div>
                    <a className='cardDonateBtn' href="#paytmPage">Donate Now</a>
                    <div><img style={{ display: 'block', position: 'absolute', height: '80px', right: '10px', top: '100px' }} src="paytmQR.jpg" alt="paytmQR" /></div>
                </div>
                <div className='c1' style={{ height: '210px' }}>
                    <h4 style={{ position: 'absolute', left: '5px', top: '-5px', left: '38px' }}>Donate through</h4>
                    <img style={{ position: 'absolute', width: '138px', top: '45px', height: '24px', display: 'inline', left: '30px' }} src="iskconupi.png" alt="support"></img>
                    <span className="info" style={{ top: '80px' }}>iskconfoodforchild@iob</span>
                    <img src="copyicon.png" style={{ width: '40px', height: '28px', display: 'inline', position: 'absolute', top: '105px', let: '5px' }} alt="support"></img>
                    <span className="info" style={{ width: '120px', fontSize: '12px', top: '150px' }}> Check your UPI limit with your bank. Max. Limit 1 lac per day</span>
                    <img style={{ display: 'block', position: 'absolute', height: '80px', right: '5px', top: '100px' }} src="UPI_QR.jpg" alt="support"></img>
                </div>
            </div>


            <div style={{ display: 'block', position: 'relative', left: '10%', marginTop: '30px', width: '80vw' }}>
                <h2>Receipts for your donation</h2>
                <p style={{ width: '62%', fontSize: '18px' }}>80G available as per Income Tax Act 1961 and rules made there under.
                    Tax Exemption Certificate Ref. No.: AAATI0017PF20219</p>
                <b style={{ width: '90%', fontSize: '18px' }}>To get the receipt of donation made through NEFT, RTGS, IMPS PayTm, UPI as mentioned above, please share your legal name, postal address with pincode (and PAN if you need 80G receipt) along with transaction details on  <a href="mailto:info@iskconfoodforchild.org">info@iskconfoodforchild.org</a>
                </b>
                <p><strong>For more information please Call | <a href="https://wa.me/919967591425"><i class="fa fa-whatsapp text-green font-bold">&nbsp;Whatsapp</i></a> : +91-6263756519 from Monday to Saturday between 9:00am to 6:00pm</strong></p>

            </div>

            <Gallery />

            <div style={{ textAlign: 'center' }}>
                <h5 style={{ display: 'inline-flex', color: '#60349e', position: 'relative', fontSize: '35px', paddingTop: '50px', borderBottom: '5px solid black' }}>ISKCON in the News</h5>
                <div className='galleryNews'>
                    <img src='iskcon-meals-in-Hindustan-Times.jpg' />
                    <img src='food-distribution-in-Chandigarh.jpg' />
                    <img src='iskcon-meals-in-New-Indian-Express.jpg' />
                </div>
            </div>

            <div className="videoContainer">

                <Video src={'https://www.youtube.com/embed/AzS_BqFefGQ'} />
                <Video src={'https://www.youtube.com/embed/dXZk8gYp3do'} />

            </div>

            <Testimonials />

            {/* <div className='gallery'>
            <h2 style={{borderBottom:'5px solid #551a8b',display:'inline-flex',position:'absolute'}}>Gallery</h2>
            <div className='galleryContainer'>
                <img src='pic1.jpg' style={{objectFit:'fill'}}/>
                <img src='pic2.jpg' style={{objectFit:'cover'}}/>
                <img src='pic3.jpg' style={{objectFit:'contain'}}/>
                <img src='pic4.jpg' style={{objectFit:'contain'}}/>
            </div>
            <p>Hare Krishna!!!</p>
        </div> */}

            {/* <div className='col-md-6' style={{position:'relative',display:'flex',top:'1900px'}}>Hare Krishna!</div> */}
            {/* <p className='donationFooter'>To get the receipt of donation made through NEFT, RTGS, IMPS PayTm, UPI as mentioned above, please share your legal name, postal address with pincode (and PAN if you need 80G receipt) along with transaction details on  info@iskconfoodforchild.org <br/><br/>For more information please   Call |   Whatsapp:+91-6263756519  from Monday to Saturday between 9:00am to 6:00pm </p> */}

            {/* <Footer style={{position:'absolute',display:'flex',top:'3000px'}}/> */}

            {/* <Footer/> */}
            <Footer />
        </div>
    );
}

export default FFC;