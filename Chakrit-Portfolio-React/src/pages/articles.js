import React from "react";
import Head from 'next/head'
import Layout from "@/components/Laytouts";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from 'next/image'
import article1 from '../../public/images/articles/create loading screen in react js.jpg'
import {motion, useMotionValue} from 'framer-motion'
import { useRef } from "react";
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage=motion(Image)



const FeaturedArticle=({img,title,time,summary,link})=>{
    return(
        <li className=" p-2 relative col-span-1 w-full bg-light/95  border border-solid border-dark rounded-2xl">
            <div className=" absolute w-[102%] h-[102%] top-0 -z-40 left-0 rounded-2xl  bg-dark rounded-br-2xl"/>
            <Link href={link} target='__blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-2xl '
            >
            <FramerImage src={img} alt={title} className='h-auto rounded-2xl'
            whileHover={{scale:1.05}} transition={{duration:0.3}}/>
            </Link>
            <Link href={link} target='__blank'>
                <h2 className=" capitalize text-2xl font-bold my-2 mx-4 sm:text-xl hover:underline underline-offset-2">{title}</h2>
            </Link>
            <p className=" text-sm mb-2 mx-4">{summary}</p>
            <span className="text-red-900 mx-4 font-sm sm:text-sm">{time} minutes read</span>
            
        </li>
    )
}

const MovingImage=({title,img,link})=>{

    const x = useMotionValue(0)
    const y= useMotionValue(0)
    const imgRef = useRef(null)
    const handleMouseEnter=(event)=>{
        imgRef.current.style.display ='inline-block'
        x.set(event.pageX)
        y.set(-10)
    }
    const handleMouseLeave=(event)=>{
        imgRef.current.style.display ='none'
        x.set(0)
        y.set(0)
    }

    return(<>
    
    <Link href={link} target="__blank" onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2 className=" capitalize text-xl font-semibold hover:underline sm:text-lg xs:text-base">{title}</h2>
        
        <FramerImage 
        style={{x:x,y:y}}  initial={{opacity:0}}
        whileInView={{opacity:1,transition:{duration:0.3}}}
        ref={imgRef} src={img} alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg" />
    </Link></>
        
    )
}
const Article = ({img,title,date,link})=>{
    return(
        <motion.li initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5,ease:'easeInOut'}}}
        viewport={{once:true}}
        className=" bg-slate-200 relative w-full p-4 py-6 my-6 rounded-xl flex sm:my-2 sm:py-2 sm:flex-col
        
        items-center justify-between bg-ight text-dark first:mt-0 border border-solid border-dark border-r-8 border-b-8">
            <MovingImage title={title} img={img} link={link}/>
            <span className='text-red-900 font-sm pl-4 sm:self-start sm:pl-0 sm:pt-2'>{date}</span>
        </motion.li> 
    )
}

const articles=()=>{
    return(<>
        <Head>

        </Head>
        <TransitionEffect/>
        <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
            <AnimatedText text='Words Can Change The World!' className="mb-16 md:mb-8 sm:mb-4 lg:!text-5xl md:!text-4xl sm:!text-3xl xs:!text-2xl" />
            <ul className="grid grid-cols-2 gap-16 md:gap-8 md:grid-cols-1">
                
                <FeaturedArticle title='Build A Custom Pagination Component In Reactjs From Scratch'
                    summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                    time='9'
                    link='/'
                    img={article1}/>

                <FeaturedArticle title='Build A Custom Pagination Component In Reactjs From Scratch'
                    summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                    time='9'
                    link='/'
                    img={article1}/>

            </ul>
            <h2 className='font-bold text-8xl my-32 w-full text-center
             md:text-6xl md:my-16 sm:text-5xl xs:text-4xl xs:my-8'>All Articles</h2>
            <ul>
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023' 
                link='/' 
                />
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023'  
                link='/' 
                />
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023'  
                link='/' 
                />
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023'  
                link='/' 
                />
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023'  
                link='/' 
                />
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023'  
                link='/' 
                />
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023'  
                link='/' 
                />
                <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={article1} date='April 25,2023'  
                link='/' 
                />

            </ul>
        </Layout>
        </main>

    </>)
}

export default articles