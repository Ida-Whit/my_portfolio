import picture from '../../utils/images/me.jpg'

export default function About() {
    return (
      <div>
        <h1>About Page</h1>
        <img src={picture} style={{ width: '50%', height: '50%' }} alt="Picture of me" />
        <p>
          Hello and thank you for visiting my portfolio site! I am excited to show you everything I have been working so hard on.
          I graduated from University of New Hampshire with a degree in Environmental Science. Since graduating, I worked at a hazardous waste company, responsible for scheduling the transportation of waste to proper disposal facilities.
          However, after working in the field at this job for one year, and in the office for 3 years, I realized I was not content in this line of work and wanted to branch out. Roughly a year after leaving that job, I enrolled in the UNH Coding Bootcamp and my coding experience began.
          I was a bit skeptical of coding at first, considering I come from a background of walking through rivers and forests. However, as I got more into it and began to really learn the details of what coding entails I began to see the appeal to it.
          Through this class, I have learned more in a short period of time than I thought possible and I feel more confident when it comes to creating a website from scratch. I have picked up numerous tools and tricks throughout this class that I feel help make me a better coder overall.
        </p>
        <p>
          Aside from coding, my interests include knitting and crocheting, running, and reading. In my free time lately, I have been working on planning my upcoming wedding to my wonderful fiance.
          I like to run in my cities road races which run all year. They have been a great way for me to gague where I am in my running progress and feel connected to my community. My most recent yarn projects are knitted socks as a christmas gift to my sister-in-laws and a crocheted stuffed animal for my friends new baby.
        </p>
      </div>
    );
  }