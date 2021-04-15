import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Home/>
        </Route>

        <Route exact path='/'>
          <Home/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
