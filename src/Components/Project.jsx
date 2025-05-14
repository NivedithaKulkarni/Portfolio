import React from "react";
import bms from "../assets/bms.png"; // Replace with your actual image files
import gym from "../assets/gym.png";
import weather from "../assets/weather.png";
import netflix from "../assets/netflix.png"
import './technologies.css';
import { FaGithub} from 'react-icons/fa';
import {motion} from "framer-motion"


const projects = [
  {
    image: bms,
    title: "BookMyShow-Clone",
    description:
      "A movie ticket booking web app with movie browsing, showtime selection, seat booking, and mock payment integration.",
    tech: ["React", "Express.js", "Node.js", "MongoDB","Stripe"],
    github: "https://github.com/NivedithaKulkarni/BookMyShow",
  },
   {
    image: weather,
    title: "Weather Application",
    description:
      "A weeather app that displays current weather and forecasts worldwide, with dynamic backgrounds based on the user's location.",
    tech: ["HTML", "CSS", "React", "Bootstrap","JavaScript","API's"],
    github: "https://github.com/NivedithaKulkarni/Weather-Application"
  },
  {
    image: gym,
    title: "Gym Management App",
    description:
      "A Gym Management app to handle memberships, trainer assignments, and payments seamlessly.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github:"https://github.com/NivedithaKulkarni/gym-management"
  },
  {
    image: netflix,
    title: "Netflix-Clone",
    description:
      "A Netflix homepage clone replicating its layout and design to showcase UI and layout skills.",
    tech: ["HTML", "CSS", "React", "Bootstrap"],
    github:"https://github.com/NivedithaKulkarni/Netflix-Clone"
  }
];

const Project = () => {
  return (
    <section className="bg-black text-white  py-2 px-14 pb-10">
       <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duaration:0.5}} className="title font-bold mb-12">Projects</motion.h2>
      <div className="max-w-6xl mx-auto flex flex-col  gap-12">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center gap-6 project-div">
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duaration:1}} className="image-container">
            <img
              src={project.image}
              alt={project.title}
              className="w-28 h-28 object-cover rounded-xl transition-all duration-300 project-image"
            />
            <div className="hover-curtain"></div>
            </motion.div>
              
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duaration:1}}>
              <h3 className="text-xl font-semibold text-left mb-1">{project.title}</h3>
              <p className="text-gray-400 text-left mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300 ">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 rounded tech-badge"
                  >
                    {tech}
                  </span>
                ))}
                <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 text-2xl hover:text-white transition-colors duration-300"
                          aria-label="GitHub"
                        >
                          <FaGithub />
                        </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
