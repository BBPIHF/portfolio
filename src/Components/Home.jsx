import React from 'react'
import homeImg from '../assets/homeImg.png'
import Button from './Button'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div id='home' className='section min-h-screen w-full home-bg flex flex-col lg:flex-row items-center lg:gap-[5rem]  justify-evenly'>

      <motion.div 
          className='lg:max-w-[50%]  text-center lg:text-left'
            animate={{
              y:0,
            }}
            initial={{
              y:'100vw',
            }}
            transition={{
              duration:1,
            }}
      >
         <h1 className='text-7xl lg:text-8xl font-bold text-secondary'>Frontend Developer/<br/>Graphic Desinger.
         </h1>
         <p className='text-3xl text-white lg:leading-[2] leading-[1.2] pt-10'>
            I'm a creative designer, I like to craft solid and scalable frontend products with great user experience, eager to embark on a journey of professional growth.
          </p>

        <div  className='mt-10'>
            <a href="">
                <button className='text-4xl text-primary bg-tertiary rounded-md px-7 py-2 border-2 border-secondary'>Resume</button>
            </a>
       
           <a href="#project">
                 <button className='text-4xl text-primary bg-tertiary rounded-md px-7 py-2 border-2 border-secondary ml-[40px]'>Project</button>
           </a>
        </div>

      </motion.div>

      <motion.div 
          className='hidden md:block max-lg:w-[80%] max-lg:mt-[30px]'
          animate={{
            scale:1,
          }}
          initial={{
            scale:0,
          }}
          transition={{
            duration:2,
            type: 'spring',
            stiffness:'100',
          }}
      > 
        <img src={homeImg} alt="Photo"/>
      </motion.div>

    </div>
  )
}

export default Home
