import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import Weather from './Internship-App/WeatherApp/Weather';
import News from './Internship-App/NewsApp/News';
import FullCalendar from './Internship-App/FullCalendar/FullCalendar';
import EmpManagement from './Internship-App/EmpManagement/EmpManagement';
import SignIn from './Internship-App/SignIn/SignIn';
import SignUp from './Internship-App/SignUp/SignUp';

const App = () => {
  return (
    <Router>
      <>
        <div>
          <MyNavbar />
        </div>
        <br />
        <div>
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/News" element={<News />} />
            <Route path="/fullcalendar" element={<FullCalendar />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/empmanagement" element={<EmpManagement />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <hr />
        <div>
          <Footer />
        </div>
        <div>
          <Link to="/signin">Sign In</Link>
        </div>
      </>
    </Router>
  );
};

export default App;
