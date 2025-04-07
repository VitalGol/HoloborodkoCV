import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGulp,
  FaHtml5,
  FaSass,
  FaGithub,
  FaChrome,
} from 'react-icons/fa';
import {
  SiWebpack,
  SiReactquery,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiAxios,
} from 'react-icons/si';
import { RiSupabaseLine, RiJavascriptLine } from 'react-icons/ri';
import {
  TbBrandNextjs,
  TbBrandVite,
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandVscode,
} from 'react-icons/tb';
import { BsBootstrap } from 'react-icons/bs';
import { FiDisc } from 'react-icons/fi';
import apr2020 from '../public/apr2020.jpg';
import may2020 from '../public/may2020.jpg';
import mar2021 from '../public/mar2021.jpg';
import aug2022 from '../public/aug2022.jpg';

export const skills = [
  {
    id: 0,
    icon: null,
    title: 'Proficiency in JavaScript and TypeScript',
    text: '.',
  },
  {
    id: 1,
    icon: TbBrandNextjs,
    title: 'Experience with',
    text: 'NextJS for create web applications with server-side rendering.',
  },
  {
    id: 2,
    icon: FaReact,
    title: 'Experience with the',
    text: 'React library in writing single page applications using React Router, hooks.',
  },
  {
    id: 3,
    icon: TbBrandVite,
    title: 'Experience with',
    text: 'Vite for create React App.',
  },
  {
    id: 4,
    icon: null,
    title:
      'Experience with TanStack to simplify fetching, caching, synchronization and updating server state in web applications',
    text: '.',
  },
  {
    id: 5,
    icon: FaReact,
    title: 'Experience managing',
    text: 'React state using Redux Toolkit and Zustand.',
  },
  {
    id: 6,
    icon: null,
    title:
      'Experience with React libraries that allow you to import and use components for the user interface in applications — Material UI, Tailwind CSS, Shadcn/ui',
    text: '.',
  },
  {
    id: 7,
    icon: null,
    title: 'Experience building web applications with responsive design',
    text: '.',
  },
  {
    id: 8,
    icon: null,
    title: 'Experience with web page design technologies Flex and Grid CSS',
    text: '.',
  },
  {
    id: 9,
    icon: SiMongodb,
    title: 'Experience with database program the ',
    text: 'MongoDB.',
  },
  {
    id: 10,
    icon: FaNodeJs,
    title: 'Experience with',
    text: 'Node.js Express server for building web applications.',
  },
  {
    id: 11,
    icon: SiAxios,
    title: 'Experience with libraries for requests - Fetch API,',
    text: 'Axios.',
  },
  {
    id: 12,
    icon: FaFigma,
    title:
      'Experience with online service for interface development and prototyping',
    text: 'Figma.',
  },

  {
    id: 13,
    icon: FaGulp,
    title: 'Experience with the task manager',
    text: 'Gulp 4.',
  },
  {
    id: 14,
    icon: SiWebpack,
    title: 'Experience with the module builder',
    text: 'Webpack 5.',
  },
  {
    id: 15,
    icon: FaGitAlt,
    title: 'Experience with',
    text: 'Git.',
  },

  {
    id: 16,
    icon: TbBrandVscode,
    title: 'Experience with a code editor',
    text: 'VS Code.',
  },
  {
    id: 17,
    icon: FaChrome,
    title: 'Experience with development and debugging tool',
    text: 'Chrome DevTools.',
  },
  {
    id: 18,
    icon: RiSupabaseLine,
    title: 'Learning and practicing',
    text: 'Supabase.',
  },
];

export const skillsLine = [
  { id: 1, icon: FaFigma, name: 'Figma' },
  { id: 2, icon: FaGithub, name: 'Github' },
  { id: 3, icon: FaGitAlt, name: 'Git' },
  { id: 4, icon: FaNodeJs, name: 'NodeJS' },
  { id: 5, icon: FaGulp, name: 'Gulp' },
  { id: 6, icon: SiWebpack, name: 'Webpack' },
  { id: 7, icon: TbBrandVite, name: 'Vite' },
  { id: 8, icon: FaHtml5, name: 'HTML' },
  { id: 9, icon: FaSass, name: 'SCSS' },
  { id: 10, icon: RiJavascriptLine, name: 'JS' },
  { id: 11, icon: TbBrandTypescript, name: 'TS' },
  { id: 12, icon: FaReact, name: 'ReactJS' },
  { id: 13, icon: TbBrandNextjs, name: 'NextJS' },
  { id: 14, icon: SiTailwindcss, name: 'TailwindCSS' },
  { id: 15, icon: BsBootstrap, name: 'Bootstrap' },
  { id: 16, icon: FiDisc, name: 'Zustand' },
  { id: 17, icon: SiRedux, name: 'Redux' },
  { id: 18, icon: SiReactquery, name: 'TanStack' },
  { id: 19, icon: TbBrandMongodb, name: 'MongoDB' },
  { id: 20, icon: SiAxios, name: 'Axios' },
  { id: 21, icon: RiSupabaseLine, name: 'Supabase' },
  { id: 22, icon: TbBrandVscode, name: 'VS Code' },
  { id: 23, icon: FaChrome, name: 'Chrome DevTools' },
];

export const courses = [
  {
    id: 1,
    pic: apr2020,
    title: 'April, 2020. SOLVVE.',
    content: 'Course "React Native"',
  },
  {
    id: 2,
    pic: may2020,
    title: 'May, 2020. Udemy.',
    content: 'Course "The Complete Full-Stack JavaScript Course!"',
  },
  {
    id: 3,
    pic: mar2021,
    title: 'March, 2021. SoloLearn.',
    content: 'Course "React + Redux"',
  },
  {
    id: 4,
    pic: aug2022,
    title: 'August, 2022. Udemy.',
    content:
      'Course "Become A Full Stack Web Developer - Beginner To Advanced"',
  },
];
