import './App.css';
import Hompage from './components/Home.js/Hompage';
import Explore from './components/explore/Explore';
import NewPoster from './components/NewPoster';

function App() {
  return (
    <div className="App">
      <Explore/>
      <Hompage></Hompage>
      <NewPoster/>
    </div>
  );
}

export default App;
