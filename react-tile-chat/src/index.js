import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqT5NkLh42Uew3Lf9B3-DVaecpSE8olsA",
  authDomain: "chat-react-dac9e.firebaseapp.com",
  projectId: "chat-react-dac9e",
  storageBucket: "chat-react-dac9e.appspot.com",
  messagingSenderId: "154022552972",
  appId: "1:154022552972:web:162285dff080c4565a22a9",
  measurementId: "G-GQYDZTDEBZ"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Context = React.createContext(null)


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      db,
    }}>
      <App/>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


