import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReactComponent from "./pages/ReactComponent";
import CondRendering from "./pages/CondRendering";
import CompLifeCycle from "./pages/CompLifeCycle";
import RoutePage from "./pages/RoutePage";
import ReactProps from "./pages/ReactProps";
import ReactState from "./pages/ReactState";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReactComponent />} />
      <Route path="/props" element={<ReactProps />} />
      <Route path="/state" element={<ReactState />} />
      <Route path="/cond-rendering" element={<CondRendering />} />
      <Route path="/life-cycle" element={<CompLifeCycle />} />
      <Route path="/route/:id" element={<RoutePage />} />
      <Route path="/outlet" element={<h1>Conditional Rendering Page</h1>} />
      <Route path="/protected-routes" element={<h1>Conditional Rendering Page</h1>} />
    </Routes>
  );
}

export default App;
