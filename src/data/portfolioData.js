// Academic Portfolio Data for Md. Jubair Uddin Zidan
// Carefully curated from existing records, publications, and academic experience

export const personalData = {
  name: "Md. Jubair Uddin Zidan",
  shortName: "Jubair Zidan",
  title: "Mechanical Engineering Researcher",
  institution: "Chittagong University of Engineering and Technology (CUET)",
  degree: "B.Sc. in Mechanical Engineering • M.Sc. Ongoing",
  location: "Adabor, Shyamoli, Dhaka, Bangladesh",
  fullAddress: "House: Silicone Arcade, Flat: 4/A, 1/1/B, Ring Road, Hasanabad State, Mohonpur, Ward-30, Adabor, Shyamoli, Dhaka, Bangladesh",
  email: "jubairzidan99@gmail.com",
  portraitUrl: "/images/image.png",
  cvUrl: "/Md_Jubair_Uddin_Zidan_CV.pdf",
  status: "Available for Ph.D. & Graduate Research Opportunities",
  tagline: "Computational Fluid Mechanics, Materials Modelling & AI-Driven Engineering.",
  bio: "I’m a Mechanical Engineering researcher focused on computational approaches to understanding complex physical systems. My academic work spans Computational Fluid Mechanics and Computational Materials Modelling, with research interests across fluid dynamics, aerodynamics, aeroacoustics, renewable energy, fracture mechanics, and self-healing materials. Looking ahead, I’m particularly interested in exploring AI and machine learning driven approaches in engineering research, and how they can be integrated with computational modelling to improve prediction, simulation, and our understanding of complex physical systems.",
  researchSummary: "I’m a Mechanical Engineering researcher focused on computational approaches to understanding complex physical systems. My academic work spans Computational Fluid Mechanics and Computational Materials Modelling, with research interests across fluid dynamics, aerodynamics, aeroacoustics, renewable energy, fracture mechanics, and self-healing materials. Looking ahead, I’m particularly interested in exploring AI and machine learning driven approaches in engineering research, and how they can be integrated with computational modelling to improve prediction, simulation, and our understanding of complex physical systems.",
  socials: [
    { label: "Google Scholar", url: "https://scholar.google.com", icon: "scholar" },
    { label: "ResearchGate", url: "https://www.researchgate.net", icon: "researchgate" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jubairzidan", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com", icon: "github" },
    { label: "Email", url: "mailto:jubairzidan99@gmail.com", icon: "email" }
  ],
  stats: [
    { label: "Research Papers", value: "4+", detail: "Conferences & Manuscripts" },
    { label: "Upper Sem. CGPA", value: "3.41", detail: "Last 4 Semesters" },
    { label: "Awards & Honors", value: "8+", detail: "Competitions & Olympiads" },
    { label: "Leadership Roles", value: "5+", detail: "ASME, CAMS, SCBA" }
  ]
};

export const academicsData = [
  {
    id: "msc",
    degree: "Master of Science (M.Sc.)",
    field: "Mechanical Engineering",
    institution: "Chittagong University of Engineering and Technology (CUET)",
    logoUrl: "/images/real/cuet_logo.png",
    period: "2025 – 2026",
    status: "Ongoing Graduate Program",
    isOngoing: true,
    cgpa: "3.90",
    scale: "4.00",
    details: [
      "Completed Theory Coursework CGPA: 3.90 / 4.00",
      "Completed: Advanced postgraduate theory courses",
      "Remaining: Master's Thesis & Formal Thesis Defence",
      "Tentative Completion: August – September 2026",
      "Focus: Computational Fluid Dynamics, Advanced Turbulence Modelling, and Metamaterials"
    ],
    highlight: "Advanced Research Track"
  },
  {
    id: "bsc",
    degree: "Bachelor of Science (B.Sc.)",
    field: "Mechanical Engineering",
    institution: "Chittagong University of Engineering and Technology (CUET)",
    logoUrl: "/images/real/cuet_logo.png",
    period: "2019 – 2024",
    status: "Graduated",
    isOngoing: false,
    cgpa: "3.29",
    scale: "4.00",
    additionalCgpa: "3.41 (Last 4 Semesters)",
    details: [
      "Overall CGPA: 3.29 / 4.00",
      "Last 4 Semesters CGPA: 3.41 / 4.00 (Strong Upward Academic Trajectory)",
      "Undergraduate Thesis: CFD analysis of ground effect with Venturi tunnel on 2022+ Formula One cars",
      "Core Coursework: Fluid Mechanics I & II, Heat & Mass Transfer, Thermodynamics, Mechanics of Materials, Machine Design, Renewable Energy"
    ],
    highlight: "Major in Mechanical Engineering"
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Notre Dame College, Dhaka",
    logoUrl: "/images/real/ndc_logo.png",
    period: "2016 – 2018",
    status: "Completed",
    isOngoing: false,
    cgpa: "5.00",
    scale: "5.00",
    details: [
      "Board: Dhaka Board",
      "Result: GPA 5.00 / 5.00 (Golden / Perfect Grade)",
      "Curriculum: Physics, Chemistry, Higher Mathematics, Biology",
      "Institution: Notre Dame College — Premier national academic institution"
    ],
    highlight: "Perfect GPA 5.00"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Barishal Zilla School, Barishal",
    logoUrl: "/images/real/bzs_logo.png",
    period: "2008 – 2016",
    status: "Completed",
    isOngoing: false,
    cgpa: "5.00",
    scale: "5.00",
    details: [
      "Board: Barishal Board",
      "Result: GPA 5.00 / 5.00 (Perfect Grade)",
      "Curriculum: General Science, Higher Mathematics, Physics, Chemistry",
      "Historic Government High School with distinguished academic heritage"
    ],
    highlight: "Perfect GPA 5.00"
  }
];

