import github from '../../src/Assets/icons/github.svg'
import linkedin from '../../src/Assets/icons/linkedin.svg'
import gmail from '../../src/Assets/icons/gmail.svg'

export const portfolioData = {
  hero : {name: "Joed", tagline: `Web Developer  | Team Leader  | System  Builder`} ,
  projects: [
    { id: 1, title: "Registration System for PLWM Summer Retreat",link: "https://github.com/Jc-noobie/PROTOTYPE1-REGISTRATION-SYSTEM" , desc: "An ongoing project that helps the church of Philippine Life Word Mission Manila Central Church on retreats", tags: ["React", "Javascript", "Tailwind", "Node js"] },
    { id: 2,  title: "PLWM Manila Central Church Management System",link:"https://github.com/PLWM-Manila-Central-Church/cms-mcc" , desc: "An ongoing project that manages the overall services and ministries on Manila Central Church" , tags: ["React", "Javascript", "Tailwind", "Node js"]} ,
    { id: 3, title: "Auditing System for Nelmann Construction Company" , link: "https://github.com/Jc-noobie/Nelmann-Construction-Company" , desc: "An ongoing auditing system project, a system that manages all customer transactions of the company", tags: ["React","Javascript","Tailwind","Shadcn","Node js"] },
    { id: 4, title: "IHC Laptop Inventory management system" , link: "https://github.com/Jc-noobie/IHC-Laptop-Inventory-MNGMT" , desc: "An IT system for managing laptop inventory for the entire employees", tags: ["React","Javascript","Tailwind","Shadcn","Node js"] },
    { id: 5, title: "Sudoku Helper" , link: "https://github.com/Jc-noobie/Sodoku" , desc: "A simple C++ TUI project that I created before that helps you in answering a sudoku board", tags: ["C++"] },
  ],
  skills: ["React", "Node.js", "Tailwind"],
  experience: [
    { role: "...", company: "...", year: "...", desc: "..." }
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Jc-noobie",icon: github},
    { label: "Linkedin", url: "https://www.linkedin.com/in/joed-donaire-a30243335", icon: linkedin },
    { label: "Gmail", url: "mailto:joeddonaire@gmail.com", icon: gmail },
  ],
};


