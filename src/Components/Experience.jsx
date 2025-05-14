import React from 'react';
import './technologies.css';
import {motion} from "framer-motion"

const experiences = [
  {
    year: "Sept 2022 - May 2023",
    title: "Intern Full Stack Web Developer",
    company: "Edureka",
    description:
      "Contributed to the development of full-stack web applications using JavaScript, React.js, Node.js, and MongoDB. Built responsive UI components, implemented RESTful APIs, and worked on database integration. Gained hands-on experience in version control (Git), agile workflows, and deploying applications using cloud platforms.",
    tech: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
];

const Experience = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duaration:0.5}}  className="text-4xl font-bold mb-12 text-center">Experience</motion.h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-col md:flex-row gap-6 text-left project-div">
            {/* Year on the left */}
            <motion.div   whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duaration:1}} className="w-full md:w-1/4 text-gray-400 text-sm">{exp.year}</motion.div>
            
            {/* Content on the right */}
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duaration:1}} className="w-full md:w-3/4">
              <h3 className="text-2xl font-semibold">
                {exp.title} <span className="text-gray-500">- {exp.company}</span>
              </h3>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <div className="mt-2 flex flex-wrap gap-2 ">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 text-sm rounded-full tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
