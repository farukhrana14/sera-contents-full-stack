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
import { createContext, useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import BookingList from './components/Dashboard/DashboardUser/BookingList/BookingList';
import AddReview from './components/Dashboard/DashboardUser/Review/AddReview';
import Reviews from './components/HomePage/Reviews/Reviews';
import AdminReviews from './components/Dashboard/DashboardAdmin/AdminReviews/AdminReviews';
import AdminService from './components/Dashboard/DashboardAdmin/AdminServices/AdminService';
import MakeAdmin from './components/Dashboard/DashboardAdmin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

        
        <PrivateRoute  path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>

          <Route exact path='/booking'>
            <Booking />
          </Route>

          <Route exact path='/bookinglist'>
            <BookingList/>
          </Route>

          <Route exact path='/addReview'>
            <AddReview/>
          </Route>

          <Route exact path='/adminreviews'>
            <AdminReviews/>
          </Route>

          <Route exact path='/adminservice'>
            <AdminService/>
          </Route>

          <Route exact path='/makeadmin'>
            <MakeAdmin/>
          </Route>
          
          <Route exact path='/login'>
            <LogIn/>
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
