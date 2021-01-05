import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TaskList from './components/task/TaskList';
import ContactList from './components/ContactList';
import Profile from './components/Profile';
import TaskPanel from './components/task/TaskPanel';
import ContactPanel from './components/ContactPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
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
          <Route path='/contacts'>
            <ContactList />
          </Route>
          <Route path='/contact/:id'>
            <ContactPanel />
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
