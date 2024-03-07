import resume from '../../utils/files/resume.pdf'

export default function Resume() {
  
  return (
      <div>
          <h1>Resume</h1>
          <ul>Skills:</ul>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Object Oriented Programming</li>
          <p>Click the link below to download my resume:</p>
          <a href={resume} download="resume.pdf">Download Resume</a>
      </div>
    );
  }