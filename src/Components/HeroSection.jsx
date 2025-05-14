import React from 'react';
import logo from "../assets/logo.jpg";
import resume from "../assets/resume.pdf";
import {motion} from "framer-motion"

const containerVariants={
   hidden:{opacity:0,x:-100},
   visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
   }
}

const childvariants={
  hidden:{opacity:0,x:-100},
  visible:{opacity:1,x:0,transition:{duration:0.5}}
}
const HeroSection = () => {
  return (
    <section className="max-w-screen-xl flex left-0 bg-black text-white pt-[75px] px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-start left-3 lg:items-center justify-between gap-20">
       
        {/* Left: Text Content */}
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-screen  max-h-fit lg:w-1/2  lg:text-center" >
          <motion.h1 variants={childvariants} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Niveditha <br /> Kulkarni
          </motion.h1>
          <motion.h2 variants={childvariants} className="text-xl font-semibold text-gray-300 mb-6">
            Full Stack Web Developer
          </motion.h2>
          <motion.p  className="text-gray-400 text-lg leading-relaxed text-center mb-8">
           As a MERN stack developer, I specialize in crafting modern, responsive web applications using MongoDB, Express.js, React, and Node.js. While I'm a fresher in the professional world, I've built a solid foundation through hands-on projects that showcase my problem-solving skills and creativity.
Outside of coding. When I’m not at my desk writing code, you’ll probably find me dancing Bharatanatyam or swimming laps. </motion.p>
          <motion.a
            variants={childvariants}
            href={resume}
            download
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Right: Profile Image */}
        <div className="w-full  lg:w-1/2 flex justify-center items-center pb-8">
          <motion.img
            src={logo}
            alt="Profile"
            className="rounded-3xl max-w-sm w-full shadow-2xl "
            width={650}
            height={650}
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.5}}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
