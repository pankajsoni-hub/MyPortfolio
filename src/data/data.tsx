import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/project1.jpg';
import porfolioImage4 from '../images/portfolio/project3.png';
import porfolioImage5 from '../images/portfolio/project4.png';
import porfolioImage6 from '../images/portfolio/project5.png';
import profilepic from '../images/profile.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My Resume',
  description: "My Resume Pankaj Soni",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I am Pankaj Soni`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      A motivated individual with in-depth knowledge of languages and development tools, seeking a position
 in a growth-oriented company where I can use my skills to the advantage of the company while having the
 scope to develop my skills. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/MyResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a full-stack developer with 2 years and 4 months of experience building responsive, user-friendly web applications. I specialize in for Frontend React,Javascript,Html/CSS and for backend Golang, Node, Express and for database Mongodb ,Mysql and have a passion for creating clean, efficient, and scalable code.
Over the years, I've contributed to 6 to 7+ successful projects, including e-commerce platforms, content management systems, loan origination system and SaaS tools`,
  aboutItems: [
    {label: 'Location', text: 'Jodhpur Rajasthan', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Dance ,Learning, Singing', Icon: SparklesIcon},
    {label: 'Study', text: 'MBM University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Sigma Infosolutions ltd', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Javscript',
        level: 8,
      },
      {
        name: 'Html/Css',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Express',
        level: 8,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
  {
    name: 'DataBase',
    skills: [
      {
        name: 'Mongodb',
        level: 8,
      },
      {
        name: 'My Sql',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MCA Loan Origination System',
    description: 'In this project loan origination system efficiently manage loan application covering everything from customer onboarding and document verification to credit assessment and loan disbursement in this project it give only small business cash advance loan for short term in this project I used react javascript golang html css and aws for hosting',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'MCA Loan Origination System',
    description: 'In this project I used react javascript golang and html css redux technology. This project give only loan like roofing,home essentials repairing and shop repair etc .In this project loan origination system efficiently manage loan application covering everything from customer onboarding and document verification to credit  assessment and loan disbursement.and ',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Line Of Credit Loan origination System',
    description: 'A line of credit is a flexible loan option that allows borrower to access funds up to predetermined limit unlike a traditional loan where you receive a lump sum ,line of credit let you withdraw as needed up to that limit. I used react javascript golang html css and redux technology to build and manage this project ',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Finance Digest Blog App',
    description: 'Integrate sanity as a cms for a blog app',
    url: 'https://finance-web-app-ogpx.vercel.app/',
    image: porfolioImage4,
  },
  {
    title: 'Ecommerce Website',
    description: '1.Admin Panel: Developed to display all cart items with real-time updates, ensuring seamless synchronization with the shopping interface.2.Add to Cart: Implemented functionality to allow users to add items while automatically updating the total price for a smooth user experience3.Email Confirmation: Designed a user-friendly interface, integrated with backend systems, and added a feature to send detailed order receipts, delivering an Amazon-like experience.4.Payment Getway integration',
    url: 'https://github.com/pankajsoni-hub/Ecommerce-App',
    image: porfolioImage5,
  },
  {
    title: 'Portfolio Website',
    description: 'Using Mern, Next, and TypeScript, develop a portfolio website and add a contact email feature that allows anyone to get in touch with me when a recruiter or other individual fills out this form  and got mail on my mail id.',
    url: 'https://my-portfolio-gray-zeta-14.vercel.app/',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022',
    location: 'MBM UNIVERSITY',
    title: 'BE/Btech',
    content: <p> Branch: Electronics and computer science Engineering Cgpa: 8.38.</p>,
  },
  {
    date: '2017',
    location: 'Apna Vidhyalaya Sr Sec School',
    title: '12 Board',
    content: <p>Percentage: 93%.</p>,
  },
  {
    date: '2015',
    location: 'St Peters Sec. School',
    title: '10 Board',
    content: <p>Percentage: 87%.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '1 january 2025 and currently working here',
    location: 'Altaneofin',
    title: 'Full Stack Web Developer',
    content: (
      <p>
       Working as a full stack developer in Mern Technology
      </p>
    ),
  },
  {
    date: 'July 2022 join',
    location: 'Sigma InfoSolutions Ltd,Jodhpur',
    title: 'Associate Software Engineer ',
    content: (
      <p>
       As a Full-Stack Software Developer at Sigma info solutions, I have
 successfully managed end-to-end development for seven projects, taking
 full responsibility for all phases from requirements gathering to
 deployment. My expertise in technologies such as technologies, e.g.,
 JavaScript, React, Golang ,HTML/CSS, Node,Redux has enabled me to
 design and implement user-friendly web applications, develop RESTful
 APIs, and integrate third-party services. I actively collaborate with cross
functional teams, conduct code reviews,all while utilizing Agile
 methodologies to ensure timely delivery of high-quality software
 solutions. 
      </p>
    ),
  },
  {
    date: 'June 2021 to September 2021',
    location: 'Web StudentDesigners Online',
    title: 'Web Developer',
    content: (
      <p>
       In this Internship I worked on React Javascript Html/Css Technology and work on many 6 to 7  project
      </p>
    ),
  },
  {
    date: 'June 2021 to July 2021',
    location: 'Internshala',
    title: 'Web Developer',
    content: (
      <p>
       In this Internship I worked on React Javascript Html/Css Technology and for backend php and mysql and made Ecommerce project
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'My Manager',
      text: 'An exceptional developer who not only excels in managing multiple projects simultaneously but also thrives in an independent work environment, demonstrating remarkable problem-solving skills, time management, and a proactive approach to delivering high-quality results. Their ability to handle diverse projects and take full ownership of their tasks makes them a key asset to any team.',
    },
    {
      name: 'Client',
      text: 'We are incredibly impressed with the developers ability to handle multiple projects independently while maintaining a high level of professionalism and quality. Their dedication and expertise have significantly contributed to the success of our projects, and we truly value their exceptional work ethic and commitment',
    },
    {
      name: 'CEO',
      text: 'This developer has consistently exceeded our expectations by efficiently managing several projects simultaneously, all while delivering outstanding results. Their proactive approach and ability to work autonomously have been invaluable to us, and we deeply appreciate their hard work and dedication.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'psoni9006@gmail.com',
      href: 'mailto: psoni9006@gmail.com'
    },
    {
      type: ContactType.Location,
      text: 'Jodhpur',
      href: 'https://www.google.com/maps/place/Jodhpur,+Rajasthan,+India/',
    },
    {
      type: ContactType.Github,
      text: 'Pankaj Soni Github',
      href: 'https://github.com/pankajsoni-hub/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Pankaj Soni',
      href: 'https://www.linkedin.com/in/pankaj-soni-46630b199/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/pankajsoni-hub/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/pankaj-soni-46630b199/'},
];
