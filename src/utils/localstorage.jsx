const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile and submit the monthly sales report.",
        date: "2024-01-15",
        category: "Reports"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Organize team meeting",
        description: "Schedule and conduct a meeting with the team.",
        date: "2024-01-10",
        category: "Meetings"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update client database",
        description: "Ensure all client records are up-to-date.",
        date: "2024-01-18",
        category: "Data Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Review contracts",
        description: "Go through and finalize client contracts.",
        date: "2024-01-12",
        category: "Contracts"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix website issues",
        description: "Resolve reported bugs on the company website.",
        date: "2024-01-08",
        category: "Technical"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create marketing campaign",
        description: "Plan and execute a new marketing strategy.",
        date: "2024-01-20",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Check inventory",
        description: "Verify stock levels in the warehouse.",
        date: "2024-01-05",
        category: "Inventory"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update training manual",
        description: "Revise the manual for new employees.",
        date: "2024-01-22",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Prepare budget forecast",
        description: "Estimate budget for Q2.",
        date: "2024-01-17",
        category: "Finance"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Test new software",
        description: "Conduct testing for the new CRM software.",
        date: "2024-01-25",
        category: "Software Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Schedule interviews",
        description: "Set up interviews for new applicants.",
        date: "2024-01-28",
        category: "HR"
      }
    ]
  }
];


const admin = [ {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }]


  export const setLocalStorage = ()=>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{
      const employees = JSON.parse(localStorage.getItem('employees'))
      const admin = JSON.parse(localStorage.getItem('admin'))
      return {employees,admin}
  }

      