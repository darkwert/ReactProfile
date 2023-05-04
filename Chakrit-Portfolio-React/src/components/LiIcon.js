import React from "react";
import {motion,useScroll} from 'framer-motion'
const LiIcon=({reference})=>{

    const {scrollYProgress} = useScroll({

        target:reference,
        offset:['start end','center start']

    })

    return(
        <figure className="absolute left-0 stroke-red-900 md:-ml-4 sm:-ml-6 xs:-ml-7">
            <svg width='100' height='100' viewBox="0 0 100 100">
                <circle cx='36' cy='80' r='20' className=" stroke-red-900 stroke-1 fill-red-900" />
                <motion.circle cx='36' cy='80' r='15' className=" stroke-red-900 stroke-1 fill-red-500"
                    initial={{
                        r:'0'
                    }}
                    animate={{
                        r:'15'
                    }}
                    style={{scaleY:scrollYProgress,scaleX:scrollYProgress}}/>
            </svg>
        </figure>
    )
}

export default LiIcon