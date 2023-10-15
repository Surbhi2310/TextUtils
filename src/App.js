import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const toggleMode = ()=>{
    if(mode=== "light"){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode is Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is Enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter The Text To Analysis Below" mode ={mode}/>
    </div>
  </> 
  );
}

export default App;
