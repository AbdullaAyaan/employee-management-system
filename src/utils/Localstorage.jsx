const employees= [
    {
      "id": 1,
      "email": "john.smith@company.com",
      "password": "123",
      "name":"John Doe",
      "photo": "https://randomuser.me/api/portraits/men/32.jpg",
      "role": "Frontend Developer",
      "about": "Experienced Frontend Developer with 6+ years of expertise in building responsive and user-friendly web applications. Skilled in React, JavaScript, TypeScript, and modern CSS frameworks. Passionate about creating intuitive user interfaces and optimizing application performance.",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Login Bug",
          "taskDescription": "Resolve the login issue affecting Firefox users.",
          "taskDate": "2026-07-10",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update README",
          "taskDescription": "Add project setup instructions to the README.",
          "taskDate": "2026-07-05",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Optimize API",
          "taskDescription": "Reduce response time for the user API.",
          "taskDate": "2026-07-12",
          "category": "Backend"
        }
      ]
    },
    {
      "id": 2,
      "email": "emma.johnson@company.com",
      "password": "456",
      "name":"Emma Johnson",
      "photo": "https://randomuser.me/api/portraits/women/44.jpg",
      "role": "UI/UX Designer",
      "about": "Creative UI/UX Designer with over 5 years of experience designing modern digital products. Specializes in user research, wireframing, prototyping, and creating visually appealing interfaces that improve user engagement and accessibility.",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Dashboard",
          "taskDescription": "Create a responsive dashboard layout.",
          "taskDate": "2026-07-11",
          "category": "UI/UX"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Logo Update",
          "taskDescription": "Replace the old company logo across the app.",
          "taskDate": "2026-07-02",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Landing Page",
          "taskDescription": "Finish landing page redesign.",
          "taskDate": "2026-07-03",
          "category": "UI/UX"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Dark Mode",
          "taskDescription": "Prepare dark mode color palette.",
          "taskDate": "2026-07-15",
          "category": "Design"
        }
      ]
    },
    {
      "id": 3,
      "email": "liam.williams@company.com",
      "password": "789",
      "name":"Liam Williams",
      "photo": "https://randomuser.me/api/portraits/men/68.jpg",
      "role": "Senior Backend Developer",
      "about": "Senior Backend Developer specializing in building scalable APIs and cloud infrastructure. Possesses over 10 years of experience in Node.js, microservices architecture, database design, and distributed systems. Passionate about writing clean, maintainable code and delivering high-performance backend solutions.",
      "tasks": [
        {
          "active":false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Database Backup",
          "taskDescription": "Perform weekly database backup.",
          "taskDate": "2026-07-10",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Index Optimization",
          "taskDescription": "Optimize indexes for faster queries.",
          "taskDate": "2026-07-14",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Server Cleanup",
          "taskDescription": "Remove unused logs from the server.",
          "taskDate": "2026-07-01",
          "category": "Maintenance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Migration",
          "taskDescription": "Migrate user data to the new schema.",
          "taskDate": "2026-07-04",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Security Audit",
          "taskDescription": "Review database permissions.",
          "taskDate": "2026-07-18",
          "category": "Security"
        }
      ]
    },
    {
      "id": 4,
      "email": "olivia.brown@company.com",
      "password": "123",
      "name":"Olivia Brown",
      "photo": "https://randomuser.me/api/portraits/women/29.jpg",
      "role": "Full Stack Developer",
      "about": "Full Stack Developer with 7+ years of experience developing end-to-end web applications using React, Node.js, Express, and MongoDB. Enjoys solving complex technical challenges and collaborating with cross-functional teams to deliver high-quality software.",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Increase code coverage to 90%.",
          "taskDate": "2026-07-10",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Navbar",
          "taskDescription": "Correct alignment issues on mobile.",
          "taskDate": "2026-07-06",
          "category": "Frontend"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Accessibility",
          "taskDescription": "Improve keyboard navigation.",
          "taskDate": "2026-07-13",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Animation Update",
          "taskDescription": "Add page transition animations.",
          "taskDate": "2026-07-07",
          "category": "Frontend"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Bug Review",
          "taskDescription": "Verify reported UI bugs.",
          "taskDate": "2026-07-16",
          "category": "QA"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Component Refactor",
          "taskDescription": "Refactor reusable button component.",
          "taskDate": "2026-07-08",
          "category": "Frontend"
        }
      ]
    },
    {
      "id": 5,
      "email": "noah.davis@company.com",
      "password": "123",
      "name":"Noah Davis",
      "photo": "https://randomuser.me/api/portraits/men/51.jpg",
      "role": "DevOps Engineer",
      "about": "DevOps Engineer with extensive experience in AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation. Dedicated to improving deployment reliability, system scalability, and monitoring to ensure highly available production environments.",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Deploy Release",
          "taskDescription": "Deploy version 2.5 to production.",
          "taskDate": "2026-07-11",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "CI Pipeline",
          "taskDescription": "Configure GitHub Actions workflow.",
          "taskDate": "2026-07-03",
          "category": "DevOps"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Docker Cleanup",
          "taskDescription": "Remove unused Docker images.",
          "taskDate": "2026-07-12",
          "category": "Infrastructure"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "SSL Renewal",
          "taskDescription": "Renew expired SSL certificate.",
          "taskDate": "2026-07-01",
          "category": "Security"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Monitor Servers",
          "taskDescription": "Check CPU and memory usage.",
          "taskDate": "2026-07-14",
          "category": "Monitoring"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Nginx Config",
          "taskDescription": "Update reverse proxy settings.",
          "taskDate": "2026-07-09",
          "category": "Infrastructure"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Kubernetes Check",
          "taskDescription": "Review cluster health and pods.",
          "taskDate": "2026-07-17",
          "category": "Cloud"
        }
      ]
    }
  ];
  const admin=[{
    "id": 101,
    "email": "admin@company.com",
    "password": "123"
  }]

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage=()=>{
  const employee=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return([employee,admin]);
}