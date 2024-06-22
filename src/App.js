import React, {useState } from 'react';
import Krishna from './Krishna';
// import './bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export const App = () => {
  const [menu, setMenu] = useState(true);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900)
      setMenu(false);
  })
  // window.addEventListener('scroll', () => {
  //   var navbar = document.getElementById('menuContainer');
  //   var sticky =  navbar.offsetTop;
  //   console.log(sticky, window.pageYOffset);
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add('sticky');
  //   }
  //   else {
  //     navbar.classList.remove('sticky');
  //   }
  // });
  
  return (
    <div className='app1'>
      <div>
        <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'}id="menuContainer">
        <img src="https://iskconmumbai.com/images/logo-black.png" alt="Logo" className="logo"/>
        <h3 className="logoText">ISKCON Food For Child</h3>
        <ul className={(menu && (window.innerWidth < 900)) ? 'menuListClicked' : 'menuList'} id="ul">
            <li> <a href="#Krishna">Krishna</a></li>
            <li><a href="#Rama">Rama</a></li>
            <li><a href="#Govinda">Govinda</a></li>
            <li><a href="#Narasimha">Narasimha</a></li>
            <li><a href="#Varaha">Varaha</a></li>
            <li><a href="#Varaha">Varaha</a></li>
       </ul>
          <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} onClick = {() => { setMenu(prevState=> !prevState); console.log(menu, document.getElementById
            ('ul').className)}}>&#9776;</div >
        </div >
        
    </div >
    <div  className='app'>
        <img src="FFC-Banner-WEB-1_JPEG.jpg" className={(menu) ? 'image1': 'image'} alt="lotus"/>
    </div>

{/* <p style={{display: 'flex',position: 'relative',paddingTop: '670px' }}>
// # E10000 Queues setup:
// If E10000 queue are not running for Cards follow below steps-</p> */}

          <div className='board'>
              <h2 className='contentTitle'>About</h2><br/>
              <div className="content">Hunger kills 9 million people every year and 24,000 people every day and out of them 18,000 are children. 60% of the children in India go to sleep hungry every night. Half the children in the age group of 6 to 14 years do not have access to primary education. We feel, by subjecting children to hunger, we rob them of their God given potential. India's progress in reducing child malnutrition is very slow.</div>
          </div>

          <div className='facts'>
                <div className='facts1'style={{width:'170px'}}><p style={{justifySelf:'centre',marginTop:'-2px',fontSize:'25px',fontWeight:'30px',marginBottom:'0px'}}>300 Crore</p><p>meals served around the world</p></div>
                <div className='facts1' style={{backgroundColor:'#3b95e0',width:'170px'}}><p style={{justifySelf:'centre',marginTop:'-2px',fontSize:'25px',fontWeight:'30px',marginBottom:'0px'}}>11.6 Crore</p><p>meals served during COVID lockdown</p></div>
                <div className='facts1' style={{backgroundColor:'#ae57cd'}}><p style={{justifySelf:'centre',marginTop:'-2px',fontSize:'25px',fontWeight:'30px',marginBottom:'0px'}}>54 Years</p><p>of service to humanity</p></div>
                <div className='facts1' style={{backgroundColor:'#f29e21'}}><p style={{justifySelf:'centre',marginTop:'-2px',fontSize:'25px',fontWeight:'30px',marginBottom:'0px'}}>110</p><p>kitchens across India</p></div>
                
          </div>

          <div className='donationBox'>

          </div>

          <div className="col-md-6 col-sm-6 col-xs-12" style={{float:'left',top:'50%',left:'50px'}}>
              <div className="donationBox m-b bg-white">
                  <div className="donationList">
                    <div className="donationFlex ">
                        <h4 className='title'>Donate 25 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 1,000</h4>
                    </div>
                    <div className="donationFlex ">
                        <h4 className='title'>Donate 50 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 2,000</h4>
                    </div>
                    <div className="donationFlex ">
                        <h4 className='title'>Donate 100 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 4,000</h4>
                    </div>
                    <div className="donationFlex ">
                        <h4 className='title'>Donate 125 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 5,000</h4>
                    </div>
                    <div className="donationFlex ">
                        <h4 className='title'>Donate 250 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 10,000</h4>
                    </div>
                    <div className="donationFlex ">
                        <h4 className='title'>Donate 500 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 20,000</h4>
                    </div>
                    <div className="donationFlex" style={{borderBottom:'none'}}>
                        <h4 className='title'>Donate 1000 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 40,000</h4>
                    </div>

                    <div className="donationFlex">
                        <h4 className='title'>Donate 1000 meals</h4>
                        <h4 className='donateNow'>Donate Rs. 40,000</h4>
                    </div>
                  </div>
              </div>
          </div>

          {/* <div className='col-md-6' style={{position:'relative',display:'flex',top:'1900px'}}>Hare Krishna!</div> */}
          <p className='donationFooter'>To get the receipt of donation made through NEFT, RTGS, IMPS PayTm, UPI as mentioned above, please share your legal name, postal address with pincode (and PAN if you need 80G receipt) along with transaction details on  info@iskconfoodforchild.org <br/><br/>For more information please   Call |   Whatsapp:+91-6263756519  from Monday to Saturday between 9:00am to 6:00pm </p>
</div>
  );
}

export default App;