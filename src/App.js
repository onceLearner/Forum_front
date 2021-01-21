import { Router } from "@reach/router"
import SimplePeer from "simple-peer";
import ExpoDetails from "./components/user/ExpoDetails";
import JobDetails from "./components/user/JobDetails";
import { UserProvider } from "./context/User";
import Expo from "./views/Expo";
import Home from "./views/Home";
import Jobs from "./views/Jobs";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Session from "./views/Session";
import Signup from "./views/Signup";



function App() {
  return (
    <UserProvider>
      <Router>
        <Landing path="/" />
        <Login path="/login" />
        <Signup path="/Signup" />
        <Home path="/Accueil" />
        <Session path="/Session" />
        <Expo path="/Expo" />
        <Jobs path="/Jobs" />
        <JobDetails path="/Jobs/:jobId" />
        <ExpoDetails path="Expo/:expoId" />

      </Router>
    </UserProvider >

  );
}

export default App;
