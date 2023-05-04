import React from 'react'
import {motion} from 'framer-motion'

const TransitionEffect = ()=>{

    return(
        <>
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-blue-600'
            initial={{x:'100%',width:'100%'}}
            animate={{x:'0%',width:'0%'}}
            transition={{duration:0.7,ease:'easeInOut'}}
            exit={{x:['0%','100%'],width:['0%','100%']}}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-blue-300'
            initial={{x:'100%',width:'100%'}}
            animate={{x:'0%',width:'0%'}}
            transition={{duration:0.7,ease:'easeInOut',delay:0.15}}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-blue-900'
            initial={{x:'100%',width:'100%'}}
            animate={{x:'0%',width:'0%'}}
            transition={{duration:0.7,ease:'easeInOut',delay:0.3}}
            />

        </>
    )
}

export default TransitionEffect