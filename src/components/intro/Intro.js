import './intro.css'
import hero from '../../images/favicon.jpg'
import Typewriter from 'typewriter-effect';
import {BiSolidDownArrowCircle} from 'react-icons/bi'
import {NavHashLink} from 'react-router-hash-link'
import {AiOutlineGithub,AiFillLinkedin} from 'react-icons/ai'


const Intro = () => {
  return (
    <div className='i' id='home'>
        <div className="i-left">
            <div className="i-left-wrapper"> 
                
                    <h2 className="i-intro">Hello,<br/> My name is</h2>
                    <h1 className='i-name'>Hrishabh Gawad</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                        <Typewriter 
                            options={{
                                strings: ['I am a Frontend Developer','I am a Web Developer', 'I am a Learning Ethusiast'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </div>
                    </div>
                    <div className="i-desc">
                    <NavHashLink to="#about" smooth> <button className='i-abt-btn'>About Me <BiSolidDownArrowCircle/></button></NavHashLink>
                    </div>
                    <div className="i-socials">
                        <a href="https://github.com/Rushu08" className="social-icon" rel='noopener noreferrer' target='_blank'> <AiOutlineGithub/></a>
                        <a href="https://www.linkedin.com/in/hrishabh-gawad/" className="social-icon" rel='noopener noreferrer' target='_blank'><AiFillLinkedin/></a>
      
        </div>
                
            </div>
        </div>
        <div className="i-right">
           <img src={hero} alt=''/>
        </div>
       
    </div>
  )
}

export default Intro