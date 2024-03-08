import notetaker from '../../utils/images/notetaker.png'
import plants from '../../utils/images/plants.png'
import scheduler from '../../utils/images/scheduler.png'
import weather from '../../utils/images/weather.png'
import quiz from '../../utils/images/quiz.png'
import nutrition from '../../utils/images/nutrition.png'
import '../Portfolio/Portfolio.css'

function Portfolio() {  
  return (
      <div>
        <h1>Portfolio</h1>
        <div className="card">
        <div className="card-body">
          <h5 className="title">Text Editor Application</h5>
          <img src={notetaker} className="card-img-top" style={{ width: '50%', height: '50%' }} alt="Text Editor Application Homepage"></img>
          <p className="text">A simple text editior application built as a progressive web application. This text application will save any notes you enter and pull them back up even if you leave the page and come back to it at a later time.</p>
          <p className="text">This application also has the ability to be downloaded to your desktop where it will still look and work the same as it would on your internet browser.</p>
          <a href="https://github.com/Ida-Whit/text_editor" className="btn">Go to Repository</a>
          <a href="https://text-editor-epl0.onrender.com/" className="btn">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="title">Wet My Plants</h5>
          <img src={plants} className="card-img-top" style={{ width: '50%', height: '50%' }} alt="Wet My Plants Homepage"></img>
          <p className="text">A full stack web application built with the intention to allow plant parents to be gain knowledge about any houseplants they wish to keep. This application allows you to enter any plant name and add that plant to your list for easy access later.
          Information that you can get includes a description of the plant, what type of watering and sunlight the plant needs, if the plant is toxic to your pets and a picture of the plant.</p>
          <p className="text">This application was developed with a small group as a project for the UNH Bootcamp course.</p>
          <a href="https://github.com/CRNaro/group-project-02" className="btn">Go to Repository</a>
          <a href="https://thawing-dawn-01968-1886d8c04121.herokuapp.com/" className="btn">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="title">Workday Scheduler</h5>
          <img src={scheduler} className="card-img-top" style={{ width: '50%', height: '50%' }} alt="Workday Scheduler Homepage"></img>
          <p className="text">A daily planner that can be used to help organize a busy day. This planner keeps track of the current time and changes the colors of each hour based on if it is in the past, current, or in the future. Data can be added or deleted from each hour as the user sees fit.</p>
          <p className="text">This planner was developed as an effort to show off my knowledge of a third party API. Any data that is entered into the calendar will persist after page refresh.</p>
          <a href="https://github.com/Ida-Whit/Work-Day-Scheduler" className="btn">Go to Repository</a>
          <a href="https://ida-whit.github.io/Work-Day-Scheduler/" className="btn">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="title">Weather Application</h5>
          <img src={weather} className="card-img-top" style={{ width: '50%', height: '50%' }} alt="Weather Application Homepage"></img>
          <p className="text">A weather application that allows the user to lookup any city and see a 5-day forecast plus current weather for that city. User can save their cities to a list for easy access later.
          This application demonstrates use of a server-side API. Open Weather Map is the API that is being used to pull data from. Any recent searches that the user saves will persist after page refresh.</p>
          <a href="https://github.com/Ida-Whit/Weather-Application" className="btn">Go to Repository</a>
          <a href="https://ida-whit.github.io/Weather-Application/" className="btn">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="title">JavaScript Quiz</h5>
          <img src={quiz} className="card-img-top" style={{ width: '50%', height: '50%' }} alt="JavaScript Quiz Homepage"></img>
          <p className="text">Here is a very simple quiz structure that allows the user to demonstrate their knowledge of basic JavaScript. A time begins when the user starts the quiz, for each wrong answer the timer will subtract 10 seconds.
          The quiz is over when the user either answers all the questions or the time runs out. Once the quiz is over, the user may save their score via their initials. From here, a leader board is generated that allows the users to view past high scores.</p>
          <p className="text">This application was developed to show proficiency with a web API. It utilizes local storage on your broswer to house any high scores saved so that these can persist after page refresh.</p>
          <a href="https://github.com/Ida-Whit/JavaScript-Quiz" className="btn">Go to Repository</a>
          <a href="https://ida-whit.github.io/JavaScript-Quiz/" className="btn">Go to Deployed Application</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="title">Nutrition Application</h5>
          <img src={nutrition} className="card-img-top" style={{ width: '50%', height: '50%' }} alt="Nutrition Application Homepage"></img>
          <p className="text">This application helps any user who would like to know a bit more about the food they eat. They can search for any food and be presenting with a picture and nutritional information about that food.
          The user can save any searches they would like and these saved searches will persist after page refresh. The two sites where information is being pulled from are Pexels for the images and the USDA for the nutritional information.</p>
          <p className="text">This application was built with a small group as a project for the UNH Coding Bootcamp course. It shows off ability to build an interactive front end website.</p>
          <a href="https://github.com/joeyray12/nutrition-facts-project" className="btn">Go to Repository</a>
          <a href="https://joeyray12.github.io/nutrition-facts-project/" className="btn">Go to Deployed Application</a>
        </div>
      </div>
    </div>
    );
  }

  export default Portfolio

  