import React from "react"

const Footer = ({location, title, children}) => {
    return (
        <footer className="footer">
            <h3 className="container">
                Worldwide. {new Date().getFullYear()}
            </h3>
        </footer>
    )
}

export default Footer