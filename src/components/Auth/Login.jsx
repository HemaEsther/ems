import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    //Two way binding

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        console.log("email is ",email)
        console.log("password is ",password)
        
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded border-emerald-600 p-20'>
            <form 
             onSubmit={(e)=>{
                submitHandler(e)
             }}
             className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='border-2 border-emerald-600 text-xl outline-none bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='border-2 border-emerald-600 text-xl outline-none bg-transparent mt-3 py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-5 border-2 bg-emerald-600 text-xl text-white outline-none py-3 px-5 rounded-full w-full font-semibold placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login