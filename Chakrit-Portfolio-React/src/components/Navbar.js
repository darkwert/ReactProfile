import React from "react";
import Link from 'next/link'
import Logo from '../components/Logo'
import { useRouter } from "next/router";
import {motion} from 'framer-motion'
import {TwitterIcon,GithubIcon, PinterestIcon, DribbbleIcon, LinkedInIcon, SunIcon, MoonIcon} from './Icons'
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {useState} from 'react'

const CustomLink = ({href,title,className="",toggle})=>{
    const router = useRouter()
    return(
        <Link href={href} title={title} className={`${className} relative group`}>
            {title}
            <span 
                className={`h-[1px] inline-block bg-dark
                absolute left-0 -bottom-0.5 group-hover:w-full
                transition-[width] ease duration-250 
                ${router.asPath === href? 'w-full':'w-0'}`}>
                    &nbsp;
            </span>
        </Link>
    )
} 
const CustomMobileLink = ({href,title,className="",toggle})=>{
    const router = useRouter()

    const handleClick = ()=>{
        toggle()
        router.push(href)
    }
    return(
        <button href={href} title={title} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
            {title}
            <span 
                className={`h-[1px] inline-block bg-light dark:bg-dark
                absolute left-0 -bottom-0.5 group-hover:w-full
                transition-[width] ease duration-250 
                ${router.asPath === href? 'w-full':'w-0'}`}>
                    &nbsp;
            </span>
        </button>
    )
} 
export const Navbar = () => {
    const [mode,setMode] = useThemeSwitcher()
    const[isOpen,setIsOpen] = useState(false)

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
    
    return(
        <header className='w-full px-32 lg:px-16 md:px-8 py-8 font-medium flex items-center justify-between bg-slate-400 dark:bg-slate-50 border-b-2 border-dark border-solid'>
            <button className='flex-col justify-between items-center hidden lg:flex  ' onClick={handleClick}>
                <span className={`bg-dark transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm  my-0.5 -translate-y-0.5 ${isOpen?'rotate-45 translate-y-1.5':'-translate-y-0.5'}`}></span>
                <span className={`bg-dark transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm  my-0.5 ${isOpen?'opacity-0':'opacity-100'}`}></span>
                <span className={`bg-dark transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm  my-0.5 -translate-y-0.5 ${isOpen?'-rotate-45 -translate-y-1.5':'translate-y-0.5'}`}></span>
            </button>


            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className="mr-4"/>
                    <CustomLink href='/about' title='About' className="mx-4"/>
                    <CustomLink href='/projects' title='Projects' className="mx-4"/>
                    <CustomLink href='/articles' title='Articles' className="ml-4"/>
                </nav>
            </div>
            
            <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
                <Logo/>
            </div>

            
            {isOpen ?
                <motion.div 
                initial={{scale:0,opacity:0,x:'-50%',y:'-50%'}}
                animate={{scale:1,opacity:1}}
                className='min-w-[70vw] flex-col justify-between items-center 
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                bg-dark/70 dark:bg-light/50 rounded-lg backdrop-blur-md py-32 hidden lg:flex'>
                    <nav className='flex items-center justify-center mb-8 mx-4 text-xl sm:flex-col'>
                        <CustomMobileLink href='/' title='Home' className="mx-2" toggle={handleClick}/>
                        <CustomMobileLink href='/about' title='About' className="mx-2" toggle={handleClick}/>
                        <CustomMobileLink href='/projects' title='Projects' className="mx-2"toggle={handleClick}/>
                        <CustomMobileLink href='/articles' title='Articles' className="mx-2" toggle={handleClick}/>
                    </nav>
                    <nav className='flex w-full items-center justify-center sm:px-2'>
                    <motion.a href='http://twitter.com'
                    target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.8}}
                    className="w-6 mr-3 sm:mx-2"
                    >
                        <TwitterIcon/>
                    </motion.a>
                    <motion.a href='http://github.com'
                    target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.8}}
                    className="w-6 mx-3 text-light dark:text-dark"
                    >
                        <GithubIcon/>
                    </motion.a>
                    <motion.a href='http://linkedin.com'
                    target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.8}}
                    className="w-6 mx-3"
                    >
                        <LinkedInIcon/>
                    </motion.a>
                    <motion.a href='http://pinterest.com'
                    target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.8}}
                    className="w-6 mx-3"
                    >
                        <PinterestIcon/>
                    </motion.a>
                    <motion.a href='http://dribble.com'
                    target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.8}}
                    className="w-6 mx-3"
                    >
                        <DribbbleIcon/>
                    </motion.a>
                    <button  onClick={()=>setMode(mode==='light'?'dark':'light')}
                    className=' ml-3 flex items-center justify-center rounded-full p-1 border-2 border-;ight border-solid
                     text-light dark:text-light dark:border-light dark:bg-dark'>
                        {
                            mode==='dark'?
                            <SunIcon className = 'fill-dark'/>:<MoonIcon className='fill-dark'/>
                            
                        }
                    </button>
                    
                </nav>
    
                </motion.div>
            :null}
            
                
            <nav className='flex w-full items-center justify-center flex-wrap lg:hidden'>
                <motion.a href='http://twitter.com'
                target={"_blank"}
                whileHover={{y:-3}}
                whileTap={{scale: 0.8}}
                className="w-6 mr-3"
                >
                    <TwitterIcon/>
                </motion.a>
                <motion.a href='http://github.com'
                target={"_blank"}
                whileHover={{y:-3}}
                whileTap={{scale: 0.8}}
                className="w-6 mx-3"
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a href='http://linkedin.com'
                target={"_blank"}
                whileHover={{y:-3}}
                whileTap={{scale: 0.8}}
                className="w-6 mx-3"
                >
                    <LinkedInIcon/>
                </motion.a>
                <motion.a href='http://pinterest.com'
                target={"_blank"}
                whileHover={{y:-3}}
                whileTap={{scale: 0.8}}
                className="w-6 mx-3"
                >
                    <PinterestIcon/>
                </motion.a>
                <motion.a href='http://dribble.com'
                target={"_blank"}
                whileHover={{y:-3}}
                whileTap={{scale: 0.8}}
                className="w-6 ml-3"
                >
                    <DribbbleIcon/>
                </motion.a>
                <button  onClick={()=>setMode(mode==='light'?'dark':'light')}
                className=' ml-3 flex items-center justify-center rounded-full p-1 border-2 border-dark border-solid
                dark:text-light dark:border-light dark:bg-dark'>
                    {
                        mode==='dark'?
                        <SunIcon className = 'fill-dark'/>:<MoonIcon className='fill-dark'/>
                        
                    }
                </button>
                
            </nav>


        </header>
        
    )
}