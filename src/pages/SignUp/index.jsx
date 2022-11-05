import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

//style :
const Register = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30rem;
    margin-left: 35%;
    text-align: center;
    gap: 20px;
`



function Signup() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const navigate = useNavigate('')

  //si utilisateur logé alors on ne voit pas "signup"
  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if (auth){
      navigate('/')
    }
  })

  const collectData=async()=>{
    console.warn(email, password)
    //récupérer les valeurs pour les envoyer dans la DB
    let result = await fetch("http://localhost:8000/api/auth/signup",{
      method: 'post',
      body: JSON.stringify({email, password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result= await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result))
    navigate('/')
  }
  return (
    <Register>
        <h1>Register</h1>
        <input type="text" className='inputBox' placeholder='Enter e-mail' value={email} onChange={(e) =>setEmail(e.target.value)} />
        <input type="password" className='inputBox' placeholder='Enter Password' value={password} onChange={(e) =>setPassword(e.target.value)} />
        <button onClick={collectData} className='appButton' type='button'>Sign Up</button>
    </Register>
  )
}

export default Signup