export const researchData = {
  overviewText: "My research investigates aerodynamic fluid-structure interactions, computational aeroacoustics, and architected metamaterials for structural energy mitigation. Utilizing high-fidelity finite volume CFD solvers (ANSYS Fluent, OpenFOAM) and finite element techniques, my work combines analytical rigor with computational validation to decode vortex dynamics, noise emission mechanics, and negative Poisson's ratio lattices.",
  
  interests: [
    "Computational Fluid Dynamics (CFD)",
    "Aerodynamics & Ground Effect",
    "Jet Noise Reduction & Aeroacoustics",
    "Vertical Axis Wind Turbines (VAWT)",
    "Architected Auxetic Metamaterials",
    "Energy Absorption Structures",
    "Bio-Inspired Mechanical Lattices",
    "Smart & Functional Materials",
    "Sustainable Biofuel Systems",
    "Advanced Manufacturing & Additive Design"
  ],

  undergradThesis: {
    title: "A CFD Analysis of Ground Effect with Venturi Tunnel Activated on Newer Formula One Cars",
    type: "Undergraduate Bachelor Thesis",
    institution: "Department of Mechanical Engineering, CUET",
    year: "2024",
    supervisor: "Faculty of Mechanical Engineering, CUET",
    imageUrl: "/images/project_f1_cfd.jpg",
    abstract: "The 2022 Formula One (F1) regulation overhaul marked the reintroduction of ground effect, a concept that had been absent from the sport since 1978, with the primary objective of enhancing overtaking opportunities and improving overall race dynamics. This thesis delves into the integration of ground effect within the context of advanced simulation research, focusing on its critical role in advancing car design, enhancing vehicular stability, and optimizing performance, which has collectively contributed to a significant reshaping of the sport's competitive landscape. The central aim of this study is to assess the impact of the Venturi tunnel's implementation on key aerodynamic parameters, specifically the drag coefficient and negative lift. By employing computational fluid dynamics (CFD) simulations, the research meticulously compares two distinct models: one representing the pre-2022 design and the other embodying the 2022 regulations. The results of this comparative analysis demonstrate a substantial reduction in the drag coefficient and a notable increase in negative lift in the 2022 model, thereby validating the aerodynamic advancements and the overall effectiveness of these regulatory changes in achieving their intended outcomes.",
    methodology: [
      "Full 3D aerodynamic domain with polyhedral unstructured meshing and boundary layer inflation (y+ ≈ 1)",
      "Steady-state Reynolds-Averaged Navier-Stokes (RANS) with k-omega Shear Stress Transport (SST) turbulence formulation",
      "Underfloor pressure coefficient distribution mapped along longitudinal Venturi throat sections",
      "Comparative quantification of downforce/negative lift and induced drag between pre-2022 flat floor and 2022 contoured tunnels"
    ],
    keyResults: [
      "Substantial increase in floor-generated negative lift without proportional induced drag penalties",
      "Mitigated wake turbulence disruption downstream, confirming improved wake profile for close-following vehicles",
      "Validated the aerodynamic rationale of modern Formula One regulatory frameworks"
    ]
  },

  conferencePapers: [
    {
      id: "conf-1",
      title: "Modelling and CFD Acoustic Analysis of N12 and N16 Different Chevron Nozzles for Jet Noise Reduction",
      conference: "9th BSME International Conference on Thermal Engineering (BSME-ICTE 2024)",
      organizer: "Bangladesh University of Engineering and Technology (BUET)",
      location: "Dhaka, Bangladesh",
      date: "19 – 21 December, 2024",
      status: "Accepted & Presented",
      imageUrl: "/images/real/bsme_certificate.jpg",
      authors: ["Md. Jubair Uddin Zidan", "Wakil Ahmed", "Co-authors"],
      abstract: "Investigation into turbofan jet exhaust noise attenuation using serrated chevron nozzles with 12 (N12) and 16 (N16) lobe configurations. Utilizes compressible turbulent Navier-Stokes computations paired with acoustic broadband noise and Ffowcs Williams-Hawkings (FW-H) acoustic analogy to predict far-field sound pressure levels (SPL) and turbulent shear layer mixing efficiency.",
      keywords: ["Aeroacoustics", "Chevron Nozzles", "Jet Noise", "CFD", "FW-H Analogy", "BUET"],
      tags: ["Aeroacoustics", "Chevron Nozzles", "Jet Noise", "CFD", "FW-H Analogy", "BUET"]
    },
    {
      id: "conf-2",
      title: "A Numerical Approach for Evaluating the Aerodynamic Effectiveness of Vertical Axis Wind Turbine by Different Types of Airfoils",
      conference: "6th International Conference on Mechanical, Industrial and Materials Engineering (MIMEC 2024)",
      organizer: "Rajshahi University of Engineering & Technology (RUET)",
      location: "Rajshahi, Bangladesh",
      date: "11 – 13 December, 2024",
      status: "Accepted & Presented",
      imageUrl: "/images/real/mimec_certificate.jpg",
      authors: ["Md. Jubair Uddin Zidan", "Wakil Ahmed", "Co-authors"],
      abstract: "A numerical investigation evaluating aerodynamic self-starting capability and power coefficients (Cp) across diverse symmetrical and cambered NACA airfoil profiles for H-type Vertical Axis Wind Turbines (VAWT). Dynamic mesh formulations and sliding mesh interfaces were employed to simulate rotational unsteady vortex shedding under varying tip speed ratios (TSR).",
      keywords: ["VAWT", "Airfoil Aerodynamics", "Unsteady CFD", "Dynamic Meshing", "RUET MIMEC"],
      tags: ["VAWT", "Airfoil Aerodynamics", "Unsteady CFD", "Dynamic Meshing", "RUET MIMEC"]
    },
    {
      id: "conf-3",
      title: "Numerical and Experimental Performance Analysis of a Darrieus-Savonius Hybrid Vertical Axis Wind Turbine for Low Wind Speed Conditions",
      conference: "9th International Conference on Mechanical, Industrial & Energy Engineering (ICMIEE)",
      organizer: "Khulna University of Engineering & Technology (KUET)",
      location: "Khulna, Bangladesh",
      date: "17 – 19 December, 2026",
      status: "Upcoming Conference",
      imageUrl: null,
      authors: ["Md. Jubair Uddin Zidan", "Research Team"],
      abstract: "Coupled numerical and wind-tunnel experimental performance analysis of an innovative hybrid Darrieus-Savonius vertical axis wind turbine configuration engineered specifically for urban and low-wind-speed coastal regimes.",
      keywords: ["Hybrid Rotor", "Darrieus-Savonius", "Wind Energy", "Low Speed Aerodynamics", "KUET"],
      tags: ["Hybrid Rotor", "Darrieus-Savonius", "Wind Energy", "Low Speed Aerodynamics", "KUET"]
    },
    {
      id: "conf-4",
      title: "Noise Emission Reduction of a Jet Engine by Double Cylindrical Perforated Liners in a Combustion Chamber",
      conference: "International Thermal & Energy Engineering Forum",
      organizer: "CUET / Engineering Research Society",
      location: "Chittagong, Bangladesh",
      date: "2024",
      status: "Peer Reviewed",
      imageUrl: null,
      authors: ["Md. Jubair Uddin Zidan", "Collaborators"],
      abstract: "Investigation into acoustic dampening and acoustic impedance alterations through double concentric cylindrical perforated acoustic liners incorporated within high-temperature combustion chambers.",
      keywords: ["Perforated Liners", "Combustion Noise", "Acoustic Impedance", "Thermoacoustics"],
      tags: ["Perforated Liners", "Combustion Noise", "Acoustic Impedance", "Thermoacoustics"]
    }
  ],

  conferencePresentations: [
    {
      id: "pres-1",
      title: "Oral Presentation: CFD Acoustic Analysis of N12/N16 Chevron Nozzles for Jet Noise Reduction",
      event: "9th BSME International Conference on Thermal Engineering",
      venue: "BUET, Dhaka, Bangladesh",
      date: "December 2024",
      type: "Oral Technical Presentation",
      imageUrl: "/images/real/bsme_presentation.jpg",
      certificateUrl: "/images/real/bsme_certificate.jpg",
      tags: ["Aeroacoustics", "Jet Noise", "CFD", "BUET"],
      description: "Delivered technical oral podium presentation detailing serrated chevron nozzle acoustics, compressible Navier-Stokes computations, and FW-H acoustic analogies."
    },
    {
      id: "pres-2",
      title: "Oral Presentation: Aerodynamic Effectiveness of Vertical Axis Wind Turbine Airfoils",
      event: "6th International Conference on Mechanical, Industrial & Materials Engineering (MIMEC)",
      venue: "RUET, Rajshahi, Bangladesh",
      date: "December 2024",
      type: "Podium Presentation",
      imageUrl: "/images/real/mimec_presentation.jpg",
      certificateUrl: "/images/real/mimec_certificate.jpg",
      tags: ["VAWT", "Aerodynamics", "Sliding Mesh", "RUET"],
      description: "Presented numerical investigation on aerodynamic self-starting capability and power coefficients across symmetrical and cambered NACA airfoil profiles."
    },
    {
      id: "pres-3",
      title: "Poster & Oral Presentation: Formula One 2022 Venturi Ground Effect CFD Investigation",
      event: "Annual Mechanical Engineering Research Exposition",
      venue: "CUET, Chittagong, Bangladesh",
      date: "2023 – 2024",
      type: "Technical Presentation",
      imageUrl: "/images/presentation_placeholder.jpg",
      certificateUrl: "/images/award_placeholder.jpg",
      tags: ["Ground Effect", "Formula 1", "CFD", "CUET"],
      description: "Delivered oral and poster defense of ground-effect venturi underfloor aerodynamics under FIA 2022 regulation geometries."
    }
  ],

  ongoingResearch: [
    {
      id: "ong-1",
      title: "Architected Auxetic Mechanical Metamaterials for Energy Absorption: Design, Fabrication, and Characterization",
      type: "Comprehensive Review & Computational Investigation",
      status: "Currently in Review by Supervisor",
      badge: "In Review",
      authors: ["Jubair Zidan", "Wakil Ahmed", "Dibosh Das"],
      supervisor: "Kazi Zahir Uddin",
      supervisorAffiliation: "Postdoctoral Research Associate at Beckman Institute, University of Illinois Urbana-Champaign; Assistant Professor, CUET",
      institution: "Chittagong University of Engineering and Technology (CUET)",
      overview: "Comprehensive state-of-the-art review and numerical characterization of auxetic (negative Poisson's ratio) architected cellular metamaterials. Explores 2D re-entrant, chiral, and 3D rotational lattice unit cells engineered for superior specific energy absorption (SEA), dynamic impact mitigation, and crush-resistance across aerospace and protective structures.",
      deliverables: [
        "In-depth synthesis of additive manufacturing constraints (SLS, SLA, LPBF) for micro-architected metamaterials",
        "Nonlinear dynamic finite element crashworthiness simulations comparing plateau stress and densification strains",
        "Multi-objective topological optimization frameworks for tailoring Poisson's ratio and energy absorption profiles"
      ]
    }
  ],

  projectsByField: {
    "Fluid Mechanics": [
      {
        id: "proj-fm-1",
        title: "F1 Venturi Tunnel Ground Effect Aerodynamic Simulation",
        field: "Fluid Mechanics",
        category: "Aerodynamics & CFD",
        year: "2024",
        imageUrl: "/images/project_f1_cfd.jpg",
        description: "Comparative computational fluid dynamics study analyzing underside ground effect downforce and drag mitigation comparing pre-2022 flat floors against 2022 Venturi tunnel geometries.",
        tools: ["ANSYS Fluent", "SpaceClaim", "CFD Post", "MATLAB"],
        metrics: "Demonstrated dramatic increase in floor-induced downforce with minimized turbulence wake disturbance."
      },
      {
        id: "proj-fm-2",
        title: "Aeroacoustic Jet Noise Attenuation with Serrated Chevron Nozzles",
        field: "Fluid Mechanics",
        category: "Aeroacoustics",
        year: "2024",
        imageUrl: "/images/project_chevron.jpg",
        description: "Aeroacoustic numerical modeling of N12 and N16 chevron exhaust nozzles to suppress jet mixing noise and vortex breakdown in commercial turbofan engines.",
        tools: ["ANSYS Fluent Acoustics", "FW-H Formulation", "OriginPro"],
        metrics: "Identified up to 4.2 dB overall sound pressure level (OASPL) reduction at high frequency bands."
      },
      {
        id: "proj-fm-3",
        title: "Aerodynamic Optimization of Darrieus-Savonius Hybrid VAWT",
        field: "Fluid Mechanics",
        category: "Renewable Energy Aerodynamics",
        year: "2024",
        imageUrl: "/images/real/vawt_prototype.jpg",
        description: "Unsteady numerical analysis with sliding meshes exploring torque coefficient enhancements and aerodynamic self-starting in hybrid vertical axis wind turbines.",
        tools: ["ANSYS Fluent Sliding Mesh", "SolidWorks Flow", "Python"],
        metrics: "Achieved self-starting threshold at wind speeds below 3.5 m/s while preserving peak power coefficient."
      }
    ],
    "Materials Science": [
      {
        id: "proj-mat-1",
        title: "Auxetic Mechanical Metamaterials for Energy Absorption",
        field: "Materials Science",
        category: "Architected Lattices",
        year: "2024 – Ongoing",
        imageUrl: "/images/project_auxetic.jpg",
        description: "Numerical and structural characterization of re-entrant honeycomb and 3D chiral metamaterials subjected to quasi-static and dynamic compressive loads.",
        tools: ["ANSYS Mechanical", "FEA Explicit Dynamics", "SolidWorks"],
        metrics: "Superior Specific Energy Absorption (SEA) and enhanced resistance to shear deformation under impact."
      },
      {
        id: "proj-mat-2",
        title: "Bio-Inspired Hierarchical Lattices for Structural Impact",
        field: "Materials Science",
        category: "Biomimetic Materials",
        year: "2023 – 2024",
        imageUrl: "/images/project_biomaterials.jpg",
        description: "Design and stress analysis of bio-mimetic cellular architectures inspired by bone trabeculae and beetle elytra for lightweight protective structures.",
        tools: ["Topology Optimization", "ANSYS Workbench", "OriginPro"],
        metrics: "32% higher plateau stress compared to conventional honeycomb configurations at equivalent relative density."
      },
      {
        id: "proj-mat-3",
        title: "Perforated Liners Acoustic Dampening in Combustion Chambers",
        field: "Materials Science",
        category: "Acoustic Materials",
        year: "2023",
        imageUrl: "/images/project_chevron.jpg",
        description: "Acoustic impedance modeling and thermal resistance evaluations of double cylindrical micro-perforated acoustic liners under extreme heat flux.",
        tools: ["Acoustic FEA", "Thermodynamic Modeling", "MATLAB"],
        metrics: "Quantified absorption coefficient across 500 Hz – 2500 Hz thermoacoustic instability frequencies."
      }
    ]
  }
};

