import React from "react";
import './testimonialscss.css';

export const Testimonials = () => {

  const data = [
    {
      name:'Pranab Mukharji (Former Precident of India)',
      img:'04.jpg',
      text:'"(ISKCON) movement, Just imagine…within a short span of time…today I am told ISKCON movement runs more than 600 centres all over the world, everyday in India it provides food to over one million children…healthy food…and the message…of love, compassion, which is inherent in Indian civilization.”'
    },
    {
      name:'Gautam Adani',
      img:'01.jpg',
      text:'Nothing can be more gratifying than being able to provide food to someone. By partnering with ISKCON in feeding thousands of labourers amidst COVID-19 pandemic, Team Adani Foundation has lived by its core Gandhian philosophy of Trusteeship.'
    },
    {
      name:'Ajith Kumar',
      img:'02.jpg',
      text:'A Contribution that brings smiles to cute little faces.A charity that brings smiles to the faces, is a noble deed which is initiated by ISKCON food donation for child and poor.'
    },
        {
      name:'Pratik Rao',
      img:'03.jpg',
      text:'Awesome initiative. We appreciate ISKCON for the Food for Child Initiative, which has created this amazing platform for us to contribute to the feeding and educating underprivileged tribal brilliant young children. We are really happy with the procedure, transparency, and clarity offered by society.'
    }
  ]

  return (
    <div id="testimonials" style={{textAlign:'center'}}>
      <h2 style={{display:'inline-flex',color:'#60349e',position: 'relative',fontSize:'35px',borderBottom:'5px solid black',textAlign:'centre'}}>TESTIMONIALS</h2>
      <div className="container1">
        <div className="section-title text-center" style={{justifyContent:'top',alignItems:'top',display:'flex',position:'relative'}}>
        </div>
        <div className="row" style={{flexWrap:'wrap'}}>
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-12">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
