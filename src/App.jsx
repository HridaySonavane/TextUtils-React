import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alerts from "./components/Alerts";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //state whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      (document.body.style.backgroundColor = "#242124"),
        showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    // <Router>
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container">
      {/* <Routes> */}
        {/* <Route exact path="/" element={ */}
        <TextForm heading="Enter the text to analyse below" mode={mode} />
        {/* } /> */}
        {/* <Route exact path="about/*" element={<About mode={mode} />} /> */}
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>  
  );
}

export default App;
