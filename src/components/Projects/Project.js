
import {BsCodeSlash} from 'react-icons/bs'
const Project = ({img,name,desc,link}) => {
  return (
    <div className='p-card'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>           
        </div>
        <div className="h-container">
            <img src={img} alt='' className='p-img'/>
            <div className="p-text-box">
              <div className="p-text-wrapper">
              <div className="text">{name}</div>
                    <p>{desc}</p>
              </div>
              <a style={{'textDecoration':'none'}}href={link}  rel='noopener noreferrer' target='_blank'><button className="p-code-link">Code<BsCodeSlash/></button></a>
                   
            </div>
        </div>
        
    </div>
  )
}

export default Project