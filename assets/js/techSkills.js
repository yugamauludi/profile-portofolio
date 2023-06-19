const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: `<i class="fa-brands fa-square-js text-yellow-500"></i>`, name: "JavaScript", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-html5 fa-lg text-green-600"></i>`, name: "HTML5", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-css3-alt fa-lg text-blue-600"></i>`, name: "CSS", label: "Elementary" },
        ]
    },
    {
        title: "Front-end",
        skills: [
            { icon: `<i class="fa-brands fa-react text-yellow-600"></i>`, name: "React", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-vuejs text-yellow-600"></i>`, name: "Vue", label: "Intermediate" },
            { icon: `<i class="fa-solid fa-fire text-red-600"></i>`, name: "Firebase", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-bootstrap text-green-600"></i>`, name: "Bootstrap", label: "Intermediate" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Tailwind", label: "Intermediate" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Axios", label: "Intermediate" }
        ]
    },
    {
        title: "Back-end",
        skills: [
            { icon: `<i class="fa-brands fa-node fa-sm text-green-600"></i>`, name: "Node.js", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-node-js text-green-600"></i>`, name: "Express.js", label: "Intermediate" }
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MongoDB", label: "Intermediate" },
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "PostgreSQL", label: "Intermediate" },
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { icon: `<i class="fa-brands fa-git text-yellow-500"></i>`, name: "Git", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-github"></i>`, name: "GitHub", label: "Intermediate" },
            { icon: `<i class="fa-sharp fa-solid fa-laptop-code fa-xs text-blue-500"></i>`, name: "VS", label: "Intermediate" },
        ]
    },
];
const parent = document.getElementById("tech-skills");

const getSkill = (skills) => {
    const skillHtml = skills.map(skill =>
        `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
            <code class="text-sm text-gray-500 dark:text-gray-300">${skill.label}</code>
        </p>`);

    return skillHtml.join(" ");
}

const html = techSkills.map(tech =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${tech.title}</h2>
        ${getSkill(tech.skills)}
    </div>`
);


parent.innerHTML = html.join(" ");