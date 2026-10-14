// Detailed Semester-by-Semester Academic Results for B.Sc. in Mechanical Engineering
// Source: Official CUET Academic Transcript (Md. Jubair Uddin Zidan)

export const bscSummaryData = {
  finalCgpa: 3.29,
  maxCgpa: 4.00,
  last4SemestersGpa: 3.41,
  totalCredits: 161.50,
  totalCourses: 74,
  classification: [
    { type: "Theory", courses: 40, credits: 127.00 },
    { type: "Lab / Practical", courses: 32, credits: 31.50 },
    { type: "Project and Thesis", courses: 2, credits: 3.00 },
  ],
  semestersOverview: [
    { sem: 1, levelTerm: "Level 1 / Term I", session: "2018–2019", gpa: 3.30, credits: 16.50 },
    { sem: 2, levelTerm: "Level 1 / Term II", session: "2018–2019", gpa: 2.75, credits: 13.50 },
    { sem: 3, levelTerm: "Level 2 / Term I", session: "2019–2020", gpa: 3.82, credits: 20.50 },
    { sem: 4, levelTerm: "Level 2 / Term II", session: "2019–2020", gpa: 2.95, credits: 20.50 },
    { sem: 5, levelTerm: "Level 3 / Term I", session: "2020–2021", gpa: 3.53, credits: 20.25 },
    { sem: 6, levelTerm: "Level 3 / Term II", session: "2020–2021", gpa: 3.29, credits: 18.00 },
    { sem: 7, levelTerm: "Level 4 / Term I", session: "2021–2022", gpa: 3.45, credits: 20.75 },
    { sem: 8, levelTerm: "Level 4 / Term II", session: "2021–2022", gpa: 3.37, credits: 20.50 },
  ]
};

