import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Groups from './components/Groups/Groups';
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
            <Route path='/profile' element={<Profile posts={props.posts} dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
