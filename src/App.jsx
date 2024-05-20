import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TaskList from './components/task/TaskList';
import TaskPanel from './components/task/TaskPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Tasks</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <TaskList />
          </Route>
          <Route path='/task/:id'>
            <TaskPanel />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
