import React from 'react'
import { DragonsDiceIcon } from './Icons'
import Link from 'next/link'

const HireMe=()=>{
    return(
        <div className='
        fixed left-4 bottom-4 flex flex-col items-center justify-center overflow-hidden
        md:right-4 md:left-auto md:-top-5 md:bottom-auto md:scale-[65%] sm:-top-6 sm:-right-10 sm:scale-[50%]'>
            <Link href='mailto:darkwert@gmail.com' className='w-40 h-auto flex items-center justify-center relative'>
                <DragonsDiceIcon className={''} />
            </Link>
        </div>
    )
}

export default HireMe