import './skill.css'
import { FaHtml5,FaCss3Alt,FaReact,FaGithub,FaGitAlt ,FaInfinity} from 'react-icons/fa';
import {AiFillApi} from 'react-icons/ai';
import {MdOutlineComputer} from 'react-icons/md';
import {BiLogoJavascript,BiLogoNetlify} from 'react-icons/bi'

const Skill = () => {
  return (
    <div className='sk' id='skills'>
        <div className="sk-title">
            <MdOutlineComputer/>
            <h1>My Skills</h1>
        </div>
        <div className="grid-container">
                    <div className="grid-item">
                    <FaHtml5 fontSize="5rem" className="sk-icon1"/>
                    <h1>HTML5</h1>
                    </div>
                    <div className="grid-item">
                    <FaCss3Alt fontSize="5rem" className="sk-icon2"/>
                    <h1>CSS3</h1>
                    </div>
                    <div className="grid-item">
                    <BiLogoJavascript fontSize="5rem" className="sk-icon3"/>
                    <h1>JavaScript</h1>
                    </div>  
                    <div className="grid-item">
                    <FaReact fontSize="5rem" className="sk-icon4"/>
                    <h1>React JS</h1>
                    </div>
                    <div className="grid-item">
                    <FaGithub fontSize="5rem" className="sk-icon5"/>
                    <h1>GitHub</h1>
                    </div>
                    <div className="grid-item">
                    <FaGitAlt fontSize="5rem" className="sk-icon6"/>
                    <h1>Git VCS</h1>
                    </div>  
                    <div className="grid-item">
                    <AiFillApi fontSize="5rem" className="sk-icon7"/>
                    <h1>API</h1>
                    </div>
                    <div className="grid-item">
                    <FaInfinity fontSize="5rem" className="sk-icon8"/>
                    <h1>CI / CD</h1>
                    </div>
                    <div className="grid-item">
                    <BiLogoNetlify fontSize="5rem" className="sk-icon9"/>
                    <h1>Netlify</h1>
                    </div>  
        </div>
    </div>
  )
}

export default Skill