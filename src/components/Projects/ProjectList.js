import Project from './Project'
import './project.css'
import {Data} from '../../Data/Projects'
import {BsFillGridFill} from 'react-icons/bs'

const ProjectList = () => {
  return (
    <div className='p' id='project'>
        <div className="p-title">
        <BsFillGridFill/><h1>My Work</h1>
        </div>
        <div className="p-container">
          {Data.map(item =>(
               <Project key={item.id} img={item.img} name={item.name} desc={item.desc} link={item.link}/>  
          ))}      
               
        </div>
    </div>
  )
}

export default ProjectList