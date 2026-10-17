const students = [
  {
    id: 1,
    initials: "KA",
    studentId: "STU-1010",
    name: "Kamlesh Chandela",
    status: "Active Student",
    department: "Computer Science",
    studyYear: "3rd Year (Junior)",
    email: "kamlesh.chandela@gmail.com",
    enrolled: "Fall 2022",
    about:
      "Passionate computer science student interested in software development, distributed systems, and modern web technologies. Enjoys solving programming problems and building practical applications.",
    academicDetails: {
      department: "Computer Science",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "CS-301",
        name: "Distributed Systems & Microservices",
        category: "Microservices",
      },
      {
        code: "CS-302",
        name: "Database Management Systems",
        category: "Database",
      },
      {
        code: "CS-303",
        name: "Operating Systems",
        category: "Systems",
      },
    ],
  },
  {
    id: 2,
    initials: "RS",
    studentId: "STU-1011",
    name: "Rahul Sharma",
    status: "Active Student",
    department: "Information Technology",
    studyYear: "4th Year (Senior)",
    email: "rahul.sharma@gmail.com",
    enrolled: "Fall 2021",
    about:
      "An enthusiastic IT student focused on networking, cloud computing, and full-stack development. Interested in designing secure and scalable applications.",
    academicDetails: {
      department: "Information Technology",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "IT-401",
        name: "Cloud Computing",
        category: "Cloud",
      },
      {
        code: "IT-402",
        name: "Computer Networks",
        category: "Networking",
      },
      {
        code: "IT-403",
        name: "Web Application Development",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    initials: "AP",
    studentId: "STU-1012",
    name: "Ankit Patel",
    status: "Active Student",
    department: "Mechanical Engineering",
    studyYear: "2nd Year (Sophomore)",
    email: "ankit.patel@gmail.com",
    enrolled: "Fall 2023",
    about:
      "A motivated mechanical engineering student interested in machine design, manufacturing processes, and robotics. Enjoys practical projects and engineering experiments.",
    academicDetails: {
      department: "Mechanical Engineering",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "ME-201",
        name: "Engineering Mechanics",
        category: "Mechanics",
      },
      {
        code: "ME-202",
        name: "Thermodynamics",
        category: "Thermal",
      },
      {
        code: "ME-203",
        name: "Machine Drawing",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    initials: "PS",
    studentId: "STU-1013",
    name: "Priya Shah",
    status: "Active Student",
    department: "Computer Science",
    studyYear: "3rd Year (Junior)",
    email: "priya.shah@gmail.com",
    enrolled: "Fall 2022",
    about:
      "A creative computer science student passionate about artificial intelligence, user interface design, and frontend development. Interested in building accessible digital products.",
    academicDetails: {
      department: "Computer Science",
      currentStanding: "Excellent Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "CS-301",
        name: "Artificial Intelligence",
        category: "AI",
      },
      {
        code: "CS-302",
        name: "Data Structures & Algorithms",
        category: "Algorithms",
      },
      {
        code: "CS-303",
        name: "Human Computer Interaction",
        category: "UI/UX",
      },
    ],
  },
  {
    id: 5,
    initials: "NJ",
    studentId: "STU-1014",
    name: "Neha Joshi",
    status: "Active Student",
    department: "Civil Engineering",
    studyYear: "3rd Year (Junior)",
    email: "neha.joshi@gmail.com",
    enrolled: "Fall 2022",
    about:
      "A dedicated civil engineering student interested in sustainable construction, structural engineering, and modern infrastructure. Enjoys learning about environmentally friendly building methods.",
    academicDetails: {
      department: "Civil Engineering",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "CE-301",
        name: "Structural Analysis",
        category: "Structures",
      },
      {
        code: "CE-302",
        name: "Geotechnical Engineering",
        category: "Geotechnical",
      },
      {
        code: "CE-303",
        name: "Environmental Engineering",
        category: "Environment",
      },
    ],
  },
  {
    id: 6,
    initials: "VM",
    studentId: "STU-1015",
    name: "Vikas Mehta",
    status: "Active Student",
    department: "Information Technology",
    studyYear: "4th Year (Senior)",
    email: "vikas.mehta@gmail.com",
    enrolled: "Fall 2021",
    about:
      "A senior IT student interested in cybersecurity, data analytics, and software engineering. Focused on developing reliable applications and learning emerging technologies.",
    academicDetails: {
      department: "Information Technology",
      currentStanding: "Excellent Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "IT-401",
        name: "Cybersecurity Fundamentals",
        category: "Security",
      },
      {
        code: "IT-402",
        name: "Big Data Analytics",
        category: "Analytics",
      },
      {
        code: "IT-403",
        name: "Software Engineering",
        category: "Development",
      },
    ],
  },
];



export default students ; 