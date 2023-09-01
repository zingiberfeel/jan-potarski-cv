import React from "react"

import "./bio.css"
import avatar from '../../content/assets/kabina.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faTelegram
} from '@fortawesome/free-brands-svg-icons'

const Bio = () => {
    return (
        <section className='container centered'>
            <div className="about">

                <img alt='Jan Potarski' src={avatar} style={{
                    width: 200,
                    height: 200,
                    borderRadius: `60%`,
                }}/>

                <h1 className="name">Jan Potarski</h1>
                <h2 className="position">Junior Software Engineer</h2>

                <ul>
                    <li>
                        <a href="https://github.com/zingiberfeel/" aria-label="Github" style={{boxShadow: 'none'}}>
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/folloween" aria-label="Telegram" style={{boxShadow: 'none'}}>
                            <FontAwesomeIcon icon={faTelegram} size="2x"/>
                        </a>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Bio