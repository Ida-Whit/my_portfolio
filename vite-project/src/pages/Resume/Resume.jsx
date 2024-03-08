import resume from '../../utils/files/resume.pdf'
import '../Resume/Resume.css'

export default function Resume() {
  
  return (
      <div className="page">
          <h1>My Skills</h1>
          <ul></ul>
          <div className='text'>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Object Oriented Programming</li>
          </div>
          <p>Click the link below to download my resume:</p>
          <a href={resume} download="resume.pdf" className='resume'>Download Resume</a>
      </div>
    );
  }