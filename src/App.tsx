import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MatchTable from './components/MatchTable';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBUJYtkKDkgW7NxrlNHmRdoN6HlTOmxinQ",
    authDomain: "redcamp-cqb-db.firebaseapp.com",
    projectId: "redcamp-cqb-db",
    storageBucket: "redcamp-cqb-db.appspot.com",
    messagingSenderId: "911256239",
    appId: "1:911256239:web:30a33ca913495d1f61825a",
    measurementId: "G-S2TN66K2FL"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <MatchTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
