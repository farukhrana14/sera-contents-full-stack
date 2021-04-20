import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import { createContext, useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import BookingList from './components/Dashboard/DashboardUser/BookingList/BookingList';
import AddReview from './components/Dashboard/DashboardUser/Review/AddReview';
import AdminReviews from './components/Dashboard/DashboardAdmin/AdminReviews/AdminReviews';
import AddService from './components/Dashboard/DashboardAdmin/ManageService/AddService';
import MakeAdmin from './components/Dashboard/DashboardAdmin/MakeAdmin/MakeAdmin';
import HomePageBooking from './components/Dashboard/DashboardUser/HomePageBooking/HomePageBooking';
import DeleteService from './components/Dashboard/DashboardAdmin/ManageService/DeleteService';
import NewBooking from './components/Dashboard/DashboardUser/NewBooking/NewBooking';
import UpdateService from './components/Dashboard/DashboardAdmin/ManageService/UpdateService';

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

          <PrivateRoute exact path='/homepagebooking'>
            <HomePageBooking/>
          </PrivateRoute>

          <PrivateRoute exact path='/newbooking'>
            <NewBooking/>
          </PrivateRoute>

          <PrivateRoute exact path='/bookinglist'>
            <BookingList/>
          </PrivateRoute>

          <PrivateRoute exact path='/addReview'>
            <AddReview/>
          </PrivateRoute>

          <PrivateRoute exact path='/deletereviews'>
            <AdminReviews/>
          </PrivateRoute>

          <PrivateRoute exact path='/addservice'>
            <AddService/>
          </PrivateRoute>

          <PrivateRoute exact path='/updateservice'>
            <UpdateService/>
          </PrivateRoute>

          <PrivateRoute exact path='/deleteservice'>
            <DeleteService/>
          </PrivateRoute>

          <PrivateRoute exact path='/makeadmin'>
            <MakeAdmin/>
          </PrivateRoute>
          
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
