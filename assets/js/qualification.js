const qualifications = [
    {
        title: "Full Stack Javascript",
        year: 2023,
        description: "Complete web development course in Hacktiv8 which included HTML to JavaScript, React, Vue, Node/Expressjs, MongoDB etc.",
        institute: {
            name: "Hacktiv8",
            duration: "Oktober 2022 - Maret 2023"
        }
    },
    {
        title: "Bachelor of Engineering",
        year: 2020,
        description: "Achieved four years bechelor degree from a university. It was a great really a experience of life.",
        institute: {
            name: "Gunadarma University",
            duration: "September 2016 - September 2020"
        }
    }
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}</h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}></span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

