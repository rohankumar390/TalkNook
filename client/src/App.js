import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./pages/Lobby";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby></Lobby>}></Route>
      </Routes>
    </div>
  );
}

export default App;
