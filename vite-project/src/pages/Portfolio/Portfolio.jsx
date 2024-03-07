import notetaker from '../../utils/images/notetaker.png'
import plants from '../../utils/images/plants.png'
import scheduler from '../../utils/images/scheduler.png'
import weather from '../../utils/images/weather.png'

function Portfolio() {  
  return (
      <div>
        <h1>Portfolio</h1>
        <div className="card">
        <img src={notetaker} className="card-img-top" alt="Text Editor Application Homepage"></img>
        <div className="card-body">
          <h5 className="card-title">Text Editor Application</h5>
          <p className="card-text">Text Editor Application</p>
          <a href="https://github.com/Ida-Whit/text_editor" className="btn btn-primary">Go to Repository</a>
          <a href="https://text-editor-epl0.onrender.com/" className="btn btn-primary">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <img src={plants} className="card-img-top" alt="Wet My Plants Homepage"></img>
        <div className="card-body">
          <h5 className="card-title">Wet My Plants</h5>
          <p className="card-text">Wet My Plants</p>
          <a href="https://github.com/CRNaro/group-project-02" className="btn btn-primary">Go to Repository</a>
          <a href="https://thawing-dawn-01968-1886d8c04121.herokuapp.com/" className="btn btn-primary">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <img src={scheduler} className="card-img-top" alt="Workday Scheduler Homepage"></img>
        <div className="card-body">
          <h5 className="card-title">Workday Scheduler</h5>
          <p className="card-text">Workday Scheduler</p>
          <a href="https://github.com/Ida-Whit/Work-Day-Scheduler" className="btn btn-primary">Go to Repository</a>
          <a href="https://ida-whit.github.io/Work-Day-Scheduler/" className="btn btn-primary">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <img src={weather} className="card-img-top" alt="Weather Application Homepage"></img>
        <div className="card-body">
          <h5 className="card-title">Weather Application</h5>
          <p className="card-text">Weather Application</p>
          <a href="https://github.com/Ida-Whit/Weather-Application" className="btn btn-primary">Go to Repository</a>
          <a href="https://ida-whit.github.io/Weather-Application/" className="btn btn-primary">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <img src="../utils/images/" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Project 5</h5>
          <p className="card-text">Project 5</p>
          <a href="#" className="btn btn-primary">Go to Repository</a>
          <a href="#" className="btn btn-primary">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <img src="../utils/images/" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Project 6</h5>
          <p className="card-text">Project 6</p>
          <a href="#" className="btn btn-primary">Go to Repository</a>
          <a href="#" className="btn btn-primary">Go to Deployed Application</a>
        </div>
      </div>
    </div>
    );
  }

  export default Portfolio

  