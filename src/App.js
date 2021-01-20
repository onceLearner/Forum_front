import { Router } from "@reach/router"
import SimplePeer from "simple-peer";
import { UserProvider } from "./context/User";
import Home from "./views/Home";
import Session from "./views/Session";



function App() {
  return (
    <UserProvider>
      <Router>
        <Home path="/Accueil" />
        <Session path="/Session" />
      </Router>
    </UserProvider>

  );
}

export default App;
