import React from "react";

import { BiLogoGmail, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FaSquareWhatsapp } from 'react-icons/fa6'
// import Image from '../images/contact.jpg'
// import image from '../../images/contact.jpg'
import image from '../../images/contacttt.png'
const Contact = () => {
  return (
    <div title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6">
          <img
            src={image}
            alt="contactus"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Connect with us effortlessly – your gateway to seamless communication for all your inquiries and support needs.
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiLogoGmail /> : ubaidullah.uoh@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0349-3673578
          </p>
          <p className="mt-3">
            <FaSquareWhatsapp /> : 0349-3673578
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;