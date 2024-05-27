import React, { useContext, useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useState } from "react"
import { AuthContext } from '../context/authContext'
const Login = () => {
  const [inputs , setInputs]=  useState({
    username:"" , 
    password : ""
  })

  const {login , currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [err ,setError] = useState(null)
  const handleChange = e => {
    setInputs(prev => ({...prev , [e.target.name] :  e.target.value}))
  }

  const handleSubmit = async (e) => {
    console.log("clicked")
    e.preventDefault()
    try{
      await login(inputs)
      console.log("le current apres le click",currentUser)
      navigate("/")
    }catch (err) {
      setError(err.response.data || "Ab error fegn na ")
    }

  }

 
  return (
    <div className='auth'>
      <form action="">
        <h1>Login</h1>
        <input type="text" name="username" id="username" placeholder='username' onChange={handleChange} />
        <input type="password" name="password" id="password" placeholder='password' onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Login</button>
      </form>
      {err && <p>{err}</p>}
      <span> Don't you have an account <Link to="/register">Register</Link></span>
    </div>
  )
}

export default Login
