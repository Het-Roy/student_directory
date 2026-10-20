const students = [
  {
    id: 1,
    initials: "AS",
    studentId: "STU-2401",
    name: "Aarav Singhania",
    status: "Active Scholar",
    department: "Computer Science",
    studyYear: "3rd Year (Junior)",
    email: "aarav.singhania@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Specializing in distributed computing and high-throughput systems. Actively developing open-source cloud telemetry tools and contributing to edge architecture research.",
    academicDetails: {
      department: "Computer Science",
      currentStanding: "Dean's Honor List (3.92 GPA)",
    },
    enrolledSubjects: [
      {
        code: "CS-310",
        name: "Distributed Systems & Cloud Orchestration",
        category: "Cloud Architecture",
      },
      {
        code: "CS-324",
        name: "Advanced Database Kernel Internals",
        category: "Database Systems",
      },
      {
        code: "CS-340",
        name: "Kernel Programming & Concurrency",
        category: "Systems Engineering",
      },
    ],
  },
  {
    id: 2,
    initials: "ZM",
    studentId: "STU-2402",
    name: "Zoya Merchant",
    status: "Active Student",
    department: "Information Technology",
    studyYear: "4th Year (Senior)",
    email: "zoya.merchant@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Passionate about zero-trust cybersecurity frameworks, ethical penetration testing, and container vulnerability audits. President of the University Cyber Defense Club.",
    academicDetails: {
      department: "Information Technology",
      currentStanding: "Distinction Standing (3.88 GPA)",
    },
    enrolledSubjects: [
      {
        code: "IT-412",
        name: "Enterprise Zero-Trust Architectures",
        category: "Cybersecurity",
      },
      {
        code: "IT-420",
        name: "Offensive Security & Network Defense",
        category: "Network Defense",
      },
      {
        code: "IT-435",
        name: "DevSecOps & Automated Security Pipelines",
        category: "DevOps",
      },
    ],
  },
  {
    id: 3,
    initials: "RK",
    studentId: "STU-2403",
    name: "Rohan Kulkarni",
    status: "Active Student",
    department: "Mechanical Engineering",
    studyYear: "2nd Year (Sophomore)",
    email: "rohan.kulkarni@campus.edu",
    enrolled: "Fall 2024",
    about:
      "Focused on autonomous robotic locomotion, multi-axis actuators, and generative CAD modeling. Working on assistive exoskeleton prototypes in the Mechatronics Lab.",
    academicDetails: {
      department: "Mechanical Engineering",
      currentStanding: "Good Academic Standing (3.75 GPA)",
    },
    enrolledSubjects: [
      {
        code: "ME-215",
        name: "Kinematics & Multi-Body Dynamics",
        category: "Robotics & Controls",
      },
      {
        code: "ME-230",
        name: "Applied Fluid Mechanics & Heat Engines",
        category: "Thermal Systems",
      },
      {
        code: "ME-245",
        name: "Additive Manufacturing & Finite Element Analysis",
        category: "Mechanical Design",
      },
    ],
  },
  {
    id: 4,
    initials: "MI",
    studentId: "STU-2404",
    name: "Maya Iyer",
    status: "Research Fellow",
    department: "Computer Science",
    studyYear: "4th Year (Senior)",
    email: "maya.iyer@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Investigating multilingual generative language models, multimodal embeddings, and low-resource NLP tokenizers. Co-authored two papers on transformer inference efficiency.",
    academicDetails: {
      department: "Computer Science",
      currentStanding: "Presidential Merit Scholar (3.97 GPA)",
    },
    enrolledSubjects: [
      {
        code: "CS-451",
        name: "Deep Generative Models & Transformers",
        category: "Machine Learning",
      },
      {
        code: "CS-462",
        name: "Scalable Data Analytics Pipelines",
        category: "Big Data",
      },
      {
        code: "CS-470",
        name: "Neuromorphic Computing & Cognitive Architectures",
        category: "Artificial Intelligence",
      },
    ],
  },
  {
    id: 5,
    initials: "TA",
    studentId: "STU-2405",
    name: "Tanvi Agarwal",
    status: "Active Student",
    department: "Civil Engineering",
    studyYear: "3rd Year (Junior)",
    email: "tanvi.agarwal@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Devoted to low-carbon structural concrete innovations, seismic resilience engineering, and smart city sensor grids for sustainable urban infrastructure.",
    academicDetails: {
      department: "Civil Engineering",
      currentStanding: "Good Academic Standing (3.82 GPA)",
    },
    enrolledSubjects: [
      {
        code: "CE-315",
        name: "Advanced Reinforced Concrete Structures",
        category: "Structural Analysis",
      },
      {
        code: "CE-332",
        name: "Smart Water Reticulation & Hydrology",
        category: "Environmental Systems",
      },
      {
        code: "CE-350",
        name: "Geotechnical Foundations & Soil Stabilization",
        category: "Geotechnical",
      },
    ],
  },
  {
    id: 6,
    initials: "KV",
    studentId: "STU-2406",
    name: "Kabir Varma",
    status: "Active Student",
    department: "Information Technology",
    studyYear: "3rd Year (Junior)",
    email: "kabir.varma@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Specializing in hybrid cloud deployments, Kubernetes multi-cluster networking, and serverless architectures with automated observability.",
    academicDetails: {
      department: "Information Technology",
      currentStanding: "Good Academic Standing (3.71 GPA)",
    },
    enrolledSubjects: [
      {
        code: "IT-310",
        name: "Cloud-Native Infrastructure & Mesh Services",
        category: "Cloud Engineering",
      },
      {
        code: "IT-325",
        name: "Distributed Storage Systems & Disaster Recovery",
        category: "Enterprise Storage",
      },
      {
        code: "IT-340",
        name: "Observability, Telemetry & SRE Protocols",
        category: "Site Reliability",
      },
    ],
  },
  {
    id: 7,
    initials: "EC",
    studentId: "STU-2407",
    name: "Elena Chen",
    status: "Active Student",
    department: "Mechanical Engineering",
    studyYear: "3rd Year (Junior)",
    email: "elena.chen@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Pioneering solid-state battery thermal management and electric vehicle chassis aerodynamics. Captain of the Formula Student Electric Racing Team.",
    academicDetails: {
      department: "Mechanical Engineering",
      currentStanding: "Dean's Honor List (3.89 GPA)",
    },
    enrolledSubjects: [
      {
        code: "ME-312",
        name: "Electric Powertrain Dynamics & Inverters",
        category: "Automotive Systems",
      },
      {
        code: "ME-328",
        name: "Computational Fluid Dynamics for Aerodynamics",
        category: "Thermal Fluids",
      },
      {
        code: "ME-360",
        name: "Composite Materials & Lightweight Structures",
        category: "Materials Science",
      },
    ],
  },
  {
    id: 8,
    initials: "DN",
    studentId: "STU-2408",
    name: "Devrat Nair",
    status: "Active Student",
    department: "Civil Engineering",
    studyYear: "4th Year (Senior)",
    email: "devrat.nair@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Specializing in BIM (Building Information Modeling), digital twin municipal infrastructure, and geotechnical hazard mitigation for high-density coastal regions.",
    academicDetails: {
      department: "Civil Engineering",
      currentStanding: "First Class Honors (3.84 GPA)",
    },
    enrolledSubjects: [
      {
        code: "CE-420",
        name: "Digital Twins & 5D BIM in Construction",
        category: "Project Management",
      },
      {
        code: "CE-435",
        name: "Coastal Geotechnics & Flood Barrier Engineering",
        category: "Geotechnical",
      },
      {
        code: "CE-450",
        name: "Seismic Retrofit & Structural Health Monitoring",
        category: "Structural Safety",
      },
    ],
  },
];

export default students;