import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import  toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer,setAnswer]=useState('');
    const navigate=useNavigate();
  //form function
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
        const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer});
        if(res && res.data.success){
            toast.success(res.data.message,9000);
            navigate('/login');
        }
        else{
            toast.error(res.data.message);
        }
    }
    catch(error){
        console.log(error);
        toast.error("Something went wrong");
    }
  }
  return (
    <Layout title={"register-ecommerce app"}>
      <div className="register">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              type="number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Forgot Password
            </label>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="What is your Favorite Sports"
              type="password"
              className="form-control"
              required
            />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Register;
