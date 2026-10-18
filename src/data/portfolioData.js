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
  secondaryEmail: "jubairzidan.mech@gmail.com",
  portraitUrl: "/images/image.png",
  cvUrl: "/Md_Jubair_Uddin_Zidan_CV.pdf",
  status: "Available for Ph.D. & Graduate Research Opportunities",
  tagline: "Computational Fluid Mechanics, Materials Modelling & AI-Driven Engineering.",
  bio: "I’m a Mechanical Engineering researcher focused on computational approaches to understanding complex physical systems. My academic work spans Computational Fluid Mechanics and Computational Materials Modelling, with research interests across fluid dynamics, aerodynamics, aeroacoustics, renewable energy, fracture mechanics, and self-healing materials. Looking ahead, I’m particularly interested in exploring AI and machine learning driven approaches in engineering research, and how they can be integrated with computational modelling to improve prediction, simulation, and our understanding of complex physical systems.",
  researchSummary: "I’m a Mechanical Engineering researcher focused on computational approaches to understanding complex physical systems. My academic work spans Computational Fluid Mechanics and Computational Materials Modelling, with research interests across fluid dynamics, aerodynamics, aeroacoustics, renewable energy, fracture mechanics, and self-healing materials. Looking ahead, I’m particularly interested in exploring AI and machine learning driven approaches in engineering research, and how they can be integrated with computational modelling to improve prediction, simulation, and our understanding of complex physical systems.",
  socials: [
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Md-Jubair-Zidan-2", icon: "researchgate" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/md-jubair-uddin-zidan/", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com/jubairzidanmech-source", icon: "github" },
    { label: "Email", url: "mailto:jubairzidan.mech@gmail.com", icon: "email" }
  ],
  stats: [
    { label: "Peer-Reviewed Works", value: "4", detail: "Published & Conference Papers" },
    { label: "Current CGPA", value: "3.90", detail: "M.Sc. Theory Coursework" },
    { label: "International Forums", value: "2", detail: "BSME 2023 & MIMEC 2024" },
    { label: "Awards & Honors", value: "4", detail: "National & Regional Accolades" }
  ]
};

