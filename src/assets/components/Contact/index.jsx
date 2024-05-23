import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const t = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ceujca4',
        'template_xyznakg',
        refForm.current,
        '-iblX5sCmGQUe9QQ6'
      )
      .then(
        (result) => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  const openGmaps = (e) => {
    window.open('https://maps.app.goo.gl/L9xh3vyfHMe2arFEA', '_blank')
  }

  return (
    <>
      <div className="contact-page">
        <div className="text-container">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance or job opportunities - especially
            ambitious or large projects. However, if you have other request or
            question, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="send-button"
                    value="SEND EMAIL"
                  />
                  <input
                    type="button"
                    onClick={openGmaps}
                    className="map-button"
                    value="MAPS"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-container" id="ref-1">
          <iFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255314.42859743544!2d100.22645608261763!3d-0.9342364181843419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b942e2b117bb%3A0xb8468cb5c3046ba5!2sPadang%2C%20Padang%20City%2C%20West%20Sumatra!5e0!3m2!1sen!2sid!4v1716415021861!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iFrame>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
