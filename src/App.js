import './App.css';
import { Routes,Route } from 'react-router-dom';
import Hompage from './components/Home.js/Hompage';
import Explore from './components/explore/Explore';
import NewPoster from './components/login/NewPoster';
import ProfileMain from "./Homepage";
import Reels from './components/reels/reels';
import LoginPage from './components/login/LoginPage/index';
import JoinPage from './components/login/JoinPage/index';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Hompage/>}/>
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