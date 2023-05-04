import React from "react";
import {useScroll,motion} from 'framer-motion'
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details=({type,time,place,info})=>{
    const ref= useRef(null)
    return (
    <li ref={ref} className='mb-16 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:'spring'}}
            >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
            >{type}</h3>
            <span className=" capitalize font-medium text-dark/80">
                {time} | {place}
            </span>
            <p className="font-medium w-full">
                {info}
            </p>
        </motion.div>
    </li>    
    )
}

const Education=()=>{
    const ref= useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:['start end','center start']
    })
    return(
    <div className='my-16'>
        <h2 className="font-bold text-8xl my-32 w-full text-center
             md:text-6xl md:my-16 sm:text-5xl xs:text-4xl xs:my-8">
            Education
        </h2>  
        <div ref={ref} className="w-[70%] md:w-[80%] xs:w-full mx-auto relative">
            <motion.div
            style={{scaleY:scrollYProgress}}
            className='absolute left-8 md:left-4 sm:left-2 xs:left-1 mt-24 top-0 w-[8px] h-full bg-red-900 origin-top'/>
            <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details
                type = "Bachelor Of Business Management In Digital Marketing"
                time = '2018-2022'
                place='RBAC'
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."/>
                <Details
                type = "Bachelor Of Business Management In Digital Marketing"
                time = '2018-2022'
                place='RBAC'
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."/>
                <Details
                type = "Bachelor Of Business Management In Digital Marketing"
                time = '2018-2022'
                place='RBAC'
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."/>

                
            </ul>
        </div>
    </div>

    )
}

export default Education