export const awardsData = {
  competitions: [
    {
      id: "comp-1",
      title: "Champion",
      event: "Climate Justice Idea Competition (Season 2, 2023)",
      organizer: "Powered by The Daily Star & ActionAid Bangladesh",
      year: "2023",
      category: "Innovation & Climate Action",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Secured 1st place nationally for proposing innovative engineering and community-level mitigation solutions addressing climate vulnerability and sustainable clean energy adoption."
    },
    {
      id: "comp-2",
      title: "1st Runner Up",
      event: "Face the Case — National Business Case Competition 2021",
      organizer: "Chittagong University of Engineering and Technology (CUET)",
      year: "2021",
      category: "Case Competition",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Awarded 1st Runner Up for strategic problem-solving, financial viability modeling, and innovative technical supply-chain case analysis."
    },
    {
      id: "comp-3",
      title: "2nd Runner Up",
      event: "National Earth Olympiad (Barishal Region)",
      organizer: "Bangladesh Youth Environmental Initiative (BYEI)",
      year: "2014",
      category: "Earth & Environmental Sciences",
      imageUrl: "/images/real/award_neo_2014.jpg",
      description: "Recognized among top regional candidates in environmental science, geosciences, and sustainability challenges."
    },
    {
      id: "comp-4",
      title: "Regional Participant & Finalist",
      event: "National Math Olympiad (Barishal Region)",
      organizer: "Bangladesh Mathematical Olympiad Committee",
      year: "2011",
      category: "Mathematics",
      imageUrl: "/images/real/award_math_2011.jpg",
      description: "Selected through competitive mathematics examinations demonstrating problem-solving acumen and mathematical rigor."
    }
  ],

  posterPresentations: [
    {
      id: "post-1",
      title: "Research Poster Presentation: 1st National Research Fair 2023",
      event: "Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real/award_research_fair.jpg",
      description: "Received Appreciation Trophy from the Directorate of Research and Extension, CUET for outstanding technical poster presentation."
    },
    {
      id: "post-2",
      title: "Research Poster Presentation 2nd Prize Crest",
      event: "Research Fair 2023 Poster Presentation",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real/award_poster_2nd.jpg",
      description: "Awarded 2nd Prize Crest by the Directorate of Research and Extension at CUET for research poster presentation."
    }
  ],

  posters: [
    {
      id: "post-1",
      title: "Research Poster Presentation: 1st National Research Fair 2023",
      event: "Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real/award_research_fair.jpg",
      description: "Received Appreciation Trophy from the Directorate of Research and Extension, CUET for outstanding technical poster presentation."
    },
    {
      id: "post-2",
      title: "Research Poster Presentation 2nd Prize Crest",
      event: "Research Fair 2023 Poster Presentation",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real/award_poster_2nd.jpg",
      description: "Awarded 2nd Prize Crest by the Directorate of Research and Extension at CUET for research poster presentation."
    }
  ],

  hultPrize: [
    {
      id: "hult-1",
      title: "On-Campus Semifinalist & Competitor",
      cohort: "Hult Prize CUET Cohort 2020 – 2021",
      year: "2020 – 2021",
      imageUrl: "/images/real/cert_hult_prize.jpg",
      description: "Official competitor certificate recognized for advancing to the semifinal round presenting sustainable social business models."
    },
    {
      id: "hult-2",
      title: "Volunteer Graphic Designer & Brand Lead",
      cohort: "HULT Prize Bangladesh National Team",
      year: "2020 – 2021",
      imageUrl: "/images/real/cert_hult_bottlegreen.jpg",
      description: "Led visual identity, event branding, and promotional collateral for nationwide university cohorts (Bottle Green House cohort)."
    }
  ],

  eventOrganization: [
    {
      id: "evt-1",
      title: "Design Lead & Executive Organizer",
      event: "Hult Prize Dhaka Impact Summit 2021",
      year: "2021",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Organized international impact summit coordinating delegate communications, sponsor branding, and stage design."
    },
    {
      id: "evt-2",
      title: "Event Organizing Team Member",
      event: "Hult Prize Kuala Lumpur & Chittagong Impact Summits 2021",
      year: "2021",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Supported international cohort logistics and media management across regional chapters."
    },
    {
      id: "evt-3",
      title: "Organizer & Session Manager",
      event: "Autodesk Academic Event: Introduction to Autodesk Fusion 360",
      venue: "CUET Campus",
      year: "2022",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Successfully arranged and coordinated a university-wide Autodesk 3D modeling and generative design hands-on workshop for engineering undergraduates."
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Certified SolidWorks Associate (CSWA)",
      issuer: "Dassault Systèmes",
      field: "Mechanical Design & 3D Parametric CAD",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Official certification proving proficiency in parts, assemblies, engineering drawings, and design validation."
    },
    {
      id: "cert-2",
      title: "Engineering Simulations (FEA & CFD)",
      issuer: "Advanced Simulation Training / Ansys Academic",
      field: "Finite Element & Computational Fluid Dynamics",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Comprehensive coursework on mesh generation, boundary conditions, turbulence models, and post-processing."
    },
    {
      id: "cert-3",
      title: "MATLAB for Engineers & Numerical Computation",
      issuer: "MathWorks Academic Training",
      field: "Scientific Computing & Algorithm Development",
      imageUrl: "/images/award_placeholder.jpg",
      description: "Numerical differentiation, matrix mathematics, ODE solvers, and graphical data visualization."
    }
  ]
};

