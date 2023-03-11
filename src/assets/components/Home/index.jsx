import LogoTitle from '../../images/logo-s.png'
import Photo from '../../images/profile-pic.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'd', 'o', 'v', 'a', ' ', 'G', 'u', 's', 'w', 'a', 'n', 't', 'r', 'i']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const t = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
        return () => { clearTimeout(t); }
    }, [],)

    return (
        <>
            <div className="container home-page">
                <img className="photo" src={Photo} alt="aldova" />
                <br />
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,&nbsp;</span>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={20} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
                    </h1>
                    <h2>
                        Problem Solver / Tech Enthusias / Gamer
                    </h2>
                    <Link to="/contact" className='flat-button'>
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home