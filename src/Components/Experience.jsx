import React, {useState}from 'react'
import { experience } from '../Utils'
import { button } from '../Utils'

const Experience = () => {
    const [expert, setExpert] = useState(experience[0])
     
    const [btn, setBtn] = useState(button)

    const {date, id, company, responsibilities, post} = expert
    
    const handleClick = (id)=>{
       const uniqueValue =  experience.filter((data)=>{
            return id===data.name
        })
       setExpert(uniqueValue[0])
       
       const uniqueBtn = btn.map((data)=>{
        if(id===data.name){
            return {...data, status:true}
        }
        return {...data, status:false}
       })
       setBtn(uniqueBtn)
    }


  return (
    <div id='experience' className='section py-[50px] bg-primary'>
       <h1 className='text-white lg:text-7xl md:text-5xl text-5xl heading-line flex items-center font-bold pb-10'>Experience/Education</h1>
      <div className='flex flex-col sm:flex-row gap-10'>
        <div className='flex flex-row  min-w-[20%] sm:flex-col'>
          {btn.map((data, index)=>{
              const {name, status} = data
              return <button key={index} 
              onClick={()=> handleClick(name)}
              className={`bg-primary p-6 text-tertiary ${status? 'status':''} text-left btn text-2xl w-full font-mono`}>{name}</button>
          })}
        </div>
        <div className='lg:max-w-[70%]'>
            <div className='flex gap-[30px] items-center'>
              <h1 className='text-3xl font-normal text-white'>{post}</h1>
              <p className='text-2xl text-tertiary italic'>{date}</p>
            </div>
            <h1 className='text-[16px] pt-2 text-secondary'>{company}</h1>
            <div>
              {responsibilities.map((data, index)=>{
                  return (
                  <div key={index} className="flex items-center gap-8"> 
                    <p className='pt-4 pl-10 text-[16px] relative bullet text-slate-400 '>{data.name}</p>
                    {data.link !==undefined && <a href={data.link} target="_blank" className='mt-5 italic text-secondary py-1 px-2 bg-slate-600 hover:bg-slate-700 text-xl rounded-lg'>link here</a> }
                  </div>
                  )
              })}
            </div>
        </div> 

      </div>
    </div>
  )
}

export default Experience
