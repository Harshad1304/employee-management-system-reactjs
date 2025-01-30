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

    <div className='mt-4 p-4 '>
      <h2 className='mb-4 text-2xl font-semibold text-white underline underline-offset-8'>Tasks-filter :-</h2>

      {/* Active Tasks */}
    <button  onClick={()=>setFilter('active')} className="px-4 py-2 bg-blue-500 text-black  text-xl rounded hover:bg-blue-600 active:scale-95 transition">
  Active
</button>

{/* Completed Tasks */}
<button onClick={()=>setFilter('completed')} className="px-4 py-2 bg-green-500 ml-4 text-black  text-xl rounded hover:bg-green-600 active:scale-95 transition">
  Completed
</button>

{/* New Tasks */}
<button onClick={()=>setFilter('newTask')} className="px-4 py-2 bg-purple-600 ml-4 text-black  text-xl rounded hover:bg-purple-800 active:scale-95 transition">
  New Task
</button>

{/* Failed Tasks */}
<button onClick={()=>setFilter('failed')} className="px-4 py-2 bg-red-500 ml-4 text-black  text-xl rounded hover:bg-red-600 active:scale-95 transition">
  Failed Task
</button>

{/* All Tasks */}
<button onClick={()=>setFilter('all')} className="px-4 py-2 bg-sky-500 ml-4 text-black  text-xl rounded hover:bg-sky-600 active:scale-95 transition">
  All Tasks
</button>


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
