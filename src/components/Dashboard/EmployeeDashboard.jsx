import React from 'react'
import Header from '../Other/Header'
import TaskNumbers from '../Other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
 
  return (
    <div className='p-10 bg-gray-800 h-screen'>
    
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskNumbers  data={props.data}/>
            <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard