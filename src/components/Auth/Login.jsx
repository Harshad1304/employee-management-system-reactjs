import React, { useState } from 'react'

function Login({handleLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
  
    setEmail('');
    setPassword('');
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
      <div className='bg-gray-800 p-12 rounded-3xl shadow-lg max-w-sm w-full'>
        <h2 className='text-3xl font-semibold text-center text-white mb-8'>Login</h2>
        <form onSubmit={(e) => submitHandler(e)} className='flex flex-col space-y-6'>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className='outline-none bg-transparent border-2 border-gray-600 rounded-full py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500' 
            type="email" 
            placeholder='Enter your email' 
          />
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className='outline-none bg-transparent border-2 border-gray-600 rounded-full py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500' 
            type="password" 
            placeholder='Enter your password'
          />
          <button className='w-full bg-blue-600 text-white rounded-full py-3 mt-4 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition duration-200'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;
