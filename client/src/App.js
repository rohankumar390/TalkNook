import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";
function App() {
  let REACT_APP_B = process.env.REACT_APP_B;
  return (
    <>
      <div className="App">
        <h1>{REACT_APP_B}</h1>
        <Routes>
          <Route path="/" element={<Lobby></Lobby>}></Route>
          <Route path="//TalkNook" element={<Lobby></Lobby>}></Route>
          <Route path="/room/:roomId" element={<Room></Room>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
