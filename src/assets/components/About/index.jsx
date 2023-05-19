import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { faHtml5, faCss3, faGitAlt, faJsSquare, faReact, faAngular } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const t = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
        return () => { clearTimeout(t); }
    }, [],)

    return (
        <>
            <div className="container about-page">
                <div className="text-zone" >
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx = {15}
                        />
                    </h1>
                    <p>Hi, I'm Aldova Guswantri, a Full Stack Software Engineer with a passion for designing and building innovative solutions that solve complex problems. I have experience working with a wide range of technologies and frameworks, and I thrive on the challenge of developing scalable, robust applications that meet the needs of clients and end-users alike.</p>
                    <p>As a Full Stack Software Engineer, I am proficient in both front-end and back-end technologies. On the front-end, I specialize in react.js, qt, qml, sass, vb.net, using them to create dynamic user interfaces that provide a seamless experience across devices. On the back-end, I am skilled in node.js, postgreSQL, mySQL, firebase.</p>
                    <p>I am committed to ongoing learning and development, and I stay up-to-date with the latest technologies and industry trends. I am always looking for opportunities to expand my skill set and explore new tools and frameworks.</p>
                    <p>In my free time, I enjoy gaming and hiking, which help me recharge and bring fresh perspectives to my work. I am passionate about using my skills to make a positive impact on the world, and I believe in the power of technology to drive social change.</p>
                </div>

                <div className='stage-cube-container'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#61DBFB"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#e34c26"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#264de4"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faAngular} color="#dd1b16"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#f0db4f"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#F1502F"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About