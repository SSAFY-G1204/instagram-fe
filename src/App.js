import './App.css';
import Hompage from './components/Home.js/Hompage';
import Explore from './components/explore/Explore';
import NewPoster from './components/NewPoster';
import ProfileMain from "./Homepage";

function App() {
  return (
    <div className="App">
      <Explore/>
      <Hompage></Hompage>
      <NewPoster/>
      <ProfileMain/>
    </div>
  );
}

export default App;
