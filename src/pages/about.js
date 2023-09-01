import React from "react"
import Layout from "../components/layout"

const About = ({ location, title, children }) => {

    return (
        <Layout>
        
            <section className='container page'>
                <h1>About me</h1>
                <p>
                I'm a Junior Java Developer brimming with enthusiasm and a deep love for crafting software. I've got a solid grip on Java programming, and I can't wait to bring my skills to the table in areas like Spring, Java EE, and database management. I'm here to learn, grow, and thrive alongside a dynamic development team. My goal is to use my knowledge to create smart and creative software solutions that make life easier for everyone. 🌟<br />
                </p>
            </section>
        </Layout>
    )
}

export default About