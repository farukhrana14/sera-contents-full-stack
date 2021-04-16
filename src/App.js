import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Booking from './components/Dashboard/DashboardUser/Booking/Booking';


function App() {
  return (
    <Router>
      <Switch>
        
      <Route exact path='/booking'>
          <Booking/>
        </Route>

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
