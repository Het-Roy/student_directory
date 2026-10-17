const departmentData = [
  {
    id: 1,
    departmentId: 1,
    department: "Computer Science",
    specializationCount: 4,
    studentCount: 8,
    name: "Web Development",
    code: "CS-SPEC-04",
    description:
      "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
    academicLead: "Prof. Elena Vance",
    primaryCoreLab: "Turing Hall 408",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 2,
    departmentId: 1,
    department: "Computer Science",
    specializationCount: 4,
    studentCount: 8,
    name: "Artificial Intelligence",
    code: "CS-SPEC-01",
    description:
      "Focusing on machine learning, neural networks, intelligent systems, and natural language processing.",
    academicLead: "Prof. Alan Brooks",
    primaryCoreLab: "AI Research Lab 210",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 3,
    departmentId: 1,
    department: "Computer Science",
    specializationCount: 4,
    studentCount: 8,
    name: "Software Engineering",
    code: "CS-SPEC-02",
    description:
      "Focusing on software architecture, application development, testing, and scalable engineering practices.",
    academicLead: "Prof. Daniel Reed",
    primaryCoreLab: "Software Lab 305",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 4,
    departmentId: 1,
    department: "Computer Science",
    specializationCount: 4,
    studentCount: 8,
    name: "Data Science",
    code: "CS-SPEC-03",
    description:
      "Focusing on data analytics, statistical modelling, big data technologies, and predictive systems.",
    academicLead: "Prof. Sarah Wilson",
    primaryCoreLab: "Data Science Lab 202",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 5,
    departmentId: 2,
    department: "Information Technology",
    specializationCount: 4,
    studentCount: 3,
    name: "Cloud Computing",
    code: "IT-SPEC-01",
    description:
      "Focusing on cloud infrastructure, distributed deployment, virtualization, and scalable cloud services.",
    academicLead: "Prof. Michael Scott",
    primaryCoreLab: "Cloud Lab 310",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 6,
    departmentId: 2,
    department: "Information Technology",
    specializationCount: 4,
    studentCount: 3,
    name: "Network Engineering",
    code: "IT-SPEC-02",
    description:
      "Focusing on computer networks, routing protocols, network administration, and communication systems.",
    academicLead: "Prof. James Carter",
    primaryCoreLab: "Networking Lab 115",
    curriculumCycle: "2024–2025 Revised",
    students:  [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 7,
    departmentId: 2,
    department: "Information Technology",
    specializationCount: 4,
    studentCount: 3,
    name: "Web Development",
    code: "IT-SPEC-03",
    description:
      "Focusing on responsive web applications, frontend frameworks, backend APIs, and database integration.",
    academicLead: "Prof. Elena Vance",
    primaryCoreLab: "Web Lab 208",
    curriculumCycle: "2024–2025 Revised",
    students:  [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 8,
    departmentId: 2,
    department: "Information Technology",
    specializationCount: 4,
    studentCount: 3,
    name: "Information Security",
    code: "IT-SPEC-04",
    description:
      "Focusing on cybersecurity, application security, threat analysis, and secure information systems.",
    academicLead: "Prof. Robert Hayes",
    primaryCoreLab: "Security Lab 402",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 9,
    departmentId: 3,
    department: "Mechanical Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Robotics",
    code: "ME-SPEC-01",
    description:
      "Focusing on robotic systems, automation, control systems, and intelligent machine design.",
    academicLead: "Prof. Henry Adams",
    primaryCoreLab: "Robotics Lab 120",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 10,
    departmentId: 3,
    department: "Mechanical Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Automotive Engineering",
    code: "ME-SPEC-02",
    description:
      "Focusing on vehicle design, automotive systems, powertrains, and electric mobility.",
    academicLead: "Prof. David Miller",
    primaryCoreLab: "Automotive Lab 215",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 11,
    departmentId: 3,
    department: "Mechanical Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Thermal Engineering",
    code: "ME-SPEC-03",
    description:
      "Focusing on thermodynamics, heat transfer, energy systems, and thermal equipment design.",
    academicLead: "Prof. Richard Clark",
    primaryCoreLab: "Thermal Lab 108",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 12,
    departmentId: 3,
    department: "Mechanical Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Manufacturing Engineering",
    code: "ME-SPEC-04",
    description:
      "Focusing on production systems, advanced manufacturing, materials, and industrial automation.",
    academicLead: "Prof. Thomas Green",
    primaryCoreLab: "Manufacturing Lab 220",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 13,
    departmentId: 4,
    department: "Civil Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Structural Engineering",
    code: "CE-SPEC-01",
    description:
      "Focusing on structural analysis, building design, construction materials, and infrastructure safety.",
    academicLead: "Prof. William Harris",
    primaryCoreLab: "Structures Lab 130",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 14,
    departmentId: 4,
    department: "Civil Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Geotechnical Engineering",
    code: "CE-SPEC-02",
    description:
      "Focusing on soil mechanics, foundation design, ground investigation, and geotechnical analysis.",
    academicLead: "Prof. George Martin",
    primaryCoreLab: "Geotechnical Lab 112",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 15,
    departmentId: 4,
    department: "Civil Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Environmental Engineering",
    code: "CE-SPEC-03",
    description:
      "Focusing on water treatment, pollution control, waste management, and sustainable infrastructure.",
    academicLead: "Prof. Emily Foster",
    primaryCoreLab: "Environmental Lab 205",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
  {
    id: 16,
    departmentId: 4,
    department: "Civil Engineering",
    specializationCount: 4,
    studentCount: 1,
    name: "Construction Management",
    code: "CE-SPEC-04",
    description:
      "Focusing on construction planning, project scheduling, cost estimation, and site management.",
    academicLead: "Prof. Andrew Lewis",
    primaryCoreLab: "Construction Lab 118",
    curriculumCycle: "2024–2025 Revised",
    students: [
      1, 3, 5, 6
    ] , 
  },
];

export default departmentData;