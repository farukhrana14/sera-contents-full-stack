import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import { createContext, useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import BookingList from './components/Dashboard/DashboardUser/BookingList/BookingList';
import AddReview from './components/Dashboard/DashboardUser/Review/AddReview';
import AdminReviews from './components/Dashboard/DashboardAdmin/AdminReviews/AdminReviews';
import AddService from './components/Dashboard/DashboardAdmin/AdminServices/AddService';
import MakeAdmin from './components/Dashboard/DashboardAdmin/MakeAdmin/MakeAdmin';
import DashboardBooking from './components/Dashboard/DashboardUser/DashboardBooking/DashboardBooking';
import HomePageBooking from './components/Dashboard/DashboardUser/HomePageBooking/HomePageBooking';

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedService, setSelectedService] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[selectedService, setSelectedService]}>
      <Router>
        <Switch>

        
        <PrivateRoute  path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>

          <Route exact path='/dashboardbooking'>
            <DashboardBooking/>
          </Route>

          <PrivateRoute exact path='/homepagebooking'>
            <HomePageBooking/>
          </PrivateRoute>

          <Route exact path='/bookinglist'>
            <BookingList/>
          </Route>

          <Route exact path='/addReview'>
            <AddReview/>
          </Route>

          <Route exact path='/adminreviews'>
            <AdminReviews/>
          </Route>

          <Route exact path='/addservice'>
            <AddService/>
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
      </ServiceContext.Provider>
    </UserContext.Provider>

  );
}

export default App;
