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
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/projects/2",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/projects/3",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/projects/4",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
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
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>Figma</li>
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
        <li>HTML/CSS2</li>
        <li>JavaScript2</li>
        <li>ReactJS2</li>
        <li>Figma2</li>
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
    desc:" Lorem ipsum dolor sit amet. Vel amet rerum est quaerat repellendus aut enim inventore eum aliquid eveniet non culpa esse. A temporibus delectus At dolore corrupti id omnis mollitia ut autem quia. Sit perspiciatis recusandae qui earum molestias At iste minus vel blanditiis dolorum. Et quasi repellendus vel consequatur dolor aut rerum facilis. Quo maxime error et sunt ducimus ex deleniti galisum ut consequatur temporibus ab quaerat totam sit facere sequi. Sit amet consequatur qui doloribus maiores a odit quidem hic sunt molestiae est sapiente soluta.",
  };

export const mainSkills = [
  {
    id: 1,
    logo: "http://www.w3.org/2000/svg",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet. Vel amet rerum est quaerat repellendus aut enim inventore eum aliquid eveniet non culpa esse. A temporibus delectus At dolore corrupti id omnis mollitia ut autem quia. "
  },
  {
    id: 2,
    logo: "http://www.w3.org/2000/svg",
    title: "Title 2",
    desc: "Lorem ipsum dolor sit amet. Vel amet rerum est quaerat repellendus aut enim inventore eum aliquid eveniet non culpa esse. A temporibus delectus At dolore corrupti id omnis mollitia ut autem quia. "
  },
  {
    id: 3,
    logo: "http://www.w3.org/2000/svg",
    title: "Title 3",
    desc: "Lorem ipsum dolor sit amet. Vel amet rerum est quaerat repellendus aut enim inventore eum aliquid eveniet non culpa esse. A temporibus delectus At dolore corrupti id omnis mollitia ut autem quia."
  },
  {
    id: 4,
    logo: "http://www.w3.org/2000/svg",
    title: "Title 4",
    desc: "Lorem ipsum dolor sit amet. Vel amet rerum est quaerat repellendus aut enim inventore eum aliquid eveniet non culpa esse. A temporibus delectus At dolore corrupti id omnis mollitia ut autem quia."
  },
]

