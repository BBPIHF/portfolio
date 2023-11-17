import React from 'react'
import { navLinks } from '../Data'
import Button from './Button'
import tope from '../assets/tope.png'
import { LinkdinIn, Github, Home, Account, Document, Folder, Email } from '../Utils'
import {motion} from 'framer-motion'

const Sidebar = ({toggle}) => {
  return (
    <motion.div 
        className='w-[80%] min-h-screen bg-primary absolute top-0 left-[-100vw] z-50'

        animate={{
            left: toggle? 0 : ""
        }}

        transition={{
            type: 'spring',
            stiffness:'100',
            duration: 1000,

        }}
    >
      <ul className='text-3xl gap-10 '>

        <div className='w-full mt-10 text-center'>
            <img src={tope} alt="photo" width={150} height={150} className='rounded-full border-4 border-secondary bg-tertiary mx-auto'/>

            <h1 className='font-bold pt-3 text-white text-4xl'>Inaolaji Tope Michael</h1>

            <div className='flex gap-4 justify-center mt-3'>
                <div className='w-[32px] h-[32px] bg-slate-800 cursor-pointer rounded-full flex justify-center items-center'>
                    <LinkdinIn className='  text-white '/>
                </div>
                <div className='w-[32px] h-[32px] bg-slate-800 cursor-pointer rounded-full flex justify-center items-center'>
                    <Github className='  text-white '/>
                </div>
            </div>

        </div>

        <div className='pl-[30px] mt-10'>
            {navLinks.map((link)=>
                <li 
                key={link.label}
                className={`text-slate-500 mt-2 transition-all py-2 cursor-pointer  hover:pl-8 hover:text-white  ${link.active? 'active': ''}`}
                >
                    <a href={link.href} className='flex items-center gap'>
                        {link.icon && <link.icon className='text-5xl'/>} 
                        <p className='pl-6 text-4xl'>{link.label}</p>
                    </a>
                </li>
            )}
        </div>

            <div className=' absolute bottom-[5%] w-[80%] -translate-x-[50%] left-[50%]'>
                <Button color='primary' text='Resume' bg='secondary'/>
                <Button color='primary' bg='primary' text='Cover Letter'/>
            </div>
        </ul>
    </motion.div>
  )
}

export default Sidebar
