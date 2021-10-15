import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Users from './views/Users';
import Navbar from './components/Navbar';

import './app.scss';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Users} />
        <Route path="/:id" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
