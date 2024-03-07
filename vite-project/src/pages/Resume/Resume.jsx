import resume from '../../utils/files/resume.pdf'

export default function Resume() {
  
  return (
      <div>
          <h1>Resume</h1>
          <p>Click the link below to download my resume:</p>
          <a href={resume} download="resume.pdf">Download Resume</a>
      </div>
    );
  }