import React from 'react';
import ScrollToTop from "react-scroll-to-top";


import { Routes } from './Routes';


 const App = () => {
    
    return (
        <div>
        <ScrollToTop smooth/>
            <Routes/>
        </div>
    );
}


export default App;