export default function Resume() {
  const resumePath = './utils/files/resume/pdf';

  return (
      <div>
          <h1>Resume</h1>
          <p>Click the link below to download my resume:</p>
          <a href={resumePath} download="resume.pdf">Download Resume</a>
      </div>
    );
  }