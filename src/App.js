import React from "react";
import "./App.css";
import StepOne from "./components/FormSteps/StepOne";
import StepTwo from "./components/FormSteps/StepTwo";

import Header from "./components/Header";
import Home from "./components/Home";


function App() {
    return (
        <div className="App" > { " "}
            <Header />
            <Home />
            <StepOne />
            <StepTwo />
        </div>
    );
}

export default App;