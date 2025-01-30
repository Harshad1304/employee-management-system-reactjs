import React from 'react';

function NewTask({ data }) {
  return (
    <div className="h-full p-5 shrink-0 w-[300px] bg-red-300 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded-3xl text-white text-sm font-medium">
          {data?.category}
        </h3>
        <h4 className="text-sm font-medium text-gray-700">{data?.taskDate}</h4>
      </div>
      <h2 className="mt-7 text-xl font-semibold">{data?.taskTitle}</h2>
      <p className="text-sm mt-4 text-gray-700">{data?.taskDescription}</p>
      <div className="mt-6">
        <button className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition rounded-lg shadow-md text-center">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default NewTask;
