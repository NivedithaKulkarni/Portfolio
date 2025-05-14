import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div className=' bg-black border-stone-900 pb-20'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duaration:0.5}} className='my-10 text-center font-bold mb-12 text-4xl'>Let's Connect</motion.h2>
        <div  className='text-center tracking-tighter'>
           <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duaration:1}} className='my-4'>
             Den Haag, Netherlands
           </motion.p>
            <motion.p  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duaration:1}}className='my-2'>
             +31 6 57708936
           </motion.p>
              <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nivedithakulkarni20499@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
              >
                  nivedithakulkarni20499@gmail.com
              </a>
              <div className="flex justify-center pt-2 gap-6 text-lg text-center">
                      <a
                        href="https://www.linkedin.com/in/nivedithakulkarni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-3xl hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>

                    
                    </div>
        </div>

    </div>
  )
}

export default Contact