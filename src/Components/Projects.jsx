import React from 'react'
import { Github, Folder, projects } from '../Utils'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInAnimation } from '../animation';

const AnimatedParagraph = ({ index, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={slideInAnimation}
      initial='initial'
      animate={inView ? 'animate' : 'initial'}
      custom={index}
    >
      {children}
    </motion.div>
  );
};


const Projects = () => {
  return (
    <div id='projects' className='section py-[50px] bg-primary'>
      <h1 className='text-white lg:text-7xl md:text-5xl text-4xl heading-line flex items-center font-bold pb-10'>Some Things I've built</h1>
      <div className=''>
        {projects.map((project, index)=>{
          return (
           <AnimatedParagraph index={index}>
          <div key={index} className='flex flex-col md:flex-row items-center border-2 border-secondary rounded-2xl mt-10 p-6 gap-10 bg-slate-900'>
            <div className='flex-1 '>
              <img src={project.thumbnail} alt="photo" className='rounded-2xl hover:scale-105 transition-all'/>
            </div>

            <div className='flex-1 px-8'>
              <h1 className='text-secondary font-bold lg:text-5xl md:text-4xl text-3xl text-mono pt-8'>{project.name}</h1>
              
              <p className='text-3xl text-slate-300 py-8 text-mono leading-[1.5]'>{project.desc}</p>
              <p className='text-2xl text-slate-400'>{project.Tools}</p>
              <div className='flex flex-col md:flex-row md:gap-10'>
                <button className='flex  gap-3 justify-center text-primary items-center bg-secondary  py-3 px-5 rounded-lg ring-2 font-semibold text-2xl hover:opacity-80 w-full mt-8'> <i><Github/></i> <a href={project.source} target="_blank">View Code</a></button>
                <button className='flex gap-3 justify-center text-primary items-center bg-secondary py-3 px-5 rounded-lg ring-2 font-semibold text-2xl hover:opacity-80 w-full mt-8'> <i><Folder/></i> <a href={project.live} target="_blank">Live Preview</a></button>
              </div>
            </div>
          </div>
          </AnimatedParagraph>
          )

        })}
      </div>
    </div>
  )
}

export default Projects
