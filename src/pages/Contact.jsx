import React from "react";
import amsterdamImage from "../assets/contactImage.png"

export default function Contact() {

     return (
          <>
               <img className="amsterdam" src={amsterdamImage} alt="Amsterdam Image" />
               <div className="contact-container">
                    <div className="services-container">
                         <h2>New Construction</h2>
                         <br />
                         <h2>Remodels</h2>
                         <br />
                         <h2>Additions</h2>
                    </div>
                    <div className="contactInfo-container">
                         <h1>Contact Us</h1>
                         <a className="phone-number" href="tel:2107647249">P 210.764.7249</a>
                         <br />
                         <br />
                         <h2>General Inquiries</h2>
                         <a className="email" target="_blank" href="mailto:championdesignsassociates@gmail.com">championdesignsassociates@gmail.com</a>
                    </div>
               </div>
          </>
     )
}