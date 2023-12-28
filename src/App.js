import React from 'react';
import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import UserRoute from './Router/UserRoute';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
     <Routes>
      <Route exact path='/*' element ={<UserRoute/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
