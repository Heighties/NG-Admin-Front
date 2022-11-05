import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30rem;
    margin-left: 35%;
    text-align: center;
    gap: 20px;
`

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })

    const handleLogin= async ()=>{
        let result = await fetch('http://localhost:8000/api/auth/login',{
            method:"post",
            body:JSON.stringify({email, password}),
            headers:{
                'Content-Type':'application/json'
              }
        })
        result = await result.json()
        console.warn(result)

        if(result.token){
            localStorage.setItem('token', JSON.stringify(result))
            navigate('/')
        }else{
            alert('Please enter connect details')
        }
    }

  return (
    <LoginWrapper>
        <h1>Login</h1>
        <input type="text" className='inputBox' placeholder='Enter e-mail' value={email} onChange={(e) =>setEmail(e.target.value)} />
        <input type="password" className='inputBox' placeholder='Enter Password' value={password} onChange={(e) =>setPassword(e.target.value)} />
        <button onClick={handleLogin} className='appButton' type='button'>Login</button>
    </LoginWrapper>
  )
}

export default Login