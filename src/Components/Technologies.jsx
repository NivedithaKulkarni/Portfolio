import React from 'react';
import './technologies.css'; // Import your custom CSS

import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import {motion} from "framer-motion"

const iconvariants = (i) => ({
  initial :{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      delay:i*0.5,
      duration:5,
      case:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})

const techList = [
  { icon: <FaHtml5 className="icon html" />, name: "HTML5" },
  { icon: <IoLogoCss3 className="icon css" />, name: "CSS3" },
  { icon: <SiMongodb className="icon mongo" />, name: "MongoDB" },
  { icon: <SiExpress className="icon express" />, name: "Express.js" },
  { icon: <FaReact className="icon react" />, name: "React" },
  { icon: <FaNodeJs className="icon node" />, name: "Node.js" },
  { icon: <FaJava className="icon java" />, name: "Java" },
  { icon: <FaJsSquare className="icon js" />, name: "JavaScript" },
  { icon: <FaPython className="icon python" />, name: "Python" },
  { icon: <GrMysql className="icon mysql" />, name: "MySQL" },
  { icon: <FaAws className="icon aws" />, name: "AWS" },
];

function Technologies() {
  return (
    <div className="technologies-container  bg-black pt-[60px]  ">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duaration:0.5}} className="title font-bold mb-12">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duaration:1.5}} className="icons-grid pt-8">
        {techList.map((tech, index) => (
          <motion.div initial="initial" animate="animate" variants={iconvariants(index)} key={index} className="icon-wrapper">
            {tech.icon}
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
