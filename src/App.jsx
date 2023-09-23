import './App.css'
import { Card } from './components/Card'

function App() {

  return (
    <>
      <div>
        <header className="App-header">
          <h1>College Resources for Tech Students</h1>
          </header>
          <main>
            <Card name={"Resume Writing"}  subtitle={"By CodePath"} image={'../assets/library.jpeg'} url="https://docs.google.com/document/d/1TDGkSD5l--GjKu56jw6frHmjr075QHbr_wfma_gmv8s/edit#heading=h.vgmjtni0d9wq" />
            <Card name={"LinkedIn Profile"} subtitle={"By LinkedIn"} image={"../assets/linkedin.jpeg"} url={"https://www.linkedin.com/business/sales/blog/profile-best-practices/17-steps-to-a-better-linkedin-profile-in-2017"} />
            <Card name={"Elevator Pitch"} subtitle={"By CodePath"} image={"../assets/pitch.jpeg"} url={"https://docs.google.com/document/d/1UC_1ysSr5u6aR_JkBoez1qsFmPIBX_YMfvcB_efANYk/edit#heading=h.5nyauybydqd9"} />
            <Card name={"Scholarship Programs"} subtitle={"By Scholarships.com"} image={"../assets/scholarships.jpeg"} url={"https://www.scholarships.com/"} />
            <Card name={"Coding Resources"} subtitle={"By FreeCodeCamp"} image={"../assets/tutor.jpeg"} url={"https://www.freecodecamp.org/news/coding-programs-coding-classes-you-can-take-for-free-online/"} />
            <Card name={"Mentorship Service"} subtitle={"By Ustrive"} image={"../assets/mentor.jpeg"} url={"https://www.ustrive.com/"} />
            <Card name={"Hacking League"} subtitle={"By Major League Hacking"} image={"../assets/hack.jpeg"} url={"https://mlh.io"} />
            <Card name={"Career Fairs"} subtitle={"By EventBrite"} image={"../assets/fair.jpeg"} url={"https://www.eventbrite.com/o/tech-career-fair-12448110053"} />
            <Card name={"Internships"} subtitle={"By SWEIntern"} image={"../assets/internship.jpeg"} url={"https://sweintern.com"} />
            <Card name={"Fullstack Career Guide"} subtitle={"by FreeCodeCamp"} image={"../assets/guide.jpeg"} url={"https://www.freecodecamp.org/news/full-stack-engineer-career-guide/"} />
            <Card name={"CS Theory"} subtitle={"By Compscilib"} image={"../assets/books.jpeg"} url={"https://www.compscilib.com/"} />
          </main>
      </div>
    </>
  )
}

export default App
