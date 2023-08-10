import './App.css';
import Hompage from './components/Home.js/Hompage';
import Explore from './components/explore/Explore';

function App() {
  return (
    <div className="App">
      <Explore/>
      <Hompage></Hompage>
    </div>
  );
}

export default App;