export const experienceData = {
  internship: {
    company: "RPCL Raozan 25 MW Dual Fuel Power Plant",
    organization: "Rural Power Company Limited (RPCL)",
    role: "Industrial Attachment / Engineering Intern",
    period: "September 2023 – October 2023",
    location: "Kaptai Road, Raozan, Chittagong, Bangladesh",
    imageUrl: "/images/real/rpcl_internship.jpg",
    overview: "Underwent rigorous industrial training at the RPCL 25 MW Dual-Fuel Power Generation Facility. Gained practical experience in large-scale reciprocating internal combustion engine operations, auxiliary fuel heating, steam and water treatment cycles, and electrical switchyard distribution.",
    keyLearnings: [
      {
        title: "Dual-Fuel Operations (HFO & LFO)",
        desc: "Analyzed operational transitions between Heavy Fuel Oil (HFO) and Light Fuel Oil (LFO), including fuel preheating, viscosity control, and injection optimization."
      },
      {
        title: "Fuel, Lubrication & Water Quality Management",
        desc: "Hands-on participation in centrifugal fuel separation, lube oil filtration, and cooling water demineralization chemical protocols."
      },
      {
        title: "Environmental Compliance (ECR 1997)",
        desc: "Monitored flue gas stack emissions, acoustic barriers, and plant wastewater treatment adhering to Bangladesh Environmental Conservation Rules 1997."
      },
      {
        title: "Engine Operation & Power Generation",
        desc: "Observed synchronized generator parallel operations, load-frequency control, governor parameters, and SCADA monitoring."
      },
      {
        title: "Chemical Testing & Maintenance Protocols",
        desc: "Conducted laboratory viscosity, flash point, and pH tests; shadowed planned preventive maintenance of cylinder heads and turbochargers."
      },
      {
        title: "Industrial Safety & Plant Operations",
        desc: "Adhered to industrial safety standards (PPE, lock-out/tag-out, fire suppression CO2 manifolds) and emergency response drills."
      },
      {
        title: "Future Power Sector Expansion",
        desc: "Studied grid stability dynamics and strategic expansion blueprints of RPCL's national energy portfolio."
      }
    ]
  },

  instructorship: {
    roles: [
      {
        title: "HSC Physics & Higher Mathematics Instructor",
        type: "Private Academic Instructorship",
        period: "2019 – 2024 (Throughout Undergraduate Studies)",
        location: "Chittagong & Dhaka, Bangladesh",
        description: "Instructed numerous HSC candidates in Advanced Physics and Higher Mathematics, structuring conceptual problem sets and mathematical problem-solving drills."
      },
      {
        title: "HSC Physics Instructor",
        type: "Udvash Academic & Admission Care",
        period: "November 2018 – March 2019",
        location: "Dhaka, Bangladesh",
        description: "Conducted classroom lectures for HSC students covering the national curriculum for Physics Paper 1 and Paper 2 with admission-level competitive problem solving."
      }
    ],
    curriculumCovered: [
      {
        subject: "Physics 1",
        topics: [
          "Vectors & Coordinate Systems",
          "Linear Motion & Kinematics",
          "Newton’s Laws of Motion & Applications",
          "Work, Energy, and Power",
          "Circular Motion & Gravitation",
          "States of Matter & Fluid Pressure",
          "Simple Harmonic Motion & Mechanical Waves",
          "Heat, Kinetic Theory & Thermodynamics"
        ]
      },
      {
        subject: "Physics 2",
        topics: [
          "Electrostatics & Electric Fields",
          "Current Electricity & Circuit Networks",
          "Magnetism & Electromagnetism",
          "Electromagnetic Induction & AC Circuits",
          "Geometrical Optics",
          "Physical Optics & Wave Interference",
          "Modern Physics (Relativity, Photoelectric Effect, Atomic Models)",
          "Nuclear Physics, Radioactivity, Semiconductor & Electronics"
        ]
      },
      {
        subject: "Mathematics 1",
        topics: [
          "Matrices and Determinants",
          "Vector Algebra",
          "Straight Lines & Coordinate Geometry",
          "The Circle & Conic Foundations",
          "Permutations and Combinations",
          "Trigonometric Ratios & Compound Angles",
          "Functions & Graph of Functions",
          "Differential Calculus & Limits",
          "Integral Calculus & Area Computation"
        ]
      },
      {
        subject: "Mathematics 2",
        topics: [
          "Complex Numbers & De Moivre's Theorem",
          "Polynomials and Theory of Equations",
          "Exponential and Logarithmic Functions",
          "Conic Sections (Parabola, Ellipse, Hyperbola)",
          "Inverse Trigonometric Functions & Equations",
          "Three-Dimensional Geometry & Vectors",
          "Linear Programming Optimization",
          "Probability & Statistics",
          "First and Second Order Differential Equations"
        ]
      }
    ]
  },

  extracurricular: [
    {
      id: "asme",
      organization: "American Society of Mechanical Engineers (ASME) — CUET Student Branch",
      role: "President • Former General Secretary • Joint Publication Secretary",
      logoUrl: "/images/real/asme_logo.png",
      period: "2020 – 2024",
      highlights: [
        "Elected President of ASME CUET Student Branch, directing executive committees and student technical workshops",
        "Key Organizer of EFX Bangladesh 2024 — flagship national engineering and technology festival",
        "Coordinated technical sessions, industry keynote lectures, and design-build competitions",
        "Editorial Board Member for ASME Asia Pacific Region publications, authoring technical newsletters and event archives"
      ]
    },
    {
      id: "cams",
      organization: "CUET Automotive and Mobility Society (CAMS)",
      role: "Vehicle R&D Contributor & Core Member",
      period: "2021 – 2024",
      highlights: [
        "Contributed to research, chassis modeling, and aerodynamic optimization for small-range student automobile prototypes",
        "Assisted in technical troubleshooting, telemetry logging, and test-track vehicle validation",
        "Fostered automotive engineering culture through hands-on vehicle design and machining sessions"
      ]
    },
    {
      id: "scba",
      organization: "Supply Chain & Business Alliance (SCBA) CUET",
      role: "Treasurer & Executive Committee Member",
      logoUrl: "/images/real/scba_logo.png",
      period: "2021 – 2023",
      highlights: [
        "Managed annual treasury budgets, event financing, audits, and corporate sponsorship allocations",
        "Facilitated corporate partnerships and nationwide business case competitions",
        "Introduced structured cost tracking ensuring financial transparency and club sustainability"
      ]
    },
    {
      id: "joyoddhoney",
      organization: "Joyoddhoney — The Cultural Organization of CUET",
      role: "Joint General Secretary",
      logoUrl: "/images/real/joyoddhoney_logo.png",
      period: "2020 – 2023",
      highlights: [
        "Coordinated university-wide cultural festivals, stage productions, and inter-departmental collaborations",
        "Supervised public relations, university administration liaison, and executive committee operations"
      ]
    },
    {
      id: "greenlead",
      organization: "Green Lead Bangladesh",
      role: "Youth Sustainability Coordinator",
      period: "2020 – 2022",
      highlights: [
        "Nonprofit social enterprise focused on youth leadership, environmental stewardship, and green enterprise initiatives",
        "Organized community workshops and sustainable entrepreneurship ideation sessions"
      ]
    }
  ]
};

