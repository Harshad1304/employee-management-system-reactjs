import React from 'react'

function TaskNumbers({data}) {
  return (
    <div className='flex screen mt-10 justify-between flex-wrap lg:flex-nowrap text-white gap-5 '>
        <div className=' rounded-2xl w-[45%] bg-violet-950 py-5 px-6'>
            <h2 className='text-5xl font-bold '>{data?.taskCount?.newTask}</h2>
            <h3>New Task</h3>
        </div>
        <div className=' rounded-2xl w-[45%] bg-green-500 py-5 px-6'>
            <h2 className='text-5xl font-bold '>{data?.taskCount?.completed}</h2>
            <h3>Completed Tasks</h3>
        </div>
        <div className=' rounded-2xl w-[45%] bg-pink-900 py-5 px-6'>
            <h2 className='text-5xl font-bold '>{data?.taskCount?.active}</h2>
            <h3>Active Tasks</h3>
        </div>
        <div className=' rounded-2xl w-[45%] bg-emerald-500 py-5 px-6'>
            <h2 className='text-5xl font-bold '>{data?.taskCount?.failed}</h2>
            <h3>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumbers