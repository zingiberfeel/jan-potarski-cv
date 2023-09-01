import React from "react"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const MainPage = () => (
    <Layout>
        <SEO title="Jan Potarski"/>
        <Bio/>
    </Layout>     
)


export default MainPage