export const skillsData = {
  softwareSkills: [
    {
      category: "Design & Simulation",
      skills: ["ANSYS (Fluent / FEA / Workbench)", "SolidWorks (CSWA)", "OpenFOAM (Foundations)", "Autodesk Fusion 360", "SpaceClaim"],
      description: "Parametric 3D solid modeling, finite volume computational fluid dynamics, structural finite element analysis, and computational meshing."
    },
    {
      category: "Programming & Computation",
      skills: ["MATLAB", "Python (NumPy, SciPy, Matplotlib)", "C", "Fortran"],
      description: "Numerical algorithms, ODE/PDE finite difference schemes, automated simulation batch scripting, and data pipelines."
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["OriginPro", "Microsoft Excel (Advanced Data / Solver)", "ParaView", "Tecplot 360"],
      description: "Scientific curve fitting, statistical data synthesis, vector field post-processing, and publication-ready charting."
    },
    {
      category: "Office & Documentation",
      skills: ["LaTeX", "Microsoft Word", "Microsoft PowerPoint", "Google Workspace"],
      description: "Academic manuscript typesetting, thesis composition, equations formatting, and collaborative scholarly documentation."
    },
    {
      category: "Presentation & Graphic Design",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe Premiere Pro", "Canva"],
      description: "Technical schematics vector illustration, research poster layouts, conference pitch deck design, and media editing."
    },
    {
      category: "Operating Systems & Environments",
      skills: ["macOS", "Windows", "Linux (Ubuntu / WSL)"],
      description: "Cross-platform engineering workflows, command-line terminal usage, and cluster computation readiness."
    }
  ],

  personalSkills: [
    { title: "Academic Leadership & Team Direction", desc: "Leading student branches (ASME), coordinating multi-disciplinary cohorts, and delegating responsibilities." },
    { title: "Scientific Communication & Public Speaking", desc: "Delivering international conference presentations, technical tutorials, and structured scholarly pitches." },
    { title: "Conference & Event Coordination", desc: "Organizing national engineering festivals (EFX 2024), workshops, and international impact summits." },
    { title: "Presentation & Pitch Deck Architecture", desc: "Designing visual narratives for complex engineering datasets and competitive case pitches." },
    { title: "Cross-Disciplinary Team Collaboration", desc: "Working alongside international supervisors (UIUC / CUET) and diverse research groups." },
    { title: "Analytical Problem Solving & Adaptability", desc: "Deconstructing open-ended engineering dilemmas into systematically verifiable numerical models." }
  ],

  hobbies: [
    { name: "Graphic & Editorial Design", desc: "Crafting vector typography, editorial booklets, and clean minimalist layouts." },
    { name: "Photography & Visual Framing", desc: "Documentary street and architectural photography capturing perspective and light." },
    { name: "Motorsport Aerodynamics Tracking", desc: "Following Formula 1 technical updates, FIA regulatory technical directives, and aero evolutions." },
    { name: "Literature & Scholarly Reading", desc: "Reading scientific biographies, physics treatises, and classic philosophy." }
  ]
};

