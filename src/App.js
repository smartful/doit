import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TaskList from './components/TaskList';
import ContactList from './components/ContactList';
import Profile from './components/Profile';
import TaskPanel from './components/TaskPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
          <li><Link to="/profile">Profiles</Link></li>
        </ul>
      </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/tasks'>
            <TaskList />
          </Route>
          <Route path='/task/:id'>
            <TaskPanel />
          </Route>
          <Route path='/contact'>
            <ContactList />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
