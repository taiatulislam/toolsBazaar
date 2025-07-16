import { Routes, Route } from "react-router";
import Home from "./page/Home/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
