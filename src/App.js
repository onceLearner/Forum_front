import { Router } from "@reach/router"
import SimplePeer from "simple-peer";
import Home from "./components/Home";
import Peerjs from "./components/Peerjs";
import SocketConn from "./components/SocketConn"
import WaitHere from "./components/WaitHere"


function App() {
  return (
    <Router>
      <Home path="/" />
      <SimplePeer path="/simple" />
      <Peerjs path="/peerjs" />
      <SocketConn path="/socket" />
      <WaitHere path="/socke" />
    </Router>

  );
}

export default App;
