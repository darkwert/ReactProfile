import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layouts'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex lg:flex-col lg:p-8 lg:py-2 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
            <Link href={link} target='__blank'
                className='w-1/2 xl:m-4 xs:my-0 lg:w-full cursor-pointer overflow-hidden rounded-lg hover:rounded-3xl'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto rounded-3xl xs:rounded-xl' whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
            </Link>
            <div className='w-1/2 flex flex-col lg:w-full items-left justify-between p-6 xs:p-2  xs:text-base'>
                <span className=' text-red-900 font-medium left-0 text-2xl xs:text-xl'>{type}</span>
                <Link href={link} target='__blank' className=' hover:underline underline-offset-2'>
                    <h2 className='my-10 md:my-4 xs:my-2 w-full text-left text-4xl xs:text-2xl  font-bold'>{title}</h2>
                </Link>
                <p className='font-medium text-dark/75'>{summary}</p>
                <div className='mt-10 sm:mt-4 flex items-center lg:justify-center md:justify-between md:mx-6'>
                    <Link href={github} target='__blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={github} target='__blank' className='ml-3 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:text-sm'>
                        Visit Project
                    </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark  bg-light p-6 sm:p-4 relative'>
            <Link href={link} target='__blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto rounded-lg' whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
            </Link>
            <div className='w-full flex flex-col items-left justify-between p-6 sm:p-2'>
                <span className=' text-red-900 font-medium left-0 text-xl sm:text-base'>{type}</span>
                <Link href={link} target='__blank' className=' hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl sm:text-base font-bold'>{title}</h2>
                </Link>
                <div className='w-full my-2 flex items-center justify-between'>
                    <Link href={github} target='__blank' className='text-lg font-semibold hover:underline underline-offset-2 sm:text-xs'>
                        Visit project
                    </Link>
                    <Link href={github} target='__blank' className='w-8 sm:w-6'>
                        <GithubIcon />
                    </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <div>
            <Head>
                <title>Chakrit | Project Page</title>
                <meta name='projects' content='anything' />
            </Head>
            <TransitionEffect />
            <main className='w-full flex flex-col items-center justify-center'>
                <Layout className='pt-16 '>
                    <AnimatedText className='mb-16 md:mb-8 sm:mb-4 lg:!text-5xl md:!text-4xl sm:!text-3xl xs:!text-2xl' text='Change Imagination to Reality' />
                    <div className='grid grid-cols-12 gap-24 xl:gap-12 md:gap-8 sm:gap-4 xs:gap-2'>
                        <div className=' col-span-12 items-center justify-center'>
                            <FeaturedProject
                                title='Crypto Screener Application'

                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='/'
                                img={project1}
                                type='Featured project'
                                github='https://github.com'
                            />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='Crypto Screener Application'

                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='/'
                                img={project1}
                                type='Featured project'
                                github='https://github.com' />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='Crypto Screener Application'

                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='/'
                                img={project1}
                                type='Featured project'
                                github='https://github.com' />
                        </div>

                        {/* <div className=' col-span-12 items-center justify-center'>
                            <FeaturedProject
                                title='Crypto Screener Application'

                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='/'
                                img={project1}
                                type='Featured project'
                                github='https://github.com'
                            />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='Crypto Screener Application'

                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='/'
                                img={project1}
                                type='Featured project'
                                github='https://github.com' />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='Crypto Screener Application'

                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='/'
                                img={project1}
                                type='Featured project'
                                github='https://github.com' />
                        </div> */}
                    </div>
                </Layout>
            </main>
        </div>
    )
}

export default projects