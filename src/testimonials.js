import React from "react";
import './testimonialscss.css';

export const Testimonials = () => {

  const data = [
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
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
        <h2 style={{ position: "relative", left: "10px" }}>Testimonials</h2>
        </div>
        <div className="row" style={{flexWrap:'nowrap'}}>
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
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
