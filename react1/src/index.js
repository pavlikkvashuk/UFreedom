import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialogs from './components/Dialogs/Dialogs';

let posts = [
  { id: 1, message: 'Hi,how are you?', likesCount: 7 },
  { id: 2, message: 'Hi,I am fine!', likesCount: 9 },
  { id: 3, message: 'How old are you?', likesCount: 6 },
  { id: 4, message: 'Where are you from?', likesCount: 55 },
  { id: 5, message: 'I am from Ukraine', likesCount: 999 },
  { id: 6, message: 'That is Great!', likesCount: 998 },
]

let dialogs = [
  { id: 1, name: 'Pavlo' },
  { id: 2, name: 'Sweetheart' },
  { id: 3, name: 'Mom' },
  { id: 4, name: 'Nazar' },
  { id: 5, name: 'Bogdan' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your project?' },
  { id: 3, message: 'When do you show it us?' },
  { id: 4, message: 'Hru?' },
  { id: 5, message: 'Good Morning!' },
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