export const contactData = {
  addressLine1: "Silicone Arcade, Flat 4/A, 1/1/B Ring Road",
  addressLine2: "Hasanabad State, Mohonpur, Ward-30",
  addressLine3: "Adabor, Shyamoli, Dhaka, Bangladesh",
  shortLocation: "Adabor, Shyamoli, Dhaka, Bangladesh",
  email: "jubairzidan99@gmail.com",
  timeZone: "GMT+6 (Dhaka)",
  affiliation: "Department of Mechanical Engineering, Chittagong University of Engineering and Technology (CUET)",
  openFor: [
    "Ph.D. & Graduate Research Inquiries",
    "Collaborative CFD & Metamaterial Investigations",
    "Scholarly Co-Authorship & Manuscripts",
    "Academic Seminars & Guest Lectures"
  ]
};

export const upcomingAnnouncements = [
  {
    id: 1,
    tag: "Milestone",
    text: "Thesis Defense : December",
    highlight: true,
    emoji: "🎓"
  },
  {
    id: 2,
    tag: "Conference",
    text: "Upcoming Conference : MIMEC 2024 / BSME Presentation",
    highlight: false,
    emoji: "🌐"
  },
  {
    id: 3,
    tag: "Opportunity",
    text: "Open for Ph.D. & Graduate Research Opportunities",
    highlight: false,
    emoji: "🔬"
  }
];

