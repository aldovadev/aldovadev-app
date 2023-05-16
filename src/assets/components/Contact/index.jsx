import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        const t = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2500);
        return () => { clearTimeout(t); }
    }, [],);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_ceujca4',
            'template_xyznakg',
            refForm.current,
            'zRgU6VqWh6FyJdj3M'
        )
        .then(
            (result) => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            (error) => {
                alert('Failed to send the message, please try again!')
            })
    }


    return(
        <>
            <div className='contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a','c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance or job opportunities - especially ambitious
                        or large projects. However, if you have other request or question, 
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required>
                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Aldova Guswantri,
                    <br/>
                    Indonesia,
                    <br/>
                    address : Jn. Veteran, Koto Tangah, No.08 <br/>
                    Padang <br/>
                    <span>email : aldova811@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-0.867037, 100.337589]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[-0.867037, 100.337589]}>
                            <Popup>Aldova live here, come over and say hi to me !</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact