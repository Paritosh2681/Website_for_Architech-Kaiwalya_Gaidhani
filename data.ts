import type { Profile, Education, Experience, Skill, Project, Hobby } from './types';
import { SketchIcon, BookOpenIcon, CameraIcon } from './components/icons';

export const portfolioData = {
  profile: {
    name: "Kaiwalya Charudatt Gaidhani",
    email: "kaiwalya2509@gmail.com",
    phone: "9082579071",
    address: "Mira Road (E), Thane-401107",
    bio: "Architecture fascinates me, as it blends creativity, art, and technology, which are shaped by our life and culture. As an Architect, I'm passionate about designing functional, sustainable, and visually appealing designs that add value to people's lives. My experience has provided valuable insights into how architecture is a medium of expression and it is more than design spaces as it requires a strong sense of commitment and responsibility. During my work, I gained experience with BIM by learning and using Archicad. I am passionate about learning and growing in profession, and I'm eager to expand my skills and knowledge.",
  } as Profile,

  languages: ["English", "Hindi", "Marathi"],
  
  hobbies: [
    { name: 'Sketching', icon: SketchIcon },
    { name: 'Reading', icon: BookOpenIcon },
    { name: 'Photography', icon: CameraIcon }
  ] as Hobby[],

  education: [
    { degree: "B.Arch", school: "Sir J.J College of Architecture, Fort, Mumbai", year: "2019-2024", score: "8.59 CGPI" },
    { degree: "HSC - 12th", school: "GMS Holy Family Junior College, Mira Road (E)", year: "2019", score: "84.31%" },
    { degree: "SSC - 10th", school: "G.S.Jangid Memorial School, Mira Road", year: "2017", score: "91.40%" },
  ] as Education[],

  experience: [
    { 
      role: "Junior Architect", 
      company: "Tushar Desai Associates, Mumbai", 
      dates: "Jul 2024 - Oct 2025", 
      description: "During my tenure, I worked on Architectural Projects and Interior design projects.",
      projects: [
        "WIPRO Office, Airoli: design, detailing, MEP, finishing.",
        "RAPG Office, Chembur: design, detailing, MEP, finishing, site coordination.",
        "Green Acres School, Mulund: working drawing and site coordination."
      ]
    },
    { 
      role: "Freelance", 
      company: "Ar. Rahul Chemburkar and Vaastu Vidhaan Project", 
      dates: "Jun 2023 - Aug 2023", 
      description: "Conceptual Design and Presentation for Chanakya Excellence Center.",
      projects: []
    },
    { 
      role: "Internship", 
      company: "Vaastu Vidhaan Project, Mumbai", 
      dates: "Dec 2022 - May 2023", 
      description: "Worked on Architectural Heritage Conservation Projects and design projects such as Temple design.",
      projects: []
    },
  ] as Experience[],

  skills: [
    { name: "Revit", level: 3 },
    { name: "AutoCAD", level: 4 },
    { name: "Archicad", level: 4 },
    { name: "Sketchup", level: 4 },
    { name: "Enscape", level: 4 },
    { name: "Lumion", level: 3 },
    { name: "Photoshop", level: 4 },
    { name: "V-Ray", level: 3 },
  ] as Skill[],

  projects: [
    {
      id: "wipro-office",
      title: "WIPRO Office",
      category: "Professional - Interior Design",
      location: "Airoli, Navi Mumbai",
      description: "The project aims to create a workplace for WIPRO. It focuses on designing ODC zones based on each department's needs, incorporating designated cabins, discussion rooms, training rooms, a cafeteria, and a board room with an executive zone. The theme was to showcase the fabric story of Maharashtra through the design, inspired by the 'Solapuri Chadder'.",
      scope: ["Layouts and space finalization", "MEP layouts and vendor coordination", "Preparing GFC's and finishing drawings", "Site coordination and visits"],
      coverImage: "/images/projects/wipro-office/breakout.jpg",
      images: [
        "/images/projects/wipro-office/reception.jpg",
        "/images/projects/wipro-office/corridor.jpg",
        "/images/projects/wipro-office/plan.jpg",
        "/images/projects/wipro-office/breakout.jpg"
      ],
      drawings: [
        "/images/projects/wipro-office/plan.jpg"
      ]
    },
    {
      id: "gyaan-mandir",
      title: "Gyaan Mandir",
      category: "Academic - Design Dissertation",
      location: "Palghar, Maharashtra",
      description: "A school designed as a holistic learning environment where students experience the 'joy of learning'. The project focuses on creating variation in learning spaces, where the built environment contributes to the pedagogical process. The design is based on creating four interaction nodes, visualized as courtyards interlinked through a 'Learning Axis'.",
      scope: ["Site analysis and design philosophy", "Classroom module development", "Master planning and zoning", "Architectural sections and elevations"],
      coverImage: "/images/projects/gyaan-mandir/cover.jpg",
      images: [
        "/images/projects/gyaan-mandir/cover.jpg",
        "/images/projects/gyaan-mandir/elevation.jpg",
        "/images/projects/gyaan-mandir/courtyard.jpg",
        "/images/projects/gyaan-mandir/classroom.jpg"
      ],
      drawings: [
        "/images/projects/gyaan-mandir/elevation.jpg"
      ]
    },
    {
      id: "temple-complex",
      title: "Kanekar Kuldaivat Nyas Temple",
      category: "Internship - Heritage & Culture",
      location: "Ponda, Goa",
      description: "The project aims to design a temple complex for the Kanekar Community. The main temple is dedicated to Shree Mahalaxmi and Panchayatan Devta, with subsidiary spaces like an admin office, bhojanshala, yagnashala, and gurukul. The design derives its form from typical Goan temple architecture, responding to its context.",
      scope: ["Presentation Drawings for client meetings", "3D presentation and study model preparation"],
      coverImage: "/images/projects/temple-complex/cover.jpg",
      images: [
        "/images/projects/temple-complex/cover.jpg",
        "/images/projects/temple-complex/model.jpg",
        "/images/projects/temple-complex/plan.jpg",
        "/images/projects/temple-complex/elevation.jpg"
      ],
      drawings: [
        "/images/projects/temple-complex/plan.jpg",
        "/images/projects/temple-complex/elevation.jpg"
      ]
    },
    {
      id: "rapg-office",
      title: "RAPG Office",
      category: "Professional - Interior Design",
      location: "Chembur, Mumbai",
      description: "The project involved converting a school floor into a modern office space for RAPG employees. The design features modern interiors with exposed concrete finishes and wooden textured surfaces, creating distinct workstation zones, cabins, and meeting rooms.",
      scope: ["Layouts and space finalization", "MEP layouts and vendor coordination", "Preparing GFC's and finishing drawings", "Site coordination"],
      coverImage: "/images/projects/rapg-office/cover.jpg",
      images: [
        "/images/projects/rapg-office/cover.jpg",
        "/images/projects/rapg-office/conference.jpg",
        "/images/projects/rapg-office/pantry.jpg",
        "/images/projects/rapg-office/plan.jpg"
      ],
      drawings: [
        "/images/projects/rapg-office/plan.jpg"
      ]
    },
    {
      id: "green-acres-academy",
      title: "Green Acres Academy",
      category: "Professional - Architecture & Interior Design",
      location: "Mulund, Mumbai",
      description: "The project focuses on designing a school for Green Acres Academy in Mulund, Mumbai. The school includes a preschool section as well as primary to secondary sections. The construction is being carried out in three phases. I contributed to the third phase, which encompasses the sixth and seventh floors.",
      scope: ["Producing GFC's for project's 3rd phase - 6th and 7th floor", "Co-ordination with site person/site manager for smooth execution of work."],
      coverImage: "/images/projects/green-acres-academy/cover.jpg",
      images: ["/images/projects/green-acres-academy/cover.jpg"],
      drawings: ["/images/projects/green-acres-academy/cover.jpg"]
    },
    {
      id: "shree-shantadurga-temple",
      title: "Shree Shantadurga Temple",
      category: "Internship - Heritage & Culture",
      location: "Dhargal, Goa",
      description: "The project focuses on the redesign of the temple 'Shikhar' based on the study of typical Goan temple architecture. It aims to reinstate the original character of the temple. The restoration of the temple and temple complex will be undertaken in future. The project also aims to revive the traditional 'kaavi' art present in the temple and temple premises.",
      scope: ["Preparing presentation drawing for the design of the shikhar"],
      coverImage: "/images/projects/shree-shantadurga-temple/cover.jpg",
      images: ["/images/projects/shree-shantadurga-temple/cover.jpg"],
      drawings: ["/images/projects/shree-shantadurga-temple/cover.jpg"]
    },
    {
      id: "deulwadi",
      title: "Bhiulingeshwar Temple Complex",
      category: "Internship - Heritage & Culture",
      location: "Chembur, Mumbai",
      description: "The project focuses on the restoration and reinstating the original character of the temples present in this heritage temple complex. The 'Bhiulingeshwar Temple' of Deulwadi, Chembur belongs to a coastal typology of temples, typically found near Mumbai. The temple complex has significant importance as a beautiful community space. The restoration work includes the roof of ram mandali in the Deulwadi.",
      scope: ["Photographic Documentation of Ram Mandir in the Deulwadi", "Preparation of Measured Drawing of Ram Mandir", "Preparation of presentation for MHCC"],
      coverImage: "/images/projects/deulwadi/cover.jpg",
      images: ["/images/projects/deulwadi/cover.jpg"],
      drawings: ["/images/projects/deulwadi/cover.jpg"]
    },
    {
      id: "anant-temple",
      title: "Anant Temple",
      category: "Internship - Heritage & Culture",
      location: "Savoi Verem, Goa",
      description: "The project focuses on the restoration and reinstating the original charecter of the temples and its surrounding waterbodies. The temple belongs to typical temple architecture found in Goa.In the first phase restoration of the temple roof and water bodies is to be undertaken . Currently roof work is completed and restoration of surrounding water are in progress",
      scope: ["Presentation Drawing for the proposal for reinstating surrounding waterbodies", "Preparing 3D model for the proposal of waterbody.", "Documentation of the roof anf the ceiling of the temple."],
      coverImage: "/images/projects/anant-temple/cover.jpg",
      images: ["/images/projects/anant-temple/cover.jpg"],
      drawings: ["/images/projects/anant-temple/cover.jpg"]
    },
    {
      id: "mumbai-pyaavs",
      title: "MUMBAI PYAAVS - ANAND VITTHAL KOWLI PYAAV",
      category: "Internship - Heritage & Culture",
      location: "Dadar, Mumbai",
      description: "The project focuses on the restoration and reinstating the original character of Pyaavs in the current urban fabric of Mumbai. The Pyaavs are a unique facet of the socio-cultural heritage of Mumbai, located at important locations like public chowks and old tram stations. The work included the VJBU Pyaas, Anand Vitthal Kowli Pyaav, and Kalachowky Pyaav.",
      scope: ["Preparing As Built Drawing for VJBU Pyaas and Anand Vitthal Kowli Pyaav", "Updating 3D Model of VJBU Pyaav and Anand Vitthal Kowli Pyaav", "Preparation of presentation Drawing and 3D Model for Kalachowky pyaav"],
      coverImage: "/images/projects/mumbai-pyaavs/cover.jpg",
      images: ["/images/projects/mumbai-pyaavs/cover.jpg"],
      drawings: ["/images/projects/mumbai-pyaavs/cover.jpg"]
    },
    {
      id: "chanakya-excellence-center",
      title: "Chanakya Excellence Center",
      category: "Freelance",
      location: "Unknown",
      description: "The project was prepared for Ar.Rahul Chemburkar and Vaastu Vidhann Project. The project was to prepare the conceptual design and layout for Chanakya Excellence Center, based on the basic information and site plan provided by the firm.",
      scope: [
        "Plot Area --- Approx 45,600 sqm",
        "Built Area --- Approx 11,000 sqm",
        "Landscaped Area--- Approx 28,000 sqm",
        "Roads and Pathways--- Approx 5000 sqm"
      ],
      coverImage: "/images/projects/chanakya-excellence-center/cover.jpg",
      images: ["/images/projects/chanakya-excellence-center/cover.jpg"],
      drawings: ["/images/projects/chanakya-excellence-center/cover.jpg"]
    }
  ] as Project[],
};