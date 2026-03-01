import { BrowserRouter, Routes, Route, Link } from "react-router";
import TaskList from "./components/task/TaskList";
import TaskPanel from "./components/task/TaskPanel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Tasks</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
