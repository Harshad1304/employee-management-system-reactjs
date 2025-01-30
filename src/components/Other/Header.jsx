import React from 'react'

function Header(props) {
  console.log(props.data)

  const logoutHandler = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('');
  }
  return (
    <div className='flex items-center justify-between'> 
        <h1 className='text-xl text-white'>Hello, <br /> <span className='font-bold text-2xl'>{props.data?.firstName?props.data.firstName:'Admin'}</span> </h1>
        <button onClick={logoutHandler} className='px-4 py-2 bg-blue-300 cursor-pointer hover:bg-blue-200 rounded-2xl text-xl text-black'>Logout</button>
    </div>
  )
}

export default Header