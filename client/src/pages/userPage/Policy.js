import React from "react";
// import Image from '../images/contact.jpg'
import image from '../../images/privacy-policy.jpg'
const Policy = () => {
  return (
    <div title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-5 ">
          <img
            src={image}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-0 text-white text-center">Privacy Policy</h1>
          <p> <mark>Data Collection:</mark> We collect personal information like name, email, and payment details.</p>
          <p> <mark>Use of Information:</mark>Your information is used to process orders and improve your experience.</p>  
          <p><mark>Data Sharing:</mark> We don’t share your information except with trusted partners who help run our site.</p>
          <p> <mark>User Rights:</mark> You can access, correct, or delete your personal information anytime.</p>
          <p><mark>Cookies:</mark> We use cookies to enhance your experience; you can disable them in your browser.</p>
          <p> <mark>Policy Changes:</mark> We may update our policy and will notify you of significant changes.</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;