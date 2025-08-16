import "./index.css";
import Intro from "./components/Intro";
import Countdown from "./components/Countdown";
import Direction from "./components/Direction";
import Album from "./components/Album";
import Details from "./components/Details";
import Assistance from "./components/Assistance";
import Music from "./components/Music";

function App() {
  return (
    <div>
      <Intro />
      <Countdown />
      <Direction />
      <Album />
      <Details />
      <Assistance />
      <Music />
    </div>
  );
}

export default App;
