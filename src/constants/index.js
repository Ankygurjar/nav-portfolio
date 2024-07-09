import {
  concordia,
  opentracks,
  antrix,
  portfolio,
  ukg,
  warzone,
  sorting,
  career,
  battleship,
  food,
  gym,
  accolite,
  manav,
  dance,
  travel,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiTypescript,
  SiAngular,
  SiJunit5,
  SiSelenium,
  SiNgrx,
  SiSpring,
  SiNumpy,
  SiScikitlearn,
  SiPostgresql,
  SiMongodb,
  SiNpm,
  SiJira,
  SiJenkins,
  SiIntellijidea,
  SiTestrail,
  SiPandas,
  SiHtml5,
  SiCss3,
  SiApachetomcat
} from "react-icons/si";


import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1wvCbQtc7uR-fNB0iRMB1CpBWszky5_U8/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/navjot-kamboj-702";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: concordia,
    title: "Concordia University, Montreal, Quebec",
    degree: "Master of Engineering - Software Engineering",
    duration: "Jan 2023 - Aug 2024",
    content1:"GPA: 3.8",
    content2:"Core Courses: Programming and Problem Solving, Advanced Programming Practices, Software Design, Software Comprehension and Maintenance, Software Project Management"
  },
  {
    id: "education-2",
    icon: manav,
    title: "Manav Rachna Institue of Research and Studies",
    degree: "Bachelors of Technology in Computer Science (with Cloud Computing)",
    duration: "June 2015 - 2019",
    content1: "GPA : 8.9/10, Graduated with great distinction ",
    content2: "Core Courses: Data structures and Algorithms, Java, Python, C, JavaScript, OOPS, DBMS, Cloud"
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: ukg,
    event: "Hackathon'24",
    position: "Consolation Prize",
    content1: "Developed a feature for UKG Dimensions Platform to integrate Customer's personal calendar with our product's daily schedule. It was highly helpful as customer could see their whole schedule for 4 weeks right in there personal device's calendar.",
    content3: "",
  },
  {
    id: "a-2",
    icon: accolite,
    event: "Spot Award",
    position: "Winner",
    content1: "For exemplary work and outstanding contribution to the organisation ",
  },
  {
    id: "a-3",
    icon: accolite,
    event: "Rising Star on the Block",
    position: "Winner",
    content1: "Recognition for outstanding performance being a new comer",
    content2: "",
    content3: "",
  },
  {
    id: "a-4",
    icon: manav,
    event: "Oustanding contribution to Research",
    position: "Winner",
    content1: "Publication: Review: Analysis and Comparison of Different Detection Techniques of IDPS",
    content2: "Domain: Cloud computing",
    content3: "",
    article: "https://www.researchgate.net/publication/338583102_A_Review_Analysis_and_Comparison_of_Different_Detection_Techniques_of_IDPS",
  },
  {
    id: "a-5",
    icon: manav,
    event: "Fresh Face by The Times of India & Hindustan Times",
    position: "1st Runner up",
    content1: "",
    content2: "",
    content3: "",
  },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
     
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-7",
        icon: SiTypescript,
        name: "TypeScript",
      },
      
      
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-4",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "f-5",
        icon: SiJunit5,
        name: "Junit5",
      },
      {
        id: "f-6",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "f-7",
        icon: SiNgrx,
        name: "Ngrx",
      },
      {
        id: "f-8",
        icon: SiSpring,
        name: "Spring",
      },
      {
        id: "f-9",
        icon: SiScikitlearn,
        name: "ScikitLearn",
      }


    ],
  },
  {
    title: "Tools & Databases",
    items: [
      {
        id: "t-1",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-5",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-6",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-7",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-8",
        icon: SiNpm,
        name: "Node.js",
      },
      {
        id: "t-9",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-10",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "t-11",
        icon: SiIntellijidea,
        name: "IntelliJ",
      },
      {
        id: "t-12",
        icon: SiTestrail,
        name: "TestRail",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Ultimate Kronos Group(UKG), Montreal, QC",
    logo: ukg,
    link: "https://www.ukg.ca/",
    positions: [
      {
        title: "Software Developer and QA Intern",
        duration: "May 2023 - Dec 2023",
        content: [
          {
            text: "Built and delivered new ESS Calendar to replace legacy calendar of UKG Dimensions product as part of the Reimagine Team",
            link: "",
          },
          {
            text: "Contributed to designing modular architecture with Angular and TypeScript integrating Ngrx state management for optimal communication between components and services.",
            link: ""
          },
          {
            text: "Developed Java-based stopwatch tests to assess products initial load and additional features, leveraging selenium and TestNG framework. Conducted REST API tests via Postman and created Automated API tests for Widget, Business and SDM layers.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Accolite Digital, India",
    logo: accolite,
    link: "https://www.bounteous.com/",
    positions: [
      {
        title: "Software Engineer",
        duration: "Jul 2020 - Jul 2022",
        content: [
          {
            text: "Gave knowledge transfer sessions to freshers and new employees about the ongoing project and technology stack.",
            link: ""
          },
          {
            text: "Helped my manager in assigning priorities to the given tasks and gave product demonstrations to the clients.",
            link: ""
          },
          {
            text: "Worked on Multiple Projects such as Discount Tires, FusionCharts and honed my skills in development",
            link: ""
          }

        ],
      },
      {
        title: "Intern ",
        duration: "Dec 2019 - Jun 2020",
        content: [
          {
            text: "Worked as web developer intern for 6 months. Mostly contributed in bug fixes and refactoring",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "Antrix Academy of Data Science",
    logo: antrix,
    link: "http://antrixacademy.com/",
    positions: [
      {
        title: "Data Science Intern",
        duration: "June 2018 - Aug 2018",
        content: [
          {
            text: "Project: Predictive Analytics for Insurance Claim Fraud Detection",
            link: "",
          },
          {
            text: "Used Pandas and Numpy library for data processing, matplotlib and seaborn for visualization, Scikit-learn for ML",
            link: "",
          },
        ],
      },  
    ],
  }
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "OpenTracks App",
    logo: opentracks,
    // repo: "plots2",
    // type: "pull-request",
    // status: "merged",
    title:
      "Removed Technical debts and added new feature to display chairlift data ",
    link: "https://github.com/rilling/OpenTracks-Winter-SOEN-6431_2024/issues/126",
    number: "#126",
    date: "Apr 7 2024",
    linesAdded: "125",
    linesDeleted: "26",
  },
  
];

export const projects = [
  {
    id: "project-1",
    title: "Recommender System for Restaurants",
    github: "https://github.com/navkamboj/restaurant_recommender/tree/master",
    link: "",
    image: food,
    content:
      "Used collaborative user-user filtering algorithm along with Pearson’s coefficient function to draw insights from user ratings containing 5000+ records, effectively tailoring recommendations for both new and existing users.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiNumpy,
        name: "Numpy"
      },
      {
        id: "icon-3",
        icon: SiPandas,
        name: "Pandas"
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "Tailwindcss"
      },
      {
        id: "icon-5",
        icon: SiHtml5,
        name: "HTML"
      },
    ],
  },
  {
    id: "project-2",
    title: "CareerConnect",
    github: "https://github.com/nishantarora23/Innovators-Soen6011summer2023",
    link: "",
    image: career,
    content:
      "Created a career platform connecting job-seeking students and employers effectively like LinkedIn. Provided the functionalities to create user profiles, make a job posting, schedule interviews and integrated a notification mechanism to notify the users about their job acceptance.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiApachetomcat,
        name: "Tomcat"
      },
      {
        id: "icon-4",
        icon: SiJenkins,
        name: "Jenkins"
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-6",
        icon: DiJava,
        name: "Java"
      },
      {
        id: "icon-7",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-8",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-3",
    title: "Smart Visualizer",
    github: "https://github.com/navkamboj/smartVisualizer",
    link: "",
    image: sorting,
    content:
      " A small project in React to visualize the sorting algorithms such as Merge sort, selection sort etc. for ease of learning",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "Html"
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS"
      },
      
    ],
  },
  
  {
    id: "project-4",
    title: "WarZone",
    github: "https://github.com/navkamboj/SOEN-6441_GroupU10_Warzone",
    link: "",
    image: warzone,
    content:
      "Developed a multiplayer strategy based, computer version of the popular board game Risk Warzone. Utilized various design patterns to provide realistic battle simulations which add a thrilling dimension to conflicts, while the inclusion of card-based strategic elements introduces dynamic decision-making.",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java"
      },
      {
        id: "icon-2",
        icon: SiJunit5,
        name: "Junit"
      },
    ],
  },
  {
    id: "project-5",
    title: "BattleShip",
    github: "https://github.com/navkamboj/BattleshipGame",
    link: "",
    image: battleship,
    content:
      "Simlutation of the battleship game where user is supposed to protect its ships from sinking when rival attacks",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java"
      },
    ],
  },
  {
    id: "project-6",
    title: "Portfolio",
    github: "",
    link: "",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Fitness Freak",
    title: "",
    duration: "",
    content: [
      {
        text: "I enjoy staying fit through gym and yoga workouts, running, hiking, cycling, and swimming every now and then.",
        link: "",
      },
      
    ],
    logo: gym,
  },
  {
    organisation: "Dance",
    title: "",
    duration: "",
    content: [
      {
        text: " I love dancing my problems away. My biggest flex is I can learn any danceform by watching it a couple of times",
        link: "",
      },
      
    ],
    logo: dance,
  },
  {
    organisation: "Food & Travel",
    title: "",
    duration: "",
    content: [
      {
        text: "Is it too much to ask for 365 days of vacation? Just kidding. I've traveled extensively across India, from the majestic Himalayas to the stunning coral reefs of the Andaman Islands. Currently, I'm exploring Canada." ,
        link: "",
      },
      
    ],
    logo: travel,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/navjot-kamboj-702/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/navkamboj",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:navjotcn@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/navjottkamboj",
  },
];

export const aboutMe = {
    name: "Navjot Kamboj",
    tagLine: "Software Engineering Graduate Student @Concordia University | ex-SDE Intern @UKG | ex-Accolite Digital",
    intro: " A graduate student during the day and a passionate developer by the night. Welcome to my world"
}
