import React from "react"
import Footer from "./footer"
import Header from "./header"

config.autoAddCss = false;


const Layout = ({location, title, children}) => {
    return (
        <main className="wrapper">
            <Header/>
            <div className='content'>
                {children}
            </div>
            <Footer/>
        </main>
    )
}

export default Layout