export const academicsData = [
  {
    id: "msc",
    degree: "Master of Science (M.Sc.)",
    field: "Mechanical Engineering",
    institution: "Chittagong University of Engineering and Technology (CUET)",
    logoUrl: "/images/real/cuet_logo.png",
    period: "2025 – 2027",
    status: "Ongoing Graduate Program",
    isOngoing: true,
    cgpa: "3.90",
    scale: "4.00",
    details: [
      "Completed Theory Coursework CGPA: 3.90 / 4.00",
      "Completed: Advanced postgraduate theory courses",
      "Remaining: Master's Thesis & Formal Thesis Defence",
      "Tentative Completion: January 2027",
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
    certificateUrl: "/images/real/cuet_bsc_certificate.jpg",
    certificatePdfUrl: "/docs/CUET_BSc_Mechanical_Engineering_Certificate.pdf",
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

  theses: [
    {
      id: "thesis-bsc",
      number: "01",
      degree: "Bachelor of Science (B.Sc.) Thesis",
      categoryBadge: "B.Sc. Thesis",
      status: "Completed & Defended",
      year: "2024",
      title: "A CFD Analysis of Ground Effect with Venturi Tunnel Activated on Newer Formula One Cars",
      author: "Md. Jubair Uddin Zidan",
      institution: "Department of Mechanical Engineering, CUET",
      supervisor: "Faculty of Mechanical Engineering, CUET",
      imageUrl: "/images/project_f1_cfd.jpg",
      // Google Drive Thesis PDF Link: https://drive.google.com/file/d/1ta51qFHX7OxG5NlLClWN94WZrbY4sLxb/view?usp=sharing
      paperUrl: "https://drive.google.com/file/d/1ta51qFHX7OxG5NlLClWN94WZrbY4sLxb/view?usp=sharing",
      tags: ["Aerodynamics & CFD", "Ground Effect", "Venturi Tunnel", "ANSYS Fluent", "FIA Regulations"],
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
    {
      id: "thesis-msc",
      number: "02",
      degree: "Master of Science (M.Sc.) Thesis",
      categoryBadge: "MSc Thesis",
      status: "In Progress",
      year: "2025 – 2026",
      title: "Title Under Exploration",
      author: "Md. Jubair Uddin Zidan",
      authors: ["Md. Jubair Uddin Zidan"],
      institution: "Department of Mechanical Engineering, CUET",
      imageUrl: "/images/project_fracture_healing.jpg",
      tags: ["Fracture Mechanics", "LS-DYNA", "Self-Healing Materials", "Crack & Healing Simulation"],
      desc: "Exploring fracture mechanics and computational simulation of crack propagation and self-healing behavior in materials using LS-DYNA.",
      abstract: "Exploring fracture mechanics and computational simulation of crack propagation and self-healing behavior in materials using LS-DYNA.",
      statusNote: "Research direction under development"
    }
  ],

  undergradThesis: {
    title: "A CFD Analysis of Ground Effect with Venturi Tunnel Activated on Newer Formula One Cars",
    type: "Undergraduate Bachelor Thesis",
    institution: "Department of Mechanical Engineering, CUET",
    year: "2024",
    supervisor: "Faculty of Mechanical Engineering, CUET",
    imageUrl: "/images/project_f1_cfd.jpg",
    // Google Drive Thesis PDF Link: https://drive.google.com/file/d/1ta51qFHX7OxG5NlLClWN94WZrbY4sLxb/view?usp=sharing
    paperUrl: "https://drive.google.com/file/d/1ta51qFHX7OxG5NlLClWN94WZrbY4sLxb/view?usp=sharing",
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
      title: "A Numerical Approach for Evaluating the Aerodynamic Effectiveness of Vertical Axis Wind Turbine by Different Types of Airfoils",
      conference: "6th International Conference on Mechanical, Industrial and Materials Engineering (MIMEC 2024)",
      organizer: "Rajshahi University of Engineering & Technology (RUET)",
      location: "Rajshahi, Bangladesh",
      date: "11 – 13 December, 2024",
      status: "Accepted & Presented",
      imageUrl: "/images/real/mimec_vawt_certificate.jpg",
      certificateUrl: "/images/real/mimec_vawt_certificate.jpg",
      paperUrl: "https://drive.google.com/file/d/1_HjxMoGHGpRTiqtRXiBKqtbJmU8XY0cm/view?usp=sharing",
      authors: ["Md. Kotuvuddin Islam Monna", "Tanmoy Nath", "Md. Jubair Uddin Zidan"],
      abstract: "A numerical investigation evaluating aerodynamic self-starting capability and power coefficients (Cp) across diverse symmetrical and cambered NACA airfoil profiles for H-type Vertical Axis Wind Turbines (VAWT). Dynamic mesh formulations and sliding mesh interfaces were employed to simulate rotational unsteady vortex shedding under varying tip speed ratios (TSR).",
      keywords: ["VAWT", "Airfoil Aerodynamics", "Unsteady CFD"],
      tags: ["VAWT", "Airfoil Aerodynamics", "Unsteady CFD"]
    },
    {
      id: "conf-2",
      title: "Noise Emission Reduction of a Jet Engine by Double Cylindrical Perforated Liners in a Combustion Chamber",
      conference: "6th International Conference on Mechanical, Industrial and Materials Engineering (MIMEC 2024)",
      organizer: "Rajshahi University of Engineering & Technology (RUET)",
      location: "Rajshahi, Bangladesh",
      date: "11 – 13 December, 2024",
      status: "Accepted & Presented",
      imageUrl: "/images/real/mimec_certificate.jpg",
      certificateUrl: "/images/real/mimec_certificate.jpg",
      paperUrl: "https://drive.google.com/file/d/1UyJKxTnVymLhITyVWdwcm4B16k6DdqLE/view?usp=sharing",
      authors: ["Md. Jubair Uddin Zidan", "Collaborators"],
      abstract: "Investigation into acoustic dampening and acoustic impedance alterations through double concentric cylindrical perforated acoustic liners incorporated within high-temperature combustion chambers.",
      keywords: ["Perforated Liners", "Combustion Noise", "Acoustics"],
      tags: ["Perforated Liners", "Combustion Noise", "Acoustics"]
    },
    {
      id: "conf-3",
      title: "Modelling and CFD Acoustic Analysis of N12 and N16 Different Chevron Nozzles for Jet Noise Reduction",
      conference: "9th BSME International Conference on Thermal Engineering (BSME-ICTE 2024)",
      organizer: "Bangladesh University of Engineering and Technology (BUET)",
      location: "Dhaka, Bangladesh",
      date: "19 – 21 December, 2024",
      status: "Accepted & Presented",
      imageUrl: "/images/real/bsme_certificate.jpg",
      certificateUrl: "/images/real/bsme_certificate.jpg",
      paperUrl: "https://drive.google.com/file/d/1p_dUby5GZd_w0t3pf300gCH4fWPtQ5nb/view?usp=drive_link",
      authors: ["Md. Jubair Uddin Zidan", "Wakil Ahmed", "Co-authors"],
      abstract: "Investigation into turbofan jet exhaust noise attenuation using serrated chevron nozzles with 12 (N12) and 16 (N16) lobe configurations. Utilizes compressible turbulent Navier-Stokes computations paired with acoustic broadband noise and Ffowcs Williams-Hawkings (FW-H) acoustic analogy to predict far-field sound pressure levels (SPL) and turbulent shear layer mixing efficiency.",
      keywords: ["Aeroacoustics", "Chevron Nozzles", "CFD"],
      tags: ["Aeroacoustics", "Chevron Nozzles", "CFD"]
    },
    {
      id: "conf-4",
      title: "Numerical and Experimental Performance Analysis of a Darrieus-Savonius Hybrid Vertical Axis Wind Turbine for Low Wind Speed Conditions",
      conference: "9th International Conference on Mechanical, Industrial & Energy Engineering (ICMIEE)",
      organizer: "Khulna University of Engineering & Technology (KUET)",
      location: "Khulna, Bangladesh",
      date: "17 – 19 December, 2026",
      status: "Upcoming Conference",
      imageUrl: "/images/real/vawt_prototype.jpg",
      certificateUrl: "/images/real/vawt_prototype.jpg",
      paperUrl: "https://drive.google.com/file/d/1slEW4Ju9-KRzcv94nxoMbt2gV3eWBuDs/view?usp=drive_link",
      authors: ["Md. Jubair Uddin Zidan", "Research Team"],
      abstract: "Coupled numerical and wind-tunnel experimental performance analysis of an innovative hybrid Darrieus-Savonius vertical axis wind turbine configuration engineered specifically for urban and low-wind-speed coastal regimes.",
      keywords: ["Hybrid Rotor", "Wind Energy", "Aerodynamics"],
      tags: ["Hybrid Rotor", "Wind Energy", "Aerodynamics"]
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
      type: "Oral Technical Presentation",
      imageUrl: "/images/real/mimec_presentation.jpg",
      certificateUrl: "/images/real/mimec_certificate.jpg",
      tags: ["VAWT", "Aerodynamics", "Sliding Mesh", "RUET"],
      description: "Presented numerical investigation on aerodynamic self-starting capability and power coefficients across symmetrical and cambered NACA airfoil profiles."
    }
  ],

  posterPresentations: [
    {
      id: "res-poster-1",
      title: "Driving Simulators: Paving the Way to a Safer Smart Bangladesh!",
      posterId: "Poster ID: 97",
      event: "1st National Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      date: "2023",
      type: "Poster Presentation",
      statusLabel: "Awarded 2nd Prize",
      authors: "Ashraf Mahmud Rayed, Md. Jubair Uddin Zidan",
      affiliation: "Department of Mechanical Engineering, CUET",
      imageUrl: "/images/real/cuet_presentation_driving_simulators.jpg",
      posterUrl: "/images/real/poster_driving_simulators.jpg",
      certificateUrl: "/images/real/cert_cuet_poster_driving_simulators.jpg",
      crestUrl: "/images/real_awards/award_cuet_research_fair_2023_poster2nd.png",
      tags: ["Driving Simulators", "Traffic Safety", "Smart Bangladesh", "CUET"],
      description: "Awarded 2nd Prize (1st Runner-Up) in the Poster Presentation category at the 1st National Research Fair 2023 organized by the Directorate of Research and Extension (DRE), CUET. Investigated Bangladeshi driver behavior, emotional stability, and traffic violation patterns to formulate driver education and simulator-based interventions for smart transit."
    },
    {
      id: "res-poster-2",
      title: "Strategic Utilization of Dispatchable Loads and Nodal Reserves for Improved Reserve Deliverability",
      posterId: "Poster ID: 146",
      event: "1st National Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      date: "2023",
      type: "Poster Presentation",
      statusLabel: "Poster Presentation",
      authors: "Joyonta Das Joya, Jubair Zidan, Shafin Hossain",
      affiliation: "Department of Electrical & Electronic Engineering (EEE), CUET",
      imageUrl: "/images/real/cuet_presentation_dispatchable_loads.jpg",
      posterUrl: "/images/real/poster_dispatchable_loads.jpg",
      certificateUrl: "/images/real/cert_cuet_poster_dispatchable_loads.jpg",
      crestUrl: "/images/real_awards/award_cuet_research_fair_2023_poster1.png",
      tags: ["Power Systems", "Operating Reserves", "DERs", "Optimization", "CUET"],
      description: "Presented at the 1st National Research Fair 2023 ('Knowledge Exploration for Smart Bangladesh') organized by the Directorate of Research and Extension (DRE), CUET. Addressed reserve deliverability issues in power networks with distributed energy resources (DERs), formulating sequential dispatchable load algorithms that reduce reserve delivery costs by 40–60% while satisfying transmission security constraints."
    }
  ],

  ongoingResearch: [
    {
      id: "ong-1",
      title: "Architected Auxetic Mechanical Metamaterials for Energy Absorption: Design, Fabrication, and Characterization",
      type: "Review paper",
      status: "Currently in review by Supervisor",
      badge: "Review paper",
      authors: ["Jubair Zidan", "Wakil Ahmed", "Dibosh Das"],
      supervisor: "Kazi Zahir Uddin",
      supervisorAffiliation: "Postdoctoral Research Associate at Beckman Institute-University of Illinois Urbana-Champaign",
      institution: "Chittagong University of Engineering and Technology, CUET",
      tags: ["Auxetic Metamaterials", "Energy Absorption", "Additive Manufacturing", "Topology Optimization"],
      overview: "A literature review of architected auxetic mechanical metamaterials for energy absorption, examining how engineered geometries influence negative Poisson’s ratio and mechanical performance. Covers structural design, fabrication, characterization, and computational optimization, alongside applications and challenges in scalability, reproducibility, and long-term durability.",
      desc: "A literature review of architected auxetic mechanical metamaterials for energy absorption, examining how engineered geometries influence negative Poisson’s ratio and mechanical performance. Covers structural design, fabrication, characterization, and computational optimization, alongside applications and challenges in scalability, reproducibility, and long-term durability.",
      deliverables: [
        "Review of auxetic geometries, including re-entrant cells, chiral configurations, lattices, and origami-inspired structures.",
        "Examination of additive manufacturing methods, including SLA, SLS, and FDM, alongside mechanical testing and characterization techniques.",
        "Review of finite element modeling, topology optimization, and machine learning approaches for tailoring auxetic behavior and energy absorption."
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
        title: "Nonlinear FEA of an F-1 Rocket Engine Nozzle Joint",
        field: "Fluid Mechanics",
        category: "Aerospace Propulsion & Structural FEA",
        year: "2024",
        imageUrl: "",
        description: "Assess bolt safety margins and flange separation in the 100-bolt joint connecting the middle and lower nozzle sections of the Saturn V F-1 engine.",
        tools: ["ANSYS", "Nonlinear FEA", "Contact Modeling", "Bolt Preload", "Thermal Strain Analysis", "Mesh Refinement"],
        metrics: "Assessed flange-bolt safety margins and contact behavior under combined 12.17–47.72 psi exhaust pressure, 700°F thermal load, and 50% breaking strength bolt preload.",
        detailedSpecs: {
          sections: [
            {
              title: "Objective",
              content: "Assess bolt safety margins and flange separation in the 100-bolt joint connecting the middle and lower nozzle sections of the Saturn V F-1 engine."
            },
            {
              title: "Modeling Approach",
              items: [
                "Developed a nonlinear finite element model in ANSYS with contact interactions between assembly components.",
                "Modeled the 300-series stainless-steel nozzle and A-286 steel bolts and nuts.",
                "Incorporated temperature-dependent material properties and thermal strains."
              ]
            },
            {
              title: "Loading Conditions",
              items: [
                "Linearly varying internal exhaust pressure: **12.17–47.72 psi**.",
                "Thermal loading corresponding to a gas temperature of **700°F**.",
                "Two equivalent forces of **1,000 lbf each**, representing the effect of omitted regeneration channels.",
                "Bolt preload set to **50% of breaking strength**."
              ]
            },
            {
              title: "Evaluation and Verification",
              items: [
                "Assessed flange-bolt safety margins under combined mechanical and thermal loading.",
                "Examined contact behavior and gaps developing between the joined nozzle sections.",
                "Verified the numerical model through mesh refinement and comparison with hand calculations."
              ]
            },
            {
              title: "Tools and Methods",
              content: "ANSYS · Nonlinear FEA · Contact Modeling · Bolt Preload · Thermal Strain Analysis · Mesh Refinement.",
              isItalic: true
            }
          ]
        }
      },
      {
        id: "proj-fm-3",
        title: "Numerical and Experimental Performance Analysis of a Darrieus-Savonius Hybrid Vertical Axis Wind Turbine for Low Wind Speed Conditions",
        field: "Fluid Mechanics",
        category: "Renewable Energy Aerodynamics",
        year: "2024",
        imageUrl: "/images/real/vawt_prototype.jpg",
        description: "Coupled numerical CFD and wind-tunnel experimental performance analysis of an innovative hybrid Darrieus-Savonius vertical axis wind turbine configuration engineered specifically for urban and low-wind-speed coastal regimes.",
        tools: ["ANSYS Fluent", "Wind Tunnel Testing", "Prototype Fabrication", "Sliding Mesh", "SolidWorks"],
        metrics: "Integrated unsteady CFD simulation with physical prototype wind-tunnel testing, achieving self-starting threshold at low wind speeds (<3.5 m/s) with sustained peak power coefficient.",
        paperUrl: "https://drive.google.com/file/d/1slEW4Ju9-KRzcv94nxoMbt2gV3eWBuDs/view?usp=drive_link"
      },
      {
        id: "proj-fm-4",
        title: "Steady-State 3D CFD Analysis of a Carotid Artery Bifurcation",
        field: "Fluid Mechanics",
        category: "Biomedical Fluid Dynamics & CFD",
        year: "2024",
        imageUrl: "",
        description: "Investigate blood-flow behavior through a carotid artery bifurcation using ANSYS Fluent, focusing on velocity fields, pressure distribution, and flow division between the two arterial branches.",
        tools: ["ANSYS Fluent", "3D CFD", "Internal-Flow Meshing", "Steady-State Analysis", "Biomedical Flow Modeling", "Velocity & Pressure Visualization"],
        metrics: "Characterized hemodynamics, velocity gradients, and pressure drop across 6.3 mm inlet and 4.5 mm / 3.0 mm branching outlets under 100 mmHg physiologic outflow pressure.",
        detailedSpecs: {
          sections: [
            {
              title: "Objective",
              content: "Investigate blood-flow behavior through a carotid artery bifurcation using ANSYS Fluent, focusing on velocity fields, pressure distribution, and flow division between the two arterial branches."
            },
            {
              title: "Geometry and Mesh",
              items: [
                "Used a three-dimensional vascular geometry derived from a luminal casting of a carotid artery bifurcation.",
                "Modeled one inlet with an approximate diameter of **6.3 mm** and two outlets measuring **4.5 mm** and **3.0 mm**.",
                "Generated a computational mesh for the internal fluid domain to resolve flow through the branching geometry."
              ]
            },
            {
              title: "Physical Model and Boundary Conditions",
              items: [
                "Performed a **steady-state simulation**, excluding pulsatile and cyclic variations in blood flow.",
                "Assigned a blood density of **1,060 kg/m³**.",
                "Approximated blood as a **constant-viscosity Newtonian fluid**, simplifying its actual non-Newtonian behavior.",
                "Defined an inlet velocity condition and maintained both outlets at **100 mmHg**, approximately **13,332 Pa**.",
                "Applied a **no-slip wall condition**, setting fluid velocity to zero at the arterial walls."
              ]
            },
            {
              title: "Analysis and Evaluation",
              items: [
                "Examined velocity distributions and flow patterns through the main artery and daughter branches.",
                "Analyzed pressure variation across the bifurcation and the influence of branching geometry on flow behavior.",
                "Visualized the numerical results and compared flow characteristics with expected physical behavior."
              ]
            },
            {
              title: "Tools and Methods",
              content: "ANSYS Fluent · 3D CFD · Internal-Flow Meshing · Steady-State Analysis · Biomedical Flow Modeling · Velocity and Pressure Visualization",
              isItalic: true
            }
          ]
        }
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
      event: "Climate Justice idea Competition 2023, Season 2 - Powered by The Daily Star and Actionaid",
      organizer: "The Daily Star & ActionAid Bangladesh",
      year: "2023",
      category: "Innovation & Climate Action",
      imageUrl: "/images/real_awards/award_climate_justice_champion.png",
      description: "Secured National Champion award in Season 2 of the Climate Justice Idea Competition 2023, organized and powered by The Daily Star and ActionAid Bangladesh for proposing innovative climate mitigation solutions."
    },
    {
      id: "comp-2",
      title: "1st Runner up",
      event: "Face the case, Case Competition 2021",
      organizer: "IEEE CUET Student Branch",
      year: "2021",
      category: "Case Competition",
      imageUrl: "/images/real_awards/award_face_the_case_2021.png",
      description: "Awarded 1st Runner Up in 'Face the Case' Case Competition 2021 by IEEE CUET Student Branch for strategic business problem-solving, financial modeling, and innovative execution."
    },
    {
      id: "comp-3",
      title: "2nd Runner Up",
      event: "National Earth Olympiad Barishal Region 2014",
      organizer: "Bangladesh Youth Environmental Initiative (BYEI)",
      year: "2014",
      category: "Earth & Environmental Sciences",
      imageUrl: "/images/real_awards/award_earth_olympiad_2014.png",
      description: "Awarded 2nd Runner Up in the Divisional Round of National Earth Olympiad 2014 (NEO 2014), Barishal Region, recognized for excellence in Earth and Environmental Sciences."
    },
    {
      id: "comp-4",
      title: "Champion",
      event: "National Math Olympiad Barishal Region 2011",
      organizer: "Bangladesh Mathematical Olympiad Committee",
      year: "2011",
      category: "Mathematics",
      imageUrl: "/images/real_awards/award_math_olympiad_champion_2011.png",
      description: "Awarded Champion in the Barishal Region of the National Math Olympiad (Bangladesh Mathematical Olympiad 2011) demonstrating mathematical problem-solving acumen."
    }
  ],

  posterPresentations: [
    {
      id: "post-1",
      title: "Strategic Utilization of Dispatchable Loads and Nodal Reserves for Improved Reserve Deliverability",
      posterId: "Poster ID: 146",
      event: "1st National Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real_awards/award_cuet_research_fair_2023_poster1.png",
      certificateUrl: "/images/real/cert_cuet_poster_dispatchable_loads.jpg",
      posterUrl: "/images/real/poster_dispatchable_loads.jpg",
      description: "Appreciation award for research poster presentation at the 1st National Research Fair 2023 ('Knowledge Exploration for Smart Bangladesh') organized by the Directorate of Research and Extension (DRE), CUET."
    },
    {
      id: "post-2",
      title: "Driving Simulators: Paving the Way to a Safer Smart Bangladesh! (2nd Prize)",
      posterId: "Poster ID: 97",
      event: "1st National Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real_awards/award_cuet_research_fair_2023_poster2nd.png",
      certificateUrl: "/images/real/cert_cuet_poster_driving_simulators.jpg",
      posterUrl: "/images/real/poster_driving_simulators.jpg",
      description: "Awarded 2nd Prize for Research Poster Presentation organized by the Directorate of Research and Extension (DRE), Chittagong University of Engineering & Technology (CUET)."
    }
  ],

  posters: [
    {
      id: "post-1",
      title: "Strategic Utilization of Dispatchable Loads and Nodal Reserves for Improved Reserve Deliverability",
      posterId: "Poster ID: 146",
      event: "1st National Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real_awards/award_cuet_research_fair_2023_poster1.png",
      certificateUrl: "/images/real/cert_cuet_poster_dispatchable_loads.jpg",
      posterUrl: "/images/real/poster_dispatchable_loads.jpg",
      description: "Appreciation award for research poster presentation at the 1st National Research Fair 2023 ('Knowledge Exploration for Smart Bangladesh') organized by the Directorate of Research and Extension (DRE), CUET."
    },
    {
      id: "post-2",
      title: "Driving Simulators: Paving the Way to a Safer Smart Bangladesh! (2nd Prize)",
      posterId: "Poster ID: 97",
      event: "1st National Research Fair 2023",
      venue: "Chittagong University of Engineering & Technology (CUET)",
      year: "2023",
      imageUrl: "/images/real_awards/award_cuet_research_fair_2023_poster2nd.png",
      certificateUrl: "/images/real/cert_cuet_poster_driving_simulators.jpg",
      posterUrl: "/images/real/poster_driving_simulators.jpg",
      description: "Awarded 2nd Prize for Research Poster Presentation organized by the Directorate of Research and Extension (DRE), Chittagong University of Engineering & Technology (CUET)."
    }
  ],

  hultPrize: [
    {
      id: "hult-1",
      title: "Reached Semifinal round of on campus Hult Prize CUET cohort 2020-2021",
      cohort: "Hult Prize CUET Cohort 2020 – 2021",
      year: "2020 – 2021",
      imageUrl: "/images/real_awards/cert_hult_prize_cuet_2021.png",
      description: "Official certificate recognizing reaching the semifinal round in the on-campus Hult Prize CUET cohort (2020-2021), presenting sustainable social business models."
    },
    {
      id: "hult-2",
      title: "Reached Semifinal round of on campus Hult Prize CUET cohort 2019-2020",
      cohort: "Bottle Green House Team, Hult Prize CUET Cohort",
      year: "2019 – 2020",
      imageUrl: "/images/real_awards/cert_hult_prize_cuet_2020.png",
      description: "Official certificate conferred to 'Bottle Green House' team for advancing to the semifinal round in the on-campus Hult Prize CUET cohort (2019-2020)."
    },
    {
      id: "hult-3",
      title: "Volunteer Graphic Designer, HULT Prize Bangladesh Team",
      cohort: "HULT Prize Bangladesh National Team",
      year: "2020 – 2021",
      imageUrl: "/images/real_awards/cert_hult_prize_bd_volunteer.png",
      description: "Volunteer Graphic Designer contributing visual identity, event branding, and promotional collateral for HULT Prize Bangladesh national organizing team."
    }
  ],

  eventOrganization: [
    {
      id: "evt-1",
      title: "Design Lead, Organizer for Hult Prize Dhaka Impact Summit 2021",
      event: "Hult Prize Dhaka Impact Summit 2021",
      venue: "Dhaka Impact Summit",
      year: "2021",
      imageUrl: "/images/real_awards/cert_hult_prize_dhaka_summit_2021.png",
      description: "Served as Design Lead & Organizer for the Hult Prize Dhaka Impact Summit 2021, coordinating design materials, delegate communications, and summit branding."
    },
    {
      id: "evt-2",
      title: "Design Lead, Organizer for Hult Prize Kuala Lumpur Impact Summit 2021",
      event: "Hult Prize Kuala Lumpur Impact Summit 2021",
      venue: "Kuala Lumpur Impact Summit",
      year: "2021",
      imageUrl: "/images/real_awards/cert_hult_prize_kl_summit_2021.png",
      description: "Design Lead and Organizer for the international Hult Prize Kuala Lumpur Impact Summit 2021, managing creative collateral and summit operations."
    },
    {
      id: "evt-3",
      title: "Design Lead, Organizer for Hult Prize Chittagong Impact Summit 2021",
      event: "Hult Prize Chittagong Impact Summit 2021",
      venue: "Chittagong Impact Summit",
      year: "2021",
      imageUrl: "/images/real_awards/cert_hult_prize_chittagong_summit_2021.png",
      description: "Design Lead and Organizer for the Hult Prize Chittagong Impact Summit 2021, orchestrating regional event marketing and summit logistics."
    },
    {
      id: "evt-4",
      title: "Successfully arranged Autodesk Academic Event: Introduction to Autodesk Fusion 360",
      event: "Introduction to Autodesk Fusion 360 (Autodesk Academic Partner)",
      venue: "CUET Campus",
      year: "2022",
      imageUrl: "/images/real_awards/cert_autodesk_fusion360_organizer.png",
      description: "Awarded Certificate of Appreciation as Organizer for successfully arranging the Autodesk Academic Event: Introduction to Autodesk Fusion 360 at CUET."
    }
  ],

  organization: [
    {
      id: "evt-1",
      title: "Design Lead, Organizer for Hult Prize Dhaka Impact Summit 2021",
      event: "Hult Prize Dhaka Impact Summit 2021",
      organizer: "Hult Prize Foundation",
      venue: "Dhaka Impact Summit",
      year: "2021",
      category: "Summit Leadership & Branding",
      imageUrl: "/images/real_awards/cert_hult_prize_dhaka_summit_2021.png",
      description: "Served as Design Lead & Organizer for the Hult Prize Dhaka Impact Summit 2021, coordinating design materials, delegate communications, and summit branding."
    },
    {
      id: "evt-2",
      title: "Design Lead, Organizer for Hult Prize Kuala Lumpur Impact Summit 2021",
      event: "Hult Prize Kuala Lumpur Impact Summit 2021",
      organizer: "Hult Prize Foundation",
      venue: "Kuala Lumpur Impact Summit",
      year: "2021",
      category: "International Summit Leadership",
      imageUrl: "/images/real_awards/cert_hult_prize_kl_summit_2021.png",
      description: "Design Lead and Organizer for the international Hult Prize Kuala Lumpur Impact Summit 2021, managing creative collateral and summit operations."
    },
    {
      id: "evt-3",
      title: "Design Lead, Organizer for Hult Prize Chittagong Impact Summit 2021",
      event: "Hult Prize Chittagong Impact Summit 2021",
      organizer: "Hult Prize Foundation",
      venue: "Chittagong Impact Summit",
      year: "2021",
      category: "Regional Summit Organization",
      imageUrl: "/images/real_awards/cert_hult_prize_chittagong_summit_2021.png",
      description: "Design Lead and Organizer for the Hult Prize Chittagong Impact Summit 2021, orchestrating regional event marketing and summit logistics."
    },
    {
      id: "evt-4",
      title: "Successfully arranged Autodesk Academic Event: Introduction to Autodesk Fusion 360",
      event: "Introduction to Autodesk Fusion 360",
      organizer: "Autodesk Academic Partner",
      venue: "CUET Campus",
      year: "2022",
      category: "Academic Technical Workshop",
      imageUrl: "/images/real_awards/cert_autodesk_fusion360_organizer.png",
      description: "Awarded Certificate of Appreciation as Organizer for successfully arranging the Autodesk Academic Event: Introduction to Autodesk Fusion 360 at CUET."
    },
    {
      id: "hult-1",
      title: "Reached Semifinal round of on campus Hult Prize CUET cohort 2020-2021",
      event: "Hult Prize Global Social Challenge",
      organizer: "Hult Prize CUET",
      cohort: "Hult Prize CUET Cohort 2020 – 2021",
      venue: "CUET Campus",
      year: "2020 – 2021",
      category: "Social Entrepreneurship",
      imageUrl: "/images/real_awards/cert_hult_prize_cuet_2021.png",
      description: "Official certificate recognizing reaching the semifinal round in the on-campus Hult Prize CUET cohort (2020-2021), presenting sustainable social business models."
    },
    {
      id: "hult-2",
      title: "Reached Semifinal round of on campus Hult Prize CUET cohort 2019-2020",
      event: "Hult Prize Global Social Challenge",
      organizer: "Hult Prize CUET",
      cohort: "Bottle Green House Team, Hult Prize CUET Cohort",
      venue: "CUET Campus",
      year: "2019 – 2020",
      category: "Social Entrepreneurship",
      imageUrl: "/images/real_awards/cert_hult_prize_cuet_2020.png",
      description: "Official certificate conferred to 'Bottle Green House' team for advancing to the semifinal round in the on-campus Hult Prize CUET cohort (2019-2020)."
    },
    {
      id: "hult-3",
      title: "Volunteer Graphic Designer, HULT Prize Bangladesh Team",
      event: "HULT Prize Bangladesh National Team",
      organizer: "Hult Prize Bangladesh",
      cohort: "HULT Prize Bangladesh National Team",
      venue: "National Operations",
      year: "2020 – 2021",
      category: "Creative Directorship",
      imageUrl: "/images/real_awards/cert_hult_prize_bd_volunteer.png",
      description: "Volunteer Graphic Designer contributing visual identity, event branding, and promotional collateral for HULT Prize Bangladesh national organizing team."
    }
  ],

  technicalCertifications: [
    {
      id: "cert-cswp",
      title: "SOLIDWORKS Design Professional (CSWP)",
      issuer: "Dassault Systèmes / SOLIDWORKS",
      field: "Advanced Mechanical Design & Parametric Solid Modeling",
      year: "Sep 2026",
      date: "September 18, 2026",
      certId: "C-UJLY5CTD7Q",
      pdfUrl: "/docs/SolidWorks_CSWP_Certificate_Jubair_Zidan.pdf",
      imageUrl: "/images/real_certs/cert_cswp_solidworks.png",
      category: "technical",
      topicSummary: "Certified professional mastery in parametric 3D solid part design, complex feature modeling, configurations, movable mechanical assembly constraints, and interference analysis.",
      topics: ["CSWP Certified", "Parametric Modeling", "Movable Assemblies", "Mechanical Drafting"],
      description: "Official Dassault Systèmes Certified SOLIDWORKS Professional (CSWP) credential (Certificate ID: C-UJLY5CTD7Q) conferred on September 18, 2026, signed by Manish Kumar (SOLIDWORKS CEO & R&D Vice President). Confirms proven ability to design and analyze parametric parts and movable assemblies using a variety of complex features in SOLIDWORKS software."
    },
    {
      id: "cert-cswa",
      title: "SOLIDWORKS CAD Design Associate (CSWA)",
      issuer: "Dassault Systèmes / SOLIDWORKS",
      field: "Mechanical Design & 3D Parametric CAD",
      year: "Jun 2025",
      date: "June 23, 2025",
      certId: "C-HBYTZ6ULEW",
      imageUrl: "/images/real_certs/cert_cswa_solidworks.png",
      category: "technical",
      topicSummary: "Validated fundamental competency in 3D CAD parametric modeling, mechanical design principles, multi-part assembly creation, and engineering drawing generation according to industry standards.",
      topics: ["CSWA Certified", "3D CAD Modeling", "Part Design", "Engineering Drawings"],
      description: "Official Dassault Systèmes Certified SOLIDWORKS Associate (CSWA) credential (Certificate ID: C-HBYTZ6ULEW) conferred on June 23, 2025, signed by Manish Kumar (SOLIDWORKS CEO & R&D Vice President). Demonstrates validated professional competency in 3D CAD parametric modeling, mechanical design principles, engineering drawing generation, and multi-part assembly design in SOLIDWORKS."
    }
  ],

  courseCertifications: [
    {
      id: "cert-cornell-simulation",
      title: "ENGR2000X: A Hands-on Introduction to Engineering Simulations",
      issuer: "Cornell University / CornellX (edX)",
      field: "Finite Element Analysis (FEA) & Computational Fluid Dynamics (CFD)",
      year: "Jul 2026",
      date: "July 27, 2026",
      certId: "d8491ceb9049465e90dac14236cbbfe8",
      verificationUrl: "https://courses.edx.org/certificates/d8491ceb9049465e90dac14236cbbfe8",
      imageUrl: "/images/real_certs/cert_cornell_simulation.png",
      category: "course",
      topicSummary: "Hands-on engineering simulation covering governing equations, finite element analysis (FEA), computational fluid dynamics (CFD), mesh sensitivity verification, and numerical solution validation in ANSYS.",
      topics: ["FEA Simulation", "CFD Analysis", "Mesh Verification", "ANSYS Fluent"],
      description: "Verified Certificate of Achievement issued by Cornell University through CornellX (Valid Certificate ID: d8491ceb9049465e90dac14236cbbfe8) on July 27, 2026. Instructed by Rajesh Bhaskaran, Swanson Director of Engineering Simulation at Sibley School of Mechanical & Aerospace Engineering, Cornell University. Successfully completed and received a passing grade in rigorous hands-on engineering simulations covering governing equations, finite element analysis (FEA), computational fluid dynamics (CFD), mesh sensitivity verification, and solution validation."
    },
    {
      id: "cert-vanderbilt-matlab",
      title: "Introduction to Programming with MATLAB",
      issuer: "Vanderbilt University (Coursera)",
      field: "Computer Science & Engineering Programming",
      year: "Sep 2026",
      date: "September 23, 2026",
      certId: "AWUEPMZAJE64",
      verificationUrl: "https://coursera.org/verify/AWUEPMZAJE64",
      pdfUrl: "/docs/Vanderbilt_MATLAB_Certificate_Jubair_Zidan.pdf",
      imageUrl: "/images/real_certs/cert_vanderbilt_matlab.png",
      category: "course",
      topicSummary: "Foundational to advanced programming covering recursive algorithms, modular function design, file I/O operations, multidimensional matrix indexing, and computational problem-solving in MATLAB.",
      topics: ["Algorithm Design", "Matrix Indexing", "File I/O", "Data Visualization"],
      description: "Official Course Certificate authorized by Vanderbilt University and offered through Coursera, awarded to Md. Jubair Uddin Zidan on September 23, 2026 (Verification ID: AWUEPMZAJE64). Instructed by Dr. Akos Ledeczi and Dr. J. Michael Fitzpatrick (Professors of Computer Engineering, Computer Science, and Electrical Engineering). Comprehensive training in computer programming fundamentals, recursive algorithms, modular functions, file I/O operations, multidimensional matrix indexing, and computational problem-solving."
    },
    {
      id: "cert-ansys-artery-steady",
      title: "3D Bifurcating Artery (Steady)",
      issuer: "Ansys Innovation Courses",
      field: "Computational Fluid Dynamics (CFD) & Hemodynamics",
      year: "Sep 2026",
      date: "September 15, 2026",
      pdfUrl: "/docs/Ansys_3D_Bifurcating_Artery_Steady_Certificate.pdf",
      imageUrl: "/images/real_certs/cert_ansys_artery_steady.png",
      category: "course",
      topicSummary: "Specialized CFD simulation in Ansys Fluent modeling steady laminar blood flow dynamics across an anatomical 3D bifurcating artery, boundary layer meshing, non-Newtonian blood rheology, and wall shear stress.",
      topics: ["ANSYS Fluent", "Hemodynamics", "Non-Newtonian Rheology", "Wall Shear Stress"],
      description: "Official Ansys Course Completion Certificate confirmed on September 15, 2026. Specialized CFD simulation in Ansys Fluent modeling steady laminar blood flow dynamics across an anatomical 3D bifurcating artery. Explored boundary layer meshing, non-Newtonian blood rheology, wall shear stress (WSS) distributions, recirculation zone identification, and hemodynamic pressure losses."
    },
    {
      id: "cert-ansys-artery",
      title: "3D Bifurcating Artery",
      issuer: "Ansys Innovation Courses",
      field: "Computational Fluid Dynamics (CFD) & Hemodynamics",
      year: "Sep 2026",
      date: "September 19, 2026",
      pdfUrl: "/docs/Ansys_3D_Bifurcating_Artery_Certificate.pdf",
      imageUrl: "/images/real_certs/cert_ansys_artery.png",
      category: "course",
      topicSummary: "Advanced computational biofluid dynamics simulation in Ansys Fluent modeling complete hemodynamic flow fields within an anatomical 3D bifurcating artery, unstructured meshing, and velocity vectors.",
      topics: ["Biofluid CFD", "Unstructured Meshing", "Vascular Hemodynamics", "Velocity Vectors"],
      description: "Official Ansys Course Completion Certificate confirmed on September 19, 2026. Advanced computational biofluid dynamics simulation in Ansys Fluent modeling complete hemodynamic flow fields within an anatomical 3D bifurcating artery. Covers vascular geometry preparation, multi-block unstructured meshing with prism boundary layers, non-Newtonian blood viscosity models, arterial wall shear stress (WSS) profiling, and velocity vectors."
    },
    {
      id: "cert-mathworks-simulink-onramp",
      title: "Simulink Onramp",
      issuer: "MathWorks Training Services",
      field: "Dynamic Systems Simulation & Model-Based Design",
      year: "Sep 2026",
      date: "September 25, 2026",
      imageUrl: "/images/real_certs/cert_mathworks_simulink_onramp.png",
      category: "course",
      topicSummary: "Graphical simulation of dynamic physical systems, continuous & discrete differential equation solutions, block-diagram modeling, signal routing, and feedback control system analysis.",
      topics: ["Simulink", "Model-Based Design", "Dynamic Systems", "Control Systems"],
      description: "Course Completion Certificate awarded by MathWorks Training Services to Jubair Zidan on 25 September 2026 for successfully completing 100% of the self-paced training course, signed by Craig L. Santos, Director of Training Services. Covers graphical simulation of dynamic physical systems, continuous-time and discrete-time differential equation solutions, block-diagram modeling, signal routing, and feedback control system analysis."
    },
    {
      id: "cert-mathworks-matlab-onramp",
      title: "MATLAB Onramp",
      issuer: "MathWorks Training Services",
      field: "Numerical Computation & Data Visualization",
      year: "Jun 2026",
      date: "June 4, 2026",
      imageUrl: "/images/real_certs/cert_mathworks_matlab_onramp.png",
      category: "course",
      topicSummary: "Proficiency in core MATLAB computation, array mathematics, matrix transformations, script automation, data filtering, and technical 2D/3D visualization for engineering applications.",
      topics: ["Numerical Computing", "Matrix Math", "Script Automation", "2D/3D Plotting"],
      description: "Course Completion Certificate awarded by MathWorks Training Services to Jubair Zidan on 4 June 2026 for successfully completing 100% of the self-paced training course, signed by Craig L. Santos, Director of Training Services. Validates proficiency in core MATLAB computation, array math, matrix transformations, script automation, data filtering, and technical 2D/3D visualization for engineering applications."
    }
  ],

  certifications: [
    {
      id: "cert-cswp",
      title: "SOLIDWORKS Design Professional (CSWP)",
      issuer: "Dassault Systèmes / SOLIDWORKS",
      field: "Advanced Mechanical Design & Parametric Solid Modeling",
      year: "Sep 2026",
      date: "September 18, 2026",
      certId: "C-UJLY5CTD7Q",
      pdfUrl: "/docs/SolidWorks_CSWP_Certificate_Jubair_Zidan.pdf",
      imageUrl: "/images/real_certs/cert_cswp_solidworks.png",
      category: "technical",
      description: "Official Dassault Systèmes Certified SOLIDWORKS Professional (CSWP) credential (Certificate ID: C-UJLY5CTD7Q) conferred on September 18, 2026, signed by Manish Kumar (SOLIDWORKS CEO & R&D Vice President). Confirms proven ability to design and analyze parametric parts and movable assemblies using a variety of complex features in SOLIDWORKS software."
    },
    {
      id: "cert-cswa",
      title: "SOLIDWORKS CAD Design Associate (CSWA)",
      issuer: "Dassault Systèmes / SOLIDWORKS",
      field: "Mechanical Design & 3D Parametric CAD",
      year: "Jun 2025",
      date: "June 23, 2025",
      certId: "C-HBYTZ6ULEW",
      imageUrl: "/images/real_certs/cert_cswa_solidworks.png",
      category: "technical",
      description: "Official Dassault Systèmes Certified SOLIDWORKS Associate (CSWA) credential (Certificate ID: C-HBYTZ6ULEW) conferred on June 23, 2025, signed by Manish Kumar (SOLIDWORKS CEO & R&D Vice President). Demonstrates validated professional competency in 3D CAD parametric modeling, mechanical design principles, engineering drawing generation, and multi-part assembly design in SOLIDWORKS."
    },
    {
      id: "cert-cornell-simulation",
      title: "ENGR2000X: A Hands-on Introduction to Engineering Simulations",
      issuer: "Cornell University / CornellX (edX)",
      field: "Finite Element Analysis (FEA) & Computational Fluid Dynamics (CFD)",
      year: "Jul 2026",
      date: "July 27, 2026",
      certId: "d8491ceb9049465e90dac14236cbbfe8",
      verificationUrl: "https://courses.edx.org/certificates/d8491ceb9049465e90dac14236cbbfe8",
      imageUrl: "/images/real_certs/cert_cornell_simulation.png",
      category: "course",
      description: "Verified Certificate of Achievement issued by Cornell University through CornellX (Valid Certificate ID: d8491ceb9049465e90dac14236cbbfe8) on July 27, 2026. Instructed by Rajesh Bhaskaran, Swanson Director of Engineering Simulation at Sibley School of Mechanical & Aerospace Engineering, Cornell University. Successfully completed and received a passing grade in rigorous hands-on engineering simulations covering governing equations, finite element analysis (FEA), computational fluid dynamics (CFD), mesh sensitivity verification, and solution validation."
    },
    {
      id: "cert-vanderbilt-matlab",
      title: "Introduction to Programming with MATLAB",
      issuer: "Vanderbilt University (Coursera)",
      field: "Computer Science & Engineering Programming",
      year: "Sep 2026",
      date: "September 23, 2026",
      certId: "AWUEPMZAJE64",
      verificationUrl: "https://coursera.org/verify/AWUEPMZAJE64",
      pdfUrl: "/docs/Vanderbilt_MATLAB_Certificate_Jubair_Zidan.pdf",
      imageUrl: "/images/real_certs/cert_vanderbilt_matlab.png",
      category: "course",
      description: "Official Course Certificate authorized by Vanderbilt University and offered through Coursera, awarded to Md. Jubair Uddin Zidan on September 23, 2026 (Verification ID: AWUEPMZAJE64). Instructed by Dr. Akos Ledeczi and Dr. J. Michael Fitzpatrick (Professors of Computer Engineering, Computer Science, and Electrical Engineering). Comprehensive training in computer programming fundamentals, recursive algorithms, modular functions, file I/O operations, multidimensional matrix indexing, and computational problem-solving."
    },
    {
      id: "cert-ansys-artery-steady",
      title: "3D Bifurcating Artery (Steady)",
      issuer: "Ansys Innovation Courses",
      field: "Computational Fluid Dynamics (CFD) & Hemodynamics",
      year: "Sep 2026",
      date: "September 15, 2026",
      pdfUrl: "/docs/Ansys_3D_Bifurcating_Artery_Steady_Certificate.pdf",
      imageUrl: "/images/real_certs/cert_ansys_artery_steady.png",
      category: "course",
      description: "Official Ansys Course Completion Certificate confirmed on September 15, 2026. Specialized CFD simulation in Ansys Fluent modeling steady laminar blood flow dynamics across an anatomical 3D bifurcating artery. Explored boundary layer meshing, non-Newtonian blood rheology, wall shear stress (WSS) distributions, recirculation zone identification, and hemodynamic pressure losses."
    },
    {
      id: "cert-ansys-artery",
      title: "3D Bifurcating Artery",
      issuer: "Ansys Innovation Courses",
      field: "Computational Fluid Dynamics (CFD) & Hemodynamics",
      year: "Sep 2026",
      date: "September 19, 2026",
      pdfUrl: "/docs/Ansys_3D_Bifurcating_Artery_Certificate.pdf",
      imageUrl: "/images/real_certs/cert_ansys_artery.png",
      category: "course",
      description: "Official Ansys Course Completion Certificate confirmed on September 19, 2026. Advanced computational biofluid dynamics simulation in Ansys Fluent modeling complete hemodynamic flow fields within an anatomical 3D bifurcating artery. Covers vascular geometry preparation, multi-block unstructured meshing with prism boundary layers, non-Newtonian blood viscosity models, arterial wall shear stress (WSS) profiling, and velocity vectors."
    },
    {
      id: "cert-mathworks-simulink-onramp",
      title: "Simulink Onramp",
      issuer: "MathWorks Training Services",
      field: "Dynamic Systems Simulation & Model-Based Design",
      year: "Sep 2026",
      date: "September 25, 2026",
      imageUrl: "/images/real_certs/cert_mathworks_simulink_onramp.png",
      category: "course",
      description: "Course Completion Certificate awarded by MathWorks Training Services to Jubair Zidan on 25 September 2026 for successfully completing 100% of the self-paced training course, signed by Craig L. Santos, Director of Training Services. Covers graphical simulation of dynamic physical systems, continuous-time and discrete-time differential equation solutions, block-diagram modeling, signal routing, and feedback control system analysis."
    },
    {
      id: "cert-mathworks-matlab-onramp",
      title: "MATLAB Onramp",
      issuer: "MathWorks Training Services",
      field: "Numerical Computation & Data Visualization",
      year: "Jun 2026",
      date: "June 4, 2026",
      imageUrl: "/images/real_certs/cert_mathworks_matlab_onramp.png",
      category: "course",
      description: "Course Completion Certificate awarded by MathWorks Training Services to Jubair Zidan on 4 June 2026 for successfully completing 100% of the self-paced training course, signed by Craig L. Santos, Director of Training Services. Validates proficiency in core MATLAB computation, array math, matrix transformations, script automation, data filtering, and technical 2D/3D visualization for engineering applications."
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
    overview: "Underwent rigorous industrial training at the RPCL 25 MW Dual-Fuel Power Generation Facility. Gained practical experience in large-scale reciprocating internal combustion engine operations, auxiliary fuel heating, steam and water treatment cycles, and electrical switchyard distribution.",
    imageUrl: "/images/real/rpcl_internship.jpg",
    images: [
      {
        url: "/images/real/rpcl_internship.jpg",
        title: "RPCL Raozan 25 MW Facility",
        subtitle: "RPCL Raozan Facility (Main)",
        caption: "Industrial Attachment Training Facility: RPCL 25 MW Dual-Fuel Power Plant in Raozan, Chattogram — main visual reference of heavy generation units, balance-of-plant, and auxiliary systems."
      },
      {
        url: "/images/real/rpcl_internship_turbocharger_assembly.jpg",
        title: "Turbocharger Impeller Assembly & Overhaul",
        subtitle: "Turbocharger Impeller Assembly",
        caption: "Hands-on engineering inspection and assembly of large-scale heavy turbocharger compressor impeller runner and rotor casing during planned preventive maintenance overhaul."
      },
      {
        url: "/images/real/rpcl_internship_auxiliary_skid.jpg",
        title: "Auxiliary Pumping, Fuel & Lube Oil Skid",
        subtitle: "Auxiliary Pumping & Filtration Skid",
        caption: "Technical on-site briefing at the auxiliary heavy fuel oil (HFO) preheating, centrifugal filtration, and lube oil booster pump skid with pressure monitoring manifolds."
      },
      {
        url: "/images/real/rpcl_internship_power_plant_hall.jpg",
        title: "RPCL Main Power Generation Engine Hall",
        subtitle: "Power Plant Engine Hall & Crane",
        caption: "RPCL power station main generator hall featuring heavy reciprocating engine blocks, massive insulated exhaust gas ducting, and industrial overhead gantry crane infrastructure."
      }
    ],
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
          "Vectors",
          "Linear Motion",
          "Newton's Laws of Motion and Applications",
          "Work, Energy, and Power",
          "Circular Motion",
          "Gravitation",
          "States of Matter and Pressure",
          "Simple Harmonic Motion and Waves",
          "Heat and Thermodynamics"
        ]
      },
      {
        subject: "Physics 2",
        topics: [
          "Electrostatics",
          "Current Electricity",
          "Magnetism and Electromagnetism",
          "Electromagnetic Induction",
          "Geometrical Optics",
          "Physical Optics",
          "Modern Physics (Relativity, Quantum Mechanics, Atomic Models)",
          "Nuclear Physics",
          "Semiconductor and Electronics"
        ]
      },
      {
        subject: "Math 1",
        topics: [
          "Matrices and Determinants",
          "Vector",
          "Straight Lines",
          "The Circle",
          "Permutations and Combinations",
          "Trigonometric Ratios",
          "Trigonometric Ratios of Associated Angles",
          "Functions and Graph of Functions",
          "Differentiation",
          "Integration"
        ]
      },
      {
        subject: "Math 2",
        topics: [
          "Complex Numbers",
          "Polynomials",
          "Exponential and Logarithmic Functions",
          "Conic Sections",
          "Inverse Trigonometric Functions",
          "Three-Dimensional Geometry",
          "Linear Programming",
          "Probability",
          "Statistics",
          "Differential Equations"
        ]
      }
    ]
  },

  extracurricular: [
    {
      id: "asme",
      organization: "American Society Of Mechanical Engineers CUET student Branch",
      role: "Treasurer",
      tagline: "Premier collegiate engineering chapter fostering technical innovation, professional development, and nationwide engineering symposiums",
      logoUrl: "/images/real/asme_logo.png",
      period: "2020 – 2024",
      highlights: [
        "Organized EFX Bangladesh 2024",
        "Engineering session coordination",
        "Editorial Board (Asia Pacific Region)",
        "Budget & financial management",
        "Fundraising & sponsorships",
        "Event funding allocation",
        "Membership finance administration",
        "Executive financial collaboration",
        "Cost optimization & resource management",
        "Financial planning & club sustainability"
      ]
    },
    {
      id: "scba",
      organization: "Supply Chain & Business Alliance CUET",
      role: "President",
      tagline: "Pioneering student alliance bridging engineering with industry, driving corporate case competitions, executive leadership, and mentorship",
      logoUrl: "/images/real/scba_logo.png",
      period: "2021 – 2024",
      highlights: [
        "Entrepreneurship & leadership workshops",
        "Guest lecture coordination",
        "Industry partnerships & mentorships",
        "Corporate networking events",
        "Case competition management",
        "Business competition promotion",
        "Membership growth & engagement",
        "Industry networking initiatives",
        "Event logistics & sponsorships",
        "University liaison & approvals"
      ]
    },
    {
      id: "cams",
      organization: "CUET Automotive and Mobility Society",
      role: "(Joint) Publication Secretary",
      tagline: "Collegiate automotive R&D society dedicated to energy-efficient vehicle prototyping, mobility innovations, and technical publications",
      logoUrl: "/images/real/cams_logo.png",
      period: "2021 – 2024",
      highlights: [
        "Content creation & publication",
        "Promotional material design",
        "Report & article writing",
        "Documentation & record management",
        "Workshop & recruitment support",
        "Vehicle R&D contribution",
        "Technical troubleshooting",
        "Vehicle testing & optimization"
      ]
    },
    {
      id: "joyoddhoney",
      organization: "Joyoddhoney, CUET",
      role: "Joint General Secretary",
      tagline: "Flagship university cultural society orchestrating campus-wide festivals, creative performing arts, and student community engagement",
      logoUrl: "/images/real/joyoddhoney_logo.png",
      period: "2020 – 2023",
      highlights: [
        "Club administration & operations",
        "Event planning & coordination",
        "Cultural event management",
        "Official communications & partnerships",
        "Task delegation & team leadership",
        "Documentation & record keeping",
        "Member–administration liaison",
        "Cultural promotion & outreach"
      ]
    }
  ],

  volunteering: [
    {
      id: "hult-bd",
      organization: "Hult Prize BD",
      role: "Operations & Youth Leadership Volunteer",
      period: "2021 – 2022",
      logoUrl: "/images/real/hult_prize_bd_logo.png",
      tagline: "Social entrepreneurship platform empowering student ventures",
      highlights: [
        "Social entrepreneurship initiatives",
        "Workshop & training coordination",
        "Outreach & participant engagement",
        "Event planning & execution",
        "Business proposal development",
        "Hult Prize presentation support"
      ]
    },
    {
      id: "green-lead",
      organization: "Green Lead",
      role: "Sustainability & Climate Action Volunteer",
      period: "2020 – 2022",
      logoUrl: "/images/real/green_lead_logo.png",
      tagline: "Nonprofit social enterprise developing green leaders",
      description: "Green Lead is a nonprofit social enterprise that develops green leaders through sustainability, entrepreneurship, and climate action initiatives.",
      highlights: [
        "Youth leadership development & environmental stewardship",
        "Community workshops & climate action initiatives",
        "Sustainable entrepreneurship ideation sessions"
      ]
    }
  ]
};

export const skillsData = {
  softwareSkills: [
    {
      category: "CAD & Design",
      skills: ["SolidWorks"],
      description: "Parametric 3D solid modeling, mechanical drafting, assembly design, and CSWA-certified technical workflows."
    },
    {
      category: "Simulation & CFD",
      skills: ["ANSYS Fluent", "ANSYS LS-DYNA", "OpenFOAM (Foundational Knowledge)", "COMSOL Multiphysics (Foundational Knowledge)"],
      description: "Computational fluid dynamics, sliding mesh rotation, explicit dynamics impact analysis, and multiphysics modeling."
    },
    {
      category: "Programming",
      skills: ["MATLAB", "Python", "C (Coursework)", "Fortran (Coursework)"],
      description: "Numerical computation, algorithm formulation, scientific scripting, and computational engineering coursework."
    },
    {
      category: "Scientific Computing & Data Analysis",
      skills: ["NumPy", "Pandas", "Jupyter Notebook", "OriginPro", "MS Excel"],
      description: "High-dimensional matrix operations, statistical data synthesis, scientific curve fitting, and exploratory analytics."
    },
    {
      category: "Version Control",
      skills: ["Git & GitHub"],
      description: "Distributed version control, collaborative research code management, and repository synchronization."
    },
    {
      category: "Scientific Documentation & Research",
      skills: ["LaTeX", "Mendeley", "MS Word", "MS PowerPoint", "Google Suite"],
      description: "Academic manuscript typesetting, bibliographic referencing, peer-reviewed paper formulation, and scholarly presentations."
    },
    {
      category: "Visualization",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Figma", "Adobe Premiere Pro"],
      description: "Technical schematics vector illustration, research poster layouts, conference pitch design, and multimedia editing."
    },
    {
      category: "Operating Systems",
      skills: ["macOS", "Windows"],
      description: "Cross-platform engineering workflows, software administration, and terminal environments."
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
    { 
      name: "Graphic & Editorial Design", 
      desc: "Crafting vector typography, editorial booklets, and clean minimalist layouts.",
      link: "https://www.behance.net/jubairzidan99",
      platform: "Behance"
    },
    { 
      name: "Photography & Visual Framing", 
      desc: "Documentary street and architectural photography capturing perspective and light.",
      link: "https://www.instagram.com/jubair_zidan.arw/",
      platform: "Instagram"
    }
  ]
};

export const contactData = {
  addressLine1: "Silicone Arcade, Flat 4/A, 1/1/B Ring Road",
  addressLine2: "Hasanabad State, Mohonpur, Ward-30",
  addressLine3: "Adabor, Shyamoli, Dhaka, Bangladesh",
  shortLocation: "Adabor, Shyamoli, Dhaka, Bangladesh",
  email: "jubairzidan99@gmail.com",
  secondaryEmail: "jubairzidan.mech@gmail.com",
  emails: ["jubairzidan99@gmail.com", "jubairzidan.mech@gmail.com"],
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
    text: "Thesis Defence : January 2027 (Tentative)",
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

export const milestonesGalleryData = [
  {
    id: "climate-justice-champion",
    title: "National Champion — Climate Justice",
    badge: "1st Place Champion",
    year: "2023",
    imageUrl: "/images/carousel/climate_justice_champion.jpg",
    objectPosition: "center 20%",
    description: "Crowned National Champion at the Climate Justice Idea Competition 2023 organized by The Daily Star and ActionAid, winning 50,000 BDT for Team SolarXen's sustainable decentralized energy model."
  },
  {
    id: "cuet-poster-defense",
    title: "Driving Simulators Poster Defense",
    badge: "Poster Defense",
    year: "2023",
    imageUrl: "/images/carousel/cuet_poster_defense.jpg",
    objectPosition: "center 25%",
    description: "Defending research poster on driving simulator interventions and traffic safety to evaluators at the 1st National Research Fair 2023 at CUET."
  },
  {
    id: "research-fair-stage",
    title: "CUET Research Fair 2nd Prize",
    badge: "2nd Prize Laureate",
    year: "2023",
    imageUrl: "/images/carousel/research_fair_stage_celebration.jpg",
    objectPosition: "center 25%",
    description: "Celebrating 2nd Prize at the 1st National Research Fair 2023 for research poster presentation on smart transit and driving simulators."
  },
  {
    id: "research-fair-award-handover",
    title: "Closing Ceremony Award Handover",
    badge: "Conferred by VC",
    year: "2023",
    imageUrl: "/images/carousel/research_fair_award_handover.jpg",
    objectPosition: "center 30%",
    description: "Receiving the 2nd Prize accolade and crest from the Vice Chancellor and distinguished academic leadership at the official Closing Ceremony."
  },
  {
    id: "research-fair-laureates",
    title: "National Research Fair Laureates",
    badge: "Scholarly Gathering",
    year: "2023",
    imageUrl: "/images/carousel/research_fair_laureates_stage.jpg",
    objectPosition: "center center",
    description: "All award recipients, university administrators, and faculty on the main auditorium stage during the Closing Ceremony of Research Fair 2023."
  },
  {
    id: "mimec-2022",
    title: "MIMEC 2022 Conference",
    badge: "Oral Presentation",
    year: "2022",
    imageUrl: "/images/real/mimec_presentation.jpg",
    objectPosition: "center 22%",
    description: "Delivering an oral podium presentation on bio-inspired aerodynamic optimization and turbulent flow structures at the MIMEC International Conference."
  },
  {
    id: "bsme-2023",
    title: "8th BSME Conference",
    badge: "Podium Presentation",
    year: "2023",
    imageUrl: "/images/real/bsme_presentation.jpg",
    objectPosition: "center 20%",
    description: "Presenting research on Savonius-Darrieus hybrid vertical axis wind turbines (VAWT) at the 8th BSME International Conference on Thermal Engineering."
  },
  {
    id: "vawt-prototype",
    title: "Hybrid Wind Turbine Rotor",
    badge: "R&D Prototype",
    year: "2023",
    imageUrl: "/images/real/vawt_prototype.jpg",
    objectPosition: "center center",
    description: "Aerodynamic prototyping, blade fabrication, and experimental assembly of a combined Savonius-Darrieus vertical axis wind turbine rotor."
  },
  {
    id: "cuet-machining-workshop",
    title: "Precision Machining & Fabrication",
    badge: "Machine Tools Lab",
    year: "2023",
    imageUrl: "/images/carousel/cuet_machining_workshop.jpg",
    objectPosition: "center 30%",
    description: "Operating heavy machine tools and performing precision milling and fabrication in the CUET Mechanical Engineering central machine shop."
  },
  {
    id: "rpcl-internship-certification",
    title: "RPCL 25 MW Power Facility",
    badge: "Industrial Attachment",
    year: "2023",
    imageUrl: "/images/carousel/rpcl_internship_certification.jpg",
    objectPosition: "center 35%",
    description: "Receiving industrial training certification from engineering directors at Rural Power Company Limited (RPCL) 25 MW heavy fuel oil power generation facility."
  },
  {
    id: "sparksurge-keynote",
    title: "Keynote Address: SparkSurge '21",
    badge: "Keynote & Hosting",
    year: "2021",
    imageUrl: "/images/carousel/sparksurge_keynote_speech.jpg",
    objectPosition: "center 20%",
    description: "Delivering an address and hosting collegiate delegates at SparkSurge '21, demonstrating communications mastery and student leadership."
  },
  {
    id: "academic-honors-crest",
    title: "Academic Honors & Leadership",
    badge: "Distinguished Accolade",
    year: "2024",
    imageUrl: "/images/carousel/academic_honors_crest.jpg",
    objectPosition: "center 20%",
    description: "Conferred honorary crest from faculty and department heads in recognition of academic excellence, engineering leadership, and co-curricular distinction."
  },
  {
    id: "bandarban-policy-workshop",
    title: "Municipal Policy Workshop",
    badge: "Policy Formulation",
    year: "2023",
    imageUrl: "/images/carousel/bandarban_policy_workshop.jpg",
    objectPosition: "center 30%",
    description: "Facilitating youth policy formulation and presenting environmental roadmaps on waste management and resource conservation at Bandarban Municipality."
  },
  {
    id: "bandarban-tree-plantation",
    title: "Community Tree Plantation",
    badge: "Community Impact",
    year: "2023",
    imageUrl: "/images/carousel/bandarban_tree_plantation.jpg",
    objectPosition: "center 25%",
    description: "Leading a green community tree plantation initiative in Bandarban Municipality to foster urban biodiversity and environmental sustainability."
  },
  {
    id: "bandarban-climate-volunteers",
    title: "Bandarban Climate Action Initiative",
    badge: "Climate Leadership",
    year: "2023",
    imageUrl: "/images/carousel/bandarban_climate_volunteers.jpg",
    objectPosition: "center 30%",
    description: "Spearheading community climate action and tree planting with youth volunteers and municipal leaders in Bandarban."
  }
];


