
// Navigation Menus
export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "Skills", link: "#skills" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#myApproach"},
];

// Footer Menus
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg", 
    link: "https://github.com/johnreyluntayao",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/johnrey-luntayao",
  },
];

// Skills
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
    desc: "Front-end developer with experience, having worked on various projects using multiple programming languages and effectively implementing client requirements."
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

// About Description
export const about = 
  {
    desc:"I'm a developer & designer based from the Philippines. I specialize in UI/UX designing, focusing on creating simple but high quality designs.",
  };

// Tech Stack
export const techStack = [
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
  {
    id: 14,
    name: "Wordpress",
    img: "/wordpress.svg",
  },

];


// My approach
export const myApproach = [
  { id: 1, title: 'Planning & Refinement', description: 'Prioritize features and gathering requirements. Define the scope of the upcoming sprint.' },
  { id: 2, title: 'Development & Integration', description: 'Sprint Execution for development and integration of features and also in designing. Regular checking of progress and obstacles and test of code.' },
  { id: 3, title: 'Review & Improvement', description: 'Demonstration of completed work and gather feedback for improvements. Reflect on the sprint and implement improvements.' },
  
];

// List of Projects
export const projects = [
  {
    id: 1,
    title: "TravelCN",
    des: "Discover tourist spots and festivals inside the Camarines Norte province.",
    img: "/travelcn/travelcn.png",
    iconLists: ["/figma.svg", "/nextjs.svg", "typescript.svg"],
    link: "Wanna know more?",
  },
  {
    id: 2,
    title: "NetZerAttic ",
    des: "A website that specializes in attic insulation and energy efficiency, aiming to create net-zero energy consumption specifically for attics.",
    img: "/netzero/netzerohome.png",
    iconLists: ["/wordpress.svg", "/ssa.svg", "/elementor.svg"],
    link: "Wanna know more?",
  },
  {
    id: 3,
    title: "Sparrk",
    des: "Book and play! Reserve an sport facility in your area with Sparrk!",
    img: "/sparrk/sparrk.png",
    iconLists: ["/figma.svg", "/canva.svg", "/adobe.svg"],
    link: "Wanna know more?",
  },
  {
    id: 4,
    title: "Web-based Reservation Management System",
    des: "A centralized platform for making resort reservation, information, and virtual experience.",
    img: "/Natura/home.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg", "/figma.svg", "/hostinger.svg"],
    link: "Wanna know more?",
  },
  {
    id: 5,
    title: "Netflix Clone",
    des: "A simple demonstration of the Netflix mobile application and it is called 'Jetflix'.",
    img: "/netflix/p1.png",
    iconLists: ["/figma.svg", "react.svg", "/typescript.svg"],
    link: "Wanna know more?",
  },
  {
    id: 6,
    title: " “Where to Look”: Your Health Companion",
    des: "Read, learn, and talk with others about health-related topics. This website will help you become more mindful of your health.",
    img: "/wlook/w2lookhome.png",
    iconLists: ["/figma.svg", "/wordpress.svg"],
    link: "Wanna know more?",
  },
  {
    id: 7,
    title: "St. Martha Management System",
    des: "Manage business transaction records and monitor client payments.",
    img: "/stmartha/dashboard.png",
    iconLists: ["/vbnet.png", "/figma.svg"],
    link: "Wanna know more?",
  },
  {
    id: 8,
    title: "3D Modelling",
    des: "The Following are collections of 3D Projects I made during my 4th year.",
    img: "/3d.png",
    iconLists: ["/3dsmax.svg"],
    link: "Wanna know more?",
  }
];


