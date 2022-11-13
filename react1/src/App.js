import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Groups from './components/Groups/Groups';
import Donate from './components/Donate/Donate';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
   return (
      <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/dialogs' element={<Dialogs />}/>
            <Route path='/groups' element={<Groups/>}/>
            <Route path='/donate' element={<Donate/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
   );
}
export default App;
