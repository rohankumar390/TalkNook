import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby></Lobby>}></Route>
        <Route path="//TalkNook" element={<Lobby></Lobby>}></Route>
        <Route path="/room/:roomId" element={<Room></Room>}></Route>
      </Routes>
    </div>
  );
}

export default App;
