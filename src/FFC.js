import React, { useState, useRef, createContext } from 'react';
import axios from 'axios';
import Krishna from './pages/About';
import AnnaDan from './pages/AnnaDan';
import Govinda from './pages/Impact';
import Narasimha from './pages/Contact';
import Varaha from './pages/Donate';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
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
    const donateRef = useRef(null);
    const inforef = useRef();
    const payRef = useRef();

    const scrollToSection = (elementRef) =>{
        console.log(elementRef.current.offsetTop);
        window.scrollTo(0,
            elementRef.current.offsetTop
        
        );
    }
    // document.addEventListener('click',(e)=>{

    //     if(e.target != document.getElementById('menuList') && (e.target.tagName != 'LI') && (e.target.tagName != 'A') && (e.target.getAttribute('class') != null) && ((this.getAttribute('class') != 'menuIcon'))){
    //         console.log('outside click!',e.target.tagName,e.target.getAttribute('class'));
    //         // setMenu(false);
    //     }
    //     else console.log('inside Click!!!');

    // });

    window.addEventListener('click',(e)=>{
        var menuIcon = document.getElementById('menuIcon');
        var menuList = document.getElementById('menuList');
        var menuContainer = document.getElementById('menuContainer');
            // console.log(e.target);
        if((e.target != menuIcon) && (e.target != menuContainer) && ((e.target != menuList))){
            // console.log('outside Click!!!');
            // menuList.className = 'menuList';
            // menuIcon.className = 'menuIcon';
            // menuContainer.className = 'menuContainer';
            setMenu(false);
        }

    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900)
            setMenu(false);
    })

    const handlePay = async (amount) =>{
        const TxnId =
        "ISKCON-JUHU-" +
        Date.now().toString() +
        Math.random().toString(36).substring(2, 15);

        console.log(payRef.current.value);

        const response = await axios.get("https://iskconjuhu.in/donate.php", {
            params: {
              key: "2fKjPt",
              txnid: TxnId,
              amount: amount,
              productinfo: 'test pay',
              firstname: 'Rama Nama das',
              email: 'rajatdave24@gmail.com',
              phone: '9137969203',
              surl: "http://localhost:3000/success",
              furl: "http://localhost:3000/Failure",
              salt: "zBqitHlab9VU52l9ZDv8x5D1rxYBtgat",
              pg: "UPI",
            },
          });
          
          const htmlContent = response.data;
          console.log('htmlcontent',response,htmlContent);
          const newWindow = window.open();
          newWindow.document.open();
          newWindow.document.write(htmlContent);
          newWindow.document.close();
          window.close();

    }

    return (
        <div style={{ justifyContent: 'centre' }} className='appContainer'>

            {/* <NavBar/> */}

            <div>
                <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'} id="menuContainer">
                    <Link to='/' style={{ color: 'black' }}>
                        <img src="ISKCON_logo.png" alt="Logo" className="logo" />
                        <h3 className="logoText">ISKCON Juhu</h3>
                    </Link>
                    <ul className={(menu) ? 'menuListClicked' : 'menuList'} id="menuList">

                        {/* (window.innerWidth < 900) */}
                        {/* <li><a href='/'>Home</a></li> */}
                        <li><Link to='/About'>About</Link></li>
                        {/* <li><Link to="/AnnaDan">Anna Daan</Link></li>
                        <li><Link to="/Impact">Impact</Link></li> */}
                        <li><Link to="/Contact">Contact</Link></li>
                        {/* <li><Link to="/PayPage">Pay Page</Link></li> */}
                        <a href="#donateNow" className='donateButton' onClick={(e)=>{e.stopPropagation;e.preventDefault}}>Donate</a>
                    </ul>
                    <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} onClick={(e) =>{e.stopPropagation;e.preventDefault;
                        setMenu(prevState => !prevState)}} id='menuIcon'>&#9776;</div >
                </div >
                        
            </div >
            <div className='app'>
                {/* <img src="FFC-Banner-WEB-1_JPEG.jpg" className={(menu) ? 'image1': 'image'} alt="lotus"/> */}
                <div className='bannerFlex'>
                    <p> Share few meals with <span style={{color:'#d294ff'}}>Poor, Hungry and Malnourished</span> Children</p>
                        
                </div>
                <div className='flexButton'>
                            <a href="#donateNow">Donate Now</a>
                        </div>
            </div>

 

            <div className='board'>
                <h2 className='contentTitle'>ISKCON Food For Child</h2><br />
                <div className="content">Hunger kills 9 million people every year and 24,000 people every day and out of them 18,000 are children. 60% of the children in India go to sleep hungry every night. Half the children in the age group of 6 to 14 years do not have access to primary education. We feel, by subjecting children to hunger, we rob them of their God given potential. India's progress in reducing child malnutrition is very slow.</div>
            </div>

            <div className='facts'>
                <div className='facts1' style={{ width: '170px' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }}>300 Crore</p><p>meals served around the world</p></div>
                <div className='facts1' style={{ backgroundColor: '#3b95e0', width: '170px' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }}>11.6 Crore</p><p>meals served during COVID lockdown</p></div>
                <div className='facts1' style={{ backgroundColor: '#ae57cd' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }}>54 Years</p><p>of service to humanity</p></div>
                <div className='facts1' style={{ backgroundColor: '#f29e21' }}><p style={{ justifySelf: 'centre', marginTop: '-2px', fontSize: '25px', fontWeight: '30px', marginBottom: '0px' }} >110</p><p>kitchens across India</p></div>

            </div>

            <div className='donationContainer' id='donateNow'>
                <div className="donationBox">
                    <div className="donationList"> 
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(2601)}>Donate Rs. 2,601</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(5001)}>Donate Rs. 5,001</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(10001)}>Donate Rs. 10,001</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(15001)}>Donate Rs. 15,001</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(25001)}>Donate Rs. 25,001</h5>
                        </div>
                        <div className="donationFlex" style={{ borderBottom: 'none' }}>
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(35001)}>Donate Rs. 35,001</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(45001)}>Donate Rs. 45,001</h5>
                        </div>
                    </div>
                </div>

                <div className='donationBox'>
                    <div className="donationList">
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(55001)}>Donate Rs. 55,001</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(111001)}>Donate Rs. 1,11,001</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(211001)}>Donate Rs. 2,11,001</h5>
                        </div>
                        <div className="donationFlex ">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(311001)}>Donate Rs. 3,11,001</h5>
                        </div>
                        <div className="donationFlex">
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(411001)}>Donate Rs. 4,11,001</h5>
                        </div>
                        <div className="donationFlex " style={{ borderBottom: 'none' }}>
                            <h5 className='title'>Donate meals</h5>
                            <h5 className='donateNow' onClick={()=>handlePay(511001)}>Donate Rs. 5,11,001</h5>
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={{ color: 'rgb(140, 27, 89)', left: '10%', position: 'relative', fontSize: '35px', marginBottom: '20px' }}>Or, donation of your choice</h2>
            <div className='inputCont'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0 20px', top: '30px' }}>
                    <span style={{ left: '10px', float: 'left', fontWeight: 'bolder', fontSize: '20px', position: 'absolute', top: '40px' }}>₹</span>
                    <input type='number' min='0' className='donationInput' placeholder='Amount' ref={payRef} onInput={(e)=>{e.target.value = Math.abs(e.target.value)}} onKeyDown={(e)=>{e.key ==='Enter'? handlePay(payRef.current.value): null}}/><h4><button style={{ color: 'white', backgroundColor: 'rgb(140, 27, 89)', position: 'absolute', top: '38px', right: '10px', borderRadius: '20px', height: '35px', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%), inset 0px -4px 0px #451c7e', fontSize: '20px' }} onClick={()=>handlePay(payRef.current.value)}>Donate now</button></h4>
                </div>
            </div>

            <h2 style={{ color: 'rgb(140, 27, 89)', left: '10%', position: 'relative', fontSize: '30px' }}>Donate via NEFT/RTGS/IMPS/PayTm/UPI</h2>

            <div className='cardContainer'>
                <div className='c1' style={{ height: '210px' }}>
                    <h4 style={{ position: 'absolute', left: '5px', top: '-5px' }}>Donate via NEFT / RTGS</h4>
<div><img src='copyIcon.png' style={{ width: '40px', height: '28px', display: 'inline', position: 'absolute', top: '30px', right: '5px' }} onClick={()=>navigator.clipboard.writeText('Bank Name: Indian Overseas Bank(IOB)\nAccount Name: ISKCON Food For Child\nAccount No: 124501000022099\nIFSC Code: IOBA0001245')}/></div>
                    <p><span>Bank Name: </span>Indian Overseas Bank(IOB)</p>
                    <p><span>Account Name: </span>ISKCON Food For Child</p>
                    <p><span>Account No: </span>124501000022099</p>
                    <p><span>IFSC Code: </span>IOBA0001245</p>
                </div>
                <div className='c1' style={{ height: '230px' }}>
                    <h4 style={{ position: 'absolute', left: '10px', top: '-5px' }}>Donate using Mobile Number</h4>
                    <img src='iskconpaytm.png' style={{ position: 'absolute', height: '29px', float: 'left', top: '70px' }}/>
                    <span className='info' ref={inforef}>7400056919</span>
                    <div><img src='copyIcon.png' style={{ width: '40px', height: '28px', display: 'inline', position: 'absolute', top: '130px', let: '5px' }} onClick={()=>navigator.clipboard.writeText('7400056919')} /></div>
                    <a className='cardDonateBtn' href='upi://pay?pa=paytmqr2810050501011hmz7dbr2x3r@paytm&pn=Paytm%20Merchant&paytmqr=2810050501011HMZ7DBR2X3R'>Donate Now</a>
                    <div><img style={{ display: 'block', position: 'absolute', height: '80px', right: '10px', top: '100px' }} src="paytmQR.jpg" alt="paytmQR" /></div>
                </div>
                <div className='c1' style={{ height: '210px' }}>
                    <h4 style={{ position: 'absolute', left: '5px', top: '-5px', left: '38px' }}>Donate through</h4>
                    <img style={{ position: 'absolute', width: '138px', top: '45px', height: '24px', display: 'inline', left: '30px' }} src="iskconupi.png" alt="support"></img>
                    <span className="info" style={{ top: '80px' }}>iskconfoodforchild@iob</span>
                    <img src="copyicon.png" style={{ width: '40px', height: '28px', display: 'inline', position: 'absolute', top: '105px', let: '5px' }} onClick={()=>navigator.clipboard.writeText('iskconfoodforchild@iob')} alt="support"></img>
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
                <h2 style={{ display: 'inline-flex', color: 'rgb(140, 27, 89)', position: 'relative', fontSize: '35px', paddingTop: '50px', borderBottom: '5px solid black' }}>ISKCON in the News</h2>
                <div className='galleryNews'>
                    <img src='iskcon-meals-in-Hindustan-Times.jpg' className='newsItem' />
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
            <div>
                <a href='#donateNow'>
                {/* onClick={()=>scrollToSection(donateRef)} */}
                    <div className='donationSticker'>Donate!</div>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default FFC;