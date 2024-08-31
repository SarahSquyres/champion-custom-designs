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
                    <h2>Remodel</h2>
                    <br />
                    <h2>Additions</h2>
               </div>
               <div className="contactInfo-container">
                    <h1>Contact Us</h1>
                    <h3>P 210.764.7249</h3>
                    <br />
                    <h2>General Inquiries</h2>
                    <h3>championdesignsassociates@gmail.com</h3>
               </div>
          </div>
              
          </>
     )
}