export const bscSemesterResults = [
  {
    id: 1,
    semesterNumber: "Semester 01",
    term: "Level 1 · Term I",
    session: "2018–2019",
    gpa: 3.30,
    credits: 16.50,
    courses: [
      { code: "Chem131", title: "Chemistry", type: "Theory", ch: "3.00", grade: "C+", gp: "2.50" },
      { code: "Hum131", title: "Sociology and Industrial Psychology", type: "Theory", ch: "3.00", grade: "B+", gp: "3.25" },
      { code: "Math131", title: "Calculus and Geometry", type: "Theory", ch: "4.00", grade: "C+", gp: "2.50" },
      { code: "ME111", title: "Thermal Engineering", type: "Theory", ch: "3.00", grade: "A+", gp: "4.00" },
      { code: "Phy131", title: "Physics-I", type: "Theory", ch: "3.00", grade: "B", gp: "3.00" },
      { code: "Chem132", title: "Chemistry (Sessional)", type: "Lab", ch: "1.50", grade: "B+", gp: "3.25" },
      { code: "ME112", title: "Thermal Engineering (Sessional)", type: "Lab", ch: "0.75", grade: "A-", gp: "3.50" },
      { code: "ME152", title: "Welding and Foundry (Sessional)", type: "Lab", ch: "0.75", grade: "A-", gp: "3.50" },
      { code: "ME172", title: "Mechanical Drawing and Auto CAD", type: "Lab", ch: "1.50", grade: "A+", gp: "4.00" },
    ]
  },
  {
    id: 2,
    semesterNumber: "Semester 02",
    term: "Level 1 · Term II",
    session: "2018–2019",
    gpa: 2.75,
    credits: 13.50,
    courses: [
      { code: "Chem133", title: "Chemistry of Corrosion, Environment and Materials", type: "Theory", ch: "3.00", grade: "A-", gp: "3.50" },
      { code: "EE131", title: "Electrical Circuits and Machines", type: "Theory", ch: "4.00", grade: "B", gp: "3.00" },
      { code: "Math133", title: "Differential Equations and Vector Calculus", type: "Theory", ch: "3.00", grade: "B-", gp: "2.75" },
      { code: "ME181", title: "Computing Basics", type: "Theory", ch: "3.00", grade: "D", gp: "2.00" },
      { code: "Phy133", title: "Physics-II", type: "Theory", ch: "3.00", grade: "D", gp: "2.00" },
      { code: "EE132", title: "Electrical Circuits and Machines (Sessional)", type: "Lab", ch: "0.75", grade: "A-", gp: "3.50" },
      { code: "ME154", title: "Machine and Fitting Shop", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME182", title: "Computer Programming (Sessional)", type: "Lab", ch: "1.50", grade: "C+", gp: "2.50" },
      { code: "Phy134", title: "Physics (Sessional)", type: "Lab", ch: "1.50", grade: "A-", gp: "3.50" },
    ]
  },
  {
    id: 3,
    semesterNumber: "Semester 03",
    term: "Level 2 · Term I",
    session: "2019–2020",
    gpa: 3.82,
    credits: 20.50,
    courses: [
      { code: "Hum231", title: "Technical English and Communication Skill", type: "Theory", ch: "3.00", grade: "A-", gp: "3.50" },
      { code: "Math231", title: "Statistical Analysis and Complex Variable", type: "Theory", ch: "3.00", grade: "A-", gp: "3.50" },
      { code: "ME211", title: "Thermodynamics", type: "Theory", ch: "3.00", grade: "A+", gp: "4.00" },
      { code: "ME231", title: "Engineering Mechanics-I", type: "Theory", ch: "3.00", grade: "A", gp: "3.75" },
      { code: "ME251", title: "Production Process", type: "Theory", ch: "4.00", grade: "A+", gp: "4.00" },
      { code: "Hum232", title: "Technical English and Communication Skill (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME212", title: "Thermodynamics (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME232", title: "Engineering Mechanics-I (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME252", title: "Production Process (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME272", title: "CAD and Design Softwares", type: "Lab", ch: "1.50", grade: "A+", gp: "4.00" },
    ]
  },
  {
    id: 4,
    semesterNumber: "Semester 04",
    term: "Level 2 · Term II",
    session: "2019–2020",
    gpa: 2.95,
    credits: 20.50,
    courses: [
      { code: "EE231", title: "Electronics and Microprocessor", type: "Theory", ch: "4.00", grade: "D", gp: "2.00" },
      { code: "Hum233", title: "Economics", type: "Theory", ch: "2.00", grade: "A-", gp: "3.50" },
      { code: "Math233", title: "Operational Calculus and Matrix", type: "Theory", ch: "4.00", grade: "B+", gp: "3.25" },
      { code: "ME233", title: "Engineering Mechanics-II", type: "Theory", ch: "3.00", grade: "C+", gp: "2.50" },
      { code: "ME235", title: "Mechanics of Solids", type: "Theory", ch: "3.00", grade: "B-", gp: "2.75" },
      { code: "EE232", title: "Electronics and Microprocessor (Sessional)", type: "Lab", ch: "1.50", grade: "A-", gp: "3.50" },
      { code: "ME234", title: "Engineering Mechanics-II (Sessional)", type: "Lab", ch: "0.75", grade: "A", gp: "3.75" },
      { code: "ME236", title: "Mechanics of Solids (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME282", title: "MATLAB", type: "Lab", ch: "1.50", grade: "A", gp: "3.75" },
    ]
  },
  {
    id: 5,
    semesterNumber: "Semester 05",
    term: "Level 3 · Term I",
    session: "2020–2021",
    gpa: 3.53,
    credits: 20.25,
    courses: [
      { code: "ME311", title: "Conduction and Radiation", type: "Theory", ch: "3.00", grade: "A+", gp: "4.00" },
      { code: "ME321", title: "Fluid Mechanics-I", type: "Theory", ch: "3.00", grade: "B", gp: "3.00" },
      { code: "ME331", title: "Mechanics of Machinery and Vibration", type: "Theory", ch: "3.00", grade: "C+", gp: "2.50" },
      { code: "ME361", title: "Measurement and Quality Control", type: "Theory", ch: "3.00", grade: "A-", gp: "3.50" },
      { code: "ME381", title: "Numerical Methods in Engineering", type: "Theory", ch: "3.00", grade: "A+", gp: "4.00" },
      { code: "ME312", title: "Conduction and Radiation (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME322", title: "Fluid Mechanics-I (Sessional)", type: "Lab", ch: "0.75", grade: "A", gp: "3.75" },
      { code: "ME332", title: "Mechanics of Machinery and Vibration (Sessional)", type: "Lab", ch: "1.50", grade: "A", gp: "3.75" },
      { code: "ME362", title: "Measurement and Quality Control (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME382", title: "Numerical Methods in Engineering and MATLAB (Sessional)", type: "Lab", ch: "1.50", grade: "A+", gp: "4.00" },
    ]
  },
  {
    id: 6,
    semesterNumber: "Semester 06",
    term: "Level 3 · Term II",
    session: "2020–2021",
    gpa: 3.29,
    credits: 18.00,
    courses: [
      { code: "Hum331", title: "Industrial Law and Accounting", type: "Theory", ch: "3.00", grade: "C+", gp: "2.50" },
      { code: "ME313", title: "Convection and Mass Transfer", type: "Theory", ch: "3.00", grade: "A+", gp: "4.00" },
      { code: "ME323", title: "Fluid Mechanics-II", type: "Theory", ch: "3.00", grade: "B+", gp: "3.25" },
      { code: "ME333", title: "Machine Design-I", type: "Theory", ch: "3.00", grade: "C", gp: "2.25" },
      { code: "ME351", title: "Engineering Metallurgy", type: "Theory", ch: "3.00", grade: "A+", gp: "4.00" },
      { code: "ME314", title: "Convection and Mass Transfer (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME324", title: "Fluid Mechanics-II (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME334", title: "Machine Design-I (Sessional)", type: "Lab", ch: "0.75", grade: "B", gp: "3.00" },
      { code: "ME352", title: "Engineering Metallurgy (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
    ]
  },
  {
    id: 7,
    semesterNumber: "Semester 07",
    term: "Level 4 · Term I",
    session: "2021–2022",
    gpa: 3.45,
    credits: 20.75,
    courses: [
      { code: "ME413", title: "Power Plant Engineering", type: "Theory", ch: "3.00", grade: "B-", gp: "2.75" },
      { code: "ME417", title: "Refrigeration and Air-conditioning", type: "Theory", ch: "3.00", grade: "A", gp: "3.75" },
      { code: "ME431", title: "Machine Design-II", type: "Theory", ch: "3.00", grade: "C", gp: "2.25" },
      { code: "ME451", title: "Machine Tools and Tool Engineering", type: "Theory", ch: "4.00", grade: "A+", gp: "4.00" },
      { code: "ME461", title: "Production and Operations Management", type: "Theory", ch: "4.00", grade: "A", gp: "3.75" },
      { code: "ME432", title: "Machine Design-II (Sessional)", type: "Lab", ch: "0.75", grade: "A-", gp: "3.50" },
      { code: "ME452", title: "Machine Tools and Tool Engineering (Sessional)", type: "Lab", ch: "0.75", grade: "A", gp: "3.75" },
      { code: "ME492", title: "Industrial Training", type: "Lab", ch: "1.50", grade: "A+", gp: "4.00" },
      { code: "ME494", title: "Project and Thesis", type: "Project", ch: "0.75", grade: "A", gp: "3.75" },
    ]
  },
  {
    id: 8,
    semesterNumber: "Semester 08",
    term: "Level 4 · Term II",
    session: "2021–2022",
    gpa: 3.37,
    credits: 20.50,
    courses: [
      { code: "ME411", title: "Applied Thermodynamics", type: "Theory", ch: "3.00", grade: "B-", gp: "2.75" },
      { code: "ME421", title: "Fluid Machinery", type: "Theory", ch: "3.00", grade: "A-", gp: "3.50" },
      { code: "ME455", title: "Mechatronics", type: "Theory", ch: "3.00", grade: "B-", gp: "2.75" },
      { code: "ME463", title: "Industrial Management", type: "Theory", ch: "4.00", grade: "B+", gp: "3.25" },
      { code: "ME469", title: "Operations Research", type: "Theory", ch: "3.00", grade: "A+", gp: "4.00" },
      { code: "ME412", title: "Applied Thermodynamics (Sessional)", type: "Lab", ch: "0.75", grade: "A+", gp: "4.00" },
      { code: "ME422", title: "Fluid Machinery (Sessional)", type: "Lab", ch: "0.75", grade: "A-", gp: "3.50" },
      { code: "ME456", title: "Mechatronics (Sessional)", type: "Lab", ch: "0.75", grade: "B+", gp: "3.25" },
      { code: "ME498", title: "Project and Thesis", type: "Project", ch: "2.25", grade: "A+", gp: "4.00" },
    ]
  }
];
