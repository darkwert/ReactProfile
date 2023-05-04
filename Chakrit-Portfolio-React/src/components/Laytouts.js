const Layout = ({children,className=""})=>{
    return(
        <div className={`w-full inline-block z-0 dark:bg-dark/60 xl:p-24 lg:p-16 md:p-13 sm:p-8 bg-light p-16 ${className}`}>
            {children}

        </div>
    )
}

export default Layout