import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { Hamburger, CloseBtn} from "../Utils";
import { navLinks } from '../Data';
import Sidebar from './Sidebar';


const Navbar = () => {

const [toggle, setToggle] = useState(false);



  return (
    <header className='section  gradient z-20 fixed w-full'>
      <nav className='flex justify-between py-7 items-center'>
        <img src={logo} alt="Logo" width={38}  height={30} />
        <ul className='text-3xl md:flex hidden gap-10'>
             {navLinks.map((link)=>
             <li 
             key={link.label}
             className={`text-white cursor-pointer hover:text-secondary ${link.active? 'active': ''}`}
             >
              <a href={link.href}>{link.label}</a>
             </li>
             )}
        </ul>
        <div className='text-5xl text-white font-bold block md:hidden' 
        onClick={()=> setToggle( prev=> !prev )}>
          {toggle?<CloseBtn/>: <Hamburger />}
        </div> 
        <button className='bg-tertiary text-primary shadow-lg py-3 px-5 rounded-lg border-2 border-secondary font-semibold text-2xl hover:opacity-80 md:flex hidden'>Resume</button>
      </nav>

      <Sidebar toggle={toggle}/>
    </header>
  )
}

export default Navbar
