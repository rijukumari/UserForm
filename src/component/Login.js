import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post ('http://localhost:5000/login',{email,password})
    .then(result => {console.log(result)
      if(result.data === 'Success'){
        navigate('/')

      }
    })
    .catch(err =>console.log(err))

  }

  return (
    <div>
    <div className="from">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
     
      <div className="label">
        <label htmlFor='email'>Email</label>
        <input type="email" placeholder="Enter Email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="label">
        <label htmlFor='password'>Password</label>
        <input type="password" placeholder="Enter Password" name='password' onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      
      <div className="btn">
      <button type="submit">Login</button>
      </div>
      </form>
      <p>Already Have an Account</p>
      <div className="login">
      <Link to = '/register' type="submit" className='sub'>Sing Up</Link>
      </div>
    </div>
    </div>
  )
}

export default Login
