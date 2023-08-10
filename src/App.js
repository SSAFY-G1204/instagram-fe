import './App.css';
import Hompage from './components/Home.js/Hompage';
import Explore from './components/explore/Explore';
import NewPoster from './components/NewPoster';
import ProfileMain from "./Homepage";
import Reels from './components/reels/reels';

function App() {
  return (
    <div className="App">
      <Explore/>
      <Hompage></Hompage>
      <NewPoster/>
      <ProfileMain/>
      <Reels />
    </div>
  );
}

export default App;
