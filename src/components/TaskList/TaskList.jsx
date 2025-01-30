import React, { useState } from 'react'

import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import ActiveTask from './ActiveTask';

function TaskList({data}) {
 
const [filter, setFilter] = useState('all');

console.log(filter)
const taskFilter = ()=>{

  if(filter === 'active'){
    return data?.tasks?.filter((item)=> item.active )
  }
  if(filter === 'completed') {
    return data?.tasks?.filter(item => item.completed)
  }
  if(filter === 'newTask'){
    return data?.tasks?.filter(item=>item.newTask)
  }
  if(filter === 'failed'){
    return data?.tasks?.filter(item=>item.failed)
  }
  
  return data?.tasks || []
}
const filteredTasks = taskFilter();
console.log(filteredTasks)

  return (

    //Todo :- Make Buttons to filter out tasks For eg. Active , failed , newTaskx and All 

    <>
    {/* buttons */}

    <div className='mt-6 p-6 bg-gray-800 rounded-xl shadow-lg'>
  <h2 className='mb-6 text-3xl font-bold text-white text-center underline underline-offset-4 decoration-2'>
    Task Filters
  </h2>

  <div className='flex flex-wrap gap-4 '>
    {/* Active Tasks */}
    <button 
      onClick={() => setFilter('active')}
      className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-full 
                hover:bg-blue-600 transition-all duration-200 active:scale-95
                shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Active
    </button>

    {/* Completed Tasks */}
    <button 
      onClick={() => setFilter('completed')}
      className="px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-full 
                hover:bg-green-600 transition-all duration-200 active:scale-95
                shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      Completed
    </button>

    {/* New Tasks */}
    <button 
      onClick={() => setFilter('newTask')}
      className="px-6 py-3 bg-purple-500 text-white text-lg font-medium rounded-full 
                hover:bg-purple-600 transition-all duration-200 active:scale-95
                shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
    >
      New Tasks
    </button>

    {/* Failed Tasks */}
    <button 
      onClick={() => setFilter('failed')}
      className="px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-full 
                hover:bg-red-600 transition-all duration-200 active:scale-95
                shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Failed Tasks
    </button>

    {/* All Tasks */}
    <button 
      onClick={() => setFilter('all')}
      className="px-6 py-3 bg-cyan-500 text-white text-lg font-medium rounded-full 
                hover:bg-cyan-600 transition-all duration-200 active:scale-95
                shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      All Tasks
    </button>
  </div>
</div>

    {/* Tasks List */}
    <div 
    id='tasklist' 
    className='overflow-x-auto h-[400px] w-full py-5  mt-10 flex items-center justify-start gap-5 scroll-smooth'
  >
   
      {filteredTasks?.map((item,index)=>{
        console.log(item)

        if(item.newTask){
          return <NewTask key={index} data={item}  />
        }


        if(item.active){
       return <ActiveTask key={index} data={item} />
        }
      
        if(item.completed){
          return <CompleteTask key={index} data={item}  />
        }
        if(item.failed){
          return <FailedTask key={index}  data={item}  />
        }
      })}

  </div>
    </>
    
  )
}

export default TaskList
