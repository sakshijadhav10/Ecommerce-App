import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import  toast from 'react-hot-toast';
import { useNavigate ,useLocation} from "react-router-dom";
import { useAuth } from "../../Context/auth";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useAuth();
  const location=useLocation();
  
    const navigate=useNavigate();
  //form function
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
        const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
        if(res && res.data.success){
            toast.success(res.data && res.data.message,9000);
            setAuth({
              ...auth,
              user:res.data.user,
              token:res.data.token,
            });
            localStorage.setItem('auth',JSON.stringify(res.data));
            navigate(location.state || '/');
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
    <Layout title={"login-ecommerce app"}>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
         
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
          Forgot Password
          </button>
          </div>
         

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Login;
