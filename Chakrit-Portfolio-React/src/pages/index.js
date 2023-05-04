import Head from 'next/head'
import Layout from '../components/Laytouts'
import Image from 'next/image'
import Q_display from '../../public/images/profile/Q_display.jpg'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chakrit | Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-full dark:text-light'>
        <Layout className='pt-16 flex md:pt-8 lg:flex-col'>
          <div className='w-1/2 md:w-full items-center justify-between md:inline-block '>
            <div className='px-10 flex my-8 '>
            <Image src={Q_display} alt='chakrit' className=' w-screen  h-auto lg:hidden md:inline-block md:w-full '
            priority
            sizes='(max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            50vw' />
            
            </div>
          </div>
          
          <div className = 'w-1/2 flex flex-col items-center self-center lg:w-full'>
            <AnimatedText text='Turning Vision Into Reality With Code And Design.'
            className=' !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text2xl '/>

            <p className='my-4 text-base font-medium'>
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <span className='flex items-center self-center mt-2 md:flex-col md:gap-4'>
              <Link href='/dummy.pdf' target={'__blank'} 
              className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:underline hover:bg-light hover:text-dark
              border border-solid border-transparent hover:border-dark
              mx-6'
              download={true}>
                Resume
                  <LinkArrow className={'w-6 ml-1'}/>
                </Link>
              <Link href='mailto:darkwert@gmail.com' target={'__blank'}
              className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:underline hover:bg-light hover:text-dark
              border border-solid border-transparent hover:border-dark
              mx-6'
              >Email</Link>
            </span>
            
          </div>
        </Layout>
        <HireMe className=''/>
      </main>
    </div>
  )
}
