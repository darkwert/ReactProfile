import React from "react";
import Layout from "./Laytouts";
import Link from 'next/link'
const Footer = ()=>{
    return(
        <footer className={' w-full border-t-2 border-solid border-dark font-medium text-xl sm:text-base'}>
            <Layout className=' bg-slate-400 dark:bg-slate-50 py-7 flex  items-center  md:flex-col md:gap-2 md: md:text-xl md:py-4 sm:gap-1 md:items-start justify-between'>
                <span>{new Date().getFullYear()} &copy;All Rights Reserved.</span>
                <div >
                    Build With <span className="text-primary test-2x1 px-1">&#9825; </span>
                     By &nbsp;<Link
                     target="__blank"
                     href="https://google.com" className="
                     underline underline-offset-2">Chakrit</Link>
                </div>
                
                <Link 
                target={'__blank'}
                href="https://google.com">Greeting</Link>
            </Layout>
        </footer>
    )
}

export default Footer