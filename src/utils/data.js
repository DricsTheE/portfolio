//Create data to pull from

//Create Skills dataset
export const SKILLS = [
    {
        title: "Frontend",
        icon: "./assets/images/front-end.png",
        skills: [
            { skill: "HTML5", percentage: "80%"},
            { skill: "CSS3", percentage: "80%"},
            { skill: "Javascript", percentage: "60%"},
            { skill: "React.js", percentage: "60%"},
        ],
    },
    {
        title: "Backend",
        icon: "./assets/images/back-end.png",
        skills: [
            { skill: "Node.js", percentage: "80%"},
            { skill: "Express.js", percentage: "50%"},
            { skill: "SQL", percentage: "75%"},
        ],
    },
    {
        title: "Tools",
        icon: "./assets/images/tools.png",
        skills: [
            { skill: "Git & Github", percentage: "60%"},
            { skill: "Visual Studio Code", percentage: "90%"},
        ],
    },
    {
        title: "Soft Skills",
        icon: "./assets/images/social.png",
        skills: [
            { skill: "Problem-solving", percentage: "80%"},
            { skill: "Attention to Detail", percentage: "80%"},
        ],
    },
]

//Create Projects dataset
export const PROJECTS = [
    {
        title: "Portfolio",
        date: "01/2024-05/2024",
        description: [
            "Create an interactive website displaying my personal portfolio.",
            "Contains dynamic attributes and responsiveness.",
            "Fit for a multitude of devices."
        ],
        link: "https://github.com/DricsTheE/portfolio",
    },
    {
        title: "Logistics Management System",
        date: "01/2024-06/2024",
        description: [
            "A web app that contains basic CRUD operations for handling containers.",
            "Integrated google maps API.",
            "User login authentication.",
            "Dynamically links each database together."
        ],
        link: "https://github.com/DricsTheE/Logistics_Management_System_Front",
    },
    {
        title: "Pac Man",
        date: "08/2022-10/2022",
        description: [
            "Recreate classic arcade game Pac Man in Python.",
            "Features keeping score, interactive elements with ghosts, power ups, and score.",
            "Features stage wrapping, entering the boundaries of one side will take you to the opposite side."
        ],
        link: "https://github.com/DricsTheE/386Pac-Man",
    },
]