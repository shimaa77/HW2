import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import LogPage from './Login';
import Saved from './Pages/Save';
import ContactUs from './Pages/ContactUs';
import NavBar from './Components/NavBar';
import Fruit from './Pages/Fruit';

function App() {
  const [auth, setAuth] = useState(localStorage.auth ? true : false);
  const [allSaved, setAllSaved] = useState(() => {
    if (localStorage.getItem('Saved')) {
      return JSON.parse(localStorage.getItem('Saved'));
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem('Saved', JSON.stringify(allSaved));
  }, [allSaved]);
  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />
        <Routes>
          <Route
            path='/'
            exact
            element={auth ? <Home /> : <LogPage setAuth={setAuth} />}
          />
          {auth && (
            <>
              <Route path='/saved' element={<Saved allSaved={allSaved} />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route
                path='/fruit/:id'
                element={
                  <Fruit allSaved={allSaved} setAllSaved={setAllSaved} />
                }
              />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
