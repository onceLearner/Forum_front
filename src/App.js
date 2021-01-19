import { Router } from "@reach/router"
import SimplePeer from "simple-peer";
import Home from "./views/Home";
import Session from "./views/Session";



function App() {
  return (
    <Router>
      <Home path="/Accueil" />
      <Session path="/Session" />
    </Router>

  );
}

export default App;
