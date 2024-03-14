import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faSass,
  faDocker,
  faUbuntu,
  faNodeJs,
  faReact,
  faAngular,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const t = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="stage-cube-container">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faSass} color="#cc6699" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#264de4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#dd1b16" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faUbuntu} color="#E95420" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm Aldova Guswantri, a Professional Software Engineer skilled in
            frontend, backend, DevOps, and DevSecOps. With a passion for
            innovation, I excel at crafting elegant solutions to complex
            problems using a diverse range of technologies. My collaborative
            approach ensures the delivery of robust, scalable software solutions
            that exceed expectations.
          </p>

          <h3> TECH STACK :</h3>
          {/* Programming Languange */}
          <div className="skill-container">
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="hnorefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            {/* Frameworks */}
            <img
              src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            {/* Database */}
            <img
              src="https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/sonarqube-4E9BCD.svg?style=for-the-badge&logo=sonarqube&logoColor=white&color=%234E9BCD"
              alt="norefferer"
              height="20px"
            />
            <img
              src="https://img.shields.io/badge/grafana-F46800.svg?style=for-the-badge&logo=grafana&logoColor=white&color=%23F46800"
              alt="norefferer"
              height="20px"
            />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
