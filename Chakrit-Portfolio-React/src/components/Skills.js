import React from "react";
import {motion} from 'framer-motion'

const Skill=({name,x,y})=>{

    return(
        <motion.div
                    className="flex items-center justify-center rounded-full absolute
                    font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark
                    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:dark:text-light xs:text-dark"
                    whileHover = {{scale:1.1}}
                    initial={{x:0,y:0}}
                    whileInView={{x:x,y:y}}
                    transition={{duration:0.5}}
                >
                    {name}
                </motion.div>
        
    )

}

const Skills=()=>{
    return(
        <>
            <h2 className="font-bold text-8xl my-32 w-full text-center md:text-6xl lg:my-12 sm:text-5xl xs:text-4xl xs:my-8">
                Skills
            </h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full
            bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            xl:h-[90vh] lg:h-[80vh] md:h-[60vh] sm:h-[40vh] xs:h-[30vh]'>
                <motion.div
                    className="flex items-center justify-center rounded-full absolute font-semibold
                     bg-dark text-light p-8 lg:p-6 md:p-4 sm:p-3 shadow-dark cursor-pointer dark:bg-light dark:text-dark
                     xs:bg-transparent xs:dark:bg-transparent xs:dark:text-light xs:text-dark"
                    whileHover = {{scale:1.1}}
                    transition={{duration:0.3}}
                    viewport={{once: true}}
                >
                    Web
                </motion.div>
                <Skill name='CSS' x='-5vw' y='-10vw'/>
                <Skill name='HTML' x='-10vw' y='16vw'/>
                <Skill name='JavaScript' x='15vw' y='-24vw'/>
                <Skill name='E-commerce' x='-25vw' y='0vw'/>
                <Skill name='React' x='8vw' y='12vw'/>
                <Skill name='Tailwind' x='12vw' y='-8vw'/>
            </div>
        </>
    )
}

export default Skills