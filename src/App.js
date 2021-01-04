import { Router } from "@reach/router"
import SimplePeer from "simple-peer";
import Home from "./views/Home";



function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>

  );
}

export default App;
