// import React from "react";
// import image from '../../images/About.png'

// const About = () => {
//   return (
//     <div title={"About us - Ecommer app"}>
//       <div className="row contactus">
//         <div className="col-md-6">
//           <img
//             src={image}
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <h2 className="bg-dark p-2 text-white text-center">About Us</h2>
//           <p className="text-justify mt-2">
//             Our e-commerce platform, built with the MERN stack (MongoDB, Express.js, React, Node.js), offers a seamless and secure online shopping experience. It features real-time inventory management, personalized user experiences, and robust security measures. This scalable solution meets modern consumer needs and adapts to future growth.
//           </p>
//         </div>
//       </div>
//       <footer className="bg-dark text-white py-3 mt-5">
//         <div className="container text-center">
//           <p>
//             Our e-commerce platform, built with the MERN stack (MongoDB, Express.js, React, Node.js), offers a seamless and secure online shopping experience. It features real-time inventory management, personalized user experiences, and robust security measures. This scalable solution meets modern consumer needs and adapts to future growth.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;










import React from "react";
import image from '../../images/About.png'
const About = () => {
  return (
    <div title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={image}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">About Us</h1>
          <p className="text-justify mt-2">
          Our e-commerce platform, built with the MERN stack (MongoDB, Express.js, React, Node.js), offers a seamless and secure online shopping experience. It features real-time inventory management, personalized user experiences, and robust security measures. This scalable solution meets modern consumer needs and adapts to future growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;