// Detailed information of each projects
export const detailedProjects = [
  {
    id: 1,
    title: "Travel CN",
    desc: "Explore the hidden gems of Camarines Norte! Our website is your ultimate guide to discovering the enchanting places, exciting festivals, and breathtaking tourist destinations across the province. Dive into detailed information that will inspire and inform your travels, making each visit a memorable adventure.",
    srclink: "",
    image: "/travelcn/travelcn.png",
    features: [
      {
        id: 1,
        title: "Point and Locate",
        img: "/travelcn/travelcn-f1.svg",
        desc: "Simply point at the map, and detailed information about each destination will appear. This interactive feature allows visitors to effortlessly learn about the fascinating places they can explore.",
      },
      {
        id: 2,
        title: "Detailed Information",
        img: "/travelcn/travelcn-f2.svg",
        desc: "Discover an extensive list of destinations and festivals in Camarines Norte. Our platform provides detailed insights into each destinations and festivals, helping you uncover the beauty and excitement that this province has to offer.",
      },
    ],
  },
  {
    id: 2,
    title: "NetZeroAttic",
    desc: "The website was created to promote the business the Net-Zero-Attic that is focused in Attic insulation that is owned by a Canadian Company. The website promotes informative details about attic insulation and the services that the business offers.",
    srcLink: "https://net-zero-attic.com/",
    image: "/netzero/netzerohome.png",
    features: [
      {
        id: 1,
        title: "Informative Website",
        img: "/netzero/about.svg",
        desc: "Offers different pages that provide valuable information about attic insulation, energy efficiency, and related services offered by Net-Zero-Attic.",
      },
      {
        id: 2,
        title: "Make an Appointment",
        img: "/netzero/reserve.svg",
        desc: "This feature allows users to schedule appointments with Net-Zero-Attic directly through the website to conveniently set up consultations, inspections, or insulation installations by choosing available time slots.",
      },
    ],
  },
  {
    id: 3,
    title: "Sparrk",
    desc: "Sparrk.ph transforms how athletes and sports enthusiasts connect with facilities, making it simple for both facility owners and sports lovers to find, book, and play. The intuitive platform streamlines the process, ensuring a seamless experience for everyone. Whether you need a tennis court or a basketball gym, Sparrk has you covered!",
    srcLink: "https://www.sparrk.ph",
    image: "/sparrk/sparrk.png",
    features: [
      {
        id: 1,
        title: "UI/UX Designer",
        img: "/sparrk/designer.svg",
        desc: "Designed the UI for the web version dashboard and space creations of Sparrk. Also designed the notification and spaces section for the mobile version.",
      },
      {
        id: 2,
        title: "Graphic Designer",
        img: "/sparrk/graphic.svg",
        desc: "Designed fliers, standings, bookmarks, and stickers for the Sparrk promotion.",
      },
      {
        id: 3,
        title: "Video Editor",
        img: "/sparrk/editor.svg",
        desc: "Edited a teaser video for the Sparrk promotion.",
      },
    ],
  },
  {
    id: 4,
    title: "Web-based Reservation Management System",
    desc: "The system offers a user-friendly website with resort information, a convenient reservation management system, and a virtual tour. It was developed to modernize the resort's manual reservation process, enhancing service quality and customer satisfaction.",
    srcLink: "https://github.com/johnreyluntayao/resort-reservation-management-system",
    image: "/Natura/home.png",
    features: [
      {
        id: 1,
        title: "Reservation Management System",
        img: "/Natura/reserve.svg",
        desc: "Allows users to select deferent packages, date & time, payment methods, with conversational experience.",
      },
      {
        id: 2,
        title: "Website",
        img: "/Natura/home.svg",
        desc: "With the homepage a video introduction showcasing the resort and the resort's Facebook page plugin, gallery that showcases facilities, and other information about the resort.",
      },
      {
        id: 3,
        title: "3D Virtual Tour",
        img: "/Natura/virtual.svg",
        desc: "Introducing the website's virtual tour feature, enabling users to explore the resort remotely and navigate through various rooms.",
      },
    ],
  },
  {
    id: 5,
    title: "Netflix Clone",
    desc: "This prototype of the Netflix mobile app replicates essential interfaces for demonstration. While not fully functional, it showcases data and allows playback of one video. The feedback tab is included but non-operational.",
    srcLink: "https://github.com/johnreyluntayao/Netflix-Clone",
    image: "/netflix/p1.png",
    features: [
      {
        id: 1,
        title: "",
        img: "",
        desc: "",
      },
    ],
  },
  {
    id: 6,
    title: "“Where to Look”: Your Health Companion",
    desc: "Discover wellness at 'Where to Look'! Our mission is to empower you with knowledge, compassion, and hope. Explore our comprehensive health condition section, chat with experts and fellow warriors, and find prevention tips and motivation. Join our health-conscious community today and let's navigate wellness together!",
    srcLink: "https://yourw2look.wordpress.com",
    image: "/wlook/w2lookhome.png",
    features: [
      {
        id: 1,
        title: "Categorized Health Conditions",
        img: "/wlook/list.svg",
        desc: "With 21 categories of health problems, users can easily find the information they need. Each category includes a detailed description, symptoms, causes, effects, treatments, and an inspirational quote.",
      },
      {
        id: 2,
        title: "Chat & Connect",
        img: "/wlook/chat.svg",
        desc: "Need advice? Seeking support? Our chat feature connects you with experts and fellow warriors. Because healing is better together.",
      },
    ],
  },
  {
    id: 7,
    title: "St. Martha Management System",
    desc: "St. Martha Memorial Homes Inc. in Daet, Camarines Norte, faced challenges with manual record-keeping and contract management. A comprehensive system was developed to organize transactions, manage records efficiently, and monitor client payments, streamlining operations and benefiting both the company and its users.",
    srcLink: "https://github.com/johnreyluntayao/st-martha-management-system",
    image: "/stmartha/dashboard.png",
    features: [
      {
        id: 1,
        title: "Client Record Management",
        img: "/stmartha/client-record.svg",
        desc: "The system enables the user to input and maintain detailed client records. This includes essential information such as client names, contact details, and any relevant notes. The can easily search for specific clients, update their records, and track interactions and payments over time.",
      },
      {
        id: 2,
        title: "Transaction Management",
        img: "/stmartha/transaction.svg",
        desc: "The system handles various transactions related to clients. These includes contract signings, plan selections, and payment processing. The user/s can create, modify, and view transaction records, ensuring accurate and efficient management",
      },
    ],
  },
  {
    id: 8,
    title: "3D Modelling",
    desc: "The Following are collections of 3D Projects that I made using 3DSMax.",
    srcLink: "",
    image: "/3d.png",
    features: [
      {
        id: 1,
        title: "",
        img: "",
        desc: "",
      },
    ],
  },
];


