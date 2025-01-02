import UserCard from "./components/UserCard"
import darkPic from "./assets/dark.jpg"
import lftOver from "./assets/leftovers.jpg"
import mrRob from "./assets/mrRobot.jpg"
import "./App.css"
function App() {
  return (
    <div className="container">
      <UserCard name="Leftovers" desc="Genre -: Drama" image={lftOver} style={{"border-radius":"10px"}}/>
      <UserCard name="Dark" desc="Genre -: SciFi Thriller" image={darkPic} style={{"border-radius":"10px"}}/>
      <UserCard name="Mr Robot" desc="Genre -: Mystery Thriller" image={mrRob} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
