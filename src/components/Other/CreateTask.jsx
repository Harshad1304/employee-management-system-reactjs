import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  // const [newTask, setNewTask] = useState({});s

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskId: Date.now(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedUserData = userData.map((user) => {
      if (user.firstName.toLowerCase() === asignTo.toLowerCase()) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCount: {
            ...user.taskCount,
            newTask: (user.taskCount?.newTask || 0) + 1,
            active: (user.taskCount?.active || 0) + 1,
          },
         
        };
      }
      return user;
    });
    console.log(updatedUserData);

    setUserData(updatedUserData);
    //  console.log(data)
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    //reset formmm
    setAsignTo("");
    setCategory("");
    setTaskDate("");
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <div className="text-white mb-8 max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl">
      <form onSubmit={(e) => submitHandler(e)} className="space-y-6">
        <h3 className="text-3xl font-bold text-center">Create a New Task</h3>

        <div className="relative">
          <label htmlFor="task-title" className="block text-lg font-medium">
            Task Title
          </label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            id="task-title"
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ease-in-out duration-300"
            placeholder="Make UI design"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="task-description"
            className="block text-lg font-medium"
          >
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            id="task-description"
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ease-in-out duration-300"
            placeholder="Describe the task"
            rows="6"
          ></textarea>
        </div>

        <div className="relative">
          <label htmlFor="task-date" className="block text-lg font-medium">
            Date
          </label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            id="task-date"
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ease-in-out duration-300"
          />
        </div>

        <div className="relative">
          <label htmlFor="employee-name" className="block text-lg font-medium">
            Assign to
          </label>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            type="text"
            id="employee-name"
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ease-in-out duration-300"
            placeholder="Employee Name"
          />
        </div>

        <div className="relative">
          <label htmlFor="task-category" className="block text-lg font-medium">
            Category
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            id="task-category"
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ease-in-out duration-300"
            placeholder="Design/Dev, etc.."
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transition ease-in-out duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