// Roles for each projects
export const ProjectRole = [
  {
    id: 1,
    title: "Travel CN",
    roles: [
      {
        quote: "I meticulously crafted the website's interface using Figma, ensuring a seamless and visually appealing experience across all devices. Whether you're browsing on a web browser, tablet, or mobile phone, the design adapts flawlessly to provide an intuitive and engaging user experience.",
        title: "UI/UX Designer",
        icon: "/ui-designer.svg",
      },
      {
        quote: "I implemented the design using Next.js, TypeScript, and Tailwind CSS. The result is a website that's not only visually appealing but also fully responsive, ensuring an optimal browsing experience on mobile, web, and tablet devices.",
        title: "Front-end Developer",
        icon: "/front-end.svg",
      },
    ],
  },
  {
    id: 2,
    title: "NetZeroAttic",
    roles: [
      {
        quote: "Focusing on the appointment, using the Simply Schedule Appointment (SSA), I am responsible of implementing of what the appointment should look like and set-up some functions of the appointment.",
        title: "Front-end Developer",
        icon: "/front-end.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Sparrk",
    roles: [
      {
        quote: "",
        title: "",
        icon: "",
      },
    ],
  },
  {
    id: 4,
    title: "Web-based Reservation Management System",
    roles: [
      {
        quote: "Implemented the design using HTML/CSS and functions using JavaScript focusing especially on the reservation management system.",
        title: "Front-end Developer",
        icon: "/front-end.svg",
      },
      {
        quote: "Created the scheme of the database and its implementation to the system using PHP,and I also implemented the payment gateway.",
        title: "Back-end Developer",
        icon: "/back-end.svg",
      },
      {
        quote: "Created and implemented ways in order to improve better user-experience with user-friendly design, ease of transactions, and information access.",
        title: "UX Designer",
        icon: "/ui-designer.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Netflix Clone",
    roles: [
      {
        quote: "Created wireframe and UI design of the Netflix clone app.",
        title: "UI Designer",
        icon: "/ui-designer.svg",
      },
      {
        quote: "Integrated the front-end of the Netflix clone for mobile devices.",
        title: "Front-end Developer",
        icon: "/front-end.svg",
      },
    ],
  },
  {
    id: 6,
    title: "“Where to Look”: Your Health Companion",
    roles: [
      {
        quote: "Designed User Interface and ensured the design feels intuitive, visually engaging, knowledge accessible.",
        title: "UI/UX Designer",
        icon: "/ui-designer.svg",
      },
      {
        quote: "Applied the design through Wordpress for faster implementation and ease of deployment.",
        title: "Front-end Developer",
        icon: "/front-end.svg",
      },
    ],
  },
  {
    id: 7,
    title: "St. Martha Management System",
    roles: [
      {
        quote: "As a front-end developer, I played a key role in building the system, focusing on developing features like the payment section, client information area, dashboard, and reports.",
        title: "Front-end Developer",
        icon: "/front-end.svg",
      },
      {
        quote: "As part of my responsibilities, I designed the database schema and seamlessly integrated it into the system. My work involved managing data structures, implementing payment functionality, and handling price and discount calculations.",
        title: "Back-end Developer",
        icon: "/back-end.svg",
      },
    ],
  },
  {
    id: 8,
    title: "3D Projects",
    roles: [
      {
        quote: "",
        title: "",
        icon: "",
      },
    ],
  },
];

// Tech implemented for each projects
export const techImplementation = [
  {
    id: 1,
    title: "Travel CN",
    tech: [
      {
        icon: "/figma.svg",
        title: "Figma",
      },
      {
        icon: "/nextjs.svg",
        title: "NextJS",
      },
      {
        icon: "/typescript.svg",
        title: "Typescript",
      }
    ]
  },
  {
    id: 2,
    title: "NetZeroAttic",
    tech: [ 
      {
        icon: "/wordpress.svg",
        title: "Wordpress",
      },
      {
        icon: "/ssa.svg",
        title: "Simple Schedule Appointment",
      },      
      {
        icon: "/elementor.svg",
        title: "Elementor",
      },
    ]
  },
  {
    id: 3,
    title: "Sparrk",
    tech: [ 
      {
        icon: "/figma.svg",
        title: "Figma",
      },
      {
        icon: "/canva.svg",
        title: "Canva",
      },
      {
        icon: "/adobe.svg",
        title: "3DSMax",
      },
    ]
  },
  {
    id: 4,
    title: "Web-based Reservation Management System",
    tech: [
      {   
        icon: "/html.svg",
        title: "HTML",
      },
      {
        icon: "/css.svg",
        title: "CSS",
      },
      {
        icon: "/javascript.svg",
        title: "JavaScript",
      },
      {
        icon: "/figma.svg",
        title: "Figma",
      },
      {
        icon: "/hostinger.svg",
        title: "Hostinger",
      },
    ]
  },
  {
    id: 5,
    title: "Netflix Clone",
    tech: [ 
      {
        icon: "/figma.svg",
        title: "Figma",
      },
      {
        icon: "/react.svg",
        title: "React Native",
      }
    ]
  },
  {
    id: 6,
    title: "“Where to Look”: Your Health Companion",
    tech: [ 
      {
        icon:"/figma.svg",
        title: "Figma",
      },
      {
        icon:"/wordpress.svg",
        title: "Wordpress",
      },
    ]
  },
  {
    id: 7,
    title: "St. Martha Management System",
    tech: [ 
      {
        icon: "/vbnet.png",
        title: "VB.NET",
      },
      {
        icon: "/figma.svg",
        title: "Figma"
      },
    ]
  },
  {
    id: 8,
    title: "3D Projects",
    tech: [
      {
        icon: "/3dsmax.svg",
        title: "3DSMax",
      },
    ]
  }
];

// Images for 3D projects
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


// Images for netflix clone project
export const phoneImages = [
  { 
    id: 1, 
    src: '/netflix/p2.svg', 
  },
  { id: 2, 
    src: '/netflix/p3.svg',  
  },
  { id: 3, 
    src: '/netflix/p4.svg',  
  },
  { id: 4, 
    src: '/netflix/p5.svg',  
  },
  { id: 5, 
    src: '/netflix/p6.svg', 
  },
  { id: 6, 
    src: '/netflix/p7.svg',  
  },
  { id: 7, 
    src: '/netflix/p8.svg', 
  },
];




