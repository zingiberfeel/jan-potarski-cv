import React from "react"
import {Link} from "gatsby"

const Header = ({location, title, children}) => {
    return (
        <nav className="navigation">
            <section className="container">
                <Link className="navigation-title font-bold text-gray-900" to="/" activeStyle={{boxShadow: 'none'}}>Jan Potarski</Link>
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <Link className="navigation-link" to="/about" activestyle={{boxShadow: 'none'}}>About me</Link>
                    </li>
                    <li className="navigation-item">
                        <a href="https://github.com/zingiberfeel" activestyle={{boxShadow: 'none'}}>Projects</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/resume.pdf" activestyle={{boxShadow: 'none'}}>CV</a>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Header