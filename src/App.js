import { Router } from "@reach/router"
import SimplePeer from "simple-peer";
import JobDetails from "./components/user/JobDetails";
import { UserProvider } from "./context/User";
import Expo from "./views/Expo";
import Home from "./views/Home";
import Jobs from "./views/Jobs";
import Session from "./views/Session";



function App() {
  return (
    <UserProvider>
      <Router>
        <Home path="/Accueil" />
        <Session path="/Session" />
        <Expo path="/Expo" />
        <Jobs path="/Jobs" />
        <JobDetails path="/JobDetails" />
      </Router>
    </UserProvider>

  );
}

export default App;
