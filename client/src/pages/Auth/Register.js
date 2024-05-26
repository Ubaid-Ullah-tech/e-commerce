import React , {useState} from 'react'
import './../../styles/AuthStyle.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [answer,setAnswer]=useState("");
const navigate = useNavigate();
  // from function
  const HandleSubmit = async (e)=>{
   e.preventDefault();
   try {
         const res =  await axios.post("/api/v2/auth/register",{
            name,
            email,
            password,
            phone,
            address,
            answer
           });
           if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
   } catch (error) {
         console.log(error);
         console.log('something went wrong')
   }
  }
  return (
    <div title="Register - Ecommer App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={HandleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
             value={name}
             onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputName1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
            
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)} 
              className="form-control"
              id="exampleInputSports"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register