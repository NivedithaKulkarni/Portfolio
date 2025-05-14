import React from 'react'
import './technologies.css';
import {motion} from "framer-motion"

const Educations= [
  {
    year: "Jan 2023 - Dec 2024",
    Institute: "Indian Institute Of Technology - MADRAS",
    Course: "Data Science and its Application",
    cgpa:"7.25 CGPA",
  },
  {
    year: "Aug 2019 - Jun 2023",
    Institute: "Visvesvaraya Technological University-BITM",
    Course: "Computer Science and Engineering",
    cgpa:" 8.23 CGPA",
  },
];

function Education() {
  return (
    <section className="bg-black text-white py-2 px-6 ">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duaration:0.5}} className="text-4xl font-bold mb-12 text-center">Education</motion.h2>
        {Educations.map((edu, index) => (
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x: index % 2 === 0 ? 100 : -100 }} transition={{duaration:1}} key={index} className="mb-10 project-div">
            <p className="text-gray-400 text-sm">{edu.year}</p>
            <h3 className="text-2xl font-semibold">{edu.Institute} </h3>
            <span className="text-gray-500">{edu.Course}</span>
            <span className="text-gray-500"> - {edu.cgpa}</span>
          </motion.div>
        ))}
    </section>
  );
}

export default Education