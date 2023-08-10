import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Home.js/Homepage';
import Explore from './components/explore/Explore';
import NewPoster from './components/NewPoster';
import ProfileMain from "./Homepage";
import Reels from './components/reels/reels';
import LoginPage from './components/LoginPage/index.js';
import JoinPage from './components/JoinPage/index.js';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="join" element={<JoinPage/>}/>
          <Route path="profile" element={<ProfileMain/>}/>
          <Route path="explore" element={<Explore/>}/>
          <Route path="newposter" element={<NewPoster/>}/>
          <Route path="reels" element={<Reels/>}/>
      </Routes>
    </div>
  );
}

export default App;

/*
<Explore/>
      <Hompage></Hompage>
      <NewPoster/>
      <ProfileMain/>
      <Reels />
*/