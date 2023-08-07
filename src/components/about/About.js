import './about.css'
import about from '../../images/design.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'

const About = () => {
  return (
    <div className='a' id='about'>
        <div className="a-left">
          <div className="a-card">
          <img src={about} alt= '' className='a-img'/>
          </div>
        </div>
        <div className="a-right">
          <div className="a-content">
            <h1 className="a-title"><FaUserAlt/>About Me</h1>
            <p className="a-desc">
              A goal-oriented Entry Level Frontend Developer with knowledge of HTML, CSS, 
              JavaScript, React seeking to use technical proficiency and creativity to develop
               engaging user experiences and advance in a professional career. Looking to 
               leverage effective debugging, code optimization and project collaboration
                capabilities to produce applications that exceed user expectations.
              I am very passionate about improving my coding skills 
              and develop applications and websites.
              Working myself to improve my skills
            </p>
            <a style={{'textDecoration':'none'}}href='https://drive.google.com/file/d/1rIPx4vx3OTAgL6JmpV9-w34T0RSWgmTr/view?usp=drive_link'  rel='noopener noreferrer' target='_blank'><button className='a-res-btn'>Resume <MdKeyboardArrowRight/></button></a>
            
          </div>
        </div>
    </div>
  )
}

export default About