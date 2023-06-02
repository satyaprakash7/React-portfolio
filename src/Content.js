// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import css from "./assets/images/Skills/css.png";
import tail from "./assets/images/Skills/tailwind.jpeg";
import node from "./assets/images/Skills/node.png";
import ps from "./assets/images/Skills/ps.png";
import boot from "./assets/images/Skills/bootstrap.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  // home Page
  hero: {
    title: "Frontend Developer",
    firstName: "SATYA",
    LastName: "PRAKASH",
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Frontend Development",
      },
      {
        count: "05+",
        text: "Projects Worked in my career",
      },
    ],
  },
  //Skills sections
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Html",
        para: "Lorem  text  dummy",
        logo: html,
      },
      {
        name: "CSS",
        para: "Lorem  text  dummy",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Lorem  text  dummy",
        logo: javascript,
      },
      {
        name: "React js",
        para: "Lorem  text  dummy",
        logo: reactjs,
      },
      {
        name: "Mongo DB",
        para: "Lorem  text  dummy",
        logo: mongodb,
      },
      {
        name: "Node Js",
        para: "Lorem  text  dummy",
        logo: node,
      },
      {
        name: "Tailwind Css",
        para: "Lorem  text  dummy",
        logo: tail,
      },
      {
        name: "PhotoShop",
        para: "Lorem  text  dummy",
        logo: ps,
      },
      {
        name: "Bootstrap",
        para: "Lorem  text  dummy",
        logo: boot,
      },
    ],
    icon: MdArrowForward,
  },
  //service Section
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web development is an ever-evolving field that involves creating and maintaining websites and web applications. ",
        logo: services_logo1,
      },
      {
        title: "UI DESIGNING",
        para: "It encompasses a wide range of technologies, languages, and frameworks aimed at delivering interactive and visually appealing digital experiences to users across the globe.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      
      {
        title: "Javscript Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "React Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "E-commerce Soluation",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  //Project Section
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Task Management Tool",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  //Testimonial Section
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Satya Prakash",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  //Hire me Section
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am writing to express my strong interest in the web developer position at your esteemed company. With a passion for coding and a proven track record in creating dynamic and visually appealing websites, I believe I am an ideal candidate for this role.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "satyaprakash.sahoo840@gmail.com",
        icon: GrMail,
        link: "mailto:satyaprakash.sahoo840@gmail.com",
      },
      {
        text: "+91 6370788626",
        icon: MdCall,
        link: "https://wa.me/6370788626",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/call_me_dvl_07/",
      },
      {
        text: "Linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/satya-prakash-sahoo-792910191/",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://github.com/satyaprakash7",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
