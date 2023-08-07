import './contact.css'
import {BsHeadset,BsFillTelephoneFill} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import {FaLocationDot} from 'react-icons/fa6'
import {IoIosSend} from 'react-icons/io'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formref=useRef()
    const [done,setDone]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        emailjs.sendForm('service_0duvjhl', 'template_zv3fz5v', formref.current, 'O4zppRTVlOJw0UKPe')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c' id='contact'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"><BsHeadset/>Let's Connect</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <BsFillTelephoneFill className='phone'/>
                    <p>+91 7620704764 </p>
                    </div>
                    <div className="c-info-item">
                    <BiLogoGmail className='mail'/>
                    <p>hrishabhgawad888@gmail.com</p>
                    </div>
                    <div className="c-info-item">
                    <FaLocationDot className='location'/>
                    <p>Virar,Palghar</p>
                    </div>
                </div>
               
            </div>
            <div className="c-right">
                <form ref={formref} onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' name='user_name'/>
                    <input type='text' placeholder='Subject' name='user_subject'/>
                    <input type='text' placeholder='Email' name='user_email'/>
                    <textarea rows='5' placeholder='Message' name='message'/>
                    <button className='c-send-btn'>Submit<IoIosSend/></button>
                    {done && 'Thank you for your Feedback'}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact