import React from "react"

import "./bio.css"
import avatar from '../../content/assets/face.jpeg'


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
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/folloween" aria-label="Telegram" style={{boxShadow: 'none'}}>
                        </a>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Bio