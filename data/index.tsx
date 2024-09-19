export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
];

export const items = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Web-based Reservation Management System",
    des: "A centralized platform for making resort reservation, information, and virtual experience.",
    img: "/reservation1.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg", "/figma.svg", "/hostinger.svg"],
    link: "Wanna know more?",
  },
  {
    id: 2,
    title: " “Where to Look”: Your Health Companion",
    des: "Read, learn, and talk with others about health-related topics. This website will help you become more mindful of your health.",
    img: "/w2lookhome.png",
    iconLists: ["/figma.svg", "/wordpress.svg"],
    link: "Wanna know more?",
  },
  {
    id: 3,
    title: "NetZerAttic ",
    des: "A website that specializes in attic insulation and energy efficiency, aiming to create net-zero energy consumption specifically for attics.",
    img: "/netzerohome.png",
    iconLists: ["/wordpress.svg", "/ssa.svg", "/elementor.svg"],
    link: "Wanna know more?",
  },
  {
    id: 4,
    title: "3D Projects",
    des: "The Following are collections of 3D Projects I made during my 4th year.",
    img: "/3dsmax.svg",
    iconLists: ["/3dsmax.svg"],
    link: "Wanna know more?",
  },
];




export const detailedProjects = [
  {
    id: 1,
    title: "Web-based Reservation Management System",
    desc: "The system provides a user-friendly interface website that contains information about the resort, a fast and convenient reservation management system, and a virtual tour of the resort. The system was develop order to changing the reservation process of the resort from a manual to a system and enhancing the quality and satisfaction of the resort's services.",
    features: [
      {
        id: 1,
        title: "Reservation Management System",
        img: "/reserve-feat3.png",
        desc: "Allows users to select deferent packages, date & time, payment methods, with conversational experience.",
      },
      {
        id: 2,
        title: "Website",
        img: "/reserve-feat1.png",
        desc: "With the homepage a video introduction showcasing the resort and the resort's Facebook page plugin, gallery that showcases facilities, and other information about the resort.",
      },
      {
        id: 3,
        title: "3D Virtual Tour",
        img: "/reserve-feat2.png",
        desc: "Introducing the website's virtual tour feature, enabling users to explore the resort remotely and navigate through various rooms.",
      },
    ],
  },


  {
    id: 2,
    title: "“Where to Look”: Your Health Companion",
    desc: " Discover a world of wellness at “Where to Look”! Our mission? To empower you with knowledge, compassion, and hope. Dive into our comprehensive health condition section—from sniffles to serious ailments, we’ve got the lowdown. Chat with experts and fellow warriors, explore prevention tips, and find motivation when you need it most. Join our health-conscious community today. Let’s navigate wellness hand in hand!",
    features: [
      {
        id: 1,
        title: "Categorized Health Conditions",
        img: "/w2lookhealth.png",
        desc: "With 21 categories of health problems, users can easily find the information they need. Each category includes a detailed description, symptoms, causes, effects, treatments, and an inspirational quote.",
      },
      {
        id: 2,
        title: "Chat & Connect",
        img: "/w2lookchat.png",
        desc: "Need advice? Seeking support? Our chat feature connects you with experts and fellow warriors. Because healing is better together.",
      },
    ],
  }, 
  {
    id: 3,
    title: "NetZeroAttic",
    desc:"The website was created to promote the business the Net-Zero-Attic that is focused in Attic insulation that is owned by a Canadian Company. The website promotes informative details about attic insulation and the services that the business offers.",
    features: [
      {
        id: 1,
        title: "Informative Website",
        img: "/netzeroabout.png",
        desc: "Offers different pages that provide valuable information about attic insulation, energy efficiency, and related services offered by Net-Zero-Attic.",
      },
      {
        id: 2,
        title: "Make an Appointment",
        img: "/netzerocontact.png",
        desc: "This feature allows users to schedule appointments with Net-Zero-Attic directly through the website to conveniently set up consultations, inspections, or insulation installations by choosing available time slots.",
      },
    ],
  }, 
 {
    id: 4,
    title: "3D Projects",
    desc: "The Following are collections of 3D Projects that I made using 3DSMax.",
  },
];


