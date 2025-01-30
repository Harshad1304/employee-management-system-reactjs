import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';

function AllTask() {
    
    const [userData, setUserData] = useContext(AuthContext);
    // console.log(userData)
  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-8 rounded-xl h-[500px] overflow-auto shadow-2xl'>
      <h1 className='text-3xl font-bold text-white mb-6'>All Tasks</h1> {/* Added heading */}

   
      <div className='space-y-6'>

     <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Employee Name</th>
            <th className="px-4 py-2 text-left">Active</th>
            <th className="px-4 py-2 text-left">New Task</th>
            <th className="px-4 py-2 text-left">Completed</th>
            <th className="px-4 py-2 text-left">Failed</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-2">{item?.firstName}</td>
              <td className="px-4 py-2">{item?.taskCount.active}</td>
              <td className="px-4 py-2">{item?.taskCount?.newTask}</td>
              <td className="px-4 py-2">{item?.taskCount?.completed}</td>
              <td className="px-4 py-2">{item?.taskCount?.failed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
      {/* {authData.employees.map((item,key)=>{
return  <div key={key} className='bg-gray-800 p-6 rounded-lg shadow-md'>
<h2 className='text-2xl font-semibold text-white'>{item.firstName}</h2>
<h3 className='text-xl text-indigo-400'>{}</h3>
<div className='mt-2'>
  <h5 className='text-lg text-gray-400'>Status: <span className='text-green-500'>In Progress</span></h5>
</div>
</div>
      })} */}
        
      </div>
    </div>
  )
}

export default AllTask;
