import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full p-10 bg-gradient-to-r from-indigo-600 to-purple-700'>
      <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
     
    </div>
  )
}

export default AdminDashboard;
