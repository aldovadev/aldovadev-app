import LogoTitle from '../../images/logo-s.png'
import Photo from '../../images/profile-pic.png'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LogoS from '../../images/logo-s.png'
import gsap from 'gsap-trial'
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

    const bgRef = useRef();
    const solidLogoRef = useRef();
    const svgLogoRef = useRef();
    
    useEffect(() => {
        gsap.timeline().to(
            bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 1.5,
                duration: 4,
            })
        gsap.fromTo(
            svgLogoRef.current,
            {
                opacity: 1,
            },
            {
                opacity: 0,
                delay: 1.5,
                duration: 4,
            }) 
    },[])

    return (
        <> 
            <div className='home-page'> 
              <div className='home-content'>
                <div className='text-zone'>
                    <img className="photo" src={Photo} alt="aldova" />
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
                <div className='logo-zone'>
                  <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="A" />
                  <svg className ='svg-container'
                    version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="603.000000pt" height="903.000000pt" viewBox="0 0 603.000000 903.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g  ref={svgLogoRef}
                        fill="none" stroke="tomato" >
                        <path d="M312.91,786.37c0-19.78-.14-40.84.1-61.87.06-5.62-1.05-7.83-6.19-7.87-16.12-.14-16.12-.38-16.12,18.62V901.77h-7.59q-87.84,0-175.64.1a12.93,12.93,0,0,1-11-5.26Q53.76,845.28,10.72,794.3c-2.25-2.66-5.19-4.51-8.66-7.48v-7q0-258.72-.12-517.58c0-6.36,1.68-9.84,6.2-13.39q156.09-121,312.19-242.24a21.81,21.81,0,0,1,12.59-4.39C388.29,1.9,443.66,2,499,1.94c4.1,0,6.92.21,9.22,5.77s7,9.36,10.81,13.85q39.2,46.62,78.5,93.11a17.45,17.45,0,0,1,4.3,12.32q-.15,383.1.07,766.19c0,7.45-2,8.76-7.76,8.74q-87.79-.34-175.64,0a12.3,12.3,0,0,1-10.39-5.09q-42.72-51.15-85.49-101.91C320.16,792,316.93,789.86,312.91,786.37ZM487.63,24.76c-2.83-.21-5.36-.59-7.89-.59-46.84,0-93.67-.12-140.51.16a21.05,21.05,0,0,0-12.12,4.21Q176,144.94,25,261.7c-3.78,2.91-4.53,6.32-4.53,11.1q.09,242.61-.07,485.24c0,7.17,1.81,9.18,7.75,9.15q70.83-.33,141.69,0c5.63,0,7.43-1.81,7.41-8.67-.23-55.95-.13-111.9-.12-167.83,0-9,0-9,7.91-9H323.71c7.88,0,7.92,0,7.92,9.28V757.35c0,9.67,0,9.7,8.26,9.72h139.9c2.53,0,5-.38,7.83-.61Z"/>
                        <path d="M487.63,24.76V766.43c-2.77.23-5.3.61-7.83.61H339.9c-8.22,0-8.26,0-8.26-9.72V590.9c0-9.24,0-9.28-7.92-9.28H185c-7.91,0-7.92,0-7.92,9,0,55.93-.1,111.88.12,167.83,0,6.86-1.77,8.7-7.41,8.67q-70.85-.33-141.69,0c-6,0-7.76-2-7.75-9.15q.26-242.61.08-485.24c0-4.78.75-8.18,4.52-11.1Q176.05,145.15,327.11,28.49a21.07,21.07,0,0,1,12.12-4.22c46.84-.28,93.67-.18,140.51-.15C482.27,24.17,484.8,24.52,487.63,24.76Zm-156,112.1c-2.58,1.61-4.18,2.41-5.61,3.53q-72.34,56.06-144.72,112.06c-3.57,2.81-4.3,5.91-4.29,10.42q.1,108.15.07,216.3c0,2.49.18,5,.31,8.18H323.73c7.92,0,7.94,0,7.94-9.84V145.33Z"/>
                        <path d="M312.91,365.25V379.7c0,26.2-.13,52.41.1,78.6,0,5.56-1.41,7.2-6.06,7.23-16.25.08-16.25.27-16.25-19.08s.11-38.84-.08-58.25c0-4.53,1.19-7.4,4.44-9.69C300.65,374.64,306,370.42,312.91,365.25Z"/>
                    </g>
                  </svg>
                </div>
            </div>             

            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home