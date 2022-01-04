import React from 'react';
import ScrollToTop from "react-scroll-to-top";


import { Routes } from '../Routes';

export function App() {
    return ( 
        <div>
        <ScrollToTop smooth/>
            <Routes/>
        </div>
     );
}

