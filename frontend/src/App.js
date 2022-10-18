import React from 'react';
import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminHome from './pages/AdminHome'
import EditUser from './pages/EditUser';
import IncubationForm from './pages/IncubationForm'
import TrackApplication from './pages/TrackApplication'
import ViewApplication from './pages/ViewApplication'
import BookingSlot from './pages/BookingSlot';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header/>
     <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/admin' element={<AdminHome/>}/>
       <Route path='/editUser/:id' element={<EditUser/>} />
       <Route path='/incubation' element={<IncubationForm/>} />
       <Route path='/trackapplication' element={<TrackApplication/>} />
        <Route path='/viewapplication' element={<ViewApplication/>} />
        <Route path='/bookingslot' element={<BookingSlot/>} />
     </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
