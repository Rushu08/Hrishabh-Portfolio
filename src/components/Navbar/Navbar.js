import './navbar.css'
import {NavHashLink} from 'react-router-hash-link'
import {MdOutlineMenu} from 'react-icons/md'
import { useState } from 'react'
import logo from '../../images/logo.png'

const Navbar = () => {
  
    const [toogle,setToogle]=useState(false)
    function handletoggle(){
      setToogle(!toogle)
    }
    
  return (
    <div className='n'>
      <div className="n-logo">
       <img src={logo} alt="" />
      </div>
      <div className="menu">
        <MdOutlineMenu onClick={handletoggle}/>
      </div>
      {window.innerWidth > 480 ? <div className="n-nav-contents">
        <nav>
            <ul className='n-nav-list'>
                <li><NavHashLink to='#home'  smooth>Home</NavHashLink> </li>
                <li><NavHashLink to="#about" smooth>About</NavHashLink></li>
                <li><NavHashLink to='#skills'  smooth>Skills</NavHashLink></li>
                <li><NavHashLink to='#education'  smooth>Education</NavHashLink></li>
                <li><NavHashLink to='#project'  smooth>Projects</NavHashLink></li>
                <li><NavHashLink to='#contact'  smooth>Contact</NavHashLink></li>
            </ul>
        </nav>
      </div> :''}
      { toogle && <div className="n-nav-contents">
        <nav>
            <ul className='n-nav-list'>
                <li><NavHashLink to='#home'  smooth>Home</NavHashLink> </li>
                <li><NavHashLink to="#about"  smooth>About</NavHashLink></li>
                <li><NavHashLink to='#skills'  smooth>Skills</NavHashLink></li>
                <li><NavHashLink to='#education' smooth>Education</NavHashLink></li>
                <li><NavHashLink to='#project' smooth>Projects</NavHashLink></li>
                <li><NavHashLink to='#contact'  smooth>Contact</NavHashLink></li>
            </ul>
        </nav>
      </div>}
        
    </div>
  )
}

export default Navbar