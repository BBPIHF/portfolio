import React from 'react'
import jsIcon from '../assets/icons8-javascript.svg'
import corelIcon from '../assets/icons8-corel-draw.svg'
import {techStact} from '../Utils'

const TechStack = () => {
  return (
    <div className='section py-[50px] bg-slate-200'>
        <h1 className='text-center text-7xl font-bold text-primary  flex items-center justify-center pb-9 '>Tech Stack</h1>
        <div className='flex gap-10 flex-wrap items-center justify-center'>
             {techStact.map((icon)=>{
                return (
                   <div key={icon.id} className='  w-[100px] h-[100px] p-6 flex flex-col items-center shaDow rounded-lg bg-primary'>
                        <icon.icon className={`${icon.color} text-8xl`}/>
                        <p className='text-2xl text-white'>{icon.name}</p>
                    </div>
                ) 
                
            })}

            <div className=' w-[100px] h-[100px] p-6 flex flex-col items-center shaDow rounded-lg bg-primary'>
                <img src={jsIcon} alt="photo" />
                <p className='text-2xl text-white'>JavaScript</p>
            </div>

            <div className='  w-[100px] h-[100px] p-6 flex flex-col items-center shaDow rounded-lg bg-primary'>
                <img src={corelIcon} alt="photo" />
                <p className='text-2xl text-white'>CorelDraw</p>
            </div>
           
        </div>
   
    </div>
  )
}

export default TechStack
