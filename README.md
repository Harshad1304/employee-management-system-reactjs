# Employee Management System with Admin and Employee Dashboards

![Preview Image](/public/screenshots/employeeDashboard.png)

![Preview Image](/public/screenshots/adminDashboard.png)

![Preview Image](/public/screenshots/employeStatus.png)

## Overview
This project is an **Employee Management System** built with **ReactJS** and styled using **Tailwind CSS**. The application allows an **Admin** to assign tasks to employees and provides employees with a dashboard to manage and track their tasks. The system uses **localStorage** to store and retrieve data, such as employee details, tasks, and admin login information.The UI was further enhanced using **Deepseak** and **ChatGPT** to improve its overall appearance .

## Features

### Admin Dashboard
- **Assign Tasks to Employees**: Admin can assign tasks to employees by selecting their names.
- **View Employee Information**: Admin can see a list of all employees and their task progress.
- **Task Management**: Admin can view active, completed, and failed tasks assigned to each employee.

### Employee Dashboard
- **View Assigned Tasks**: Employees can view a list of their tasks.
- **Task Statistics**: Employees can see the number of active, new, completed, and failed tasks.
- **Filter Tasks**: Employees can filter their tasks by category (Active, Completed, Failed, New).
- **Task Status Update**: Employees can see and update their task status directly from their dashboard (e.g., mark a task as completed, failed, etc.).

## Technologies Used
- **ReactJS**: For building the front-end UI.
- **Tailwind CSS**: For styling the components.
- **localStorage**: To store employee data, task assignments, and login credentials persistently in the browser.

## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/harshad1304/employee-management-system-reactjs.git
    ```

2. **Install dependencies**:
    ```bash
    cd employee-management-system-reactjs
    npm install
    ```

3. **Run the project**:
    ```bash
    npm run dev
    ```

4. Open `http://localhost:adress` in your browser to view the app.

## Login Credentials

### Admin
- **Email**: `admin@me.com`
- **Password**: `123`

### Employees
- **Employee 1**:
  - **Email**: `employee1@example.com`
  - **Password**: `123`
  
- **Employee 2**:
  - **Email**: `employee2@example.com`
  - **Password**: `123`
  
- **Employee 3**:
  - **Email**: `employee3@example.com`
  - **Password**: `123`
  
- **Employee 4**:
  - **Email**: `employee4@example.com`
  - **Password**: `123`
  
- **Employee 5**:
  - **Email**: `e@e.com`
  - **Password**: `123`

## LocalStorage Data

The application stores the following data in the browser's localStorage:
- **Employees**: Information about the employees, including their tasks and task progress.
- **Admin**: Login credentials for the admin.

### Functions for Storing and Retrieving Data

```javascript
const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}
```
# How It Works

## Admin Dashboard:
- Admin can view all employees and their tasks.
- Admin assigns tasks to employees, which will be reflected in the employee dashboard.

## Employee Dashboard:
- Employees can view their assigned tasks, filtered by categories such as active, completed, failed, and new.
- Task statistics (e.g., number of active tasks, completed tasks) are displayed on the dashboard.

# Future Enhancements

- Implement user authentication and authorization using a backend.
- Add more detailed task management features (e.g., task deadlines, comments, and attachments).
- Implement role-based access (e.g., limit access to the admin dashboard for non-admin users).