import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
