import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from "axios"

const Register = () => {
  const [inputs , setInputs]=  useState({
    username:"" , 
    email :"", 
    password : ""
  })
  const navigate = useNavigate()
  const [err ,setError] = useState(null)
  const handleChange = e => {
    setInputs(prev => ({...prev , [e.target.name] :  e.target.value}))
  }

  const handleSubmit = async (e) => {
    console.log("clicked")
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:8800/api/auth/register" , inputs)
      navigate("/login")
    }catch (err) {
      setError(err.response.data)
    }

  }

 
  return (
    <div className='auth'>
    <form action="">
      <h1>Register</h1>
      <input type="text"  id="username" placeholder='username' name="username" onChange={handleChange}/>
      <input type="email" id="email" placeholder='email'  name="email" onChange={handleChange} />
      <input type="password" id="password" placeholder='password' name="password" onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>Register</button>
    </form>
    {err && <p>{err} </p>}
    <span> Do you have an account <Link to="/login">Login</Link></span>
  </div>
  )
}

export default Register