export const cards = [
  {
    id: 1,
    title: "House",
    desc: "The images below shows the 3D Version covering all the spaces of my house.",
    images: [
      {
        id: 1,
        className: "md:col-span-2",
        thumbnail: "/house.jpg",
      },
      {
        id: 2,
        className: "col-span-1",
        thumbnail: "/terrace.jpg",
      },
      {
        id: 3,
        className: "col-span-1",
        thumbnail: "/loob.jpg",
      },
      {
        id: 4,
        className: "md:col-span-2",
        thumbnail: "/cr.jpg",
      },
      {
        id: 5,
        className: "md:col-span-2",
        thumbnail: "/sala2.jpg",
      },
      {
        id: 6,
        className: "col-span-1",
        thumbnail: "/kusina.jpg",
      },
      {
        id: 7,
        className: "col-span-1",
        thumbnail: "/secondfloor.jpg",
      },
      {
        id: 8,
        className: "md:col-span-2",
        thumbnail: "/secondfloorterrace.jpg",
      },
    ]
  },

  {
    id: 2,
    title: "Room Building",
    desc: "The images below are the 3D version of one of the buildings of Camarines Norte State College.",
    images: [
      {
        id: 1,
        className: "md:col-span-2",
        thumbnail: "/room/room1.png",
      },
      {
        id: 2,
        className: "col-span-1",
        thumbnail: "/room/room2.png",
      },
      {
        id: 3,
        className: "col-span-1",
        thumbnail: "/room/terrace.png",
      },
      {
        id: 4,
        className: "md:col-span-2",
        thumbnail: "/room/edit.png",
      },
    ]
  },

  {
    id: 3,
    title: "Bathroom",
    desc: "The images belows shows the 3D version of a comfort room.",
    images: [
      {
        id: 1,
        className: "md:col-span-2",
        thumbnail: "/bathroom/scene1.jpg",
      },
      {
        id: 2,
        className: "col-span-1",
        thumbnail: "/bathroom/scene2.jpg",
      },
    ]
  },
  {
    id: 4,
    title: "Chess",
    desc: "The following images shows the 3D version of a chess board and pieces as my first 3D project.",
    images: [
      {
        id: 1,
        className: "col-span-1",
        thumbnail: "/chess/chess1.jpg",
      },
      {
        id: 2,
        className: "md:col-span-2",
        thumbnail: "/chess/chess2.jpg",
      },
    ]
  },

  
  
];




export const contributions = [
  {
    id: 1,
    conntributions: [
      {
        id: 1,
        logo: "",
        title: "Back-end Developer",
        desc: "",
      },
      {
        id: 2,
        logo: "",
        title: "Front-end Developer",
        desc: "",
      },
      {
        id: 3,
        logo: "",
        title: "UX Designer",
        desc: "",
      },
    ],
  },
];

export const companies = [
  {
    id: 1,
    name: "HTML",
    img: "/html-2.svg",
  },
  {
    id: 2,
    name: "CSS",
    img: "/css-2.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "/javascript2.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    img: "/typescript.svg",

  },
  {
    id: 5,
    name: "PHP",
    img: "/php2.svg",
  },
  {
    id: 6,
    name: "Next JS",
    img: "/nextjs.svg",
  },
  {
    id: 7,
    name: "React Native",
    img: "/react.svg",
  },
  {
    id: 8,
    name: "MySQL",
    img: "/mysql2.png",
  },
  {
    id: 9,
    name: "VbNet",
    img: "/vbnet.png",
  },
  {
    id: 10,
    name: "Figma",
    img: "/figma.svg",
  },
  {
    id: 11,
    name: "Canva",
    img: "/canva.svg",
  },
  {
    id: 12,
    name: "3DSMax",
    img: "/3dsmax.svg",
  },
  {
    id: 13,
    name: "Adobe Premiere",
    img: "/adobe.svg",
  },

];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg", 
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

