import React from "react";
import {useScroll,motion} from 'framer-motion'
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details=({position,company,companyLink,time,address,work})=>{
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
            >{position}&nbsp;<a className=" text-blue-900" target='__blank' href={companyLink}>@{company}</a></h3>
            <span className=" capitalize font-medium text-dark/80">
                {time} | {address}
            </span>
            <p className="font-medium w-full">
                {work}
            </p>
        </motion.div>
    </li>    
    )
}

const Experience=()=>{
    const ref= useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:['start end','center start']
    })
    return(
    <div className='my-16'>
        <h2 className="font-bold text-8xl my-32 w-full text-center
             md:text-6xl md:my-16 sm:text-5xl xs:text-4xl xs:my-8">
            Experience
        </h2>  
        <div ref={ref} className="w-[70%] md:w-[80%] xs:w-full mx-auto relative">
            <motion.div
            style={{scaleY:scrollYProgress}}
            className='absolute left-8 md:left-4 sm:left-2 xs:left-1 mt-24 top-0 w-[8px] h-full bg-red-900 origin-top-left'/>
            <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details
                position= "Software Engineer"
                company = "Google"
                companyLink = 'https://www.google.com'
                time = '2022-Present'
                address='Bangkok, Thailand'
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."/>

                <Details
                position= "Software Engineer"
                company = "Google"
                companyLink = 'https://www.google.com'
                time = '2022-Present'
                address='Bangkok, Thailand'
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."/>

                <Details
                position= "Software Engineer"
                company = "Google"
                companyLink = 'https://www.google.com'
                time = '2022-Present'
                address='Bangkok, Thailand'
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."/>

                <Details
                position= "Software Engineer"
                company = "Google"
                companyLink = 'https://www.google.com'
                time = '2022-Present'
                address='Bangkok, Thailand'
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."/>

                <Details
                position= "Software Engineer"
                company = "Google"
                companyLink = 'https://www.google.com'
                time = '2022-Present'
                address='Bangkok, Thailand'
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."/>
            </ul>
        </div>
    </div>

    )
}

export default Experience