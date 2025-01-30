import React from 'react';

function ActiveTask({ data }) {
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
      <div className="mt-6 flex flex-col gap-2">
        
        <button className="mt-4 w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 transition rounded-lg shadow-md text-center">
          Completed
        </button>
        <button className="w-full px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 transition rounded-lg shadow-md text-center">
          Failed
        </button>
      </div>
    </div>
  );
}

export default ActiveTask;
