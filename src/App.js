import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {Main} from './Main';
import {Relogin} from './Relogin';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/relogin" element={<Relogin/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
