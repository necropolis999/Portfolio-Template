import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angularjs,
  tailwind,
  nodejs,
  git,
  python,
  php,
  flask,
  django,
  csharp,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Angular JS',
    icon: angularjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'C#',
    icon: csharp,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'MATCH',
    description: 'Integrating with Sharepoint via REST, and directly with 3rd party cabinet software, MATCH was able to analyze a project and instantly create accurate orders from vendors, tickets for the various departments responsible for manufacturing, and update important project management data. Management could remotely coordinate documents and provide the different approvals needed while keeping accurate production timelines.',
    tags: [
      {
        name: 'sharepoint',
        color: 'blue-text-gradient',
      },
      {
        name: 'dash',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'New Country',
    description:
      'A large chain of used car dealerships had an application for keeping track of vehicle fuel orders. This was expanded to allow for monitoring of detailing and repair orders, car photos, and automated reporting.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Hospitality House',
    description: 'A private support forum for alumni of a rehabilitation program. Needed extensive modification for privacy and legal protections of users, hotlines for support staff, and strict user security. Automated communications.',
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'php',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Nanoknife',
    description: `An application allowing for the searching of doctors via speciality, location, and other parameters, integrated with exceptions and permissions via API. Had custom email notifications.`,
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'php',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Data Migration',
    description:
      'Website needed to be migrated from an older version of Concrete CMS to Concrete 9. All data for almost 1k articles needed to be reformatted in a new database paradigm. New organizational mapping had to happen, endpoints created, and all type variations handled.',
    tags: [
      {
        name: 'concrete',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'php',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
