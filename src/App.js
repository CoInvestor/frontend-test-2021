import { Route, Switch } from 'react-router-dom';
import ContextProvider from './Context';
import Home from './views/Home';
import Users from './views/Users';
import UserProfile from './views/UserProfile/index';
import Navbar from './components/Navbar';
import './app.scss';

function App() {
  return (
    <div className="app col">
      <ContextProvider>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/users" component={Users}/>
          <Route path="/userProfile/:userName" component={UserProfile}/>
        </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;