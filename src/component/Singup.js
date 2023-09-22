import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios  from 'axios'

const Singup = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post ('http://localhost:5000/register',{name,email,password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err =>console.log(err))

  }

  return (
    <div>
      <div className="from">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="label">
            <label htmlFor="name">Name</label>
            <input type="name" placeholder="Enter Name" name="name" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="label">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="label">
            <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" password = 'password'  onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="btn">
          <button type="submit">Register</button>
          </div>
          </form>
          <p>Already Have an Account</p>
          <div className="login">
          <Link to = '/login' type="submit" className="sub">Login</Link>
          </div>
      </div>
    </div>
  );
};

export default Singup;