interface TabDataType {
  title: string;
  id: string;
  content: JSX.Element;
}

export const tabData: TabDataType[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>HTML/CSS</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React Native</li>
        <li>React JS</li>
        <li>MySQL</li>
        <li>Figma</li>
        <li>Canva</li>
        <li>Vbnet</li>
        <li>3DSmax</li>
        <li>Adobe Premiere Pro</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-5">
        <li>HTML/CSS1</li>
        <li>JavaScript1</li>
        <li>ReactJS1</li>
        <li>Figma1</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>Academic Distinction Award, 2024</li>
        <li>TOPCIT (Test for Practical Competency in IT), Level 2, 2023</li>
        <li>BYCT (Bicol Youth Congress in Information Technology), Certificate of Participation, 2023</li>
        <li>DICT Graphics Design using Adobe Express Webinar, Certificate of Participation, 2023</li>
        <li>Dean's List Award, 2022</li>
        <li>CSS Computer System Servicing, NCII Passer, 2017</li>
      </ul>
    ),
  },
];


export const projectDetails = [
  {
    id: 1,
    title: "Project 1",
    desc: "Description",
    features: [
      {
        name: "Name1",
        desc: "Descrition1",
      },
      {
        name2: "Name1",
        desc2: "Descrition1",
      },
      {
        name3: "Name1",
        desc2: "Descrition1",
      },
    ],
    contributions: [
      "Yes", "Contri2",
    ],
  }
];

export const about = 
  {
    desc:"I'm a developer & designer based from the Philippines. I specialize in UI/UX designing, focusing on creating simple but high quality designs.",
  };

export const mainSkills = [
  {
    id: 1,
    logo: "/ui-designer.svg",
    title: "UI/UX Design",
    desc: "UI/UX designer with experience in diverse projects from school and internship, focusing on creating user-friendly interfaces. Skilled in designing solutions that enhance user experience, with a primary focus on Figma for design execution."
  },
  {
    id: 2,
    logo: "/front-end.svg",
    title: "Front-end Development",
    desc: "Front-end developer with experience gained during school, having worked on various projects using multiple programming languages and effectively implementing client requirements."
  },
  {
    id: 3,
    logo: "/back-end.svg",
    title: "Back-end Development",
    desc: "Experienced in designing database schemas, connecting databases to applications, handling CRUD operations, data manipulation, and implementing payment gateways to optimize backend processes."
  },
  {
    id: 4,
    logo: "/graphic-design.svg",
    title: "Graphic Design",
    desc: "Acquired extensive experience as a graphic designer during my internship, where I created diverse promotional materials and utilized video editing skills to produce engaging videos."
  },
]

export const ProjectRole = [
  {
    id: 1,
    title: "Web-based Reservation Management System",
    roles: [
      {
        quote:
          "Implemented the design using HTML/CSS and functions using JavaScript focusing especially on the reservation management system.",
        title: "Front-end Developer",
      },
      {
        quote:
          "Created the scheme of the database and its implementation to the system using PHP,and I also implemented the payment gateway.",
        title: "Back-end Developer",
      },
      {
        quote: "Created and implemented ways in order to improve better user-experience with user-friendly design, ease of transactions, and information access.",
        title: "UX Designer",
      },
    ]
  },
  {
    id: 2,
    title: "“Where to Look”: Your Health Companion",
    roles: [
      {
        quote:
          "Designed User Interface and ensured the design feels intuitive, visually engaging, knowledge accessible.",
        title: "UI/UX Designer",
      },
      {
        quote:
          "Applied the design through Wordpress for faster implementation and ease of deployment.",
        title: "Front-end Developer",
      },
    ]
  },
  {
    id: 3,
    title: "NetZeroAttic",
    roles: [
      {
        quote:
          "Focusing on the appointment, using the Simply Schedule Appointment (SSA), I am responsible of implementing of what the appointment should look like and set-up some functions of the appointment.",
        title: "Front-end Developer",
      },
    ]
  },
  
];



