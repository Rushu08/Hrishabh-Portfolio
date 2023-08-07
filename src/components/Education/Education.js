import './education.css'
import {IoSchoolSharp,IoSchoolOutline} from 'react-icons/io5'
const Education = () => {
  return (
    <div className='e' id='education'>
        <div className="e-wrapper">
        <div className="e-title">
            <h1><IoSchoolOutline/>Education</h1>
            <h2>Education is not Learnig of Minds.But the training of the mind to think</h2>
        </div>
            <div className="e-timeline">
                <div className="e-container e-left-container">
                <IoSchoolSharp/>
                    <div className="e-box">
                        <h2>M.Sc.Information Technology</h2>
                        <p>Vidyavardhini Vartak College</p>
                        <small>2021 - 2023</small>
                      </div>        
                 </div> 

                <div className="e-container e-right-container">
                <IoSchoolSharp/>
                    <div className="e-box">
                        <h2>B.Sc.Information Technology</h2>
                        <p>Vidyavardhini Vartak College</p>
                        <small>2018 - 2021</small>
                    </div>
                </div>    
                <div className="e-container e-left-container">
                    <IoSchoolSharp/>
                    <div className="e-box">
                        <h2>Higher Secondary</h2>
                        <p>Vidyavardhini Vartak College</p>
                        <small>2018</small>
                    </div>
                </div>    
                <div className="e-container e-right-container">
                <IoSchoolSharp/>
                    <div className="e-box">
                        <h2>Secondary School</h2>
                        <p>John 23rd High School</p>
                        <small>2016</small>
                </div>
                </div>    

            </div> 
           
               
       
           
            
        </div>
    </div>
  )
}

export default Education