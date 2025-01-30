const employees = [
    {
      id: 1,
      firstName: "Amit",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          taskDescription: "Complete the quarterly report.",
          taskDate: "2025-01-30",
          taskTitle: "Report Submission",
          category: "Work",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskDescription: "Organize team meeting for project planning.",
          taskDate: "2025-02-02",
          taskTitle: "Team Meeting",
          category: "Work",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskDescription: "Review project deliverables.",
          taskDate: "2025-02-05",
          taskTitle: "Project Review",
          category: "Work",
        },
      ],
      taskCount: {
        active: 3,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 2,
      firstName: "Priya",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskDescription: "Fix the bug in the login page.",
          taskDate: "2025-01-28",
          taskTitle: "Bug Fix",
          category: "Development",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskDescription: "Refactor code for better readability.",
          taskDate: "2025-02-01",
          taskTitle: "Code Refactoring",
          category: "Development",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskDescription: "Implement authentication module.",
          taskDate: "2025-01-25",
          taskTitle: "Authentication Implementation",
          category: "Development",
        },
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 3,
      firstName: "Rohit",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskDescription: "Design the homepage layout.",
          taskDate: "2025-01-29",
          taskTitle: "Homepage Design",
          category: "Design",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskDescription: "Create logo concepts for branding.",
          taskDate: "2025-02-03",
          taskTitle: "Logo Design",
          category: "Design",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskDescription: "Revise the design of the about page.",
          taskDate: "2025-01-26",
          taskTitle: "About Page Revision",
          category: "Design",
        },
      ],
      taskCount: {
        active: 1,
        newTask: 1,
        completed: 2,
        failed: 0,
      },
    },
    {
      id: 4,
      firstName: "Meera",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskDescription: "Update the product catalog.",
          taskDate: "2025-02-01",
          taskTitle: "Catalog Update",
          category: "Marketing",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskDescription: "Plan social media campaign.",
          taskDate: "2025-01-28",
          taskTitle: "Campaign Planning",
          category: "Marketing",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskDescription: "Analyze competitor strategies.",
          taskDate: "2025-02-05",
          taskTitle: "Competitor Analysis",
          category: "Marketing",
        },
      ],
      taskCount: {
        active: 2,
        newTask: 2,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 5,
      firstName: "Anjali",
      email: "e@e.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskDescription: "Prepare presentation slides.",
          taskDate: "2025-01-27",
          taskTitle: "Presentation Preparation",
          category: "Sales",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskDescription: "Schedule client follow-up calls.",
          taskDate: "2025-02-03",
          taskTitle: "Client Follow-up",
          category: "Sales",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskDescription: "Submit monthly sales report.",
          taskDate: "2025-01-25",
          taskTitle: "Sales Report Submission",
          category: "Sales",
        },
      ],
      taskCount: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1,
      },
    },
  ];
  
    const admin = [{
            "id": 1,
            "email": "admin@example.com",
            "password": "123"}, 
    ]
  

    export const setLocalStorage = ()=>{
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('admin',JSON.stringify(admin));
    }

    export const getLocalStorage = ()=>{
        const employees  = JSON.parse(localStorage.getItem('employees'));
        
        const admin = JSON.parse(localStorage.getItem('admin'));
return {employees, admin}
        // console.log([...admin,...employees])
    }