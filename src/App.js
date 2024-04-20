import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import Home from "./pages/home";
import Result from "./pages/result";
import Select from "./pages/select";



function App() {
    const [imageBase64, setImageBase64] = useState(null);
    const [Options,setOptions] = useState(null);
    const [submitButton,setsubmitButton] = useState(null);


    useEffect(()=>{
        console.log(Options);
    },[Options])



    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home setImageBase64={setImageBase64}/>} />
                <Route exact path="/result" element={<Result />} />
                <Route exact path="/select" element={<Select imageBase64={imageBase64} setOptions={setOptions}/>} />
                <Route 
                  path="/home"
                  element={
                    <>
                    {!submitButton ? (
                    <>
                    {!imageBase64 ? (<div>
                        <Home setImageBase64={setImageBase64}/>
                    </div>) :
                     (<div><Select imageBase64={imageBase64} Options={Options} setOptions={setOptions} setsubmitButton={setsubmitButton}/></div>)}
                    
                    </>) : (<><Result submitButton={submitButton}/></>)}
                    </>
                  }
                />
            </Routes>
        </Router>
    );
}
 
export default App;