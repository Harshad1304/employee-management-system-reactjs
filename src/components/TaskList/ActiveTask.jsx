import React from 'react';

function ActiveTask({ data }) {
  return (
    <div className="h-full p-6 shrink-0 w-[320px] bg-gradient-to-br from-blue-800 to-gray-800 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-700 px-4 py-1 rounded-3xl text-white text-sm font-medium shadow-md">
          {data?.category}
        </h3>
        <h4 className="text-sm font-medium text-gray-100">{data?.taskDate}</h4>
      </div>
      <h2 className="mt-8 text-2xl font-bold text-white">{data?.taskTitle}</h2>
      <p className="text-sm mt-4 text-gray-100">{data?.taskDescription}</p>
      <div className="mt-8 flex flex-col gap-3">
        <button className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 transition-all rounded-lg shadow-md text-center transform hover:scale-102 active:scale-95">
          Completed
        </button>
        <button className="w-full px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 transition-all rounded-lg shadow-md text-center transform hover:scale-102 active:scale-95">
          Failed
        </button>
      </div>
    </div>
  );
}

export default ActiveTask;